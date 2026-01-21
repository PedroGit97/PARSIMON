# Repository Guidelines

## Project Structure & Module Organization
This repo is a static site prototype for a Spanish-language economics blog. Core pages live at the root:
- `Index.html`: landing page with navigation, article cards, and theme toggle.
- `Articulo.html`: article detail layout with rich typography and layout components.
- `assets/`: reserved for images, icons, and other static files (currently empty).

The HTML files include inline Tailwind configuration plus small JS snippets for UI behavior (theme toggle, menus, header scroll).

## Build, Test, and Development Commands
No build step is required. Open the HTML files directly in a browser:
- `Start-Process .\Index.html` (PowerShell)
- `Start-Process .\Articulo.html`

The pages use the Tailwind CDN and Google Fonts, so you need an internet connection when previewing.

## Coding Style & Naming Conventions
- Keep the existing file naming pattern (capitalized Spanish filenames: `Index.html`, `Articulo.html`).
- Preserve the current formatting style and spacing in each file; avoid minifying.
- Inline Tailwind config and custom CSS live in `<style type="text/tailwindcss">` blocks; keep related rules grouped together.
- For new UI elements, prefer Tailwind utility classes; only add custom CSS when utilities are insufficient.

## Testing Guidelines
There is no automated test suite. Validate changes by manually opening the pages and checking:
- Desktop and mobile layouts.
- Dark/light theme toggle.
- Navigation menus and focus states.

## Commit & Pull Request Guidelines
Recent commits are short, lowercase Spanish messages (e.g., "subo estructura"). Keep commit messages brief and task-focused.

For pull requests, include:
- A summary of the visual/structural changes.
- Before/after screenshots for UI updates.
- Notes on any external assets or links added.

## Configuration & Assets
When adding images or icons, place them under `assets/` and reference with relative paths (e.g., `assets/hero.jpg`). Keep external URLs minimal and document any new dependencies.
