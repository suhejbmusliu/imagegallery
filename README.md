# Image Gallery

A responsive image gallery page in plain HTML, CSS and JavaScript. No build
step and no dependencies.

---

## What's inside

- Nine photo cards (from Unsplash), each with a category badge, title and
  caption
- Responsive grid (`auto-fit` columns, breakpoints at 1024, 768 and 480 px)
- Images load lazily (`loading="lazy"` + an IntersectionObserver)
- Cards can be focused with Tab and opened with Enter

`script.js` also has a `filterGallery(category)` function and a click
handler that only logs to the console. Nothing on the page calls the filter
yet, and there is no lightbox.

---

## Files

| File | What |
|---|---|
| `index.html` | The gallery and its nine cards |
| `style.css` | Grid, cards, hover effects, breakpoints |
| `script.js` | Keyboard support, lazy loading, `filterGallery()` |

---

## Run locally

Open `index.html` in a browser. The photos load from `images.unsplash.com`,
so you need an internet connection.

---

## Adding a photo

Copy one `<article class="gallery-item">` block in `index.html` and change
the image URL, `alt` text, category badge, title and caption.

---

## Deployment

Any static host works (GitHub Pages, Netlify, Vercel): upload the folder
as it is.
