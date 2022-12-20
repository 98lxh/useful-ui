<script setup lang="ts">
import { ref } from 'vue'
const value = ref('123456')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" type="password" />
    <use-input v-model:value="value" type="password" show-password />
  </use-space>
</template>
