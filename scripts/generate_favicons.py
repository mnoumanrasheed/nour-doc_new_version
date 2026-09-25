# scripts/generate_favicons.py
import base64
import os
from PIL import Image

def main():
    icon_path = 'src/assets/logo-icon.png'
    if not os.path.exists(icon_path):
        print(f"Error: {icon_path} not found")
        return

    with open(icon_path, 'rb') as f:
        icon_b64 = base64.b64encode(f.read()).decode('utf-8')

    svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <filter id="subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0F172A" flood-opacity="0.12" />
    </filter>
  </defs>
  <!-- Rounded subtle container for premium aesthetic across light & dark browser tabs -->
  <rect x="16" y="16" width="480" height="480" rx="108" fill="#FFFFFF" fill-opacity="0.95" filter="url(#subtle-shadow)" />
  <rect x="16" y="16" width="480" height="480" rx="108" fill="none" stroke="#507D88" stroke-width="6" stroke-opacity="0.2" />
  <image href="data:image/png;base64,{icon_b64}" x="48" y="48" width="416" height="416" preserveAspectRatio="xMidYMid meet" />
</svg>'''

    with open('public/favicon.svg', 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print("[SUCCESS] Successfully generated public/favicon.svg")

if __name__ == '__main__':
    main()
