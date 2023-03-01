<script setup lang="ts">
import { ref } from 'vue';
import { UseButton ,UseOverlay } from "@useful-ui/core"
const visible = ref(false)
const triggerRef = ref<InstanceType<typeof UseButton> | null>(null)
</script>

<template>
  <div style="padding:800px">
    <use-overlay v-model:visible="visible" trigger="hover" placement="top">
      <template #trigger>
        <use-button>open</use-button>
      </template>
      
      <div style="height:300px;width: 300px;background:#ccc">
        overlay
      </div>
    </use-overlay>
  </div>
</template>

<style>
.dark {
  background-color: #121212;
}
</style>
