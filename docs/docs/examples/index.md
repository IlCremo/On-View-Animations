---
id: index
title: Examples
---

# Examples

Here are some practical examples of OVA in action, based on common use cases.

## Basic usage

The simplest way to use OVA is to add `data-ova` with no parameters. The element will fade in using all default settings.

```html
<div data-ova="">
  <h1>Hello World</h1>
</div>
```

## Directional fade

Animate an element sliding in from a specific direction while fading in.

```html
<!-- From top -->
<div data-ova="animation: fade-top; duration: 1000ms;">
  <h1>Hello World</h1>
</div>

<!-- From bottom -->
<div data-ova="animation: fade-bottom; duration: 1000ms;">
  <h1>Hello World</h1>
</div>
```

## Staggered animations

Animate multiple elements in sequence by incrementing the `delay` on each one. This creates a natural staggered effect.

```html
<div data-ova="animation: fade-bottom; duration: 600ms; delay: 0ms;">First</div>
<div data-ova="animation: fade-bottom; duration: 600ms; delay: 150ms;">
  Second
</div>
<div data-ova="animation: fade-bottom; duration: 600ms; delay: 300ms;">
  Third
</div>
<div data-ova="animation: fade-bottom; duration: 600ms; delay: 450ms;">
  Fourth
</div>
```

## Side by side elements

Animate two elements placed side by side, each coming in from its respective side.

```html
<div style="display: flex;">
  <div style="width: 50%;" data-ova="animation: fade-left; duration: 1000ms;">
    <p>Left content</p>
  </div>
  <div style="width: 50%;" data-ova="animation: fade-right; duration: 1000ms;">
    <p>Right content</p>
  </div>
</div>
```

## Delayed animation with custom offset

Control both when the animation starts and how far the element travels.

```html
<div
  data-ova="animation: fade-top; duration: 1000ms; offset: 50px; delay: 500ms;"
>
  <p>This element waits 500ms before animating and travels 50px.</p>
</div>
```

## Custom animation

Use a custom `@keyframes` animation alongside the built-in OVA parameters.

First define the animation in your CSS:

```css
@keyframes zoom-in-OVA {
  from {
    opacity: 0;
    transform: scale(0.85);
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
<div data-ova="animation: zoom-in; duration: 700ms; easing: ease-out;">
  <p>This element zooms in when it enters the viewport.</p>
</div>
```
