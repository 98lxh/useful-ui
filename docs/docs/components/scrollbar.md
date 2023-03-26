# 滚动条 Scrollbar

用于替换浏览器原生滚动条。

## 基本使用
::: demo
<template #title>
基本使用
</template>

<template #desc>
通过 height 属性设置滚动条高度，若不设置则根据父容器高度自适应。
</template>

<template #source>
  <scrollbar-basic />
</template>

```html

```
:::


## 横向滚动
::: demo
<template #title>
横向滚动
</template>

<template #desc>
显示横向滚动条不可设置 height 和 max-height，当元素宽度大于滚动条宽度时，会显示横向滚动条。
</template>

<template #source>
  <scrollbar-horizontal />
</template>

```html

```
:::
