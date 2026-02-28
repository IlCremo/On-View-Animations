---
id: index
title: API Reference
---

# API Reference

OVA exposes three public exports that you can import from the ESM builds.

:::info
The Vanilla JS bundle (`ova.bundle.min.js`) does not require imports. `initOVA` is available globally as `window.initOVA`, while `OVA_DEFAULT_SETTINGS` and `OVA_OBSERVER_OPTIONS` are not directly accessible. Use the ESM builds if you need to customize these objects.
:::

## `initOVA()`

Initializes the library. Queries all elements in the DOM with a `data-ova` attribute, sets up their animation properties, and starts observing them with an `IntersectionObserver`.

Must be called once the DOM is fully loaded.

```js
import { initOVA } from "./ova.bundle.esm.js";

document.addEventListener("DOMContentLoaded", () => {
  initOVA();
});
```

:::warning
Calling `initOVA()` before the DOM is ready will result in no elements being observed. Always call it inside `DOMContentLoaded` or the equivalent lifecycle hook of your framework.
:::

---

## `OVA_DEFAULT_SETTINGS`

An object containing the default animation settings applied to all elements. Override its properties before calling `initOVA()` to change the defaults globally.

```js
import { initOVA, OVA_DEFAULT_SETTINGS } from "./ova.bundle.esm.js";

OVA_DEFAULT_SETTINGS.animation = "fade-bottom";
OVA_DEFAULT_SETTINGS.duration = "600ms";
OVA_DEFAULT_SETTINGS.easing = "ease-in-out";
OVA_DEFAULT_SETTINGS.delay = "100ms";
OVA_DEFAULT_SETTINGS.offset = "60px";

initOVA();
```

### Properties

| Property    | Type     | Default           | Description                                   |
| ----------- | -------- | ----------------- | --------------------------------------------- |
| `animation` | `string` | `fade-in`         | Name of the animation to play                 |
| `duration`  | `string` | `1s`              | Duration of the animation                     |
| `easing`    | `string` | `ease-out`        | CSS easing function                           |
| `delay`     | `string` | `0`               | Delay before the animation starts             |
| `offset`    | `string` | `max(50vw, 50vh)` | Translation offset for directional animations |

---

## `OVA_OBSERVER_OPTIONS`

An object containing the configuration for the `IntersectionObserver`. Override its properties before calling `initOVA()` to change when animations are triggered.

```js
import { initOVA, OVA_OBSERVER_OPTIONS } from "./ova.bundle.esm.js";

OVA_OBSERVER_OPTIONS.rootMargin = "0px 0px -100px 0px";
OVA_OBSERVER_OPTIONS.threshold = 0.2;

initOVA();
```

### Properties

| Property     | Type     | Default | Description                                                                                        |
| ------------ | -------- | ------- | -------------------------------------------------------------------------------------------------- |
| `rootMargin` | `string` | `0px`   | Margin around the viewport used to trigger the observer. Follows the CSS `margin` shorthand syntax |
| `threshold`  | `number` | `0`     | Fraction of the element visible before the animation triggers. Accepts values between `0` and `1`  |
