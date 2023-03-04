import { Plugin } from 'vue'

export type WithInstall<T> = T & Plugin

export function withInstall<T>(comp: T) {
  const _comp = comp as WithInstall<T>
  _comp.install = function (app) {
    const { name } = _comp as unknown as { name: string }
    app.component(name, _comp)
  }

  return _comp
}
