import replace from "rollup-plugin-replace";
import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
const terserOptions = require("../../../tools/terser-options.json");

export default {
  input: "build/main.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    replace({
      values: {
        DEBUG: false,
        TARGET: JSON.stringify("evergreen"),
      },
    }),
    nodeResolve(),
    terser(terserOptions),
  ],
};
