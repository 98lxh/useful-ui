import { computed } from 'vue'

/**
 *  @description 合并组件传入props和默认props
 *  @param componentProps 组件传入props
 *  @param defaultProps 组件默认props
 *  @return 合并后的props
 */

function useMergeProps<PropsType>(
  componentProps: PropsType,
  defaultProps: Partial<PropsType>
) {
  const _defaultProps = computed(() => ({ ...defaultProps, ...componentProps }))

  const props = computed(() => {
    const mergeProps = {} as PropsType
    for (const propName in _defaultProps.value) {
      if (mergeProps[propName] === undefined) {
        mergeProps[propName] = _defaultProps.value[propName]
      }
    }

    return mergeProps
  })

  return props
}

export default useMergeProps
