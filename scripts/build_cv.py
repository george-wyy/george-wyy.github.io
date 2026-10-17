#!/usr/bin/env python3
"""Build both public CV PDFs from _data/cv.json. Requires reportlab."""
import argparse
import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether

ROOT = Path(__file__).resolve().parents[1]

def build(language, font_path=None):
    data = json.loads((ROOT / '_data/cv.json').read_text(encoding='utf-8'))
    if font_path:
        pdfmetrics.registerFont(TTFont('CV-CJK', str(font_path)))
        font = 'CV-CJK'
    else:
        font = 'Helvetica'
    if language == 'zh' and not font_path:
        raise SystemExit('Chinese PDF requires --cjk-font, a TrueType font with Chinese glyphs.')
    def local(value):
        return value.get(language, '') if isinstance(value, dict) else str(value)
    body = ParagraphStyle('body', fontName=font, fontSize=9, leading=13,
                          textColor=colors.HexColor('#242c36'), wordWrap='CJK' if language == 'zh' else None,
                          spaceAfter=3)
    heading = ParagraphStyle('heading', parent=body, fontSize=12, leading=17,
                             textColor=colors.HexColor('#16608b'), spaceBefore=12, spaceAfter=6,
                             keepWithNext=True)
    small = ParagraphStyle('small', parent=body, fontSize=8.2, leading=10.5,
                           textColor=colors.HexColor('#4c5968'))
    title = ParagraphStyle('name', parent=body, fontSize=25, leading=32, spaceAfter=7)
    flow = []
    def p(text, style=body): return Paragraph(text, style)
    def text(value): return escape(local(value))
    def section(zh, en): flow.append(p(zh if language == 'zh' else en, heading))
    flow.append(p(text(data['name']), title))
    flow.append(p('wangyiyan@seu.edu.cn  |  <link href="https://george-wyy.github.io" color="#16608b">george-wyy.github.io</link>', small))
    flow.append(Spacer(1, 8))
    flow.append(p(text(data['intro'])))
    section('教育经历', 'Education')
    for item in data['education']:
        group = [p(text(item['institution'])+' | '+text(item['degree'])), p(text(item['period']), small)]
        if item.get('detail'): group.append(p(text(item['detail']), small))
        flow.extend([KeepTogether(group), Spacer(1, 5)])
    section('研究经历', 'Research Experience')
    for item in data['experience']:
        flow.extend([KeepTogether([p(text(item['title'])+' | '+text(item['period'])), p(text(item['description']), small)]), Spacer(1, 5)])
    section('精选项目', 'Selected Projects')
    for item in data['projects']:
        title_text = text(item['title'])
        if item.get('url'): title_text = f'<link href="{escape(item["url"])}" color="#16608b">{title_text}</link>'
        flow.extend([KeepTogether([p(title_text+' | '+text(item['period'])), p(text(item['description']), small)]), Spacer(1, 5)])
    section('技能与荣誉', 'Skills and Honors')
    for item in data['skills']:
        flow.append(p(text(item['title'])+': '+text(item['description']), small))
    for item in data['awards']:flow.append(p(text(item), small))
    section('专著参编', 'Book Contribution')
    flow.append(p(text(data['book']),small))
    flow.append(PageBreak())
    flow.append(p('代表性论文' if language == 'zh' else 'Selected Publications', heading))
    flow.append(p('完整论文与专利列表：<link href="https://george-wyy.github.io/publications/" color="#16608b">george-wyy.github.io/publications/</link>' if language == 'zh' else 'Full list of papers and patents: <link href="https://george-wyy.github.io/publications/" color="#16608b">george-wyy.github.io/publications/</link>',small))
    section('已接收待刊', 'Accepted / In Press')
    def paper(item):
        authors = ', '.join(item['authors'])
        # Full names retain author order and distinguish Yiyan from Yanyan.
        group=[p(escape(authors)+'.',small),p(escape(item.get('title') or item['title_zh'])),p(escape(item['venue'])+', '+str(item['year'])+'. '+text(item['role']),small)]
        if item['status']=='accepted':
            date=item['accepted_date'][:7]
            group.append(p(('已接收（'+date+'），待刊。') if language=='zh' else 'Accepted '+date+'; in press.',small))
        elif item.get('doi'):
            doi=item['doi'];group.append(p(f'<link href="https://doi.org/{escape(doi)}" color="#16608b">doi:{escape(doi)}</link>',small))
        flow.extend([KeepTogether(group),Spacer(1,4)])
    for item in data['papers']:
        if item['status']=='accepted':paper(item)
    section('代表性已发表论文', 'Selected Published Papers')
    for item in data['papers']:
        if item['status']=='published':paper(item)
    section('在审 / 已投（第一作者）', 'Under Review / Submitted (First Author)')
    for item in data['manuscripts']:
        status=('已投（2026.10）' if language=='zh' else 'Submitted (Oct 2026)') if item['status']=='submitted' else ('在审' if language=='zh' else 'Under review')
        flow.extend([KeepTogether([p(escape(item['title'].split(':')[0])),p(escape(item['venue'])+'. '+status+'.',small)]),Spacer(1,5)])
    if flow and isinstance(flow[-1], Spacer):
        flow.pop()
    output=ROOT/'assets'/('Curriculum_Vitae.pdf' if language=='zh' else 'Curriculum_Vitae_en.pdf')
    def footer(canvas, doc):
        canvas.saveState();canvas.setFont(font,8);canvas.setFillColor(colors.HexColor('#4c5968'))
        canvas.drawString(42,26,('更新于 ' if language=='zh' else 'Updated ')+data['updated'])
        canvas.drawRightString(A4[0]-42,26,str(doc.page));canvas.restoreState()
    SimpleDocTemplate(str(output),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=32,bottomMargin=42,
                      title=('王以俨 - 学术简历' if language=='zh' else 'Yiyan Wang - Academic CV'),author='Yiyan Wang').build(flow,onFirstPage=footer,onLaterPages=footer)
    print(output)

if __name__=='__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--cjk-font',type=Path,help='TrueType Chinese font, e.g. /System/Library/Fonts/STHeiti Light.ttc on macOS')
    args=parser.parse_args()
    build('zh',args.cjk_font)
    build('en',args.cjk_font)  # English CV also includes the original Chinese review title.
