import { App } from 'vue'
import { version } from './package.json'

import * as components from './components'

function install(app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
  })

  return app
}

export default { install, version }
