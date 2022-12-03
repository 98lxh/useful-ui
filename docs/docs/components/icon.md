# 图标 Icon 

useful-ui 推荐使用 xicons 作为图标库。

## 基本使用

::: demo
<template #title>
基本使用
</template>

<template #source>
<use-icon :size="30">
  <AlertOutlined />
</use-icon>
<use-icon :size="30" color="#0e7a0d">
  <AlertOutlined />
</use-icon>
</template>

```html
<template>
  <use-icon :size="24">
    <AlertOutlined />
  </use-icon>
  <use-icon :size="24" color="#0e7a0d">
    <AlertOutlined />
  </use-icon>
</template>

<script setup lang="ts">
import { AlertOutlined } from '@vicons/antd'
</script>
```
:::

## 自定义SVG图标

::: demo
<template #title>
自定义SVG图标
</template>

<template #desc>
将自定义 SVG 放入图标。（确保设定了 SVG 的 viewBox 属性）
</template>

<template #source>
<use-icon :size="30">
  <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69 153.99L256 263.99M256 263.99L443 153.99M256 263.99V463.99M448 341.37V170.61C447.993 165.021 446.523 159.531 443.735 154.687C440.947 149.843 436.939 145.814 432.11 143L280.11 54.54C272.787 50.2765 264.464 48.0303 255.99 48.0303C247.516 48.0303 239.193 50.2765 231.87 54.54L79.89 143C75.0609 145.814 71.053 149.843 68.2652 154.687C65.4773 159.531 64.0068 165.021 64 170.61V341.37C64.0033 346.962 65.4722 352.456 68.2602 357.304C71.0482 362.152 75.058 366.185 79.89 369L231.89 457.46C239.215 461.718 247.537 463.96 256.01 463.96C264.483 463.96 272.805 461.718 280.13 457.46L432.13 369C436.958 366.182 440.964 362.148 443.748 357.301C446.533 352.453 447.999 346.96 448 341.37Z" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</use-icon>
</template>

```html
<template>
  <use-icon :size="30" color="#0e7a0d">
   <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M69 153.99L256 263.99M256 263.99L443 153.99M256 263.99V463.99M448 341.37V170.61C447.993 165.021 446.523 159.531 443.735 154.687C440.947 149.843 436.939 145.814 432.11 143L280.11 54.54C272.787 50.2765 264.464 48.0303 255.99 48.0303C247.516 48.0303 239.193 50.2765 231.87 54.54L79.89 143C75.0609 145.814 71.053 149.843 68.2652 154.687C65.4773 159.531 64.0068 165.021 64 170.61V341.37C64.0033 346.962 65.4722 352.456 68.2602 357.304C71.0482 362.152 75.058 366.185 79.89 369L231.89 457.46C239.215 461.718 247.537 463.96 256.01 463.96C264.483 463.96 272.805 461.718 280.13 457.46L432.13 369C436.958 366.182 440.964 362.148 443.748 357.301C446.533 352.453 447.999 346.96 448 341.37Z" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"></path></svg>
  </use-icon>
</template>
```
:::


## Button Attributes
<h2>Button Attributes</h2>

| 属性名  | 类型            | 默认值   | 说明     | 
| ----- | --------------- | -------- | -------- |
| size  | `number\string` | `undefined` | 图标尺寸 |
| color | `string`         | `undefined` | 图标颜色 |
