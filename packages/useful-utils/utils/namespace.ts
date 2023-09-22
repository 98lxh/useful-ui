function _bem(
  prefixName: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string
) {
  if (blockSuffix) prefixName += `-${blockSuffix}`
  if (element) prefixName += `__${element}`
  if (modifier) prefixName += `--${modifier}`
  return prefixName
}

function createBEM(prefixName: string) {
  const b = (blockSuffix = '') => _bem(prefixName, blockSuffix)

  const e = (element = '') =>
    element ? _bem(prefixName, '', element) : element
  const m = (modifier = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : ''

  const be = (blockSuffix = '', element = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element) : ''

  const bm = (blockSuffix = '', modifier = '') =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : ''

  const em = (element = '', modifier = '') =>
    element && modifier ? _bem(prefixName, '', element, modifier) : ''

  const bem = (blockSuffix = '', element = '', modifier = '') =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : ''

  const is = (name: string, state: any) => (state ? `is-${name}` : '')
  return { b, e, m, be, bm, em, bem, is }
}

function createNameSpace(name: string) {
  const prefixName = `use-${name}`
  return createBEM(prefixName)
}

function createComponentName(name: string) {
  const componentName = `Use${name}`
  return componentName
}

export { createNameSpace, createComponentName }
