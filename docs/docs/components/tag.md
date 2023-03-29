# 标签 Tag

进行标记和分类的小标签。

## 基础用法
::: demo
<template #title>
基础用法
</template>

<template #desc>
它有不同的类型。
</template>

<template #source>
  <use-space size="5">
    <use-tag>这是</use-tag>
    <use-tag type="success">
      一些
    </use-tag>
    <use-tag type="warning">
      简单
    </use-tag>
    <use-tag type="danger">
      的示例
    </use-tag>
    <use-tag type="info">
      没词了
    </use-tag>
  </use-space>
</template>

```html
<template>
  <use-space size="5">
    <use-tag>这是</use-tag>
    <use-tag type="success">
      一些
    </use-tag>
    <use-tag type="warning">
      简单
    </use-tag>
    <use-tag type="danger">
      的示例
    </use-tag>
    <use-tag type="info">
      没词了
    </use-tag>
  </use-space>
</template>
```
:::


## 无边框的标签
::: demo
<template #title>
无边框的标签
</template>

<template #source>
  <use-space size="5">
    <use-tag :bordered="false">这是</use-tag>
    <use-tag type="success" :bordered="false">
      一些
    </use-tag>
    <use-tag type="warning" :bordered="false">
      没有
    </use-tag>
    <use-tag type="danger" :bordered="false">
      边框
    </use-tag>
    <use-tag type="info" :bordered="false">
      的示例
    </use-tag>
  </use-space>
</template>

```html
<template>
  <use-space size="5">
    <use-tag :bordered="false">这是</use-tag>
    <use-tag type="success" :bordered="false">
      一些
    </use-tag>
    <use-tag type="warning" :bordered="false">
      没有
    </use-tag>
    <use-tag type="danger" :bordered="false">
      边框
    </use-tag>
    <use-tag type="info" :bordered="false">
      的示例
    </use-tag>
  </use-space>
</template>
```
:::


## 可关闭的标签
::: demo
<template #title>
可关闭的标签
</template>

<template #source>
  <use-space size="5">
    <use-tag closable>这是</use-tag>
    <use-tag type="success" closable>
      一些
    </use-tag>
    <use-tag type="warning" closable>
      可以
    </use-tag>
    <use-tag type="danger" closable>
      关闭
    </use-tag>
    <use-tag type="info" closable>
      的示例
    </use-tag>
  </use-space>
</template>

```html
<template>
  <use-space size="5">
    <use-tag closable>这是</use-tag>
    <use-tag type="success" closable>
      一些
    </use-tag>
    <use-tag type="warning" closable>
      可以
    </use-tag>
    <use-tag type="danger" closable>
      关闭
    </use-tag>
    <use-tag type="info" closable>
      的示例
    </use-tag>
  </use-space>
</template>
```
:::
