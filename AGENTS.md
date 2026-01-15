# AGENTS.md — NGMLGroup.github.io

This repository is a Jekyll website (GitHub Pages style) for the Northernmost GraphML Group.
Agents working here should prioritize preserving the existing content/data pipeline:
- People, publications, events, news, theses, and social posts are sourced from `_data/*.yml` and collection markdown under `_events/`, `_news/`, `_theses/`, `_social/`, `_posts/`.
- Rendering is driven by Liquid templates (`_layouts/`, `_includes/`) and site-wide styles (`_sass/`, `assets/css/style.scss`).

No Cursor rules (`.cursor/rules/`, `.cursorrules`) or Copilot rules (`.github/copilot-instructions.md`) were found in this repo.

---

## Quickstart

### Prereqs
- Ruby + Bundler
- Gems installed via `bundle install` (see `Gemfile`)

### Setup
- Install dependencies: `script/bootstrap`
  - Equivalent to: `gem install bundler && bundle install`

---

## Build / Serve / “Test” Commands

### Local dev server
- Serve site: `script/server`
  - Equivalent to: `bundle exec jekyll serve`
- Serve incrementally (faster rebuilds): `bundle exec jekyll serve --incremental`
- Serve drafts/future posts (if needed): `bundle exec jekyll serve --drafts --future`

### Build (static output)
- Build site: `script/build`
  - Equivalent to: `bundle exec jekyll build`
- Production build (mirrors GitHub Pages env a bit closer): `JEKYLL_ENV=production bundle exec jekyll build`

### Lint
There is no dedicated linter configured (no RuboCop/ESLint/Stylelint/Prettier). Keep changes small and consistent with existing patterns.

### Tests
There is no unit/integration test suite in this repo (no RSpec/minitest/Jest, etc.).

Recommended “smoke test” workflow:
- Full build smoke test: `bundle exec jekyll build`
- Spot-check a single page output (after build):
  - Example: `ls _site/people.html` or open `_site/people.html` in a browser

### “Single test” equivalent
Since there are no tests, treat “single test” as “verify a single feature/page”:
- Run the server: `bundle exec jekyll serve --incremental`
- Manually check the affected route (e.g. `/people.html`, `/publications.html`, `/blog/`, `/news/`)

### Notes about `script/cibuild`
- `script/cibuild` calls `gem build minima.gemspec`, but `minima.gemspec` is not present in this repository.
- Prefer `script/build` or `bundle exec jekyll build` as the canonical build check.

---

## Repository Structure (high-level)

- `_config.yml`: Jekyll config, collections, header nav pages
- `_data/`: YAML data files (e.g. `people.yml`, `publications.yml`)
- Collections (markdown sources):
  - `_events/`, `_news/`, `_theses/`, `_social/`, `_posts/`
- Templates:
  - `_layouts/` (page/post/home/base layouts)
  - `_includes/` (header/footer/head components)
- Styles:
  - `assets/css/style.scss` (main Sass entrypoint that imports Minima + `_sass/main.scss`)
  - `_sass/main.scss` (site-specific styling and theme)
- Scripts:
  - `assets/js/site.js` (site-wide behavior; keep lightweight)
- Generated output (do not edit/commit):
  - `_site/` (ignored by git)

---

## Code Style Guidelines

### General
- Prefer minimal, surgical changes; preserve existing Liquid loops and data structures.
- Avoid introducing new build dependencies unless absolutely necessary.
- Keep the site fast and accessible: progressive enhancement, reduced motion support, keyboard navigation.

### Liquid / Jekyll Templates (HTML)
- Do not change collection/data semantics unless requested:
  - Keep `site.data.*` access patterns and collection naming (`site.news`, `site.events`, etc.).
- Prefer using `_includes/` for reusable UI elements.
- Use semantic HTML: headings in order, proper lists, buttons for actions (not `a href="javascript:..."`).
- Accessibility:
  - Add `aria-label` for icon-only buttons/links.
  - Use `aria-current="page"` for active nav items.
  - Avoid relying on hover-only interactions.

### JavaScript (`assets/js/site.js`)
- Keep JS framework-free (no jQuery). Use modern, widely-supported DOM APIs.
- Prefer progressive enhancement:
  - Pages should remain usable without JS; JS can add polish (toggles, animations, carousels).
- Event handlers:
  - Prefer `addEventListener` in `DOMContentLoaded`.
  - Avoid inline `<script>` blocks in pages; centralize behavior in `assets/js/site.js`.
- Error handling:
  - Guard DOM lookups (check element exists before use).
  - Wrap `localStorage` access in try/catch.
- Naming:
  - Use `initFeatureName()` functions.
  - Prefer `const`/`let` (if adding new code); keep style consistent with existing file.

### Styling (Sass/CSS)
- Site styles live in `_sass/main.scss` and are imported by `assets/css/style.scss`.
- Prefer CSS custom properties for theme tokens (colors, spacing), and map dark mode via:
  - `prefers-color-scheme` defaults
  - `html[data-theme="light"|"dark"]` overrides
- Keep selectors scoped and predictable:
  - Prefer class-based styling over tag-only styling.
  - Avoid brittle selectors coupled to Minima internals when possible.
- Animations:
  - Keep subtle and performant (opacity/transform).
  - Respect `prefers-reduced-motion: reduce`.

### Content (Markdown/YAML)
- Markdown in collections should remain front-matter-driven and compatible with Jekyll.
- YAML in `_data/`:
  - Keep stable keys; avoid renaming fields used by templates.
  - Prefer adding optional fields over changing required fields.

---

## Git Hygiene
- Do not edit or commit `_site/` (generated output).
- Keep commits focused (if asked to commit): one theme/UI change per commit when possible.

---

## Common Pitfalls
- Duplicating scripts/styles in pages: prefer centralized includes and `assets/js/site.js`.
- Breaking Liquid loops by renaming keys in `_data/*.yml`.
- Introducing network-heavy assets without caching/CDN consideration.
