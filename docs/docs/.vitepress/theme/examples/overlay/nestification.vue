<template>
    <use-overlay trigger="hover" placement="right">
      <template #trigger>
        <use-button class="button">hover</use-button>
      </template>
      <div class="overlay-basic">
        <use-overlay trigger="click" placement="right-start">
          <template #trigger>
            <use-button class="button">click</use-button>
          </template>
          <div class="overlay-basic" style="height: 52px;">
            <use-overlay trigger="focus" placement="bottom-start">
              <template #trigger>
                <use-input placeholder="focus" />
              </template>
              <div class="overlay-basic">Overlay</div>
            </use-overlay> 
          </div>
        </use-overlay> 
      </div>
    </use-overlay>
</template>

<style scoped>
.button{
  width: 100px;
}

.overlay-basic {
  padding: 10px;
  width: 160px;
  height:200px;
  background-color: var(--overlay-basic-background);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
}
</style>
