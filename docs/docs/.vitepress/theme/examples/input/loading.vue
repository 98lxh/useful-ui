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
