import { h } from 'vue'
import { Demo } from './components'

import DefaultTheme from 'vitepress/theme'
import './style/vitepress.scss'

import UsefulUi from '@useful-ui/core'
import '@useful-ui/theme/index.scss'

import { AlertOutlined } from '@vicons/antd'
import { CodeButton } from './icons'

const components = [
  { name: 'demo', comp: Demo },
  { name: 'AlertOutlined', comp: AlertOutlined },
  { name: 'CodeButton', comp: CodeButton }
]

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.use(UsefulUi),
      components.forEach(({ name, comp }) => app.component(name, comp))
  }
}
