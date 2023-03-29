import { computed, CSSProperties, defineComponent, h, nextTick, onMounted, onUnmounted, ref, shallowReactive, shallowRef, watch } from 'vue'
import { type ScrollbarProps, scrollbarProps, ScrollbarMove } from './props'
import Thumb, { ScrollThumbInstance } from './scroll-thumb'
import { useMergeProps } from '@useful-ui/hooks'

import {
  createNameSpace,
  createComponentName,
} from '@useful-ui/utils'

const defaultProps: ScrollbarProps = {
  naive: false,
  maxHeight: "",
  height: "",
  tag: 'div'
}

const bem = createNameSpace('scrollbar')

const Scrollbar = defineComponent({
  name: createComponentName('Scrollbar'),
  props: scrollbarProps,
  setup(componentProps, { slots, expose }) {
    const props = useMergeProps(componentProps, defaultProps)
    const scrollbarWrapRef = ref<HTMLDivElement | null>(null)
    const scrollbarViewRef = ref<HTMLDivElement | null>(null)
    const scrollThumbRef = ref<ScrollThumbInstance | null>(null)

    const move = computed<ScrollbarMove>(() => {
      const { height, maxHeight } = props.value
      return !height && !maxHeight ? 'moveX' : 'moveY'
    })

    const state = shallowReactive({
      maxHeight: Number(parseInt(props.value.maxHeight as string)),
      height: Number(parseInt(props.value.height as string)),
      width: 0,
      retio: 0,
      viewWidth: 0,
      viewHeight: 0,
      thumbWidth: 0,
      thumbHeight: 0,
      isDrawing: false,
      isCalculating: false
    })

    const heightStyle = computed<CSSProperties>(() => ({
      ...(state.height ? { height: state.height + 'px' } : {}),
      ...(state.maxHeight ? { 'max-height': state.maxHeight + 'px' } : {}),
    }))

    function updateScrollTop(top: number) {
      scrollThumbRef.value?.handleDrawScrollValue(top, 'moveY')
      state.isDrawing = false
    }

    function updateScrollLeft(left: number) {
      scrollThumbRef.value?.handleDrawScrollValue(left, 'moveX')
      state.isDrawing = false
    }

    /* 更新滚动条的thumb **/
    function updateScrollThumb() {
      const { onScroll } = props.value
      const sTop = move.value === 'moveX' ?
        Number(scrollbarWrapRef.value!.scrollLeft.toFixed(5)) :
        Number(scrollbarWrapRef.value!.scrollTop.toFixed(5))

      move.value === 'moveX' ?
        scrollThumbRef.value?.updateScrollTop(sTop) :
        scrollThumbRef.value?.updateScrollTop(sTop)

      onScroll && onScroll({
        scrollTop: scrollbarWrapRef.value!.scrollTop,
        scrollLeft: scrollbarWrapRef.value!.scrollLeft
      })
    }

    /* 更新当前的滚动视口top **/
    const updateScrollViewTop = (top: number) => scrollbarWrapRef.value!.scrollTop = top
    /* 更新当前的滚动视口left **/
    const updateScrollViewLeft = (left: number) => scrollbarWrapRef.value!.scrollLeft = left
    /* 更新当前drawing状态 **/
    const onUpdateDrawing = (isDrawing) => state.isDrawing = isDrawing

    /* 重新计算高度 **/
    function recalculateHeight() {
      state.isCalculating = true
      state.width = scrollbarViewRef.value!.offsetWidth
      /* 视口内容宽度 **/
      state.viewWidth = scrollbarViewRef.value!.scrollWidth
      /* 视口内容高度 **/
      state.viewHeight = scrollbarViewRef.value!.offsetHeight

      /* 计算是否到到达maxHeight **/
      if (state.maxHeight) {
        if (state.viewHeight >= state.maxHeight) state.height = state.maxHeight
        else {
          state.height = 0
          state.thumbHeight = 0
        }
      }


      /* thumb高度 **/
      state.thumbHeight = Number(Number.prototype.toFixed.call((state.height * state.height) / state.viewHeight, 0))
      //TODO: miniSize
      /* thumb宽度 **/
      state.thumbWidth = Number(Number.prototype.toFixed.call((state.width * state.width) / state.viewWidth, 0))
      /* 滚动条空白区域范围占比 **/
      state.retio = 1 - (move.value === 'moveX' ?
        Number(Number.prototype.toFixed.call(state.thumbWidth / state.width, 2)) :
        Number(Number.prototype.toFixed.call(state.thumbHeight / state.height, 2)))

      state.isCalculating = false
    }

    /* 监听传入的内容发生变化 **/
    watch(() => props.value.height, height => {
      //TODO: noresize
      state.height = Number(parseInt(height as string))
      recalculateHeight()
      updateScrollThumb()
    })
    watch(() => props.value.maxHeight, maxHeight => {
      //TODO: noresize
      state.maxHeight = Number(parseInt(maxHeight as string))
      state.height = Number(parseInt(props.value.height as string)) || 0
      recalculateHeight()
      updateScrollThumb()
    })

    /* 监听slot内容 **/
    let observer: MutationObserver | null = null
    onMounted(() => {
      recalculateHeight()
      scrollbarWrapRef.value?.addEventListener('scroll', updateScrollThumb)
      /* 监听slot内容 **/
      observer = new MutationObserver(callback)

      function callback() {
        //TODO: noresize
        recalculateHeight()
        updateScrollThumb()
      }

      nextTick(() => {
        observer!.observe(scrollbarViewRef.value!, {
          childList: true, //子节点变化(增删改查)
          characterData: true // 节点的内容/文字 变化
        })
      })
    })

    onUnmounted(() => {
      scrollbarWrapRef.value?.removeEventListener('scroll', updateScrollThumb)
      observer?.disconnect()
    })

    expose({
      updateScrollTop,
      updateScrollLeft
    })

    return () => {
      const { thumbHeight, thumbWidth, viewWidth, viewHeight, width, retio, maxHeight, height } = state

      return (
        <div class={bem.b()}>
          <div ref={scrollbarWrapRef} class={bem.e('wrap')} style={heightStyle.value}>
            <div ref={scrollbarViewRef} class={bem.e('view')}>
              {slots.default && slots.default()}
            </div>
          </div>
          <Thumb
            ref={scrollThumbRef}
            onUpdateDrawing={onUpdateDrawing}
            onUpdateScrollViewTop={updateScrollViewTop}
            onUpdateScrollViewLeft={updateScrollViewLeft}
            maxHeight={maxHeight}
            thumbHeight={thumbHeight}
            thumbWidth={thumbWidth}
            viewHeight={viewHeight}
            viewWidth={viewWidth}
            move={move.value}
            height={height}
            width={width}
            retio={retio}
          />
        </div>
      )
    }
  }
})

export default Scrollbar
