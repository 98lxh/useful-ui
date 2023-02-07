let target: HTMLDivElement | null = null;
let zIndex = 1000;

function createOverlayTarget() {
  target = document.createElement('div')
  target.style.position = 'absolute'
  target.style.width = '100%'
  target.style.top = '0px'
  target.style.left = '0px'
  document.body.append(target)
  return target
}

export const getOverlayTarget = () => ({
  target: target ? target : createOverlayTarget(),
  incrementHierarchy: () => ++zIndex,
  getHierarchy: () => zIndex
})
