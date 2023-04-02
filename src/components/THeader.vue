<template>
  <va-navbar class="t-header" color="backgroundPrimary">
    <template #left>
      <va-navbar-item class="logo">
        TREX
      </va-navbar-item>
    </template>
    <template #right>
      <va-dropdown>
        <template #anchor>
          <va-navbar-item class="locale-dropdown">
            <va-button preset="plain">
              Language
            </va-button>
          </va-navbar-item>
        </template>

        <va-dropdown-content v-for="(item, index) in locales" :key="index">
          <va-button preset="plain" color="white" @click="changeLocale(item.locale)">
            <span :class="[`fi fi-${item.flag}`]"></span>
            <span class="t-header__flag-name">
            {{ item.name }}
          </span>
          </va-button>
        </va-dropdown-content>
      </va-dropdown>
      <va-navbar-item v-for="(item, index) in navbarItems" :key="index">
        <va-button preset="plain" @click="handleClick(item)">
          {{ item.name }}
        </va-button>
      </va-navbar-item>
    </template>
  </va-navbar>
</template>

<script setup lang="ts">
import { VaButton, VaNavbar, VaNavbarItem } from 'vuestic-ui'
import { getCurrentInstance, ref } from 'vue'
import 'flag-icons/css/flag-icons.min.css'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale } = useI18n();
const navbarItems = ref([
  {
    name: 'Prices',
    id: 'prices',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
])

const locales = ref([
  {
    name: 'English',
    flag: 'gb',
    locale: 'en',
  },
  {
    name: 'Polski',
    flag: 'pl',
    locale: 'pl',
  },
  {
    name: 'Русский',
    flag: 'ru',
    locale: 'ru',
  },
])

const root = getCurrentInstance()
const router = useRouter()
const changeLocale = (newLocale: string) => {
  locale.value = newLocale
}

const handleClick = (item: any) => {
  const itemToScroll = document.getElementById(`${item.id}`)
  itemToScroll?.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center',
  })
}
</script>

<style lang="scss">
.t-header {
  position: fixed;
  top: 0;
  z-index: 100;

  .locale-dropdown {
    margin-right: var(--va-navbar-item-margin-side);
  }

  &__flag-name {
    margin-left: 4px;
  }
}
</style>
