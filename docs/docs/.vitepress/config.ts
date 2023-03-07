import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { mdPlugin } from './config/plugins'

const config = defineConfig({
  title: 'Useful UI',
  lastUpdated: true,
  // rel="icon" type="image/svg+xml" href="/logo.png"
  head: [
    ['link', { rel: "icon", type: "image/svg+xml", href: '/logo.png' }],
  ],

  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar
  },
  markdown: {
    config: md => mdPlugin(md)
  }
})

export default config
