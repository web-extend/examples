import { createApp } from "vue";
import type { ContentScriptConfig } from "web-extend";
import App from "./App.vue";
import inlineStyles from "./styles.css?inline";

(() => {
  let host = document.getElementById("web-extend-content");
  if (!host) {
    host = document.createElement("div");
    host.id = "web-extend-content";

    const shadow = host.attachShadow({ mode: "open" });

    const sheet = new CSSStyleSheet();
    sheet.replaceSync(inlineStyles);
    shadow.adoptedStyleSheets = [sheet];

    const root = document.createElement("div");
    createApp(App).mount(root);
    shadow.appendChild(root);

    document.body.appendChild(host);
  }
})();

// let root = document.getElementById('web-extend-content');
// if (!root) {
//   root = document.createElement('div');
//   root.id = 'web-extend-content';
//   document.body.appendChild(root);
//   createApp(App).mount(root);
// }

export const config: ContentScriptConfig = {
  matches: ["https://developer.mozilla.org/*"],
};
