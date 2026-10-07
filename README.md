# CashHub

CashHub is a browser-based toolkit for creating and downloading professional invoices and receipts, working through common billing calculations, and reading practical guides for small businesses and independent professionals. It runs as a lightweight single-page application and does not require an account.

## What’s included

- **Home:** invoice and receipt entry points, calculator shortcuts, animated feature and use-case sections, statistics, and an expandable FAQ.
- **Invoice generator:** live invoice preview, five selectable visual templates, business and client details, line items and custom columns, tax and discount, currency and color customization, logo upload, signature drawing or PNG upload, notes, and terms.
- **Receipt generator:** live receipt preview, seller and customer details, payment method and status, line items, tax and discount, currency and color customization, logo and signature options, and notes.
- **Calculators:** 16 tools for payment dates, business days, overdue charges, taxes, discounts, invoice totals, pricing, markup, and margin.
- **Guides:** 18 billing and small-business articles, with individual detail pages, a generated table of contents, FAQs, and related reading.
- **Other pages:** contact form, privacy information, and terms.
- **Responsive interface:** desktop, tablet, and mobile layouts; light and dark themes; reduced-motion support.

## Pages and routes

Navigation uses the URL hash, so pages work without a server-side router:

| Route | Page |
| --- | --- |
| `#/` or `#/home` | Home |
| `#/invoice` | Invoice generator |
| `#/receipt` | Receipt generator |
| `#/calculators` | Calculator directory |
| `#/calculator/<id>` | Individual calculator |
| `#/blog` | Guide directory |
| `#/blog/<slug>` | Individual guide |
| `#/contact` | Contact |
| `#/terms` | Terms |
| `#/privacy` | Privacy |

## Run locally

There is no package manager, build step, or backend. Serve the project directory over HTTP so the browser can load its JavaScript modules:

```sh
python3 -m http.server 5500
```

Then open [http://localhost:5500](http://localhost:5500). Opening `index.html` directly with a `file://` URL may prevent JavaScript modules from loading.

## Project structure

```text
.
├── index.html                 # App shell and external library/font references
├── css/
│   └── styles.css             # Shared layout, components, themes, and responsive styles
├── js/
│   ├── app.js                 # Hash routing and shared application behavior
│   ├── data/
│   │   └── currencies.js      # Currency options used by the generators
│   └── pages/
│       ├── home.js
│       ├── invoice.js
│       ├── receipt.js
│       ├── calculators.js
│       ├── blog.js
│       ├── contact.js
│       ├── legal.js
│       └── personal-cta.js
└── test_modules.mjs           # Small module-import smoke check
```

## Implementation notes

- The app is a client-side ES-module application. The hash router and page renderers are in `js/app.js` and `js/pages/`.
- Invoice and receipt previews update from their forms. The invoice generator currently has five selectable templates; the receipt generator has its own receipt layout and live preview.
- The currency list is a curated set of 16 commonly used currencies, not an exhaustive worldwide directory.
- Logo uploads accept PNG, JPEG, or WebP images up to 600 KB. Signature images are uploaded as PNG. These assets are used in the current document preview and export workflow.
- PDF export targets the invoice or receipt preview rather than the surrounding editor page. The app uses html2pdf.js when the CDN library is available and provides a browser print / Save as PDF fallback.
- The selected theme is stored in `localStorage`. The calculator-to-invoice handoff uses `sessionStorage`.
- The contact form prepares an email through the visitor’s email application; it does not submit to a CashHub server.
- Inter, html2pdf.js, and guide photography are loaded from external providers (Google Fonts, cdnjs, and Unsplash). Their availability depends on the browser’s network access.

## Checks

There is currently no full automated browser or unit-test suite. `test_modules.mjs` is a small import smoke check; some page modules expect browser globals such as `window`, so importing them in plain Node.js is not a complete test of the application. A syntax-only check for the JavaScript files can be run with:

```sh
for file in js/app.js js/data/*.js js/pages/*.js; do
  node --check "$file" || exit 1
done
```


For functional verification, run the local server and exercise the routes and document exports in a browser.
