# Mohit Kakkar — Portfolio

**Azure Identity & Integration Architect** | 14+ Years Enterprise Cloud Experience

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-Click%20to%20Browse-0078d4?style=for-the-badge&logo=github)](https://mohitkakkar87.github.io/portfolio/)

---

## Quick Start

No build step required. Just open `index.html` in any browser.

```
mohit-kakkar-portfolio/
├── index.html          ← Entry point (publish this on GitHub Pages)
├── js/
│   ├── data.js         ← ALL content lives here — edit to update
│   └── main.js         ← Interactivity (particles, animations, filters)
├── css/
│   └── style.css       ← Full design system (dark glassmorphism)
├── assets/
│   ├── images/         ← Profile photo + company logos
│   ├── icons/          ← SVG tech icons
│   └── resume/         ← Resume download file
└── README.md
```

## Updating Content

**To update any content, only edit `js/data.js`** — never touch HTML or CSS for content changes.

| What to update | Where in data.js |
|----------------|-----------------|
| Job title / bio | `personal.title`, `personal.bio` |
| New job | Add entry to `experience[]` array |
| New project | Add entry to `projects[]` array |
| Skills | Add/remove items in `skills[]` |
| Stats (years, metrics) | `stats[]` array |
| Achievements | `achievements[]` array |
| Certifications | `certifications[]` array |

## Publish on GitHub Pages

1. Create a new GitHub repository named `mohitkakkar87.github.io`
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from a branch → main / root**
4. Your portfolio will be live at `https://mohitkakkar87.github.io`

Or use any other repo name and publish at: `https://mohitkakkar87.github.io/<repo-name>/`

## Features

- **Dark glassmorphism design** with Azure brand colours
- **Animated particle canvas** background in hero
- **Typing animation** cycling through role titles
- **Skills filter** by category (Identity, Cloud, Integration, Backend, Frontend, DevOps, Data)
- **Experience timeline** with expandable cards — current role auto-expanded
- **Projects filter** by category
- **Scroll-triggered animations** via Intersection Observer
- **Animated stat counters** that count up on scroll
- **Skill level bars** that animate in on scroll
- **Contact form** opens native mail client (works on static hosting)
- **Mobile responsive** — works perfectly on phones & tablets
- **Zero dependencies** — no npm, no build, no frameworks

## Design Tokens (easy theming)

All colours, fonts, and spacing are CSS custom properties in `css/style.css` under `:root {}`.
To retheme, change `--azure` (primary colour) and `--purple` (accent colour).

## Adding a Company Logo

1. Put the logo file (PNG/SVG) in `assets/images/`
2. Update the `logo` field in the relevant `experience[]` entry in `data.js`

```js
{ logo: "assets/images/wipro.png", logoText: "Wi", ... }
```

If `logo` is `null`, the `logoText` initials are shown as fallback.

---

Built with HTML5 · CSS3 · Vanilla JavaScript · No frameworks · No dependencies
