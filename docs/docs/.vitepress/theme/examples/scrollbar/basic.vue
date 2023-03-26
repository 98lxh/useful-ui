<script setup lang="ts">
import { ref } from "vue"
const  lyrics = ref([
  "只因你太美 baby 只因你太美 baby",
  "只因你实在是太美 baby",
  "只因你太美 baby",
  "迎面走来的你让我如此蠢蠢欲动",
  "这种感觉我从未有",
  "Cause I got a crush on you who you",
  "你是我的我是你的谁",
  "再多一眼看一眼就会爆炸",
  "再近一点靠近点快被融化",
  "想要把你占为己有 baby bae",
  "不管走到哪里",
  "都会想起的人是你 you you"
])
</script>

<template>
  <use-scrollbar height="400px">
    <p v-for="(lyric,index) in lyrics" :key="index" class="use-scrollbar-demo-item">
      {{lyric}}
    </p>
  </use-scrollbar>
</template>

<style scoped>
p.use-scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 10px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
}
p.use-scrollbar-demo-item:last-of-type {
  margin-bottom: 0;
}
</style>
