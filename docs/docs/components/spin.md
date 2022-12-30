# 加载 Spin

用于页面和区块的加载中状态。

## 基本使用

::: demo
<template #title>
基本使用
</template>

<template #desc>
一个简单的全屏loading状态。
</template>

<template #source>
 <spin-basic></spin-basic>
</template>

```html
<script setup lang="ts">
import { useSpin } from 'useful-ui'

const { state } = useSpin()

function handleSpinning() {
  state.visible = true
  setTimeout(() => (state.visible = false), 1000)
}
</script>

<template>
  <use-button @click="handleSpinning">打开一个普普通通的Spin</use-button>
</template>
```
:::


## 目标元素

::: demo
<template #title>
目标元素
</template>

<template #desc>
将 Spin 挂载到目标元素
</template>

<template #source>
 <spin-target></spin-target>
</template>

```html
<script setup lang="ts">
import { useSpin } from 'useful-ui'

const { state, target } = useSpin({
  type: 'waves'
})

function handleSpinning() {
  state.visible = true
  setTimeout(() => (state.visible = false), 1000)
}
</script>

<template>
  <use-space direction="vertical" fill :size="20">
    <div class="target" ref="target">这是目标元素</div>
    <use-button
      :loading="state.visible"
      loading-type="waves"
      @click="handleSpinning"
      >目标元素里整一个Spin</use-button
    >
  </use-space>
</template>

<style scoped>
.target {
  width: 100%;
  line-height: 80px;
  padding-left: 10px;
  background-color: rgba(26, 92, 255, 0.3);
  border: 1px solid rgb(26, 92, 255);
  font-size: 14px;
  border-radius: 5px;
}
</style>
```
:::


## 文字信息

::: demo
<template #title>
文字信息
</template>

<template #desc>
你可以在加载图标的下面放一点文字信息。
</template>

<template #source>
 <spin-text></spin-text>
</template>

```html
<script setup lang="ts">
import { useSpin } from 'useful-ui'

const { state, target } = useSpin({
  scale:'0.95',
  type: 'corners',
  text: '介写点嘛呢...'
})

function handleSpinning() {
  state.visible = true
  setTimeout(() => (state.visible = false), 1000)
}
</script>

<template>
  <use-space direction="vertical" fill :size="20">
    <div class="target" ref="target">这里目标元素</div>
    <use-button
      :loading="state.visible"
      loading-type="corners"
      @click="handleSpinning"
      >目标元素里整一个带文字的Spin</use-button
    >
  </use-space>
</template>

<style scoped>
.target {
  width: 100%;
  line-height: 80px;
  padding-left: 10px;
  background-color: rgba(26, 92, 255, 0.3);
  border: 1px solid rgb(26, 92, 255);
  font-size: 14px;
  border-radius: 5px;
}
</style>
```
:::

## 禁止滚动

::: demo
<template #title>
加载中禁止目标元素滚动
</template>

<template #desc>
禁止滚动
</template>

<template #source>
 <spin-block-scroll></spin-block-scroll>
</template>

```html
<script setup lang="ts">
import { useSpin } from '@useful-ui/core'

const { state } = useSpin({
  blockScroll: true
})

function handleSpinning() {
  state.visible = true
  setTimeout(() => (state.visible = false), 2000)
}
</script>

<template>
  <use-button @click="handleSpinning">禁止滚动</use-button>
</template>
```
:::


## 加载类型

::: demo
<template #title>
加载类型
</template>

<template #desc>
加载类型
</template>

<template #source>
 <spin-type></spin-type>
</template>

```html
<script setup lang="ts">
import { useSpin, type SpinType } from 'useful-ui'

const { state } = useSpin({
  scale: '1.5'
})

const types = [
  'default',
  'waves',
  'corners',
  'border',
  'points',
  'square',
  'circles',
  'square-rotate',
  'scale'
] as const

function handleSpinning(type: SpinType) {
  state.type = type
  state.visible = true
  setTimeout(() => (state.visible = false), 2000)
}
</script>

<template>
  <use-space :size="20" wrap>
    <div
      class="target"
      v-for="type in types"
      :key="type"
      @click="() => handleSpinning(type)"
    >
      <UseSpin visible target :text="type" :type="type" />
    </div>
  </use-space>
</template>

<style scoped>
.target {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 10px;
}
</style>
```
:::
