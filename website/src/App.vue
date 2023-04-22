<script setup lang="ts">
import { ref } from 'vue';

const value = ref(['1','2'])

const options = ref(Array(20).fill(0).map((_,index) => ({
  label:index + 1,
  value:index + 1
})))
</script>

<template>
  <use-space direction="vertical" fill>
    <use-select v-model:value="value" multiple placeholder="请选择" :options="options" />
  </use-space>
</template>
