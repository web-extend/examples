import type { Manifest } from "webextension-polyfill";

function getManifest() {
  const manifest: Partial<Manifest.WebExtensionManifest> = {
    permissions: ["tabs", "storage", "activeTab"],
    host_permissions: ["*://*/*"],
  };
  return manifest;
}

export default getManifest();
