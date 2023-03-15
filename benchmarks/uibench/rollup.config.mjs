import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import { ivi } from "@ivi/rollup-plugin";

const TERSER_OPTIONS = {
  compress: {
    inline: 2,
    reduce_vars: false,
    passes: 5,
    booleans: false,
    comparisons: false,
    keep_infinity: true,
  },
  toplevel: true,
  mangle: true,
  module: true,
};

export default {
  input: "./src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    strict: true,
    sourcemap: true,
  },
  watch: {
    clearScreen: false,
  },
  plugins: [
    nodeResolve(),
    typescript(),
    ivi(),
    terser(TERSER_OPTIONS),
  ],
};
