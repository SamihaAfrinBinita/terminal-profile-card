# Terminal Profile Card

A small, single-page profile card styled like a terminal window. It "types" out your intro, one command at a time — `whoami`, `cat about.txt`, `ls skills/`, `cat contact.txt` — and reveals the answer under each.

Built with plain HTML, CSS, and JavaScript. No frameworks, no build step — just open `index.html`.

## Preview

Open `index.html` in any browser to see it locally, or publish it with GitHub Pages (steps below).

## Files

```
terminal-profile-card/
├── index.html   → structure + content (edit your name, info, links here)
├── style.css    → the terminal/editor look (colors, fonts, layout)
├── script.js    → the typing animation logic
└── README.md
```

## Customize it

Open `index.html` and edit:
- The commands/text inside each `<span class="cmd">` is filled in by `script.js` — update the `sequence` array in `script.js` to change what gets "typed."
- The content inside each `.output` block (the `<ul class="info-list">`, `.skills`, `.links`) — swap in your own details.
- Replace the placeholder GitHub/LinkedIn/email links in the last section.

Open `style.css` to change colors — the CSS variables at the top of the file (`:root`) control the whole palette.

## Upload to GitHub

1. Create a new repository on GitHub (e.g. `terminal-profile-card`).
2. In this folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: terminal profile card"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. To publish it as a live webpage with **GitHub Pages**:
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under "Build and deployment," set **Source** to `Deploy from a branch`
   - Choose branch `main` and folder `/ (root)`, then **Save**
   - Your site will be live at `https://YOUR-USERNAME.github.io/YOUR-REPO/` within a minute or two

## Notes

- Fully responsive and works down to mobile widths.
- Respects `prefers-reduced-motion` (disables the blinking cursor / fade-ins if the user has that setting on).
- Fonts used: JetBrains Mono (headings/terminal text) and Inter (small UI text), loaded from Google Fonts.
