<template>
  <TSection class="t-preview">
    <div class="t-preview__tagline" :style="taglineComputedStyles">
      Unlock your potential with Mirek - Your guide to fitness success.
    </div>
  </TSection>
</template>

<script setup lang="ts">
import TSection from './TSection.vue'
import { computed } from 'vue'
import { useBreakpoint } from 'vuestic-ui'

const taglineComputedStyles = computed(() => {
  const { mdUp } = useBreakpoint()
  return {
    width: mdUp ? '40%' : '100%',
    top: mdUp ? '15%' : '25%',
    fontSize: mdUp ? '5rem' : '4rem',
  }
})
</script>

<style lang="scss">
.t-preview {
  position: relative;
  &__tagline {
    position: absolute;
    right: 0;
    font-size: 5rem;
    font-family: "Roboto Thin";
    line-height: 1.2;
    text-align: center;
  }
}
</style>
