import replace from "@rollup/plugin-replace";
import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
const terserOptions = require("../../../tools/terser-options.json");

export default {
  input: "build/main.js",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    useStrict: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.IVI_TARGET": JSON.stringify("browser"),
    }),
    nodeResolve(),
    terser(terserOptions),
  ],
};
