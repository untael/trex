<template>
  <TSection class="t-preview">
    <div class="container">
      <!--      <transition-group tag="div">-->
      <!--        <template v-for="(phrase,ind) in phrases" :key="ind">-->
      <!--          <div :style="{ visibility: phrase.show }" :class="phrase.gridClass">{{ phrase.text }}</div>-->
      <!--        </template>-->
      <!--      </transition-group>-->
      <div class="t-preview__about" v-for="(phrase,ind) in phrases" :key="ind">
        <div class="t-preview__about--text" :class="phrase.gridClass">{{ phrase.text }}</div>
      </div>
    </div>
  </TSection>
</template>

<script setup lang="ts">
import TSection from './TSection.vue'
import { computed, ref, watch } from 'vue'
import { useBreakpoint } from 'vuestic-ui'
import { useI18n } from "vue-i18n";

const { t, locale, messages } = useI18n();
const phrases = ref([
  {
    text: t(`about.text_1`),
    gridClass: 'title',
  },
  {
    text: t(`about.text_2`),
    gridClass: 'description_1',

  },
  {
    text: t(`about.text_3`),
    gridClass: 'description_2',

  },
  {
    text: t(`about.text_4`),
    gridClass: 'description_3',
  },
])

watch(() => locale.value, () => {
  console.log('locale.value', locale.value)
  console.log('t(`about.text_3`)', t(`about.text_3`))
})
const phrases2 = computed(() => {
  return [
    {
      text: t(`about.text_1`),
      gridClass: 'title',
    },
    {
      text: t(`about.text_2`),
      gridClass: 'description_1',

    },
    {
      text: t(`about.text_3`),
      gridClass: 'description_2',

    },
    {
      text: t(`about.text_4`),
      gridClass: 'description_3',
    },
  ]
})

for (let i = 1; i <= phrases.value.length; i++) {
  setTimeout(() => {
    phrases.value[i - 1].gridClass += ' appearing-test'
  }, i * 500)
}

const taglineComputedStyles = computed(() => {
  const { mdUp } = useBreakpoint()
  return {
    width: mdUp ? '45%' : '100%',
    top: mdUp ? '15%' : '25%',
    fontSize: mdUp ? '1.25rem' : '1rem',
  }
})
</script>

<style lang="scss">
:root {
  --animation-enter: translateY(50px);
}

.container {
  display: grid;
  grid-template-rows: repeat(4, fit-content(100%));
  row-gap: 3rem;
  position: relative;
}

.t-preview {
  position: relative;
  font-size: 1rem;
  font-family: "Roboto Thin";
  line-height: 1.2;
  text-align: left;
  display: flex;
  align-items: center;

  &__about {
    display: flex;
    justify-content: center;

    &--text {
      opacity: 0;
      width: 80%;
    }
  }


  .appearing-test {
    animation: appearing 1s;
    animation-fill-mode: forwards;
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


.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

//@media screen and (min-width: 769px) {
//  :root {
//    --animation-enter: translateX(50px);
//  }
//  .t-preview {
//    font-size: 1.25rem;
//  }
//  .container {
//    width: 80vw;
//    height: 30vh;
//    //border: 1px solid yellow;
//    display: grid;
//    grid-template-columns: 1fr 1fr;
//    grid-template-rows: 1fr 2fr 1fr;
//    grid-template-areas:
//      'title title'
//      'description_1 description_2'
//      'description_3 description_3';
//    column-gap: 5%;
//    row-gap: 15%;
//  }
//
//  .title {
//    display: flex;
//    justify-content: flex-start;
//    align-items: flex-start;
//    grid-area: title;
//    font-weight: bold;
//    font-size: 2rem;
//    min-height: 90px;
//    //border: 1px solid red;
//
//  }
//
//  .description_1 {
//    display: flex;
//    justify-content: center;
//    align-items: flex-start;
//    grid-area: description_1;
//    font-size: 1rem;
//    min-height: 160px;
//
//    //border: 1px solid green;
//
//  }
//
//  .description_2 {
//    display: flex;
//    justify-content: center;
//    align-items: flex-start;
//    grid-area: description_2;
//    font-size: 1rem;
//    min-height: 160px;
//
//    //border: 1px solid blue;
//
//  }
//
//  .description_3 {
//    display: flex;
//    align-items: flex-start;
//    grid-area: description_3;
//    font-weight: bold;
//    font-size: 1.5rem;
//    min-height: 90px;
//
//    //border: 1px solid blue;
//
//  }
//
//  .container {
//    margin: 0;
//    position: absolute;
//    top: 50%;
//    left: 50%;
//    transform: translate(-50%, -50%);
//  }
//}
</style>
