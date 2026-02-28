---
id: initialization
title: Initialization
sidebar_position: 1
---

# Initialization

Once you have downloaded OVA and included it in your project, you need to initialize the library. There are two ways to do this depending on your use case.

## Auto initialization

If you are using the **Vanilla JS bundle** (`ova.bundle.min.js`), you can initialize OVA automatically by adding the `data-auto-init` attribute to the script tag. No JavaScript required.

```html
<script src="ova.bundle.min.js" data-auto-init></script>
```

OVA will listen for the `DOMContentLoaded` event and initialize itself automatically.

## Manual initialization

For all other use cases, import `initOVA` and call it once the DOM is ready.

```js
import { initOVA } from "./ova.bundle.esm.js";

document.addEventListener("DOMContentLoaded", () => {
  initOVA();
});
```

:::tip
If you are using a framework like React, Vue or Svelte, use the appropriate lifecycle hook instead of `DOMContentLoaded`. See the [Installation](/installation/esm-bundle) section for framework-specific examples.
:::

## Customizing default settings

OVA comes with a set of default animation settings that are applied to all elements unless overridden via the `data-ova` attribute. You can change these defaults globally by modifying the `OVA_DEFAULT_SETTINGS` object **before** calling `initOVA()`.

```js
import { initOVA, OVA_DEFAULT_SETTINGS } from "./ova.bundle.esm.js";

OVA_DEFAULT_SETTINGS.animation = "fade-bottom";
OVA_DEFAULT_SETTINGS.duration = "600ms";
OVA_DEFAULT_SETTINGS.easing = "ease-in-out";
OVA_DEFAULT_SETTINGS.delay = "100ms";
OVA_DEFAULT_SETTINGS.offset = "50px";

initOVA();
```

The available properties are:

| Property    | Default           | Description                                   |
| ----------- | ----------------- | --------------------------------------------- |
| `animation` | `fade-in`         | Name of the animation to use                  |
| `duration`  | `1s`              | Duration of the animation                     |
| `easing`    | `ease-out`        | CSS easing function                           |
| `delay`     | `0`               | Delay before the animation starts             |
| `offset`    | `max(50vw, 50vh)` | Translation offset for directional animations |

## Customizing the observer

You can also configure the `IntersectionObserver` by modifying `OVA_OBSERVER_OPTIONS` before calling `initOVA()`.

```js
import { initOVA, OVA_OBSERVER_OPTIONS } from "./ova.bundle.esm.js";

OVA_OBSERVER_OPTIONS.rootMargin = "0px 0px -100px 0px";
OVA_OBSERVER_OPTIONS.threshold = 0.2;

initOVA();
```

| Property     | Default | Description                                                           |
| ------------ | ------- | --------------------------------------------------------------------- |
| `rootMargin` | `0px`   | Margin around the viewport used to trigger the observer               |
| `threshold`  | `0`     | Fraction of the element that must be visible to trigger the animation |
