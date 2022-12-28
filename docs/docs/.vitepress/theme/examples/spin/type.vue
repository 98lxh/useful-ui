<script setup lang="ts">
import { useSpin, type SpinType } from '@useful-ui/core'

const { state } = useSpin({
  scale: '1.5',
  text: '加载中...'
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
