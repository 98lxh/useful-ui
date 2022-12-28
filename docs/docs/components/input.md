# 输入框 Input 

useful-ui 推荐使用 xicons 作为图标库。

## 基本使用
::: demo
<template #title>
基本使用
</template>

<template #desc>
输入框的基本用法
</template>

<template #source>
  <InputBasic />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
</script>

<template>
  <use-input v-model:value="value" placeholder="一个简单的用例" />
</template>
```
:::

## 尺寸
::: demo
<template #title>
尺寸
</template>

<template #source>
  <InputSize />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" size="small" placeholder="小" />
    <use-input v-model:value="value" placeholder="中" />
    <use-input v-model:value="value" size="large" placeholder="大" />
  </use-space>
</template>
```
:::


## 前缀&后缀
::: demo
<template #title>
前缀&后缀
</template>

<template #desc>
在前缀后缀添加内容。
</template>

<template #source>
  <InputPrefixOrSuffix />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { AlertOutlined } from '@vicons/antd'

const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" placeholder="前缀">
      <template #prefix>
        <use-icon>
          <AlertOutlined />
        </use-icon>
      </template>
    </use-input>

    <use-input v-model:value="value" placeholder="后缀">
      <template #suffix>
        <use-icon>
          <AlertOutlined />
        </use-icon>
      </template>
    </use-input>

    <use-input v-model:value="value" placeholder="前缀和后缀">
      <template #prefix> ￥ </template>
      <template #suffix> 元 </template>
    </use-input>
  </use-space>
</template>
```
:::

## 加载状态
::: demo
<template #title>
加载状态
</template>

<template #desc>
输入框的加载状态,你也通过改变 loading-type 属性设置加载的图标。
</template>

<template #source>
  <InputLoading />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

const types = [
  'waves',
  'corners',
  'border',
  'points',
  'square',
  'circles',
  'square-rotate',
  'scale'
] as const
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" loading placeholder="一个默认的加载状态" />

    <use-input
      v-for="loadingType in types"
      :key="loadingType"
      v-model:value="value"
      :loading-type="loadingType"
      :placeholder="loadingType"
      loading
    />
  </use-space>
</template>
```
:::



## 验证状态
::: demo
<template #title>
验证状态
</template>

<template #desc>
使用 status 为 Input 添加状态，可选 error 或者 warning。
</template>

<template #source>
  <InputStatus />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" status="warning" placeholder="警告" />
    <use-input v-model:value="value" status="error" placeholder="错误" />
  </use-space>
</template>
```
:::

## 密码框
::: demo
<template #title>
密码框
</template>

<template #desc>
使用 status 为 Input 添加状态，可选 error 或者 warning。
</template>

<template #source>
  <InputPassword />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" status="warning" placeholder="警告" />
    <use-input v-model:value="value" status="error" placeholder="错误" />
  </use-space>
</template>
```
:::

## 可清除
::: demo
<template #title>
可清除
</template>

<template #desc>
使用 status 为 Input 添加状态，可选 error 或者 warning。
</template>

<template #source>
  <InputClear />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" status="warning" placeholder="警告" />
    <use-input v-model:value="value" status="error" placeholder="错误" />
  </use-space>
</template>
```
:::

## 字数限制
::: demo
<template #title>
字数限制
</template>

<template #desc>
使用 status 为 Input 添加状态，可选 error 或者 warning。
</template>

<template #source>
  <InputMaxLength />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" status="warning" placeholder="警告" />
    <use-input v-model:value="value" status="error" placeholder="错误" />
  </use-space>
</template>
```
:::

## 禁用状态
::: demo
<template #title>
禁用状态
</template>

<template #desc>
使用 status 为 Input 添加状态，可选 error 或者 warning。
</template>

<template #source>
  <InputDisabled />
</template>

```vue
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" status="warning" placeholder="警告" />
    <use-input v-model:value="value" status="error" placeholder="错误" />
  </use-space>
</template>
```
:::



