<script setup lang="ts">
import { ref } from 'vue';
import { UseButton ,UseOverlay } from "@useful-ui/core"
const visible = ref(false)
const triggerRef = ref<InstanceType<typeof UseButton> | null>(null)
</script>

<template>
  <div style="padding:800px">
    <use-button ref="triggerRef">open</use-button>
    <use-overlay v-model:visible="visible" trigger="click" placement="top-end" :trigger-element="triggerRef?.$el">
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
