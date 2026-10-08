# Short Form – Landing Page (static)

Converted from a CodeIgniter 4 / Vercel PHP app to a plain static site. The PHP layer only served one HTML view, so no server is needed. Runs on GitHub Pages, Netlify, Vercel or Cloudflare Pages.

## Structure
```
index.html
favicon.ico, robots.txt, .nojekyll
assets/css/styles.css
assets/js/main.js        # Vidalytics player, popup, gallery, marquee
assets/img/              # logo.png, kaizach.jpg
assets/videos/           # 5 gallery videos (~6 MB total)
```

## Deploy (GitHub Pages)
1. Upload everything in this folder to the repo root.
2. Settings → Pages → Deploy from a branch → `main` / `/ (root)` → Save.
3. Live at `https://<user>.github.io/<repo>/`

## Edit
- Copy/text: `index.html`
- Styles: `assets/css/styles.css`
- Swap a gallery video: replace the file in `assets/videos/` keeping the same name.
