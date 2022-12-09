<script setup lang="ts">
import { AntDesignOutlined } from '@vicons/antd'
</script>

<template>
  <use-space>
    <template #after>
      <use-icon>
        <AntDesignOutlined />
      </use-icon>
    </template>
    <template #before>
      <AntDesignOutlined />
    </template>
  </use-space>
</template>
