import { Plugin } from 'vue'

export type WithInstall<T> = T & Plugin

function withInstall<T>(comp: T) {
  const _comp = comp as WithInstall<T>
  // eslint-disable-next-line @typescript-eslint/no-extra-semi
  _comp.install = function (app) {
    const { name } = _comp as unknown as { name: string }
    console.log(name)
    app.component(name, _comp)
  }

  return _comp
}

export default withInstall
