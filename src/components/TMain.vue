<template>
  <main class="t-main">
    <TPreview/>
    <TPrices/>
    <TContact/>
  </main>
</template>

<script setup lang="ts">
import TSection from './TSection.vue'
import TPrices from './TPrices.vue'
import TPreview from './TPreview.vue'
import TContact from './TContact.vue'
</script>

<style lang="scss">
.t-main {
  background-image: linear-gradient(to top, #000e1c2e, #050a10 100%), url("../assets/t-preview5.jpg");
  background-position: 35% 50%;
  background-size: cover;
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
}
</style>
