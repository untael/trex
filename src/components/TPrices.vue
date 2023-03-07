<template>
  <TSection background-color="primary" class="t-prices" id="prices">
    <swiper
        class="swiper"
        :modules="modules"
        :slides-per-view="slidesPerView"
        :space-between="50"
        navigation
    >
      <swiper-slide v-for="(item, index) in packages" :key="item.name + index">
        <va-card class="t-prices__card" squared outlined stripe :stripe-color="item.stripeColor">
          <va-card-title>{{ item.name }}</va-card-title>
          <va-card-content>
            <div>
              {{ item.description }}
            </div>
            <va-list>
              <va-list-label>Features</va-list-label>
              <va-list-item v-for="(feature, featIndex) in item.features" :key="feature + featIndex">
                <va-list-item-section icon>
                  <va-icon
                      name="check"
                      color="success"
                  />
                </va-list-item-section>
                <va-list-item-section>
                  <va-list-item-label lines="10">
                    {{ feature }}
                  </va-list-item-label>
                </va-list-item-section>
              </va-list-item>
            </va-list>
            <va-button color="success">Order now for {{ item.price }}</va-button>
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

const packages = ref([
  {
    name: 'Start',
    description: 'The Start Gym Package is perfect for those who are just beginning their fitness journey. It typically includes access to basic gym equipment like treadmills, stationary bikes, and weight machines. This package is designed to help you establish a regular fitness routine and build your confidence in the gym.',
    stripeColor: 'secondary',
    features: [
      'Access to basic gym equipment such as treadmills, stationary bikes, and weight machines.',
      'Group fitness classes like yoga, Zumba, or spin classes to help establish a regular fitness routine.',
      'Friendly staff to help beginners feel comfortable and confident in the gym.',
    ],
    price: '800 zł',
    count: '8 + 1 free',
  },
  {
    name: 'Classic',
    description: 'The Classic Gym Package is ideal for those who are looking for a more comprehensive gym experience. It usually includes access to a wider range of equipment, such as free weights, resistance bands, and functional training equipment. The Classic package is perfect for those who are looking to take their fitness to the next level.',
    stripeColor: 'success',
    features: [
      'Access to a wider range of equipment including free weights, resistance bands, and functional training equipment.',
      'Variety of group fitness classes, including high-intensity interval training (HIIT), yoga, and Pilates.',
      'Personalized training sessions with a certified personal trainer to help you achieve your fitness goals.',
    ],
    price: '1200 zł',
    count: '12 + 1 free',
  },
  {
    name: 'Pro',
    description: 'The Pro Gym Package is designed for serious athletes or fitness enthusiasts who want access to top-of-the-line equipment and amenities. The Pro package is ideal for those who are looking to achieve peak performance and make fitness a central part of their lifestyle.',
    stripeColor: 'danger',
    features: [
      'Access to top-of-the-line equipment including Olympic lifting platforms, power racks, and specialty cardio equipment.',
      'Advanced training programs designed to help you achieve peak performance and maximize your results.',
      'Nutritional coaching and other high-level services to help you achieve your fitness goals.',
    ],
    price: '1500 zł',
    count: '16 + 1 free',
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
    height: 70vh;
  }

  .va-card {
    display: flex;
    flex-direction: column;

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .va-card-title {
      justify-content: center;
      font-size: 3rem;
    }

    .va-list-label {
      font-size: 1.5rem;
    }
  }

  .swiper-slide {
    padding: 0 calc(var(--swiper-navigation-size) / 44 * 27 + 10px);
  }
}
</style>
