import { computed, defineComponent, nextTick, onMounted, onUnmounted, ref, shallowReactive, shallowRef, watch } from 'vue'
import { ScrollbarMove, scrollThumbProps } from './props'

import {
  className,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const bem = createNameSpace('scrollbar-thumb')

const ScrollThumb = defineComponent({
  name: createComponentName('ScrollbarThumb'),
  props: scrollThumbProps,
  setup(props, { expose }) {
    const height = shallowRef(parseInt(props.height as string))
    const width = shallowRef(parseInt(props.width as string))
    const scrollbarThumbRef = ref<HTMLDivElement | any>({})
    const scrollbarRef = ref<HTMLDivElement | null>(null)

    const state = shallowReactive({
      scrollTop: 0,
      scrollLeft: 0,
      thumbMaxTop: 0,
      isDrawing: false,
      isCalculating: false
    })

    const classes = computed(() => className(
      bem.b(),
      bem.is('hidden', isHidden.value),
      bem.is('display', state.isDrawing),
      bem.is('horizontal', props.move === 'moveX'),
      bem.is('vertical', props.move === 'moveY')
    ))


    const scrollbarStyle = computed(() => {
      const { height, width, move } = props
      return ({
        ...move === "moveX" ? { width: width + 'px' } : { height: height + 'px' }
      })
    })

    const scrollbarThumbStyle = computed(() => {
      const { move, thumbHeight, thumbWidth } = props
      const { scrollLeft, scrollTop } = state
      return ({
        ...move === 'moveX' ?
          { width: thumbWidth + 'px', left: scrollLeft + 'px' } :
          { height: thumbHeight + 'px', top: scrollTop + 'px' }
      })
    })

    const isHidden = computed(() => {
      const { height, viewWidth, maxHeight } = props
      return viewWidth ?
        !height && !maxHeight && viewWidth <= width.value :
        !props.height && !props.maxHeight
    })

    /* 更新滚动条top值 **/
    function updateScrollTop(top: number) {
      const scrollHeight = props.viewHeight! - height.value
      const value = (top * height.value * props.retio!) / scrollHeight
      state.scrollTop = value
    }

    /* 更新滚动条left值 **/
    function updateScrollLeft(left: number) {
      const scrollWidth = props.viewWidth! - width.value
      const value = (left * width.value * props.retio!) / scrollWidth
      //TODO:解决滚轮可以滚动到底，拉动滚动条没法到底，一直留有10px边距
      state.scrollLeft = value
    }

    /* 根据top更新视图的滚动位置 **/
    function updateTopToViewTop(top: number) {
      const viewTop = Number((top * props.viewHeight!) / height.value).toFixed(5)
      //TODO:解决滚轮可以滚动到底，拉动滚动条没法到底，一直留有10px边距
      props.onUpdateScrollViewTop && props.onUpdateScrollViewTop(viewTop)
    }

    /* 根据left值更新视图的滚动位置 **/
    function updateLeftToViewLeft(left: number) {
      const viewLeft = Number((left * props.viewWidth!) / width.value).toFixed(5)
      props.onUpdateScrollViewLeft && props.onUpdateScrollViewLeft(viewLeft)
    }

    function handleDrawScrollValue(value: number, move: ScrollbarMove) {
      const vY = value

      if (value <= 0) {
        value = 0
      }

      //TODO:解决滚轮可以滚动到底，拉动滚动条没法到底，一直留有10px边距
      move === "moveX" ? state.scrollLeft = value : state.scrollTop = value
      state.isDrawing = true;
      props.onUpdateDrawing && props.onUpdateDrawing(state.isDrawing)
      move === "moveX" ? updateLeftToViewLeft(vY) : updateTopToViewTop(value)
    }

    /* 设置拖拽滚动条的thumb事件 **/
    function updateDrawScrollThumb(dom: HTMLDivElement, move: ScrollbarMove) {
      dom.onmousedown = function (evt: MouseEvent) {
        const pTop = move === 'moveX' ? evt.pageX - dom.offsetLeft : evt.pageY - dom.offsetTop
        //TODO:节流
        document.onmousemove = function (evt: MouseEvent) {
          const y = move === 'moveX' ? evt.pageX - pTop : evt.pageY - pTop
          handleDrawScrollValue(y, move === 'moveX' ? 'moveX' : 'moveY')
          return false
        }

        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouseup = null
          document.onmousedown = null
          nextTick(() => {
            state.isDrawing = false
            props.onUpdateDrawing && props.onUpdateDrawing(state.isDrawing)
          })
          return false
        }
        return false
      }
    }

    /* 重新计算高度 **/
    function recalculateHeight() {
      if (state.isCalculating) return
      state.isCalculating = true
      width.value = Number(parseInt(props.width as string))
      height.value = Number(parseInt(props.height as string))

      nextTick(() => {
        state.thumbMaxTop = props.move === 'moveX' ?
          width.value - scrollbarThumbRef.value.offsetWidth :
          height.value - scrollbarThumbRef.value.offsetHeight
      })

      state.isCalculating = false
    }

    /* 传入高度和view高度发生变化重新计算滚动距离 **/
    watch(() => [props.height, props.viewWidth],
      function () {
        //TODO:noresize
        recalculateHeight()
      }
    )

    onMounted(() => {
      const move = props.move === 'moveX' ? 'moveX' : 'moveY'
      updateDrawScrollThumb(scrollbarThumbRef.value!, move)
      recalculateHeight()
    })

    onUnmounted(() => {
      if (!scrollbarThumbRef.value) return;
      scrollbarThumbRef.value!.onmousedown = null
    })

    expose({
      handleDrawScrollValue,
      updateScrollLeft,
      updateScrollTop
    })

    return () => {
      return (
        <div ref={scrollbarRef} class={classes.value} style={scrollbarStyle.value}>
          <div ref={scrollbarThumbRef} class={bem.e('bar')} style={scrollbarThumbStyle.value} />
        </div>
      )
    }
  }
})

export interface ScrollThumbInstance extends InstanceType<typeof ScrollThumb> {
  handleDrawScrollValue: (value: number, move: ScrollbarMove) => void,
  updateScrollTop: (top: number) => void,
  updateScrollLeft: (left: number) => void,
}

export default ScrollThumb
