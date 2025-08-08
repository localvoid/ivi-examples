import { defineConfig } from "rolldown";
import { ivi } from "@ivi/rolldown";
import { oveo } from "@oveo/rolldown";

export default defineConfig({
  input: "./src/index.ts",
  output: {
    file: "./dist/bundle.js",
    format: "es",
    sourcemap: true,
    minify: true,
  },
  optimization: {
    inlineConst: true,
  },
  watch: {
    clearScreen: false,
  },
  plugins: [
    ivi({
      oveo: true,
    }),
    oveo({
      hoist: true,
      dedupe: true,
    }),
  ],
});
