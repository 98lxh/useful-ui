<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" size="small" placeholder="小" />
    <use-input v-model:value="value" placeholder="中" />
    <use-input v-model:value="value" size="large" placeholder="大" />
  </use-space>
</template>
