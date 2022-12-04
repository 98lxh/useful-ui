<script setup lang="ts">
import { useSpin } from '@useful-ui/core'

const { spin, target } = useSpin({})

function handleLoading() {
  spin.value?.onDisplay()
  setTimeout(() => spin.value?.onHidden(), 3000)
}
</script>

<template>
  <UseButton ref="target" @click="handleLoading">loading</UseButton>
</template>
