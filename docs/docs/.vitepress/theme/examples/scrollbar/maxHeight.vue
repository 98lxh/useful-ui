<script setup lang="ts">
import { ref } from "vue";
const count = ref(3);

const add = () => {
  count.value++;
};
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
};
</script>

<template>
  <div style="display: flex; margin-bottom: 12px">
    <use-button @click="add" style="margin-right: 12px">Add Item</use-button>
    <use-button @click="onDelete">Delete Item</use-button>
  </div>
  <use-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </use-scrollbar>
</template>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 10px;
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  background: rgba(26, 92, 255, 0.15);
  color: rgb(26, 92, 255) !important;
}
.scrollbar-demo-item:last-of-type {
  margin-bottom: 0;
}
</style>
