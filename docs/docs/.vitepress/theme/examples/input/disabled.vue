<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-input v-model:value="value" disabled placeholder="禁用状态" />
</template>
