# Venkataramana Routhu — Portfolio

> Production-ready personal portfolio for a Full Stack / MERN Developer.
> Built with **React.js**, **Tailwind CSS**, and **Framer Motion**.

---

## ⚡ Quick Start (5 Minutes)

### 1. Extract the project
```bash
unzip venkataramana-portfolio.zip
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Open **http://localhost:5173** — you're live.

---

## 📁 Project Structure

```
portfolio/
├── index.html                    # Entry HTML + Google Fonts
├── vite.config.js                # Vite config
├── tailwind.config.js            # Tailwind + custom tokens
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                  # React root mount
    ├── App.jsx                   # Root component (wires all sections)
    ├── index.css                 # Tailwind directives + custom utilities
    │
    ├── data/
    │   └── portfolio.js          # ⭐ ALL content lives here — edit this
    │
    ├── hooks/
    │   ├── useTheme.js           # Dark/light mode + localStorage
    │   ├── useTyping.js          # Typewriter animation
    │   └── useScrollReveal.js    # IntersectionObserver reveals
    │
    └── components/
        ├── Navbar.jsx            # Sticky nav + scroll spy + mobile menu
        ├── Hero.jsx              # Landing splash + CTA + stats
        ├── About.jsx             # Bio + highlight cards
        ├── Skills.jsx            # Categorized tech badges
        ├── Projects.jsx          # Project cards with features + links
        ├── Experience.jsx        # Timeline + education + certifications
        ├── Contact.jsx           # Contact links + availability card
        ├── Footer.jsx            # Footer with quick links + socials
        ├── SectionHeader.jsx     # Reusable gradient section header
        └── Badge.jsx             # Reusable colored pill badge
```

---

## 🛠 Tech Stack

| Layer       | Technology                         |
|-------------|-------------------------------------|
| Framework   | React 18 (functional components)    |
| Styling     | Tailwind CSS 3 + custom utilities   |
| Animations  | Framer Motion 11                    |
| Icons       | Lucide React                        |
| Fonts       | Onest (display) + JetBrains Mono    |
| Build Tool  | Vite 5                              |

---

## ✏️ How to Customize

### Update Your Information
All content is in one file — **`src/data/portfolio.js`**:

```js
// Update personal details
export const PERSONAL = {
  name: 'Venkataramana Routhu',
  email: 'routhuvenkey0007@gmail.com',
  github: 'https://github.com/YOUR-ACTUAL-USERNAME',   // ← change this
  linkedin: 'https://linkedin.com/in/...',              // ← change this
  // ...
};
```

### Add a Real Project Live URL
```js
// In PROJECTS array, set isLive: true and add the URL:
{
  id: '02',
  title: 'Secure Client Portal',
  isLive: true,                                        // ← enable Live button
  live: 'https://your-actual-domain.com',              // ← real URL
  // ...
}
```

### Change Default Theme
In `src/hooks/useTheme.js`:
```js
// Default to light mode:
const [isDark, setIsDark] = useState(() => {
  const stored = localStorage.getItem('vr-theme');
  if (stored) return stored === 'dark';
  return false;  // ← change to false for light default
});
```

### Add Your Photo (Optional)
In `src/components/Hero.jsx`, after the status badge, add:
```jsx
<img
  src="/photo.jpg"           // put photo.jpg in /public/
  alt="Venkataramana Routhu"
  className="w-28 h-28 rounded-full object-cover border-2"
  style={{ borderColor: '#22d3ee' }}
/>
```

### Change Accent Colors
Colors are defined per-category in `src/data/portfolio.js`:
```js
export const SKILLS = [
  {
    category: 'Frontend',
    accent: '#22d3ee',       // dark mode accent
    accentLight: '#0891b2',  // light mode accent
    // ...
  },
];
```

---

## 🚀 Deploy to Vercel (Free, Recommended)

```bash
# Build for production
npm run build

# Option A — Vercel CLI
npx vercel

# Option B — GitHub
# Push to GitHub → connect repo on vercel.com → auto deploys
```

## Deploy to Netlify

```bash
npm run build
# Drag & drop the /dist folder at app.netlify.com/drop
```

---

## ✅ Features Checklist

- [x] Dark / Light mode toggle with localStorage persistence
- [x] Typing animation cycling through roles
- [x] Scroll-based section reveals (Framer Motion)
- [x] Active section highlighting in nav (scroll spy)
- [x] Mobile-first fully responsive layout
- [x] Mobile hamburger menu drawer
- [x] Hero: name, tagline, stats, CTAs, social links
- [x] About: bio paragraphs + highlight cards grid
- [x] Skills: 5 categories with animated badge chips
- [x] Projects: 3 cards with features, tech, GitHub + Live links
- [x] Experience: vertical timeline with achievement bullets
- [x] Education card + 4 certification entries
- [x] Contact: 3 social links + availability card + email CTA
- [x] Footer: quick links, contact info, social icons
- [x] Custom scrollbar styling
- [x] SEO meta tags in index.html
- [x] Framer Motion whileHover card lift effects
- [x] Gradient text animations

---

## 📄 License

MIT — Free to use and customize.
