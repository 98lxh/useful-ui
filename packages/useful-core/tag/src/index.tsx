import { computed, defineComponent, shallowRef, Transition } from 'vue'
import { useMergeProps } from '@useful-ui/hooks'
import { type TagProps, tagProps } from './props'
import { ClearSharp } from '@useful-ui/icons'
import { Button } from '../../button'
import Icon from '../../icon'


import {
  flatten,
  className,
  createNameSpace,
  createComponentName,
} from '@useful-ui/utils'

const defaultProps: TagProps = {
  size: 'middle',
  type: 'default',
  disabled: false,
  closable: false,
  bordered: true,
  round: false
}

const bem = createNameSpace('tag')

const Tag = defineComponent({
  name: createComponentName('Tag'),
  props: tagProps,
  setup(componetProps, { slots }) {
    const props = useMergeProps(componetProps, defaultProps)
    const visible = shallowRef(true)

    const classes = computed(() => {
      const { size, type, disabled, bordered, round } = props.value
      return className(
        bem.b(),
        bem.m(type),
        bem.m(size),
        bem.is('disabled', disabled),
        bem.is('bordered', bordered),
        bem.is('round', round)
      )
    })

    function onClose(event?:MouseEvent){
      onUpdateVisible(false)
      props.value.onClose && props.value.onClose(event)
    }

    function onUpdateVisible(value: boolean) {
      const { disabled } = props.value
      if (disabled) return null
      visible.value = value
    }

    function renderCloseButton() {
      if (!props.value.closable) {
        return null
      }
      return (
        <Button
          size={props.value.size}
          onClick={(event) => onClose(event)}
          type='text'
          v-slots={{
            icon: () => (<Icon><ClearSharp /></Icon>)
          }} />
      )
    }


    return () => {
      return (
        <Transition name='bottom-start'>
          {visible.value && (
            <div class={classes.value}>
              {slots.default && slots.default()}
              {renderCloseButton()}
            </div>
          )}
        </Transition>
      )
    }
  }
})

export default Tag
