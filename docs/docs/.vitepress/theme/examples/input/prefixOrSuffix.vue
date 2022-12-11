<script setup lang="ts">
import { ref } from 'vue'
import { AlertOutlined } from '@vicons/antd'

const value = ref('')
</script>

<template>
  <use-space direction="vertical" fill>
    <use-input v-model:value="value" placeholder="前缀">
      <template #prefix>
        <use-icon>
          <AlertOutlined />
        </use-icon>
      </template>
    </use-input>

    <use-input v-model:value="value" placeholder="后缀">
      <template #suffix>
        <use-icon>
          <AlertOutlined />
        </use-icon>
      </template>
    </use-input>

    <use-input v-model:value="value" placeholder="前缀和后缀">
      <template #prefix> ￥ </template>
      <template #suffix> 元 </template>
    </use-input>
  </use-space>
</template>
