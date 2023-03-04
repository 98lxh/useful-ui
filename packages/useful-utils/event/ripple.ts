import { createNameSpace } from '../utils/namespace'

export interface RippleOptions {
  name?: string
  color?: string
  duration?: number
}

const bem = createNameSpace('ripples')

function calculationPosition(event: MouseEvent) {
  const { layerX, layerY } = event as any
  return { x: layerX, y: layerY }
}

function createRipples({ x, y }: ReturnType<typeof calculationPosition>) {
  const ripples = document.createElement('span')
  ripples.style.left = x + 'px'
  ripples.style.top = y + 'px'
  return ripples
}

function createRipplesEffect(event: MouseEvent, target: HTMLElement, _options: RippleOptions) {
  const { name, color, duration = 700 } = _options

  if (!target || !(target instanceof HTMLElement)) {
    return
  }

  const ripples = createRipples(calculationPosition(event))

  ripples.className = bem.b(name)

  if (color) ripples.style.background = color

  target.appendChild(ripples)

  setTimeout((): void => {
    ripples.remove()
  }, duration)
}

export default createRipplesEffect
