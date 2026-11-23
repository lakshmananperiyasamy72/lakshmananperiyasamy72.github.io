# Lakshmanan Periyasamy — Personal Portfolio

[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-brightgreen?style=flat&logo=github)](https://lakshmananperiyasamy72.github.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![W3C Validated](https://img.shields.io/badge/HTML5-Semantic%20%26%20Accessible-orange?logo=html5)](https://validator.w3.org/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-success)](https://www.w3.org/WAI/WCAG21/quickref/)

> **Live Production Website:** [https://lakshmananperiyasamy72.github.io](https://lakshmananperiyasamy72.github.io/)

A modern, high-performance personal developer portfolio engineered with **semantic HTML5**, **modular CSS3**, and **vanilla JavaScript**. Designed for MNC recruitment, DevOps engineer roles, software engineering positions, and enterprise technical evaluations.

---

## ⚡ Technical Highlights

- **Zero Heavy Frameworks:** 100% lightweight vanilla implementation with zero build step dependencies.
- **Glassmorphic UI & Design System:** Modular CSS tokens (`variables.css`), responsive fluid typography using CSS `clamp()`, and custom dark/light theme switcher with zero flash of unstyled content (FOUC).
- **Accessibility & UX:** Strict heading hierarchy (`H1` -> `H4`), high-contrast focus rings (`:focus-visible`), WCAG 2.1 AA compliant color contrast, and full `prefers-reduced-motion` support.
- **Production SEO Ready:** Complete Open Graph, Twitter Cards, JSON-LD structured schema (`ProfilePage`), canonical URLs, `robots.txt`, and `sitemap.xml`.
- **Dynamic Interactions:** Pure `IntersectionObserver` scroll-reveal animations, responsive mobile navigation drawer, and active navbar section spy.

---

## 📂 Project Directory Structure

```text
lakshmananperiyasamy72.github.io/
├── assets/
│   ├── css/
│   │   ├── variables.css      # Design tokens (colors, fluid typography, spacing)
│   │   ├── reset.css          # Modern CSS reset & focus states
│   │   ├── base.css           # Global typography, animations & utilities
│   │   ├── layout.css         # Navbar, mobile drawer, footer & back-to-top
│   │   ├── components.css     # Buttons, cards, timeline, skill pills & tags
│   │   └── main.css           # Central stylesheet aggregator
│   ├── js/
│   │   ├── theme.js           # Dark/light theme engine with localStorage sync
│   │   ├── navigation.js      # Mobile drawer, ARIA controls & scroll-spy
│   │   └── main.js            # Lucide icons, reveal observer & copy utilities
│   ├── icons/
│   │   ├── favicon.svg        # Scalable vector brand favicon (<LP/>)
│   │   └── README.md          # Icon specifications
│   ├── images/
│   │   ├── README.md          # Professional portrait photo guidelines
│   │   └── .gitkeep
│   ├── certificates/
│   │   ├── README.md          # Credentials & verification documents specs
│   │   └── .gitkeep
│   ├── projects/
│   │   ├── nwis_preview.png   # Authentic NWIS GIS well map preview
│   │   └── README.md          # Screenshot asset requirements
│   └── resume/
│       ├── Lakshmanan_Periyasamy_Resume.pdf  # Verified resume document
│       └── README.md          # Resume specifications
├── .gitignore                 # Version control exclusions
├── index.html                 # Main single-page semantic portfolio document
├── README.md                  # Repository documentation
├── robots.txt                 # Search crawler rules
└── sitemap.xml                # XML sitemap for search engines
```

---

## 🚀 Local Development Setup

No node packages, npm installs, or build pipelines are required.

### Quick Start with Python:
```bash
# Clone the repository
git clone https://github.com/lakshmananperiyasamy72/lakshmananperiyasamy72.github.io.git
cd lakshmananperiyasamy72.github.io

# Launch a lightweight local server (Python 3)
python -m http.server 8000
```
Open your browser at `http://localhost:8000`.

### Alternative (VS Code Live Server):
Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 GitHub Pages Deployment Guide

This repository is structured as a user site (`<username>.github.io`), which automatically deploys from the root of the default branch.

1. **Push Changes to GitHub:**
   ```bash
   git add .
   git commit -m "feat: initial production release of personal developer portfolio"
   git branch -M main
   git remote add origin https://github.com/lakshmananperiyasamy72/lakshmananperiyasamy72.github.io.git
   git push -u origin main
   ```

2. **Verify GitHub Pages Configuration:**
   - In GitHub, navigate to **Settings** > **Pages**.
   - **Source:** Select `Deploy from a branch`.
   - **Branch:** Select `main` and folder `/ (root)`.
   - Ensure **Enforce HTTPS** is checked.

3. **Live Access:**
   Your portfolio will be available at:
   `https://lakshmananperiyasamy72.github.io/`

---

## 📬 Contact & Connect

- **Name:** Lakshmanan Periyasamy
- **Degree:** B.E. Computer and Communication Engineering, V.S.B. Engineering College
- **Email:** [lakshmananperiyasamy72@gmail.com](mailto:lakshmananperiyasamy72@gmail.com)
- **LinkedIn:** [linkedin.com/in/lakshmanan-periyasamy-585a74219](https://www.linkedin.com/in/lakshmanan-periyasamy-585a74219)
- **GitHub:** [github.com/lakshmananperiyasamy72](https://github.com/lakshmananperiyasamy72)
- **Location:** Tiruchirappalli, Tamil Nadu, India

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
