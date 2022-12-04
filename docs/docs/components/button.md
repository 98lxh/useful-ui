# 按钮 Button


按钮用于开始一个即时操作。

## 按钮类型
::: demo
<template #title>
按钮类型
</template>

<template #desc>
按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
</template>

<template #source>
  <use-space>
    <use-button type="primary">Primary Button</use-button>
    <use-button>Default Button</use-button>
    <use-button type="dashed">Dashed Button</use-button>
    <use-button type="text">Text Button</use-button>
    <use-button type="link">Link Button</use-button>
  </use-space>
</template>

```html
<template>
  <use-space>
    <use-button type="primary">Primary Button</use-button>
    <use-button>Default Button</use-button>
    <use-button type="dashed">Dashed Button</use-button>
    <use-button type="text">Text Button</use-button>
    <use-button type="link">Link Button</use-button>
  </use-space>
</template>
```
:::

## 按钮尺寸
::: demo
<template #title>
按钮尺寸
</template>

<template #desc>
<p>按钮有大、中、小三种尺寸。</p>
<p>通过设置 size 为 large small 分别把按钮设为大、小尺寸。默认为 middle 中尺寸。</p>
</template>

<template #source>
    <use-space>
      <use-button type="primary" size="large">Large</use-button>
      <use-button type="primary" size="middle">Default</use-button>
      <use-button type="primary" size="small">Small</use-button>
    </use-space>
</template>

```html
<template>
  <use-space>
    <use-button type="primary" size="large">Large</use-button>
    <use-button type="primary" size="middle">Default</use-button>
    <use-button type="primary" size="small">Small</use-button>
  </use-space>
</template>
```
:::

## 危险按钮
::: demo
<template #title>
危险按钮
</template>

<template #desc>
添加 danger 属性即可让按钮处于危险状态。
</template>

<template #source>
    <use-space>
      <use-button type="primary" danger>Primary</use-button>
      <use-button danger>Default</use-button>
      <use-button type="dashed" danger>Dashed</use-button>
      <use-button type="text" danger>Text</use-button>
      <use-button type="link" danger>Link</use-button>
    </use-space>
</template>

```html
<template>
  <use-space>
    <use-button type="primary" size="large">Large</use-button>
    <use-button type="primary" size="middle">Middle</use-button>
    <use-button type="primary" size="small">Small</use-button>
  </use-space>
</template>
```
:::

## 幽灵按钮
::: demo
<template #title>
幽灵按钮
</template>

<template #desc>
幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
</template>

<template #source>
  <use-space style="background-color:#bec8c8;padding:20px 10px">
    <use-button type="primary" ghost>Primary</use-button>
    <use-button ghost>Default</use-button>
    <use-button type="dashed" ghost>Dashed</use-button>
    <use-button danger ghost>Danger</use-button>
  </use-space>
</template>

```html
<template>
  <use-space style="background-color:#bec8c8;padding:20px 10px">
    <use-button type="primary" ghost>Primary</use-button>
    <use-button ghost>Default</use-button>
    <use-button type="dashed" ghost>Dashed</use-button>
    <use-button danger ghost>Danger</use-button>
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
添加 disabled 属性即可让按钮处于禁用状态
</template>

<template #source>
  <use-space direction="vertical">
    <use-space>
      <use-button type="primary">Primary</use-button>
      <use-button type="primary" disabled>Primary(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button>Default</use-button>
      <use-button disabled>Default(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="dashed">Dashed</use-button>
      <use-button type="dashed" disabled>Dashed(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="text">Text</use-button>
      <use-button type="text" disabled>Text(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="link">Link</use-button>
      <use-button type="link" disabled>Link(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button danger>Danger Default</use-button>
      <use-button danger disabled>Danger Default(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="primary" danger>Danger Primary</use-button>
      <use-button type="primary" danger disabled>Danger Primary(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="text" danger>Danger Text</use-button>
      <use-button type="text" danger disabled>Danger Text(Disabled)</use-button>
    </use-space>
    <use-space style="background-color:#ccc;padding:20px 10px">
      <use-button ghost>Ghost</use-button>
      <use-button ghost disabled>Ghost(Disabled)</use-button>
    </use-space>
  </use-space>
</template>

```html
<template>
  <use-space direction="vertical">
    <use-space>
      <use-button type="primary">Primary</use-button>
      <use-button type="primary" disabled>Primary(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button>Default</use-button>
      <use-button disabled>Default(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="dashed">Dashed</use-button>
      <use-button type="dashed" disabled>Dashed(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="text">Text</use-button>
      <use-button type="text" disabled>Text(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="link">Link</use-button>
      <use-button type="link" disabled>Link(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button danger>Danger Default</use-button>
      <use-button danger disabled>Danger Default(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="primary" danger>Danger Primary</use-button>
      <use-button type="primary" danger disabled>Danger Primary(Disabled)</use-button>
    </use-space>
    <use-space>
      <use-button type="text" danger>Danger Text</use-button>
      <use-button type="text" danger disabled>Danger Text(Disabled)</use-button>
    </use-space>
    <use-space style="background-color:#ccc;padding:20px 10px">
      <use-button ghost>Ghost</use-button>
      <use-button ghost disabled>Ghost(Disabled)</use-button>
    </use-space>
  </use-space>
</template>
```
:::


## 按钮组合
::: demo
<template #title>
按钮组合
</template>

<template #desc>
可以把几个按钮结合成按钮组。
</template>

<template #source>
    <use-button-group>
      <use-button>User</use-button>
      <use-button>...</use-button>
    </use-button-group>
</template>

```html
<template>
  <use-button-group>
    <use-button>User</use-button>
    <use-button>...</use-button>
  </use-button-group>
</template>
```
:::

## 按钮形状
::: demo
<template #title>
按钮形状
</template>

<template #desc>
按钮拥有square round circle三种的形状,默认为square。
</template>

<template #source>
  <use-space direction="vertical">
    <use-space>
      <use-button>Default</use-button>
      <use-button shape="round">Round</use-button>
      <use-button shape="circle">C</use-button>
    </use-space>
    <use-space>
      <use-button type="primary">Primary Default</use-button>
      <use-button type="primary" shape="round">Primary Round</use-button>
      <use-button type="primary" shape="circle">C</use-button>
    </use-space>
    <use-space>
      <use-button type="primary" danger>Primary Danger Default</use-button>
      <use-button danger shape="round">Default Danger Round</use-button>
      <use-button danger shape="circle">C</use-button>
    </use-space>
  </use-space>
</template>

```html
<template>
  <use-space direction="vertical">
    <use-space>
      <use-button>Default</use-button>
      <use-button shape="round">Round</use-button>
      <use-button shape="circle">C</use-button>
    </use-space>
    <use-space>
      <use-button type="primary">Primary Default</use-button>
      <use-button type="primary" shape="round">Primary Round</use-button>
      <use-button type="primary" shape="circle">C</use-button>
    </use-space>
    <use-space>
      <use-button type="primary" danger>Primary Danger Default</use-button>
      <use-button danger shape="round">Default Danger Round</use-button>
      <use-button danger shape="circle">C</use-button>
    </use-space>
  </use-space>
</template>
```
:::
