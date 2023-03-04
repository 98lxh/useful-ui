import { Comment, createTextVNode, Fragment, VNode, VNodeChild } from 'vue'

export function flatten(
  vnodes: VNodeChild[] = [],
  filterCommentNode = true,
  result: VNode[] = []
) {
  for (const vnode of vnodes) {
    if (typeof vnode === null) return null

    if (typeof vnode !== 'object') {
      if (typeof vnode === 'string' || typeof vnode === 'number') {
        result.push(createTextVNode(String(vnode)))
      }
      return
    }

    if (Array.isArray(vnode)) {
      flatten(vnode, filterCommentNode, result)
      return
    }

    if (vnode?.type === Fragment) {
      if (vnode.children === null) return null
      if (Array.isArray(vnode.children)) {
        flatten(vnode.children, filterCommentNode, result)
      }
    } else if (vnode?.type !== Comment) {
      result.push(vnode!)
    }
  }

  return result
}
