import { ExtractPropTypes, PropType } from 'vue'

type InputType = 'text' | 'password' | 'textarea'

type OnUpdateModelValue = (value?: string | number) => void

export const inputProps = {
  /**
   * 输入框类型
   */
  type: {
    type: String as PropType<InputType>
  },
  /**
   * 输出框默认展示内容
   */
  placeholder: {
    type: String
  },
  /**
   * 双向绑定的数据
   */
  modelValue: {
    type: [String, Number] as PropType<string | number>
  },
  /**
   * 标签内容
   */
  label: {
    type: String
  },
  /**
   * 是否可以清空输入框
   */
  clearable: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  },
  /**
   * 是否明文展示密码
   */
  showPassword: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  },
  /**
   * 是否只读
   */
  readonly: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  },
  /**
   * 是否禁用
   */
  disabled: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  },

  /**
   * 更新双向绑定数据的方法
   */
  ['onUpdate:modelValue']: {
    type: Function as PropType<OnUpdateModelValue>
  },
  /**
   * 清空文本框内容后回调的方法
   */
  onClear: {
    type: Function as PropType<() => void>
  },
  /**
   * 原生input事件
   */
  onInput: {
    type: Function as PropType<(value?: string) => void>
  },
  /**
   * 原生change事件
   */
  onChange: {
    type: Function as PropType<(value?: string) => void>
  },
  /**
   * 原生change事件
   */
  onFocus: {
    type: Function as PropType<(event?: FocusEvent) => void>
  },
  /**
   * 原生blur事件
   */
  onBlur: {
    type: Function as PropType<(event?: FocusEvent) => void>
  }
}

export type InputProps = ExtractPropTypes<typeof inputProps>
