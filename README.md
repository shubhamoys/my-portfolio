# My Portfolio

A personal portfolio website, built with [Next.js](https://nextjs.org). The design is a dark, type-driven "Ink & Signal" look: oversized display headlines, a GitHub-style contribution grid, a scrolling tech-stack marquee and hover-reactive project rows.

## **Features**

- **Responsive Design**: Tuned layouts for desktop (≥ 900px), tablet (600–899px) and phone (< 600px), including a mobile menu.
- **Fit-to-width Headlines**: The name and the closing call-to-action are measured at runtime so they fill the line exactly.
- **Contribution Grid**: A generated 52-week (26 on phones) grid that lights up a word, with a staggered entrance animation.
- **Tech Stack Marquee**: A seamless, pausable-on-hover scrolling strip.
- **Selected Work & Career Path**: Project rows with hover states, and a role timeline, both revealed on scroll.
- **Download CV**: Downloads the résumé PDF from `public/assets/files/`.
- **Accessibility**: Skip link, keyboard-friendly menu (Esc and outside-click to close), visible focus states and `prefers-reduced-motion` support.

---

## **Tech Stack**

- **Framework**: Next.js 16 (App Router), React 19
- **Language**: TypeScript
- **Styling**: SCSS modules, one per component, plus CSS custom properties for theming
- **Fonts**: [Archivo](https://fonts.google.com/specimen/Archivo) (variable width + weight) and [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono), loaded with `next/font`
- **Icons**: SVG, rendered as a CSS mask so they inherit the text colour
- **Linting**: ESLint 9 with `eslint-config-next`

There are no runtime dependencies beyond Next.js and React.

---

## **Project Structure**

```
src/
├── app/                  # Layout, page, global styles, favicons
├── components/           # One folder per component: name.tsx + name.module.scss
│   ├── header/           # Logo, nav, availability pill, mobile menu (client)
│   ├── hero/             # Name, eyebrow, bio and CTAs
│   ├── contribution-grid/
│   ├── marquee/
│   ├── work/
│   ├── path/
│   ├── contact/
│   ├── site-footer/
│   ├── arrow-icon/       # Shared SVG arrow (right / down / up-right)
│   ├── fit-text/         # Fit-to-width text (client)
│   ├── reveal/           # Scroll-reveal wrapper (client)
│   ├── status-pill/
│   └── skip-link/
├── data/content.ts       # All copy: projects, roles, links, socials
├── hooks/                # Shared React hooks
├── styles/               # SCSS breakpoint mixins
└── utils/                # Pure helpers (grid generation, text fitting)
public/assets/
├── files/                # Résumé PDF
└── icons/                # right-arrow.svg
```

Components are server components by default. Only the ones that need browser APIs are client components.

---

## **Customising**

### Content

Edit `src/data/content.ts`. Text, projects, roles, the stack list and social links all live there.

### Colours

The whole palette comes from three variables at the top of `src/app/globals.scss`:

```scss
:root {
  --background: #0d0d0c;
  --text: #edebe4;
  --accent: #ff5b1f; /* alternatives: #C8F03C · #7AA2FF · #F2C14E */
}
```

Muted text, borders and the contribution-grid shades are derived from these with `color-mix()`, so changing the three values re-themes everything. The `theme-color` meta tag in `src/app/layout.tsx` is a fixed value, so update it too if you change `--background`.

### Résumé

Replace `public/assets/files/Shubhamoy_Sarker_Resume.pdf`, or point `HERO.secondaryCta` in `content.ts` at a different file.

### Icons

The arrow is `public/assets/icons/right-arrow.svg`. Its stroke colour in the file is ignored, because `ArrowIcon` uses it as a mask over `currentColor`.

---

## **Getting Started**

### **Prerequisites**

- Node.js 20.9 or higher
- npm

### **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/shubhamoys/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser to view the project.

### **Scripts**

| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm start`     | Serve the production build   |
| `npm run lint`  | Lint the project with ESLint |

> The build downloads Google Fonts at compile time, so it needs network access.
