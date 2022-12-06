<script setup lang="ts">
import { AntDesignOutlined } from '@vicons/antd'
</script>

<template>
  <use-button>
    <template #icon>
      <use-icon>
        <AntDesignOutlined />
      </use-icon>
    </template>
  </use-button>
  <use-button size="large">
    <template #icon>
      <use-icon>
        <AntDesignOutlined />
      </use-icon>
    </template>
  </use-button>
  <use-button size="small">
    <template #icon>
      <use-icon>
        <AntDesignOutlined />
      </use-icon>
    </template>
  </use-button>
</template>
