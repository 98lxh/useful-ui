# 弹出层  Overlay 

用于对元素添加 hover, click, focus 等事件，并且显示弹出层

## 基本使用

::: demo
<template #title>
基本使用
</template>

<template #source>
  <overlay-basic />
</template>

```html
<template>
  <use-overlay trigger="hover" placement="bottom">
    <template #trigger>
      <use-button>hover</use-button>
    </template>
    <div class="overlay-basic">
      overlay
    </div>
  </use-overlay>
</template>

<style scoped>
.overlay-basic {
  padding: 10px;
  width: 170px;
  background-color: var(--overlay-basic-background);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>

```
:::


## 触发方式

::: demo
<template #title>
触发方式
</template>

<template #source>
  <overlay-trigger />
</template>

<template #desc>
通过trigger属性设置触发方式,鼠标移入(hover)、聚集(focus)、点击(click)。
</template>

```html
<template>
  <use-space wrap :size="10">
    <use-overlay trigger="hover" placement="bottom">
      <template #trigger>
        <use-button>hover</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>
    <use-overlay trigger="click" placement="top">
      <template #trigger>
        <use-button>click</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>
    <use-overlay trigger="focus" placement="bottom-start">
      <template #trigger>
        <use-input readonly placeholder="focus" />
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>
  </use-space>
</template>

<style scoped>
.overlay-basic {
  padding: 10px;
  width: 170px;
  background-color: var(--overlay-basic-background);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>

```
:::

## 显示位置

::: demo
<template #title>
显示位置
</template>

<template #source>
  <overlay-placement />
</template>

```html
<template>
  <use-overlay trigger="hover" placement="bottom">
    <template #trigger>
      <use-button>hover</use-button>
    </template>
    <div class="overlay-basic">
      overlay
    </div>
  </use-overlay>
</template>

<style scoped>
.overlay-basic {
  padding: 10px;
  width: 170px;
  background-color: var(--overlay-basic-background);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>

```
:::

