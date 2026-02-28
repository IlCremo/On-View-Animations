---
id: custom
title: Custom Animations
sidebar_position: 2
---

# Custom Animations

OVA is designed to be extended. You can create your own animations with plain CSS and use them exactly like the built-in ones.

## How it works

When OVA initializes an element, it sets a set of CSS custom properties on it and adds the class `OVA-animation`. When the element enters the viewport, the class `in-view-OVA` is added, which triggers the animation defined in `--OVA-animation`.

The relevant CSS under the hood is:

```css
.OVA-animation.in-view-OVA {
  animation-name: var(--OVA-animation);
  animation-duration: var(--OVA-duration);
  animation-timing-function: var(--OVA-easing);
  animation-delay: var(--OVA-delay);
  animation-fill-mode: forwards;
}
```

To create a custom animation you need to:

1. Define a `@keyframes` rule with a name ending in `-OVA`
2. Reference it in the `data-ova` attribute **without** the `-OVA` suffix

## Example

Define the animation in your CSS file:

```css
@keyframes zoom-in-OVA {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
    visibility: visible;
  }
}
```

Then use it in your HTML:

```html
<div data-ova="animation: zoom-in; duration: 600ms; easing: ease-out;">
  Content
</div>
```

OVA will automatically append `-OVA` to the animation name and resolve it to the `zoom-in-OVA` keyframe.

:::warning
Always end your `@keyframes` name with `-OVA`. Without this suffix OVA will not be able to resolve the animation and the element will remain invisible.
:::

## Using CSS variables

Inside your `@keyframes` you can use the same CSS custom properties that OVA sets on each element. This lets you reuse the `offset` parameter to control movement distance, exactly like the built-in animations do.

```css
@keyframes fade-scale-top-OVA {
  from {
    opacity: 0;
    transform: translateY(calc(var(--OVA-offset) * -1)) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    visibility: visible;
  }
}
```

```html
<div data-ova="animation: fade-scale-top; duration: 800ms; offset: 40px;">
  Content
</div>
```

## Available CSS variables

These are the custom properties OVA sets on each animated element and that you can use inside your `@keyframes`:

| Variable          | Corresponds to        |
| ----------------- | --------------------- |
| `--OVA-animation` | `animation` parameter |
| `--OVA-duration`  | `duration` parameter  |
| `--OVA-easing`    | `easing` parameter    |
| `--OVA-delay`     | `delay` parameter     |
| `--OVA-offset`    | `offset` parameter    |
