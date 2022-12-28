import Spin, { SpinType, type SpinProps } from '@useful-ui/core/spin'
import { createNameSpace } from '@useful-ui/utils'

import {
  ref,
  Ref,
  watch,
  VNode,
  render,
  reactive,
  nextTick,
  onMounted,
  onUnmounted,
  createVNode
} from 'vue'

type SpinInstance = VNode<any, any, SpinProps> & {
  onDisplay: () => void
  onHidden: () => void
  changeType: (type: SpinType) => void
}

type SpinOptions = SpinProps & {
  mountToWindow?: boolean
  blockScroll?: boolean
}

type SpinState = {
  type?: SpinType
  visible?: boolean
}

const containerClass = createNameSpace('spin').b('container')
const targetClass = createNameSpace('spin').b('target')

function useSpin(options: SpinOptions = {}) {
  const { mountToWindow, blockScroll, ...props } = options
  const isSpinning = ref<boolean>(!!props.visible)
  const spin = ref<SpinInstance | null>(null)
  const target = ref<HTMLElement | null>(null)
  let container: HTMLDivElement | null = null
  let _overflowBackup: string | null = null

  const state = reactive<SpinState>({
    visible: props.visible,
    type: props.type
  })

  function createSpinInstance() {
    props.document = false
    props.target = !!target.value
    const vnode = createVNode(Spin, props)
    spin.value = vnode as SpinInstance
    spin.value.changeType = changeType
    spin.value.onDisplay = () => changeVisible(true)
    spin.value.onHidden = () => changeVisible(false)
    if (mountToWindow) (window as any).$spin = spin.value
  }

  function createContainer() {
    const container = document.createElement('div')
    container.className = containerClass
    return container
  }

  function getTargetNode() {
    const _target: any = target.value ? target.value : document.body
    const _targetNode = _target.$el ? _target.$el : _target
    return _targetNode
  }

  function setTargetClassName(targetNode: HTMLElement, type: 'add' | 'remove') {
    const { tagName, classList } = targetNode
    if (tagName.toUpperCase() === 'BODY') return

    const hasTargetClass = classList.contains(targetClass)
    if (hasTargetClass && type === 'remove') {
      classList.remove(targetClass)
      return
    }

    if (!hasTargetClass && type === 'add') {
      classList.add(targetClass)
    }
  }

  function setTargetScrollbar(targetNode: HTMLElement, type: 'setup' | 'backup') {
    if (!blockScroll) return null;
    const origin = targetNode.style.overflow
    if (type === 'setup') _overflowBackup = origin
    const current = type === 'setup' ? 'hidden' : _overflowBackup
    targetNode.style.overflow = current!;
  }

  function mountToTarget() {
    if (!spin.value) return
    container = createContainer()
    const targetNode = getTargetNode()
    setTargetClassName(targetNode, 'add')
    setTargetScrollbar(targetNode, 'setup')
    targetNode.appendChild(container)
    render(spin.value, container)
  }

  function initialization() {
    createSpinInstance()
    const { onDisplay, onHidden } = spin.value!
    state.visible ? onDisplay : onHidden()
  }

  const destroyed = () => {
    if (!spin.value || !container) return
    const targetNode = getTargetNode();
    setTargetClassName(targetNode, 'remove')
    setTargetScrollbar(targetNode, 'backup');
    render(null, container)
    nextTick(() => container!.remove())
  }

  function changeVisible(visible: boolean) {
    if (!spin.value) return
    isSpinning.value = visible
    visible ? mountToTarget() : destroyed()
    const component = spin.value.component
    const _setState = component?.exposed?.setState
    _setState && _setState('visible', visible)
  }

  function changeType(type: SpinType) {
    if (!spin.value) return
    const component = spin.value.component
    const _setState = component?.exposed?.setState
    _setState && _setState('type', type)
  }

  onMounted(() => initialization())
  onUnmounted(() => destroyed())

  watch(
    () => state,
    ({ type, visible }) => {
      changeVisible(visible || false)
      changeType(type || 'default')
    },
    {
      deep: true
    }
  )

  return {
    state,
    target,
    spin: spin as Ref<SpinInstance>
  }
}

export default useSpin
