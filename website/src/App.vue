<script setup lang="ts">
import { onMounted ,ref} from 'vue';

const theme = ref('light')
let html:HTMLHtmlElement | null = null

onMounted(() => {
  html = document.getElementsByTagName('html')[0]
  html.className = theme.value
})

function onChangeTheme(){
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  html!.className = theme.value
}
</script>

<template>
  <use-button @click="onChangeTheme">切换{{ theme === 'light' ? '深色' : '浅色' }}</use-button>
  <div style="width:400px">
    <use-scrollbar height="400px">
      <p v-for="item in 20" :key="item" class="use-scrollbar-demo-item">
        {{
          item
        }}
      </p>
    </use-scrollbar>

    <use-scrollbar>
      <div class="scrollbar-flex-content">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </div>
    </use-scrollbar>
  </div>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px 0;
  margin-right: 10px;
  text-align: center;
  border-radius: 4px;
  background: #fef0f0;
  color: #f56c6c;
}
.scrollbar-demo-item:last-of-type {
  margin-right: 0;
}


p.use-scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 10px;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  background: #409eff;
  color: #\red;
}
p.use-scrollbar-demo-item:last-of-type {
  margin-bottom: 0;
}
</style>
