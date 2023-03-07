<template>
  <section class="t-section" :style="computedStyles">
    <slot/>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  backgroundColor: String,
})
const computedStyles = computed(() => {
  return {
    background: props.backgroundColor,
  }
})
</script>

<style lang="scss">
.t-section {
  scroll-snap-align: center;
  height: 100%;
}

</style>
