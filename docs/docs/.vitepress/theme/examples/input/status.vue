<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" status="warning" placeholder="警告" />
    <use-input v-model:value="value" status="error" placeholder="错误" />
  </use-space>
</template>
