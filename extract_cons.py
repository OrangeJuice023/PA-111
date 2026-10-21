from pypdf import PdfReader
r = PdfReader(r'D:\Documents\PA 111\source-materials\PA111_Consolidated_Notes_Syllabus_Aligned.pdf')
text = []
for i,p in enumerate(r.pages):
    text.append(f'===PAGE {i+1}===\n' + p.extract_text())
with open(r'D:\Documents\PA 111\docs\CONSOLIDATED_EXTRACT.txt','w',encoding='utf-8') as f:
    f.write('\n\n'.join(text))
print('done')
