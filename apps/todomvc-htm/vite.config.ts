import { defineConfig } from "vite";
import { ivi } from "@ivi/vite-plugin";
import { oveo } from "@oveo/vite";

export default defineConfig({
  plugins: [
    ivi({ oveo: true }),
    oveo({
      hoist: true,
      dedupe: true,
      externs: {
        import: ["ivi/oveo.json"],
      },
      globals: {
        include: ["js", "web"],
        hoist: true,
      },
    }),
  ],
  build: {
    modulePreload: false,
    minify: true,
  },
});
