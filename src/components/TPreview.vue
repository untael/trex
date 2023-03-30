<template>
  <TSection class="t-preview">
    <div class="container">
      <TransitionGroup>
        <template v-for="(phrase,ind) in phrases" :key="ind">


          <div :style="{ visibility: phrase.show }" :class="phrase.gridClass">{{ phrase.text }}</div>


        </template>
      </TransitionGroup>
      <!--      <div class="first">-->
      <!--        <Transition>-->
      <!--          <div v-if="phrases[0]?.show" class="text__first">{{ phrases[0]?.text }}</div>-->
      <!--        </Transition>-->
      <!--      </div>-->
      <!--      <div class="first">-->
      <!--        <Transition>-->
      <!--          <div v-if="phrases[0]?.show" class="text__first">{{ phrases[0]?.text }}</div>-->
      <!--        </Transition>-->
      <!--      </div>-->
      <!--      <div class="second">-->
      <!--        <Transition>-->
      <!--          <div v-if="phrases[1]?.show" class="text__second">{{ phrases[1]?.text }}</div>-->
      <!--        </Transition>-->
      <!--      </div>-->
      <!--      <div class="third">-->
      <!--        <Transition name="third">-->
      <!--          <div v-if="phrases[2]?.show" class="text__third">{{ phrases[2]?.text }}</div>-->
      <!--        </Transition>-->
      <!--      </div>-->
    </div>
  </TSection>

</template>

<script setup lang="ts">
import TSection from './TSection.vue'
import { computed, ref } from 'vue'
import { useBreakpoint } from 'vuestic-ui'

const phrases = ref([
  {
    show: 'hidden',
    text: 'О СЕБЕ:',
    gridClass: 'title',
    // text: 'Всю свою жизнь я так или иначе был связан со спортом. Первые спортивные шаги начинал с карате, затем пробовал себя в картинге. Позже - занимался греблей на каноэ. В 2014 году произошло судьбоносное знакомство с тренажерным залом, который занимает все мое время и по сей день.',
  },
  {
    show: 'hidden',
    text: 'Всю свою жизнь я так или иначе был связан со спортом. Первые спортивные шаги начинал с карате, затем пробовал себя в картинге. Позже - занимался греблей на каноэ. В 2014 году произошло судьбоносное знакомство с тренажерным залом, который занимает все мое время и по сей день.',
    gridClass: 'description_1',

  },
  {
    show: 'hidden',
    // text: 'Lorem huem pizdec',
    text: 'СЕГОДНЯ Я - ПЕРСОНАЛЬНЫЙ ТРЕНЕР, постоянно расширяющий свои знания в области биохимии и анатомии человека. Это не только помогает мне в повседневной работе с моими подопечными. Знания и навыки, которые я приобретаю, пробудили мою новую страсть - проектирование и создание собственных тренажеров. ',
    gridClass: 'description_2',

  },
  {
    show: 'hidden',
    text: 'Мой девиз: решить проблему человека, не навредив ему.',
    gridClass: 'description_3',

  }])

const showPhrases = ref([])

for (let i = 1; i <= phrases.value.length; i++) {
  setTimeout(() => {
    phrases.value[i - 1].show = 'visible'

  }, i * 1500)
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

.t-preview {
  position: relative;
  font-size: 1rem;
  font-family: "Roboto Thin";
  line-height: 1.2;
  text-align: left;
  display: flex;
  align-items: center;
}

.container {
  //height: 70vh;
  display: grid;
  grid-template-rows: repeat(4, fit-content(100%));
  row-gap: 5%;
}

@media screen and (min-width: 769px) {
  :root {
    --animation-enter: translateX(50px);
  }
  .t-preview {
    font-size: 1.25rem;
  }
  .container {
    width: 80vw;
    height: 30vh;
    //border: 1px solid yellow;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas:
      'title title'
      'description_1 description_2'
      'description_3 description_3';
    column-gap: 5%;
    row-gap: 15%;
  }

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    grid-area: title;
    font-weight: bold;
    font-size: 2rem;
    min-height: 90px;
    //border: 1px solid red;

  }

  .description_1 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-area: description_1;
    font-size: 1rem;
    min-height: 160px;

    //border: 1px solid green;

  }

  .description_2 {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    grid-area: description_2;
    font-size: 1rem;
    min-height: 160px;

    //border: 1px solid blue;

  }

  .description_3 {
    display: flex;
    align-items: flex-start;
    grid-area: description_3;
    font-weight: bold;
    font-size: 1.5rem;
    min-height: 90px;

    //border: 1px solid blue;

  }

  .container {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.v-enter-active,
.v-leave-active {
  transition: all 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: var(--animation-enter);
}

</style>
