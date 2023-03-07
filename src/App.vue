<template>
  <div class="t-app">
    <THeader/>
    <TMain/>
  </div>
</template>

<script setup lang="ts">
import THeader from './components/THeader.vue'
import TMain from './components/TMain.vue'
</script>

<style lang="scss">
.t-app {
  scroll-snap-type: y mandatory;
}
</style>
