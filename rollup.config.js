import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import path from "node:path";

const terserConfig = {
  compress: { drop_console: true },
};

const entry = "src/index.js";
const outputFolder = "dist";

export default [
  // Vanilla JS — bundle completo con CSS injected
  {
    input: entry,
    output: {
      file: `${outputFolder}/ova.bundle.min.js`,
      format: "iife",
      name: "window",
      extend: true,
    },
    plugins: [
      resolve(),
      postcss({ inject: true, minimize: true }),
      terser(terserConfig),
    ],
  },

  // Framework (React/Vue/Svelte) — ESM + CSS estratto separatamente
  {
    input: entry,
    output: {
      file: `${outputFolder}/ova.esm.js`,
      format: "esm",
    },
    plugins: [
      resolve(),
      postcss({
        extract: path.resolve(`${outputFolder}/ova.css`), // ← CSS come file separato
        minimize: true,
      }),
      terser(terserConfig),
    ],
  },
  // Framework — Bundle ESM + CSS auto-iniettato
  {
    input: entry,
    output: {
      file: `${outputFolder}/ova.bundle.esm.js`,
      format: "esm",
    },
    plugins: [
      resolve(),
      postcss({
        inject: (cssVariableName) =>
          `import styleInject from 'style-inject';styleInject(${cssVariableName});`,
        minimize: true,
      }),
      terser(terserConfig),
    ],
  },
];
