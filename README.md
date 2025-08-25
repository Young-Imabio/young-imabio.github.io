# Young ImaBio site (static + Decap CMS)

This is a static site that non‑coders can edit via a friendly `/admin` UI. Content is stored as JSON in `data/` and committed to the repo.

## Quick start
1) Push this folder to a **GitHub repo**.
2) Deploy on **Netlify** via "New site from Git".
3) In Netlify: **Project configuration → Identity → Enable Identity**, then **Enable Git Gateway**.
4) Visit `https://<your-site>.netlify.app/admin/` and sign up (invite teammates).
5) Editors can update **Events** and **Team**; site redeploys automatically.

> Note: Netlify Identity/Git Gateway is being deprecated. You can keep using it for now, but plan to migrate to the **GitHub backend** or another host. See `admin/config.yml` comments and Decap docs.

## Local preview
You can serve locally with any static server:
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Customize
- Edit styles in `index.html` (top `<style>` block).
- Add images to `/uploads` (via CMS or git).
- Add more collections (news, partners) in `admin/config.yml`.
