---
id: built-in
title: Built-in Animations
sidebar_position: 1
---

# Built-in Animations

OVA includes a set of ready-to-use animations divided into two categories: **fade** and **slide**. Use them by setting the `animation` parameter in the `data-ova` attribute.

## Fade animations

Fade animations combine an opacity transition with an optional directional movement.

| Name          | Description                                               |
| ------------- | --------------------------------------------------------- |
| `fade-in`     | Fades in from transparent to visible, no movement         |
| `fade-top`    | Fades in while moving from top to its natural position    |
| `fade-right`  | Fades in while moving from right to its natural position  |
| `fade-bottom` | Fades in while moving from bottom to its natural position |
| `fade-left`   | Fades in while moving from left to its natural position   |

```html
<div data-ova="animation: fade-in;">Content</div>
<div data-ova="animation: fade-top;">Content</div>
<div data-ova="animation: fade-right;">Content</div>
<div data-ova="animation: fade-bottom;">Content</div>
<div data-ova="animation: fade-left;">Content</div>
```

## Slide animations

Slide animations move the element into position. Unlike fade animations, they do not all include an opacity transition.

| Name           | Description                       |
| -------------- | --------------------------------- |
| `slide-top`    | Slides in from above with a fade  |
| `slide-right`  | Slides in from the right, no fade |
| `slide-bottom` | Slides in from below with a fade  |
| `slide-left`   | Slides in from the left, no fade  |

```html
<div data-ova="animation: slide-top;">Content</div>
<div data-ova="animation: slide-right;">Content</div>
<div data-ova="animation: slide-bottom;">Content</div>
<div data-ova="animation: slide-left;">Content</div>
```

## Controlling the offset

For all directional animations, the `offset` parameter controls the distance the element travels before reaching its final position.

```html
<!-- Short travel distance -->
<div data-ova="animation: fade-top; offset: 20px;">Content</div>

<!-- Long travel distance -->
<div data-ova="animation: fade-top; offset: 120px;">Content</div>
```

:::info
The default value for `offset` is `max(50vw, 50vh)`, which adapts to the viewport size. For most use cases a fixed pixel value like `40px` or `80px` gives more predictable results.
:::
