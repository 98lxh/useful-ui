<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
 <use-space direction="vertical" fill>
   <use-input v-model:value="value" readonly placeholder="只读状态" />
   <use-input v-model:value="value" disabled placeholder="禁用状态" />
 </use-space>
</template>
