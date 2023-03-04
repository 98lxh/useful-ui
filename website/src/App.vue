<script setup lang="ts">
import { UseButton ,UseOverlay } from "@useful-ui/core"
</script>

<template>
  <div style="padding:800px">
    <use-overlay trigger="focus" placement="top">
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
