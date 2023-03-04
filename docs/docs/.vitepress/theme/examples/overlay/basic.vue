<template>
  <use-overlay trigger="hover" placement="bottom">
    <template #trigger>
      <use-button>hover</use-button>
    </template>
    <div class="overlay-basic">
      overlay
    </div>
  </use-overlay>
</template>

<style scoped>
.overlay-basic {
  padding: 10px;
  width: 170px;
  background-color: var(--overlay-basic-background);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
