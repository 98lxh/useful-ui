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
