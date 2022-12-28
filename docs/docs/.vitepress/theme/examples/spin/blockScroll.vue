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
