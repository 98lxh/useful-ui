<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')

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
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input
      v-model:value="value"
      placeholder="warning"
      status="warning"
      loading
    />
    <use-input
      v-model:value="value"
      placeholder="error"
      status="error"
      loading
    />
  </use-space>
</template>
