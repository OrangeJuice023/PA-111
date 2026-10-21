from pypdf import PdfReader
r = PdfReader(r'D:\Documents\PA 111\source-materials\PA 111 EXAM REVIEWER.pdf')
text = []
for i,p in enumerate(r.pages):
    t = p.extract_text()
    if t and t.strip():
        text.append(f'===PAGE {i+1}===\n' + t)
with open(r'D:\Documents\PA 111\docs\REVIEWER_EXTRACT.txt','w',encoding='utf-8') as f:
    f.write('\n\n'.join(text))
print(len(r.pages))
