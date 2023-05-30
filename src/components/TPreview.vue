<template>
  <TSection class="t-preview">
    <div class="t-preview__container">
      <template v-for="(phrase, index) in phrases" :key="index">
        <div class="t-preview__about" :class="phrase.gridClass">
          <div class="t-preview__about--text">{{ $t(phrase.text) }}</div>
        </div>
      </template>
    </div>
  </TSection>
</template>

<script setup lang="ts">
import TSection from './TSection.vue'
import {computed, ref } from 'vue'
import {useBreakpoint} from 'vuestic-ui'

const phrases = ref([
  {
    text: `about.text_1`,
    gridClass: 'title',
  },
  {
    text: `about.text_2`,
    gridClass: 'description_1',

  },
  {
    text: `about.text_3`,
    gridClass: 'description_2',

  },
  {
    text: `about.text_4`,
    gridClass: 'description_3',
  },
])

for (let i = 1; i <= phrases.value.length; i++) {
  setTimeout(() => {
    phrases.value[i - 1].gridClass += ' appearing-animation'
  }, i * 500)
}

const taglineComputedStyles = computed(() => {
  const {mdUp} = useBreakpoint()
  return {
    width: mdUp ? '45%' : '100%',
    top: mdUp ? '15%' : '25%',
    fontSize: mdUp ? '1.25rem' : '1rem',
  }
})
</script>

<style lang="scss">
.t-preview {
  position: relative;
  font-size: 1rem;
  font-family: "Roboto Thin";
  line-height: 1.2;
  text-align: left;
  display: flex;
  align-items: center;

  &__container {
    display: grid;
    grid-template-rows: repeat(4, fit-content(100%));
    row-gap: 1.75rem;
    position: relative;
    margin-top: 2rem;
  }
  &__about {
    opacity: 0;
    display: flex;
    justify-content: center;

    &--text {
      width: 80%;
    }
  }


  .appearing-animation {
    animation: appearing 1s;
    animation-fill-mode: forwards;
  }

  .title {
    font-weight: bold;
    font-size: 1.75rem;
  }

  .description_3 {
    font-weight: bold;
    font-size: 1.25rem;
  }

  @keyframes appearing {
    from {
      opacity: 0;
      transform: translateY(-2rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media screen and (max-width: 320px) {
  .t-preview {
    font-size: 0.875rem;
  }
}

@media screen and (min-width: 769px) {
  .container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas:
          'title title'
          'description_1 description_2'
          'description_3 description_3';
    column-gap: 2rem;
    margin: 0 5%;
  }

  .t-preview {
    &__container {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 2fr 1fr;
      grid-template-areas:
          'title title'
          'description_1 description_2'
          'description_3 description_3';
      column-gap: 2rem;
      margin: 0 5%;
    }

    &__about {
      display: block;
      &--text {
        width: 100%;
        max-width: 30vw;
      }
    }
  }
  .title {
    grid-area: title;
    font-weight: bold;
    font-size: 2rem;
  }

  .description_1 {
    grid-area: description_1;
  }

  .description_2 {
    grid-area: description_2;
  }

  .description_3 {
    grid-area: description_3;
  }
}

@media screen and (min-width: 1080px) {
  .t-preview {
    font-size: 1.75rem;

    .description_3 {
      font-weight: bold;
      font-size: 2rem;
    }
  }
}

</style>
