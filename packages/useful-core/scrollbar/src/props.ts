import { ExtractPropTypes, PropType } from 'vue'

export type ScrollbarMove = 'moveX' | 'moveY'

export type OnScrollFn = (scorllInfo: { scrollLeft: number, scrollTop: number }) => void

export const scrollbarProps = {
  height: {
    type: [String, Number]
  },
  maxHeight: {
    type: [String, Number]
  },
  naive: {
    type: Boolean
  },
  tag: {
    type: String
  },
  onScroll: {
    type: Function as PropType<OnScrollFn>
  }
}

export const scrollThumbProps = {
  height: {
    type: [String, Number]
  },
  width: {
    type: [String, Number]
  },
  viewHeight: {
    type: Number
  },
  viewWidth: {
    type: Number
  },
  thumbWidth: {
    type: Number
  },
  thumbHeight: {
    type: Number
  },
  maxHeight: {
    type: Number
  },
  retio: {
    type: Number
  },
  move: {
    type: String as PropType<ScrollbarMove>
  },
  onUpdateScrollViewTop: {
    type: Function
  },
  onUpdateScrollViewLeft: {
    type: Function
  },
  onUpdateDrawing: {
    type: Function
  }
}

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>
