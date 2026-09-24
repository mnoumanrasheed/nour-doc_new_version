import os
import sys

def extract():
    import pypdf
    
    text_pdf_path = r"d:\nourdoc-website\reference\NourDoc - Website Textual Content V1.0.pdf"
    visual_pdf_path = r"d:\nourdoc-website\reference\NourDoc - Visual Recommendations for the Website V1.0.pdf"
    logo_path = r"d:\nourdoc-website\reference\Nourdoc - Logo(1).png"
    
    print("=== Checking File Existence ===")
    print(f"Textual PDF exists: {os.path.exists(text_pdf_path)}")
    print(f"Visual PDF exists: {os.path.exists(visual_pdf_path)}")
    print(f"Logo exists: {os.path.exists(logo_path)}")
    
    # Textual PDF extraction
    reader_text = pypdf.PdfReader(text_pdf_path)
    num_text_pages = len(reader_text.pages)
    print(f"\nTextual PDF Total Physical Pages: {num_text_pages}")
    
    text_extract_lines = []
    text_extract_lines.append("# NourDoc - Website Textual Content V1.0 - Complete Extraction\n")
    text_extract_lines.append(f"Total Physical Pages: {num_text_pages}\n\n")
    
    for idx, page in enumerate(reader_text.pages):
        page_num = idx + 1
        page_text = page.extract_text() or ""
        print(f"--- Textual PDF Page {page_num}: {len(page_text)} chars ---")
        text_extract_lines.append(f"--- PHYSICAL PAGE {page_num} ---\n")
        text_extract_lines.append(page_text.strip() + "\n\n")
        
    text_out_file = r"d:\nourdoc-website\reference\source_extract_textual_content.md"
    with open(text_out_file, "w", encoding="utf-8") as f:
        f.write("".join(text_extract_lines))
    print(f"Saved textual content extract to {text_out_file}")
    
    # Visual PDF extraction
    reader_visual = pypdf.PdfReader(visual_pdf_path)
    num_visual_pages = len(reader_visual.pages)
    print(f"\nVisual PDF Total Physical Pages: {num_visual_pages}")
    
    visual_extract_lines = []
    visual_extract_lines.append("# NourDoc - Visual Recommendations for the Website V1.0 - Complete Extraction\n")
    visual_extract_lines.append(f"Total Physical Pages: {num_visual_pages}\n\n")
    
    for idx, page in enumerate(reader_visual.pages):
        page_num = idx + 1
        page_text = page.extract_text() or ""
        print(f"--- Visual PDF Page {page_num}: {len(page_text)} chars ---")
        visual_extract_lines.append(f"--- PHYSICAL PAGE {page_num} ---\n")
        visual_extract_lines.append(page_text.strip() + "\n\n")
        
    visual_out_file = r"d:\nourdoc-website\reference\source_extract_visual_recommendations.md"
    with open(visual_out_file, "w", encoding="utf-8") as f:
        f.write("".join(visual_extract_lines))
    print(f"Saved visual recommendations extract to {visual_out_file}")

if __name__ == "__main__":
    extract()
