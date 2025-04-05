import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  action: {
    default_icon: {
      16: "./src/assets/logo.png",
      48: "./src/assets/logo.png",
      128: "./src/assets/logo.png",
    },
    default_popup: "src/popup/main.tsx",
  },
  content_scripts: [
    {
      js: ["src/content/main.js"],
      matches: ["https://*/*"],
    },
  ],
});
