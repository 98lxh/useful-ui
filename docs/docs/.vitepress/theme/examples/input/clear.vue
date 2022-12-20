<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" placeholder="可以清除" clearable />
    <use-input
      v-model:value="value"
      placeholder="可以清除"
      type="password"
      clearable
    />
  </use-space>
</template>
