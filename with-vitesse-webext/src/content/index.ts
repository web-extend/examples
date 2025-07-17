/* eslint-disable no-console */
import { onMessage } from 'webext-bridge/content-script'
import { createApp } from 'vue'
import styles from './style.css?inline'
import App from './views/App.vue'
import { setupApp } from '~/logic/common-setup'

(() => {
// Firefox `browser.tabs.executeScript()` requires scripts return a primitive value
  console.info('[vitesse-webext] Hello world from content script')

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
  })

  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const root = document.createElement('div')
  const shadowDOM = container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container

  // use shadow dom to avoid style leak
  const sheet = new CSSStyleSheet()
  sheet.replaceSync(styles)
  shadowDOM.adoptedStyleSheets = [sheet]

  shadowDOM.appendChild(root)

  document.body.appendChild(container)
  const app = createApp(App)
  setupApp(app)
  app.mount(root)
})()
