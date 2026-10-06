# Bournemouth Osteopathic & Cranial Centre

Next.js rebuild of https://www.bournemouthosteopathy.co.uk (previously WordPress + Divi).
The whole site is static (`output: "export"`) and is hosted on Netlify.

## Develop

```bash
yarn install
yarn start   # dev server, http://localhost:3000
yarn build   # static site in ./out
yarn lint
```

## Where things live

| What | Where |
| --- | --- |
| Phone, email, address, map pin | `lib/site.ts` |
| Page titles, descriptions, OG tags, schema, sitemap dates | `lib/seo.ts` |
| Pages | `app/page.tsx`, `app/osteopathic`, `app/cranial`, `app/contact` |
| Shared pieces | `components/` |
| Styles | `app/globals.css` |
| Images / privacy notice PDF | `public/images`, `public/docs` |
| Social share image (1200x630) | `public/og-image.png` |
| Redirects from old WordPress URLs | `public/_redirects` |

## SEO

Titles, descriptions, canonicals, robots, Open Graph and Twitter tags, JSON-LD and
sitemap `lastmod` dates are copied from the old Yoast setup so rankings carry over.
New: a shared `og-image.png` (the old site had none) and a `MedicalClinic` schema node.

## Contact form

Uses [Netlify Forms](https://docs.netlify.com/forms/setup/). Netlify finds the
`contact` form in the built HTML on deploy. Submissions show in the Netlify UI under
**Forms**. Set up an email notification there so messages go to the clinic inbox.

## Deploy to Netlify

**Manual upload**

1. Run `yarn build`.
2. In Netlify, open the site's **Deploys** tab and drag the `out` folder onto the drop area.
   For the first deploy, use **Add new site → Deploy manually**.

**From Git (deploys on every push)**

1. Push this folder to a Git repo and pick it in Netlify ("Add new site").
2. Netlify reads `netlify.toml` (build `yarn build`, publish `out`).

**Either way**

- In **Forms**, enable form detection and add an email notification.
- Point the domain's DNS at Netlify when ready to switch over.
