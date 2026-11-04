# English CV (LaTeX)

- Source: `cv_en.tex`. Build: `xelatex cv_en.tex` twice.
- Publish: `cp cv_en.pdf ../assets/Curriculum_Vitae_en.pdf`, then bump `updated` in `_data/cv.json` (cache-busting `?v=` on the CV page).
- Note: `scripts/build_cv.py` also writes `assets/Curriculum_Vitae_en.pdf` (reportlab version). Don't run it for the English PDF, or it will overwrite this one.
