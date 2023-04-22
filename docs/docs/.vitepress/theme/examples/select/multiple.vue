<script setup lang="ts">
import { ref } from 'vue';

const value = ref([])

const options = ref([
        {
          label: "只因你太美 baby 只因你太美 baby",
          value: '1'
        },
        {
          label: '只因你实在是太美 baby',
          value: '2'
        },
        {
          label: '只因你太美 baby',
          value: '3'
        },
        {
          label: "迎面走来的你让我如此蠢蠢欲动",
          value: '4',
        },
        {
          label: '这种感觉我从未有',
          value: '5'
        },
        {
          label: 'Cause I got a crush on you who you',
          value: '6'
        },
        {
          label: '你是我的我是你的谁',
          value: '7'
        },
        {
          label: '再多一眼看一眼就会爆炸',
          value: '8',
        },
        {
          label: '再近一点靠近点快被融化',
          value: '9'
        },
        {
          label: '要把你占为己有 baby bae',
          value: '10'
        },
        {
          label: "不管走到哪里",
          value: '11'
        },
        {
          label: '都会想起的人是你 you you',
          value: '12'
        }
      ])
</script>

<template>
  <use-space direction="vertical" fill>
    <use-select v-model:value="value" multiple placeholder="请选择" :options="options" />
  </use-space>
</template>
