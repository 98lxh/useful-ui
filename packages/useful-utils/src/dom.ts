export interface ViewportOffsetResult {
  left: number;
  top: number;
  right: number;
  bottom: number;
  rightIncludeBody: number;
  bottomIncludeBody: number;
}

export function getBoundingClientRect(element: Element): DOMRect | number {
  if (!element || !element.getBoundingClientRect) {
    return 0;
  }
  return element.getBoundingClientRect();
}

/** 
 * 获取当前元素的左侧和顶部偏移
 * left: 最左侧元素与文档左侧之间的距离
 * top: 从元素顶部到文档顶部的距离
 * right:元素最右侧到文档右侧的距离
 * bottom: 从元素底部到文档底部的距离
 * rightIncludeBody: 文档最左侧元素与右侧之间的距离
 * bottomIncludeBody: 从元素底部到文档底部的距离
 */
export function getViewportOffset(element: Element | DOMRect): ViewportOffsetResult {
  const doc = document.documentElement;
  const docScrollLeft = doc.scrollLeft;
  const docScrollTop = doc.scrollTop;
  const docClientLeft = doc.clientLeft;
  const docClientTop = doc.clientTop;
  const pageXOffset = window.pageXOffset;
  const pageYOffset = window.pageYOffset;
  const box = element instanceof Element ? getBoundingClientRect(element) : element;
  const { left: retLeft, top: rectTop, width: rectWidth, height: rectHeight } = box as DOMRect;
  const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0);
  const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0);
  const offsetLeft = retLeft + pageXOffset;
  const offsetTop = rectTop + pageYOffset;
  const left = offsetLeft - scrollLeft;
  const top = offsetTop - scrollTop;
  const clientWidth = window.document.documentElement.clientWidth;
  const clientHeight = window.document.documentElement.clientHeight;
  return {
    left: left,
    top: top,
    right: clientWidth - rectWidth - left,
    bottom: clientHeight - rectHeight - top,
    rightIncludeBody: clientWidth - left,
    bottomIncludeBody: clientHeight - top,
  };
}
