# vhari.sh

Personal portfolio site — SvelteKit + adapter-static + Tailwind CSS v4.

Output is plain static HTML/CSS/JS in `build/` — host anywhere.

## Dev commands

```sh
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build → build/
npm run preview   # preview the production build locally
npm run check     # type-check with svelte-check
```

## Hosting: Cloudflare Pages

Configured via `wrangler.toml` (labeled PROVIDER-SPECIFIC).

- Build command: `npm run build`
- Output directory: `build`

## Switching providers

1. Delete `wrangler.toml`
2. Point your new host at the `build/` output directory
3. Set build command to `npm run build`

No other changes needed — the adapter outputs portable static files.

## Adding routes

```
src/routes/
├── about/+page.svelte
├── projects/+page.svelte
├── projects/[slug]/+page.svelte
└── blog/[slug]/+page.svelte   ← add mdsvex later: npx sv add mdsvex
```
