import { resolve } from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginWebExtend } from "@web-extend/rsbuild-plugin";
import manifest from "./manifest.config";

export default defineConfig({
  resolve: {
    alias: {
      "@": `${resolve(__dirname, "src")}`,
    },
  },
  plugins: [
    pluginReact(),
    pluginWebExtend({
      manifest,
    }),
  ],
  dev: {
    liveReload: false,
  },
  server: {
    cors: {
      origin: "*",
    },
  },
});
