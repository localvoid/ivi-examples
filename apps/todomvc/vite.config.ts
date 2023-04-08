import { defineConfig } from "vite";
import { ivi } from "@ivi/vite-plugin";

export default defineConfig({
  plugins: [ivi()],
  build: {
    modulePreload: false,
  },
});
