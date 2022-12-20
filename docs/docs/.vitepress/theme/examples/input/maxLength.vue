<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('嗯?')
const value3 = ref('啊!')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input
      v-model:value="value1"
      placeholder="请输入"
      :max-length="30"
      show-count
    />
    <use-input
      v-model:value="value2"
      placeholder="嗯?"
      :max-length="30"
      show-count
      clearable
    />
    <use-input v-model:value="value3" placeholder="啊!" show-count clearable />
  </use-space>
</template>
