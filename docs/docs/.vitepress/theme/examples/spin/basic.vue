<script setup lang="ts">
import { useSpin } from '@useful-ui/core'

const { state } = useSpin()

function handleSpinning() {
  state.visible = true
  setTimeout(() => (state.visible = false), 2000)
}
</script>

<template>
  <use-button @click="handleSpinning">打开一个普普通通的Spin</use-button>
</template>
