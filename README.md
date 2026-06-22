# The Freedom School — Website

The marketing website for **The Freedom School**, a fully online high school that teaches teens *how to think, not what to think*.

Built with [Astro](https://astro.build) (static output), optimised for SEO, performance and easy editing. Designed to deploy on Netlify.

---

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server at http://localhost:4321
npm run build    # build the production site to ./dist
npm run preview  # preview the production build locally
```

Requires Node 18+ (Node 22 recommended — see `netlify.toml`).

---

## Project structure

```
src/
  assets/            Images optimised by Astro at build time
    brand/           Logo
    coral/           Signature 3D "coral" decorative art (8 variants)
    photos/          Hero + photography
  components/        Reusable UI (Header, Footer, PageHero, CtaBand, Faq, CoralArt, Icon, SEO)
  content/journal/   Blog/Journal posts (Markdown) — add a .md file to publish
  data/              Site content you’ll edit most often:
    site.ts          Name, nav, footer, social links, contact email, CTAs
    content.ts       Home/About copy, values, pricing, FAQs, founder note
    curriculum.ts    The 5 learning areas + 13 courses
    team.ts          Team members (currently placeholders)
  layouts/           BaseLayout (head, SEO, header, footer)
  pages/             One file per route (see below)
  styles/global.css  Design system: colours, type, spacing, components
public/              Static files served as-is (favicon, og image, robots.txt)
```

### Pages / routes
Home, Our Story, Mission & Values, How We Learn, Our Approach to Learning, Curriculum
(+ a page per course at `/curriculum/<slug>`), Our Team, Journal (+ article pages),
FAQ, Careers, College & Career Mentoring, Emotional Mentoring, Apply, Book a Call,
Thank you, Privacy, Terms, and a custom 404.

---

## Editing content

- **Text & lists** (values, pricing, FAQs, courses, nav, footer): edit the files in `src/data/`.
- **Blog posts**: add a Markdown file to `src/content/journal/` with `title`, `description`, `date`, `tag` front-matter.
- **Images**: drop files into `src/assets/...` and import them in the relevant component/page (Astro optimises them automatically).
- **Colours, fonts, spacing**: all design tokens live at the top of `src/styles/global.css`.

---

## Forms

`/apply` and `/book-a-call` use **Netlify Forms** — they work automatically once deployed on Netlify (submissions appear in the Netlify dashboard under *Forms*). Set up email notifications there. The success page is `/thank-you`.

---

## Deployment (Netlify)

This site is intended to be hosted on Netlify. `netlify.toml` is already configured:

- **Build command:** `npm run build`
- **Publish directory:** `dist`

To deploy: connect this GitHub repo in the Netlify dashboard and deploy. No adapter or server is needed (fully static).

---

## ✅ Before launch — checklist

- [ ] Set the real production domain in **`astro.config.mjs`** (`site:`), **`src/data/site.ts`** (`url`), and **`public/robots.txt`** (sitemap URL). These drive canonical URLs, the sitemap and social-share links.
- [ ] Replace placeholder **team** bios/names/photos in `src/data/team.ts` (set `teamIsPlaceholder = false`).
- [ ] Add the founder’s real name + photo (`src/data/content.ts` `founderNote`, and the Our Story / Our Team pages).
- [ ] Have **Privacy Policy** and **Terms** (`src/pages/privacy.astro`, `terms.astro`) reviewed by a professional.
- [ ] Confirm **pricing** and the **start dates** (`src/data/content.ts`).
- [ ] Swap stock photography for real student/classroom photos when available (`src/assets/photos/`).
- [ ] Turn on **form notifications** in Netlify.
- [ ] (Optional) Connect a scheduling tool (e.g. Calendly) on `/book-a-call`.

---

## Notes

- Fonts (Bricolage Grotesque + Poppins) are self-hosted via Fontsource — no external requests, good for privacy and performance.
- All imagery is optimised to WebP at build time and lazy-loaded (except the hero).
- Accessibility: semantic landmarks, skip link, keyboard-navigable menus, labelled forms, visible focus states, reduced-motion support.
