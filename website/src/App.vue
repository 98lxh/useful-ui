<script setup lang="ts">
import { AntDesignOutlined } from '@vicons/antd'
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <use-space>
    <use-input
      v-model="value"
      loading-type="corners"
      placeholder="输入一些东西"
    >
      <template #prefix>
        <use-icon>
          <AntDesignOutlined />
        </use-icon>
      </template>
      <template #suffix>
        <use-icon>
          <AntDesignOutlined />
        </use-icon>
      </template>
    </use-input>

    <use-input
      v-model="value"
      loading
      loading-type="corners"
      placeholder="输入一些东西"
      size="small"
    >
      <template #prefix>
        <use-icon>
          <AntDesignOutlined />
        </use-icon>
      </template>
      <template #suffix>
        <use-icon>
          <AntDesignOutlined />
        </use-icon>
      </template>
    </use-input>
  </use-space>
</template>

<style>
.dark {
  background-color: #121212;
}
</style>
