<script lang="ts" setup name="VpDemo">
import { ref } from 'vue'

/**
 * 是否展示内容
 */
const isOpen = ref<boolean>(false)
/**
 * 折叠的 dom 节点
 */
const content = ref(null as unknown as HTMLDivElement)
/**
 * 点击执行
 */
const handleClick = (): void => {
  if (!isOpen.value) {
    content.value.style.height = 'auto'
    const height: number = content.value.offsetHeight
    content.value.style.height = '0'
    content.value.offsetHeight
    content.value.style.transition = '0.33s'
    content.value.style.height = height + 'px'
    isOpen.value = true
  } else {
    content.value.style.height = '0'
    isOpen.value = false
  }
}
</script>

<template>
  <div class="use-demo">
    <div v-if="$slots.source" class="use-demo__source">
      <slot name="source" />
    </div>

    <div v-if="$slots.title" class="use-demo__title">
      <p><slot name="title" /></p>
    </div>

    <div v-if="$slots.desc" class="use-demo__desc">
      <p><slot name="desc" /></p>
    </div>

    <!-- 折叠的内容 -->
    <div ref="content" class="use-demo__box">
      <slot />
    </div>

    <!-- 点击展开 / 折叠的区域 -->
    <div
      :class="['use-demo__option', { 'use-demo__option-open': isOpen }]"
      @click="handleClick"
    >
      <UseIcon :size="20">
        <CodeButton />
      </UseIcon>
    </div>
  </div>
</template>

<style lang="scss">
.use-demo {
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  transition: 0.3s;
  cursor: pointer;
  margin-bottom: 30px;
  // 展示的内容
  &__source {
    padding: 20px;
    box-sizing: border-box;
  }
  &__title {
    height: 1px;
    width: 100%;
    background-color: #f0f0f0;
    margin-bottom: 20px;
    position: relative;

    p {
      position: absolute;
      top: -30px;
      left: 10px;
      font-weight: 500;
      background-color: #fff;
      padding: 0 10px;
      font-size: 14px;
    }
  }

  &__desc {
    font-size: 14px;
    margin-left: 20px;

    p {
      line-height: 28px !important;
    }
  }

  // 折叠的内容
  &__box {
    height: 0;
    overflow: hidden;
    padding: 0 20px;
    box-sizing: border-box;
    // 滚动条
    &::-webkit-scrollbar {
      width: 7px;
    }
    // 滚动滑块
    &::-webkit-scrollbar-thumb {
      background: #ddd;
      border-radius: 6px;
    }
  }
  // 点击的操作栏
  &__option {
    border-top: 1px solid #e5e5e5;
    height: 45px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    font-size: 15px;
    background: #fff;
    padding: 10px;
    box-sizing: border-box;
    z-index: 9999;
    color: #333;
    // 展开使用粘性定位
    &.use-demo__option-open {
      position: sticky;
      bottom: 0px;

      i {
        color: #1a5cff;
      }
    }
    // 描述文字
    &__option-text {
      transition: 0.4s;
      text-align: center;
      display: block;
    }
  }
}

.dark {
  .use-demo {
    border: 1px solid #313131;

    &__title {
      background-color: #313131;

      p {
        background-color: #242424;
      }
    }

    &__option {
      border-top: 1px solid #313131;
      background-color: #242424;

      i {
        color: #ffffffde;
      }

      &.use-demo__option-open {
        position: sticky;
        bottom: 0px;

        i {
          color: #1a5cff;
        }
      }
    }
  }
}
</style>
