# 弹出层  Overlay 

用于对元素添加 hover, click, focus 等事件，并且显示弹出层

## 基础用法

::: demo
<template #title>
基础用法
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
  <div :style="{position: 'relative', width: '440px', height: '280px'}">
    <use-overlay trigger="hover" placement="top-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'0',left:'70px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        TOP START
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="top">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'0',left:'180px'}">TOP</use-button>
      </template>
      <div class="overlay-basic">
        TOP
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="top-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'0',left:'290px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        TOP END
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="bottom-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'240px',left:'70px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        BOTTOM START
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="bottom">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'240px',left:'180px'}">BOTTOM</use-button>
      </template>
      <div class="overlay-basic">
        BOTTOM
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="bottom-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'240px',left:'290px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        BOTTOM END
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="left-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'60px',left:'10px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        LEFT START
      </div>
    </use-overlay>
    <use-overlay trigger="hover" placement="left">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'120px',left:'10px'}">LEFT</use-button>
      </template>
      <div class="overlay-basic">
        LEFT
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="left-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'180px',left:'10px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        LEFT END
      </div>
    </use-overlay>
    <use-overlay trigger="hover" placement="right-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'60px',left:'350px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        RIGHT START
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="right">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'120px',left:'350px'}">RIGHT</use-button>
      </template>
      <div class="overlay-basic">
        RIGHT
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="right-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'180px',left:'350px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        RIGHT END
      </div>
    </use-overlay>
  </div>
</template>

<style scoped>
.button{
  width: 100px;
}

.overlay-basic {
  padding: 80px;
  background-color: var(--overlay-basic-background);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  text-align: center;
}
</style>
```
:::

## 多层嵌套

::: demo
<template #title>
多层嵌套
</template>

<template #source>
  <overlay-nestification />
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

