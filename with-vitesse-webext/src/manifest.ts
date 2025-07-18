function getManifest() {
  const manifest = {
    permissions: ['tabs', 'storage', 'activeTab'],
    host_permissions: ['*://*/*'],
  }
  return manifest
}

export default getManifest()
