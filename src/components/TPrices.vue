<template>
  <TSection background-color="primary" class="t-prices" id="prices">
    <swiper
        class="swiper"
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="50"
        navigation
    >
      <swiper-slide v-for="(item, index) in plans" :key="item.name + index">
        <va-card class="t-prices__card" squared outlined stripe :stripe-color="item.stripeColor">
          <va-card-title>{{ $t(item.name) }}</va-card-title>
          <va-card-content>
            <div class="t-prices__card__content">
              {{ $t(item.description) }}
            </div>
            <va-list class="t-prices__card__features">
              <va-list-item v-for="(feature, featIndex) in item.features" :key="feature + featIndex">
                <va-list-item-section icon>
                  <va-icon
                      name="check"
                      :color="item.stripeColor"
                  />
                </va-list-item-section>
                <va-list-item-section>
                  <va-list-item-label lines="10">
                    {{ $t(feature) }}
                  </va-list-item-label>
                </va-list-item-section>
              </va-list-item>
            </va-list>
            <va-button :color="item.stripeColor" @click="orderPackage(item)">{{ $t('packages.orderNow') }} {{ item.price }}</va-button>
          </va-card-content>
        </va-card>
      </swiper-slide>
    </swiper>
  </TSection>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TSection from './TSection.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { useBreakpoint, VaListItemSection } from 'vuestic-ui'

const plans = ref([
  {
    name: 'packages.start.name',
    description: 'packages.start.description',
    stripeColor: 'info',
    features: [
      'packages.start.features[0]',
      'packages.start.features[1]',
    ],
    price: '800 zł',
  },
  {
    name: 'packages.classic.name',
    description: 'packages.classic.description',
    stripeColor: 'success',
    features: [
      'packages.classic.features[0]',
      'packages.classic.features[1]',
      'packages.classic.features[2]',
    ],
    price: '1200 zł',
  },
  {
    name: 'packages.pro.name',
    description: 'packages.pro.description',
    stripeColor: 'danger',
    features: [
      'packages.pro.features[0]',
      'packages.pro.features[1]',
      'packages.pro.features[2]',
    ],
    price: '1500 zł',
  },
])

const modules = [Navigation]
const slidesPerView = computed(() => {
  const { mdUp, lgUp } = useBreakpoint()
  if (lgUp) {
    return 3
  }
  if (mdUp) {
    return 2
  }
  return 1
})

const emit = defineEmits(['order'])

const orderPackage = (plan: any) => {
  const contactForm = document.getElementById('contacts')
  contactForm?.scrollIntoView({ behavior: 'smooth' })
  emit('order', plan)
}
const swiperOption = {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
}
</script>

<style lang="scss">
.t-prices {
  --va-list-item-label-color: rgb(241, 241, 241);
  display: flex;
  align-items: center;

  &__card {
    height: auto;
    line-height: 1.2;
    &__content {
      font-size: 14px;
    }
    &__features {
      font-size: 14px;
      padding: 0.5rem 0;
    }
  }

  .va-card {
    display: flex;
    height: 100%;
    flex-direction: column;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .va-card-title {
      justify-content: center;
      font-size: 2rem;
    }

    .va-list-label {
      font-size: 1.5rem;
    }
  }

  .swiper-wrapper {
    align-items: stretch;
  }
  .swiper-slide {
    height: auto;
    padding: 0 calc(var(--swiper-navigation-size) / 44 * 27 + 10px);
  }
}

@media screen and (max-width: 320px) {
  .t-prices {
    .swiper-button-prev {
      top: 28%;
    }
    .swiper-button-next {
      top: 28%;
    }
    .swiper {
      height: 100%;
    }
    .swiper-wrapper {
      align-items: flex-end;
    }
    .swiper-slide {
      height: 80%;
      padding: 0 5px;
    }
  }
}

@media screen and (min-width: 1080px) {
  .t-prices {
    &__card {
      .va-card-title {
        font-size: 3rem;
      }

      &__content {
        font-size: 1.5rem;
      }
      &__features {
        padding: 2rem 0;
        font-size: 1.5rem;
      }
    }
  }
}
</style>
