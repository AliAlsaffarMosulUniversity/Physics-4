# Physics 4 Companion

دليل دراسي تفاعلي لمادة الفيزياء — الصف الرابع الإعدادي / الفرع العلمي (منهج مدارس المتميزين، باللغة الإنكليزية).

An interactive study guide for **Physics 4 — Scientific Secondary** (Iraq, Ministry of Education, 5th translated edition 2025), for distinguished-school students.

## Features

- All 9 chapters: lessons, law cards, worked examples, quizzes, exam-style questions, book questions with solutions, and a one-page summary.
- Arabic translation beside every paragraph (tap **AR**), or show both languages at once.
- Past papers from real exams with step-by-step solutions, and a timed mock exam.
- 11 interactive labs (Hooke’s spring, Young modulus, floating, hydraulic press, heating curve, photometer, Snell’s law, mirror and lens ray diagrams, angled mirrors, Coulomb’s law).
- Glossary of 159 terms (English ↔ Arabic) with pronunciation.
- Progress tracking and a “My Mistakes” review list, saved in the browser.
- Light and dark themes; works on phones.

## Run

Open `index.html` in a browser, or enable **GitHub Pages** (Settings → Pages → Deploy from branch → `main` / root).

## Edit

The app is built from the files in `src/`:

| File | Content |
|---|---|
| `src/top.html` | styles, header, helpers, chapter list |
| `src/ch1.js` … `src/ch9.js` | content of each chapter (+ its labs) |
| `src/papers.js` | past papers, formula sheet, glossary |
| `src/bottom.js` | app logic, views, credits |

After editing, rebuild `index.html`:

```bash
python3 build.py
```

## Credits

Designed by: **Mohammed Ali Abdulwahab** — الطالب: محمد علي عبد الوهاب
