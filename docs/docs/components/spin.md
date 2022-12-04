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
import { useSpin } from '@useful-ui/core'

const { state } = useSpin()

function handleSpinning() {
  state.visible = true
  setTimeout(() => (state.visible = false), 1000)
}
</script>

<template>
  <use-button @click="handleSpinning">Open Fullscreen Spin</use-button>
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
import { useSpin } from '@useful-ui/core'

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
      >点击向目标元素怼进一个spin</use-button
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
import { useSpin } from '@useful-ui/core'

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
      >点击向目标元素怼进一个带文字的spin</use-button
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
import { useSpin, type SpinType } from '@useful-ui/core'

const { state } = useSpin({
  scale: '1.5'
})

function handleSpinning(type: SpinType) {
  state.type = type
  state.visible = true
  setTimeout(() => (state.visible = false), 1000)
}
</script>

<template>
  <use-space :size="20" wrap>
    <div class="target" @click="() => handleSpinning('default')">
      <UseSpin visible target text="default" />
    </div>
    <div class="target" @click="() => handleSpinning('waves')">
      <UseSpin visible target type="waves" text="waves" />
    </div>
    <div class="target" @click="() => handleSpinning('corners')">
      <UseSpin visible target type="corners" text="corners" />
    </div>
    <div class="target" @click="() => handleSpinning('border')">
      <UseSpin visible target type="border" text="border" />
    </div>
    <div class="target" @click="() => handleSpinning('points')">
      <UseSpin visible target type="points" text="points" />
    </div>
    <div class="target" @click="() => handleSpinning('square')">
      <UseSpin visible target type="square" text="square" />
    </div>
    <div class="target" @click="() => handleSpinning('circles')">
      <UseSpin visible target type="circles" text="circles" />
    </div>
    <div class="target" @click="() => handleSpinning('rectangle')">
      <UseSpin visible target type="circles" text="rectangle" />
    </div>
    <div class="target" @click="() => handleSpinning('square-rotate')">
      <UseSpin visible target type="square-rotate" text="square-rotate" />
    </div>
    <div class="target" @click="() => handleSpinning('scale')">
      <UseSpin visible target type="scale" text="scale" />
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
