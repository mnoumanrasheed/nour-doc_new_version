# scripts/generate_favicons.py
import base64
from pathlib import Path

from PIL import Image, ImageChops, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / 'public'
SOURCE = PUBLIC / 'logo.png'
ICON_OUTPUT = ROOT / 'src' / 'assets' / 'logo-icon.png'


def load_cropped_icon():
    if not SOURCE.exists():
        raise FileNotFoundError(f'Logo source not found: {SOURCE}')

    source = Image.open(SOURCE).convert('RGBA')
    # The supplied PNG has transparent outer padding but also contains a
    # near-white interior background. Remove that background so the mark works
    # on the dark footer, loader, and social preview as well as on white.
    white = Image.new('RGB', source.size, (255, 255, 255))
    difference = ImageChops.difference(source.convert('RGB'), white).convert('L')
    background_mask = difference.point(lambda value: 0 if value < 12 else 255)
    source.putalpha(ImageChops.multiply(source.getchannel('A'), background_mask))
    alpha_bbox = source.getchannel('A').getbbox()
    if not alpha_bbox:
        raise ValueError('Logo source does not contain a visible mark')

    # Keep a small, even transparent margin so the mark remains comfortable at
    # favicon sizes while removing the excessive source-image whitespace.
    left, top, right, bottom = alpha_bbox
    margin = round(max(right - left, bottom - top) * 0.08)
    left = max(0, left - margin)
    top = max(0, top - margin)
    right = min(source.width, right + margin)
    bottom = min(source.height, bottom + margin)

    cropped = source.crop((left, top, right, bottom))
    side = max(cropped.size)
    square = Image.new('RGBA', (side, side), (0, 0, 0, 0))
    square.alpha_composite(cropped, ((side - cropped.width) // 2, (side - cropped.height) // 2))
    return square.resize((1024, 1024), Image.Resampling.LANCZOS)


def save_favicon_set(icon):
    ICON_OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    ICON_OUTPUT.unlink(missing_ok=True)
    icon.save(ICON_OUTPUT, 'PNG', optimize=True)

    for size, filename in ((16, 'favicon-16x16.png'), (32, 'favicon-32x32.png'), (192, 'favicon-192.png')):
        icon.resize((size, size), Image.Resampling.LANCZOS).save(PUBLIC / filename, 'PNG', optimize=True)

    # Home-screen icons look best with a restrained white tile behind the mark.
    apple = Image.new('RGBA', (512, 512), (255, 255, 255, 0))
    tile = Image.new('RGBA', (464, 464), (255, 255, 255, 255))
    apple.alpha_composite(tile, (24, 24))
    apple.alpha_composite(icon.resize((360, 360), Image.Resampling.LANCZOS), (76, 76))
    apple.save(PUBLIC / 'apple-touch-icon.png', 'PNG', optimize=True)

    icon.save(PUBLIC / 'favicon.ico', sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])


def save_svg_favicon(icon):
    # PNG data must include an image header; use the in-memory PNG bytes.
    from io import BytesIO
    buffer = BytesIO()
    icon.save(buffer, 'PNG', optimize=True)
    icon_b64 = base64.b64encode(buffer.getvalue()).decode('ascii')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#183B33" flood-opacity="0.12" />
    </filter>
  </defs>
  <rect x="16" y="16" width="480" height="480" rx="108" fill="#FFFFFF" fill-opacity="0.98" filter="url(#subtle-shadow)" />
  <rect x="16" y="16" width="480" height="480" rx="108" fill="none" stroke="#286252" stroke-width="6" stroke-opacity="0.2" />
  <image href="data:image/png;base64,{icon_b64}" x="48" y="48" width="416" height="416" preserveAspectRatio="xMidYMid meet" />
</svg>'''
    (PUBLIC / 'favicon.svg').write_text(svg_content, encoding='utf-8')


def load_font(size, bold=False):
    candidates = [
        Path('C:/Windows/Fonts/seguisb.ttf' if bold else 'C:/Windows/Fonts/segoeui.ttf'),
        Path('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf' if bold else '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def save_social_preview(icon):
    canvas = Image.new('RGB', (1200, 630), '#183B33')
    draw = ImageDraw.Draw(canvas)
    draw.ellipse((720, -280, 1430, 430), fill='#286252')
    draw.ellipse((-260, 390, 350, 1000), fill='#204C40')
    draw.rounded_rectangle((42, 42, 1158, 588), radius=28, outline='#6F9C90', width=2)

    mark = icon.resize((350, 350), Image.Resampling.LANCZOS)
    canvas.paste(mark, (120, 140), mark)

    draw.text((560, 225), 'NourDoc', fill='#FFFFFF', font=load_font(74, bold=True))
    draw.text((565, 320), 'Ambient Clinical Intelligence', fill='#B8D6CD', font=load_font(28))
    draw.text((565, 385), 'Modern healthcare, made more human.', fill='#FFFFFF', font=load_font(24))
    canvas.save(PUBLIC / 'og-image.png', 'PNG', optimize=True)


def main():
    icon = load_cropped_icon()
    save_favicon_set(icon)
    save_svg_favicon(icon)
    save_social_preview(icon)
    print('[SUCCESS] Updated logo icon, favicon set, and social preview from public/logo.png')

if __name__ == '__main__':
    main()
