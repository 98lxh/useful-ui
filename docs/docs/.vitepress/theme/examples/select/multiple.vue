<script setup lang="ts">
import { ref } from 'vue';

const value = ref([])

const options = ref([
  {
    label: "一生二",
    value: '1'
  },
  {
    label: '二生三',
    value: '2'
  },
  {
    label: '三生万物',
    value: '3'
  },
  {
    label: "万物负阴而抱阳",
    value: '4',
  },
  {
    label: '冲气以为和',
    value: '5'
  },
  {
    label: '人之所恶',
    value: '6'
  },
  {
    label: '惟孤寡不毂',
    value: '7'
  },
  {
    label: '而王公以为称',
    value: '8',
  }
])
</script>

<template>
  <use-space direction="vertical" fill>
    <use-select v-model:value="value" multiple placeholder="请选择" :options="options" />
  </use-space>
</template>
