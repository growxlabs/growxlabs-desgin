# GrowxLabs — Frontend & Design Workspace

Welcome to the frontend and design workspace for GrowxLabs (`growxlabs.tech`).

This repository contains the marketing pages, design system, UI components, typography, layout surfaces, and pixel art illustrations.

---

## 🛠️ Quick Start

### 1. Prerequisites
- **Node.js**: v20 or higher
- **npm**: v10 or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Generate Design Tokens (Panda CSS)
```bash
npm run prepare
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

## 📁 Project Structure

```
growx-desgin/
├── app/
│   ├── (marketing)/       # Marketing pages (Home, Services, Products, Research, FAQ, Blog, etc.)
│   ├── globals.css        # Global CSS variables, fonts, KaTeX styles
│   ├── layout.tsx         # Root HTML layout and metadata
│   └── ...
├── components/
│   ├── marketing/         # Page heroes, accordion FAQs, value props, service cards
│   ├── ui/                # Base UI components (buttons, dialogs, inputs, tabs)
│   ├── layout/            # Navbar, Footer, CookieConsent, GlobalBackground
│   ├── icons/             # Custom SVG icon system
│   └── ...
├── public/                # Static assets, SVG symbols, illustrations, pixel art
├── styled-system/         # Generated Panda CSS styles and recipe tokens
├── panda.config.ts        # Panda CSS tokens, colors, typography rules
└── package.json           # Dependencies and scripts
```

---

## 🎨 Design Rules & Guidelines

- **Outer Canvas**: `#F5F4F0`
- **Section Surfaces**: Rounded `16px` surfaces (`#F5F5F5` or dark `#22282C` / `#30373B`)
- **Cards**: Earth `#E9E7E1` or surface-contrasted cards
- **Primary Typography**: `#22282C`
- Keep responsive padding consistent across desktop (`26px` outer gutters), tablet, and mobile.

---

## 🚀 Submitting Changes

1. Create a feature branch:
   ```bash
   git checkout -b feature/design-refinement
   ```
2. Make your design and styling adjustments.
3. Test locally:
   ```bash
   npm run type-check
   npm run dev
   ```
4. Push your branch and open a Pull Request.
