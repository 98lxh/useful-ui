import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style/vitepress.scss'

import UsefulUi from '@useful-ui/core'
import '@useful-ui/theme/index.scss'

import components from './components'
import examples from './examples'

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.use(UsefulUi)
    components.forEach(({ name, comp }) => app.component(name, comp))
    examples.forEach(({ name, comp }) => app.component(name, comp))
  }
}
