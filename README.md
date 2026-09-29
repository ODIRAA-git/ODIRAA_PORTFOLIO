# Madu Odiraa Perpetua | Developer Portfolio

My personal portfolio: a fast, responsive single-page site showing my experience, projects and skills as a software developer based in Düsseldorf, Germany.

**🔗 Live site: [odiraamaduportfolio.netlify.app](https://odiraamaduportfolio.netlify.app/)**

## Features

- **Responsive design** that works on phones, tablets and desktops, with a mobile navigation menu
- **Light and dark themes** built on CSS variables; the visitor's choice is remembered
- **Scroll animations** with Framer Motion that respect the "reduced motion" system setting
- **Project showcase** with live links, source code and a dedicated case-study page for List Vault, including a video demo
- **Working contact form** that sends in the background via FormSubmit and shows success/error states
- **Accessible**: keyboard navigation, visible focus states, skip-to-content link and labelled controls
- **SEO-ready** with meta description and Open Graph tags

## Tech Stack

| Area | Tools |
| --- | --- |
| Framework | React 19, React Router |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Build tool | Vite |
| Hosting | Netlify |

## Featured Projects

| Project | Description | Links |
| --- | --- | --- |
| **List Vault** | Collaborative family shopping lists with real-time sync (Flutter, Supabase, PostgreSQL) | [Live](https://listvault.netlify.app) · [Code](https://github.com/ODIRAA-git/LIST_VAULT) |
| **Bookflix** | Book discovery platform with genres, wishlist and prologues (React, TypeScript, Supabase) | [Live](https://bookfliix.netlify.app/) |
| **EasyMeal** | Recipe search engine and meal-planning assistant (React, REST API) | [Live](https://eaziimeal.netlify.app/) |

## Getting Started

**Requirements:** Node.js 24 (see `.nvmrc`)

```bash
git clone https://github.com/ODIRAA-git/ODIRAA_PORTFOLIO.git
cd ODIRAA_PORTFOLIO
npm install
npm run dev
```

Then open http://localhost:5173.

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the code with ESLint |

## Project Structure

```
web/src/
├── data.js            # All site content: profile, experience, projects, skills
├── App.jsx            # Page layout and routes
├── index.css          # Theme colours and shared styles
├── Components/        # Navbar, Hero, About, Experience, Projects, Skills, Contact, Footer
├── pages/             # List Vault case-study page
└── assets/            # Images
public/                # Static files (logo, demo video)
```

To update the site's text, edit `web/src/data.js`. You don't need to change any components.

## Deployment

The site deploys automatically to Netlify on every push to `main`. The build settings live in `netlify.toml`.

## Contact

- **Email:** [odiraa_perpetua@yahoo.com](mailto:odiraa_perpetua@yahoo.com)
- **LinkedIn:** [linkedin.com/in/madu-o-717713216](https://www.linkedin.com/in/madu-o-717713216)
- **GitHub:** [@ODIRAA-git](https://github.com/ODIRAA-git)

---

© 2026 Madu Odiraa Perpetua
