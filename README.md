![img](docs/static/img/logo_full_dark.svg "Logo")

# OVA — On View Animations

**OVA** is a lightweight JavaScript library that animates HTML elements as they enter the viewport. No dependencies, no configuration — just add a `data-ova` attribute to your elements and OVA handles the rest.

```html
<div data-ova="animation: fade-top; duration: 800ms; delay: 200ms;">
  <h1>Hello World</h1>
</div>
```

## Documentation

Full documentation is available at **[this link](https://on-view-animations.vercel.app)**.

## Features

- 🪶 Lightweight — one JS file and one CSS file, no dependencies
- ⚡ Performant — uses `IntersectionObserver`, stops observing after animation fires
- 🎨 Customizable — control animation, duration, easing, delay and offset per element
- 🔌 Flexible — available as Vanilla JS bundle, ESM with bundled CSS, or ESM with separate CSS
- ✏️ Extensible — add custom animations with plain CSS

## Download

### npm

Available on [**npm**](https://www.npmjs.com/package/on-view-animations):

```bash
npm install on-view-animations
```

### GitHub Releases

Download the latest release from the [Releases page](https://github.com/IlCremo/On-View-Animations/releases/latest).

| File                     | Format | CSS           | Use case                          |
| ------------------------ | ------ | ------------- | --------------------------------- |
| `ova.bundle.min.js`      | IIFE   | Injected      | Vanilla JS, direct `<script>` tag |
| `ova.bundle.esm.js`      | ESM    | Auto-injected | Frameworks (React, Vue, Svelte)   |
| `ova.esm.js` + `ova.css` | ESM    | Separate file | Frameworks with full CSS control  |

## Quick start

### Vanilla JS

```html
<script src="ova.bundle.min.js" data-auto-init></script>

<div data-ova="">Hello World</div>
```

### ESM

```js
import { initOVA } from "on-view-animations/dist/ova.bundle.esm.js";

document.addEventListener("DOMContentLoaded", () => {
  initOVA();
});
```

## License

MIT License — © 2026 Andrea Cremonesi
