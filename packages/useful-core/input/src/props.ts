import { ExtractPropTypes, PropType } from 'vue'
import { type SpinType } from '@useful-ui/core/spin'
import Input from '.'

type InputType = 'text' | 'password' | 'textarea'
type InputSize = 'small' | 'middle' | 'large'
type InputStatus = 'error' | 'warning'
type OnUpdateModelValue = (value?: string | number) => void
type RenderTagFn = () => ChildNode | JSX.Element | null

export const inputProps = {
  /**
   * 输入框类型
   */
  type: {
    type: String as PropType<InputType>
  },
  /**
   * 输入框尺寸
  */
  size: {
    type: String as PropType<InputSize>
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
  value: {
    type: [String, Number] as PropType<string | number>
  },
  /**
   * 标签内容
   */
  label: {
    type: String
  },
  status: {
    type: String as PropType<InputStatus>
  },
  /**
   * 最大长度
   */
  maxLength: {
    type: Number
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
   * 是否显示字数
   */
  showCount: {
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
   * 是否加载中
   */
  loading: {
    type: Boolean as PropType<boolean | undefined>,
    default: () => undefined
  },
  /**
   * 加载图标类型
   */
  loadingType: {
    type: String as PropType<SpinType>
  },

  /**
   * 更新双向绑定数据的方法
   */
  ['onUpdate:value']: {
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
  },
  renderTag:{
    type:Function as PropType<RenderTagFn>
  },
  inputStyle:{
    type:Object
  }
}

export type InputProps = ExtractPropTypes<typeof inputProps>

export interface InputInstance extends InstanceType<typeof Input> {
  getInput: () => HTMLInputElement,
  focus: (event?: FocusEvent) => void,
  blur: (event?: FocusEvent) => void
}
