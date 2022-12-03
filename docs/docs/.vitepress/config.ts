import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { mdPlugin } from './config/plugins'

const config = defineConfig({
  title: 'Useful UI',
  lastUpdated: true,

  themeConfig: {
    lastUpdatedText: '最后更新时间',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/vitepress-template'
      }
    ],
    nav,
    sidebar
  },
  markdown: {
    config: md => mdPlugin(md)
  }
})

export default config
