# scripts/split_about_contact.py
import json

def main():
    with open('src/data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Update navigation
    nav = [
        { 'title': 'Home', 'path': '/' },
        { 'title': 'Why NourDoc', 'path': '/why-nourdoc' },
        { 'title': 'Product', 'path': '/product' },
        { 'title': 'Benefits', 'path': '/benefits' },
        { 'title': 'Security & Compliance', 'path': '/security-compliance' },
        { 'title': 'Subscription', 'path': '/subscription' },
        { 'title': 'Medical Coding & Billing', 'path': '/medical-coding-billing' },
        { 'title': 'Integrations & Deployment', 'path': '/integrations-deployment' },
        { 'title': 'Partners & Collaborators', 'path': '/partners-collaborators' },
        { 'title': 'About', 'path': '/about' },
        { 'title': 'Contact', 'path': '/contact' }
    ]
    data['navigation'] = nav

    old_ac = data['pages']['aboutContact']

    # 1. Dedicated About Page Data
    data['pages']['about'] = {
        'id': 'about',
        'route': '/about',
        'metaTitle': 'About NourDoc — Making Healthcare Technology More Human',
        'metaDescription': 'NourDoc began with a simple idea: Healthcare professionals should spend more time listening, thinking and caring — and less time documenting.',
        'hero': old_ac['hero'],
        'whoWeAre': old_ac['whoWeAre'],
        'ourMission': old_ac['ourMission'],
        'ourVision': old_ac['ourVision'],
        'cta': {
            'eyebrow': 'GET IN TOUCH',
            'h2': "Let's Connect With Our Healthcare Team",
            'subtitle': 'Explore ambient clinical intelligence trials, demonstrations, and enterprise partnerships.',
            'primaryCta': {
                'label': 'TRY NOURDOC FREE',
                'type': 'app'
            },
            'secondaryCta': {
                'label': 'BOOK A DEMO',
                'type': 'demo'
            }
        }
    }

    # 2. Dedicated Contact / Book a Demo Page Data
    data['pages']['contact'] = {
        'id': 'contact',
        'route': '/contact',
        'metaTitle': 'Contact & Book a Demo — Connect with NourDoc',
        'metaDescription': "Let's talk about your healthcare workflow. Inquire about platform trials, live demonstrations, enterprise deployment, medical coding & billing, or partnerships.",
        'hero': {
            'badge': 'CONTACT & DEMO',
            'h1': "Let's Talk About Your Healthcare Workflow",
            'lead': 'Whether you are a clinician, hospital system, medical coding company, billing organization, or technology partner, we would like to understand what you are trying to solve.'
        },
        'contactIntro': old_ac['contactIntro'],
        'contactForm': old_ac['contactForm'],
        'finalCta': old_ac['finalCta'],
        'enterpriseCallout': old_ac['enterpriseCallout']
    }

    # 3. Update all links from /about-contact to /contact
    def replace_urls(obj):
        if isinstance(obj, dict):
            return {k: replace_urls(v) for k, v in obj.items()}
        elif isinstance(obj, list):
            return [replace_urls(i) for i in obj]
        elif isinstance(obj, str):
            if '/about-contact?' in obj:
                return obj.replace('/about-contact?', '/contact?')
            elif obj == '/about-contact':
                return '/contact'
            return obj
        return obj

    data = replace_urls(data)

    with open('src/data.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

    print("[SUCCESS] Updated src/data.json with separate about and contact sections.")

if __name__ == '__main__':
    main()
