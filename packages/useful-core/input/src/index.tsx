import { computed, defineComponent, ref, getCurrentInstance, Fragment } from 'vue'
import { HiddenPassword, DisplayPassword, ClearSharp } from '@useful-ui/icons'
import { useMergeProps } from '@useful-ui/hooks'
import { InputProps, inputProps } from './props'
import Spin from '@useful-ui/core/spin'
import Icon from '@useful-ui/core/icon'

import {
  className,
  createNameSpace,
  createComponentName
} from '@useful-ui/utils'

const bem = createNameSpace('input')

const defaultProps: InputProps = {
  value: '',
  type: 'text',
  placeholder: ''
}

const Input = defineComponent({
  name: createComponentName('Input'),
  props: inputProps,
  setup(componetProps, { slots, expose }) {
    const props = useMergeProps(componetProps, defaultProps)
    const showPasswordRef = ref(componetProps.showPassword)
    const innerInputRef = ref<HTMLInputElement | null>(null)
    const wrapperRef = ref<HTMLDivElement | null>(null)
    const focusedRef = ref(false)

    const state = computed(() => {
      const { disabled, readonly } = props.value;
      const { tags } = slots

      return {
        disabled,
        readonly,
        isRenderTag: !!tags
      }
    })

    const classes = computed(() => {
      const { size, status } = props.value
      const { disabled, readonly } = state.value;
      return className(
        bem.b(),
        bem.m(size),
        bem.is(status!, status),
        bem.is('focus', focusedRef.value),
        bem.is('disabled', disabled),
        bem.is('readonly', readonly)
      )
    })

    function onFocus(event: FocusEvent) {
      const { onFocus, disabled } = props.value
      if (disabled) return null
      onFocus && onFocus(event)
      focusedRef.value = true;
    }

    function onBlur(event: FocusEvent) {
      const { onBlur } = props.value
      onBlur && onBlur(event)
      focusedRef.value = false
    }

    const vm = getCurrentInstance();
    function handleInput(event: Event) {
      const {
        onInput,
        maxLength: _maxLength,
        ['onUpdate:value']: onUpdateValue
      } = props.value

      const { disabled, readonly } = state.value;
      const targetValue = (event.target as HTMLInputElement).value
      const length = targetValue.length
      const maxLength = _maxLength && _maxLength + 1
      const isMaxLength = maxLength ? length >= maxLength : false

      if (disabled || readonly || isMaxLength) {
        vm?.proxy?.$forceUpdate();
        return null
      }

      onUpdateValue && onUpdateValue(targetValue)
      onInput && onInput(targetValue)
    }

    function handleClear() {
      const { onClear, 'onUpdate:value': onUpdateValue } = props.value
      const { disabled, readonly } = state.value;
      if (disabled || readonly) return null
      onUpdateValue && onUpdateValue('')
      onClear && onClear()
    }

    function renderPrefix() {
      const customPrefix = slots.prefix
      if (!customPrefix) return null
      return <div class={bem.e('prefix')}>{customPrefix && customPrefix()}</div>
    }

    function togglePassword() {
      const { disabled, readonly } = state.value
      if (disabled || readonly) return null
      showPasswordRef.value = !showPasswordRef.value
    }

    function focus() {
      const { isRenderTag } = state.value
      isRenderTag ? wrapperRef.value?.focus() : innerInputRef.value?.focus();
      focusedRef.value = true;
    }

    function blur() {
      const { isRenderTag } = state.value
      isRenderTag ? wrapperRef.value?.blur() : innerInputRef.value?.blur();
      focusedRef.value = false;
    }

    function renderPasswordSuffix() {
      return (
        <Icon onClick={togglePassword}>
          {showPasswordRef.value ? <DisplayPassword /> : <HiddenPassword />}
        </Icon>
      )
    }

    function renderClearSuffix() {
      const { value } = props.value
      if (!value) return null
      return (
        <Icon class={bem.b('clear')} onClick={handleClear}>
          <ClearSharp />
        </Icon>
      )
    }

    function renderCounterSuffix() {
      const { maxLength, value } = props.value
      const length = String(value).length
      const innerText = maxLength ? `${length} / ${maxLength}` : length
      return <p class={bem.b('counter')}>{innerText}</p>
    }

    function renderLoadingSuffix() {
      const { loadingType, status } = props.value
      return (
        <Spin target visible status={status} type={loadingType} scale="0.35" />
      )
    }

    function renderSuffix() {
      const customSuffix = slots.suffix
      const { type, loading, clearable, showCount } = props.value
      const isPassword = type === 'password' && !clearable
      const isCounter = showCount

      const opitons = [isPassword, loading, customSuffix, clearable, isCounter]
      const isRender = opitons.some(state => !!state)
      if (!isRender) return null

      return (
        <div class={bem.e('suffix')}>
          {clearable && renderClearSuffix()}
          {isCounter && renderCounterSuffix()}
          {customSuffix && customSuffix()}
          {loading && renderLoadingSuffix()}
          {isPassword && renderPasswordSuffix()}
        </div>
      )
    }

    function renderInput() {
      const { placeholder, value, type: _type, renderTag ,inputStyle} = props.value
      const isPassword = _type === 'password' && showPasswordRef.value
      const type = isPassword ? 'text' : _type
      const basicProps = {
        type,
        value,
        class: bem.e('input-el'),
        ...(!renderTag ? {
          onInput: handleInput,
          onFocus,
          onBlur
        } : {})
      }

      return (
        <div class={bem.e('input')} style={{...(inputStyle ? inputStyle : {})}}>
          {renderTag ? renderTag() : (<input ref={innerInputRef} {...basicProps} />)}
          < div class={bem.e('placeholder')} >
            {!value && <span>{placeholder}</span>}
          </div >
        </div >
      )
    }

    expose({
      getInput: () => innerInputRef.value,
      onFocus,
      onblur,
      focus,
      blur
    })

    return () => {
      const { renderTag } = props.value
      return (
        <div class={classes.value} ref={wrapperRef} {
          ...renderTag ? {
            tabindex: -1,
            onFocus,
            onBlur
          } : {}
        }>
          <div class={bem.b('wrapper')}>
            {renderPrefix()}
            {renderInput()}
            {renderSuffix()}
          </div>
          <div class={bem.e('border')}></div>
          <div class={bem.e('state')}></div>
        </div>
      )
    }
  }
})

export default Input
