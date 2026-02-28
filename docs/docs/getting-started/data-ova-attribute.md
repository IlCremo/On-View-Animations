---
id: data-ova-attribute
title: The data-ova Attribute
sidebar_position: 2
---

# The data-ova Attribute

OVA is controlled entirely through the `data-ova` attribute. Add it to any HTML element you want to animate, and OVA will handle the rest when that element enters the viewport.

## Syntax

The attribute accepts a semicolon-separated list of `key: value` pairs:

```html
<div data-ova="key: value; key: value;">Content</div>
```

Each pair overrides the corresponding default setting for that specific element. Any property you omit will fall back to the value defined in `OVA_DEFAULT_SETTINGS`.

## Parameters

| Parameter   | Type     | Default           | Description                                   |
| ----------- | -------- | ----------------- | --------------------------------------------- |
| `animation` | `string` | `fade-in`         | Name of the animation to play                 |
| `duration`  | `string` | `1s`              | Duration of the animation                     |
| `easing`    | `string` | `ease-out`        | CSS easing function                           |
| `delay`     | `string` | `0`               | Delay before the animation starts             |
| `offset`    | `string` | `max(50vw, 50vh)` | Translation offset for directional animations |

## Examples

**Default animation** — no parameters needed, uses all defaults:

```html
<div data-ova="">Content</div>
```

**Custom animation and duration:**

```html
<div data-ova="animation: fade-top; duration: 800ms;">Content</div>
```

**With delay:**

```html
<div data-ova="animation: fade-left; duration: 600ms; delay: 300ms;">
  Content
</div>
```

**Full override:**

```html
<div
  data-ova="animation: fade-bottom; duration: 1.2s; easing: ease-in-out; delay: 200ms; offset: 80px;"
>
  Content
</div>
```

:::tip
The `offset` parameter controls how far the element travels before reaching its final position. It only has a visual effect on directional animations like `fade-top`, `fade-left`, `slide-bottom`, etc. It has no effect on `fade-in`.
:::
