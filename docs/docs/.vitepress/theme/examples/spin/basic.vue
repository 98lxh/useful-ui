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
