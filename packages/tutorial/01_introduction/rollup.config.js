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
        "__IVI_DEBUG__": false,
        "__IVI_TARGET__": JSON.stringify("evergreen"),
      },
    }),
    nodeResolve(),
    terser(terserOptions),
  ],
};
