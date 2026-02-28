/**
 * ============================================================================================
 *                                            INFO
 * ============================================================================================
 *
 *                                  ██████  ██    ██  █████
 *                                 ██    ██ ██    ██ ██   ██
 *                                 ██    ██ ██    ██ ███████
 *                                 ██    ██  ██  ██  ██   ██
 *                                  ██████    ████   ██   ██
 *
 *                                    (On View Animations)
 *
 * ■ Author: Andrea Cremonesi
 * ■ Version: 1.0
 * ■ Description: This JS file is part of a lightweight library called "OVA (On View Animations)".
 *                The code in this file handles animatable elements within the DOM that have the
 *                "data-ova" attribute, which can contain specific animation settings.
 *                During initialization, the correct animation parameters for each animatable
 *                element are set.
 *                The animations are controlled by an IntersectionObserver, which checks if an
 *                element is within the viewport before triggering its animation.
 *
 * ============================================================================================
 *                                            LICENSE
 * ============================================================================================
 *
 * ■ License: MIT License
 *
 * Copyright (c) 2026 Andrea Cremonesi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * ============================================================================================
 * ============================================================================================
 */

import "./style.css";

/**
 * OVA default animation settings. The user can modify them by importing this object.
 */
export const OVA_DEFAULT_SETTINGS = {
  animation: "fade-in",
  duration: "1s",
  easing: "ease-out",
  offset: "max(50vw, 50vh)",
  delay: "0",
};

/**
 * Default settings for the observer. The user can modify them by importing this object.
 */
export const OVA_OBSERVER_OPTIONS = {
  rootMargin: "0px",
  threshold: 0,
};

/**
 * This function must be called to initialize all OVA features once the DOM has loaded.
 */
export const initOVA = () => {
  const observer = new IntersectionObserver(callback, OVA_OBSERVER_OPTIONS);

  document.querySelectorAll("[data-ova]").forEach((element) => {
    initOVAElement(element);
    observer.observe(element);
  });
};

/**
 * Each time an element enters the viewport, the class "in-view-OVA" is added,
 * triggering the element's animation. The element is then removed from the
 * observer to prevent the animation from being repeated and also improving
 * the performance.
 *
 * @param {Array} entries
 */
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view-OVA");

      observer.unobserve(entry.target);
    }
  });
};

/**
 * This function is used to initialize the OVA animation values of the element
 * to be animated based on the data present in the "data-ova" attribute.
 *
 * @param {HTMLElement} element
 */
const initOVAElement = (element) => {
  element.classList.add("OVA-animation");
  extractDataOVA(element);
};

/**
 * Extracts the data contained in the data-ova attribute of an HTML element.
 * The data is mapped to its keys, and then the animation properties are set.
 *
 * @param {HTMLElement} element - The element from which to extract the OVA data
 */
const extractDataOVA = (element) => {
  const dataset = element?.dataset?.ova;
  const dataOVA = {};

  if (dataset) {
    try {
      const tokens = dataset.split(";");
      tokens.forEach((token) => {
        const data = token.trim().split(":");

        // add the data to the map only if both are not empty
        if (data[0] && data[1]) dataOVA[data[0].trim()] = data[1].trim();
      });
    } catch (ex) {
      console.error(ex);
    }
  }

  setProperties(element, dataOVA);
};

/**
 * For each field in OVA_DEFAULT_SETTINGS, it checks if the user has provided values
 * to override the default ones and sets the custom attributes for the animation of
 * the element to be animated.
 *
 * @param {HTMLElement}   element
 * @param {Object}        dataOVA
 */
const setProperties = (element, dataOVA) => {
  const properties = { ...OVA_DEFAULT_SETTINGS, ...dataOVA };
  properties.animation += "-OVA";

  Object.keys(properties).forEach((key) => {
    element.style.setProperty(`--OVA-${key}`, properties?.[key]);
  });
};

/**
 * Auto intialization for JS Vanilla by using data-auto-init attribute
 */
if (document.currentScript?.hasAttribute("data-auto-init")) {
  document.addEventListener("DOMContentLoaded", () => initOVA());
}
