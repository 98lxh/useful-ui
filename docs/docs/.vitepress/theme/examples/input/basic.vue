<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <use-input v-model:value="value" placeholder="一个简单的用例" />
</template>
