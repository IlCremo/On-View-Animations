/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },
    {
      type: "category",
      label: "Installation",
      collapsed: false,
      items: [
        "installation/vanilla-js",
        "installation/esm-bundle",
        "installation/esm-standalone",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "getting-started/initialization",
        "getting-started/data-ova-attribute",
      ],
    },
    {
      type: "category",
      label: "Animations",
      collapsed: false,
      items: ["animations/built-in", "animations/custom"],
    },
    {
      type: "doc",
      id: "examples/index",
      label: "Examples",
    },
    {
      type: "doc",
      id: "api-reference/index",
      label: "API Reference",
    },
  ],
};

export default sidebars;
