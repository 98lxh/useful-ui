<template>
  <div :style="{position: 'relative', width: '440px', height: '280px'}">
    <use-overlay trigger="hover" placement="top-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'0',left:'70px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="top">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'0',left:'180px'}">TOP</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="top-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'0',left:'290px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="bottom-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'240px',left:'70px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="bottom">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'240px',left:'180px'}">BOTTOM</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="bottom-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'240px',left:'290px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="left-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'60px',left:'10px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>
    <use-overlay trigger="hover" placement="left">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'120px',left:'10px'}">LEFT</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="left-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'180px',left:'10px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>
    <use-overlay trigger="hover" placement="right-start">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'60px',left:'350px'}">START</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="right">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'120px',left:'350px'}">RIGHT</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>

    <use-overlay trigger="hover" placement="right-end">
      <template #trigger>
        <use-button class="button" :style="{position: 'absolute',top:'180px',left:'350px'}">END</use-button>
      </template>
      <div class="overlay-basic">
        overlay
      </div>
    </use-overlay>
  </div>
</template>

<style scoped>
.button{
  width: 100px;
}

.overlay-basic {
  padding: 10px;
  width: 170px;
  background-color: var(--overlay-basic-background);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
