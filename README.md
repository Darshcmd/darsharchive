# Darsh Archive Portfolio


## Setup

```sh
pnpm install
pnpm dev
```

Open the localhost URL printed by Vite, usually `http://localhost:5173`.

To validate the site:

```sh
pnpm check
pnpm build
```

## pnpm / esbuild Fix

If pnpm blocks esbuild build scripts, create `pnpm-workspace.yaml` in the project root:

```yaml
onlyBuiltDependencies:
  - esbuild
```

Then reinstall:

```sh
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

## Where To Edit Content

- Name and top social icons: `src/lib/components/Header.svelte`
- Homepage title, character name, and main buttons: `src/routes/+page.svelte`
- Homepage button labels and about text: `src/translations/en.json`, `src/translations/fr.json`, and `src/translations/hi.json`
- Sidebar navigation: `src/lib/components/Sidebar.svelte`
- About stats: `src/lib/components/about/CharacterStats.svelte`
- Contact links: `src/routes/contact/+page.svelte`
- Projects and project categories: `src/routes/projects/+page.svelte`
- Certifications: `src/routes/certifications/+page.svelte`
- Page metadata: `src/app.html`

## Where To Add Files

- Resume PDF: `static/resume.pdf`
- Project images: `static/assets/projects`
- Certification images: `static/assets/certifications`
- Extra icons: `static/assets/icons`

The homepage Resume button points directly to `/resume.pdf`. Add the real file at `static/resume.pdf` when it is ready.

## File Guide

`src/routes/+page.svelte`: Home page. Change the title, character label, button destinations, and placeholder LinkedIn/GitHub links here.

`src/lib/components/Header.svelte`: Fixed top bar. Replace the `#` links for YouTube, LinkedIn, GitHub, and Email when Darsh has final URLs.

`src/lib/components/Sidebar.svelte`: Bottom filesystem-style nav. Experience, projects, certifications, about, and contact are visible here.

`src/routes/projects/+page.svelte`: Project data and filters. Edit titles, descriptions, category, image paths, and GitHub/demo links.

`src/routes/certifications/+page.svelte`: Certification entries. Edit title, issuer, issued date, credential link, and image path.

`src/routes/contact/+page.svelte`: Contact cards. Replace `mailto:`, LinkedIn `#`, GitHub `#`, and YouTube `#`.

`src/lib/components/contact/Social.svelte`: Shared contact card style and icons.

`src/routes/about/+page.svelte`: About page shell and tab layout. Most text comes from translations.

`src/translations/en.json`, `src/translations/fr.json`, and `src/translations/hi.json`: Labels, homepage greeting text, about text, and route titles.

`src/app.html`: SEO/social metadata. Replace placeholder URL fields when the site has a final domain.
