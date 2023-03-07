<template>
  <va-navbar class="t-header" color="backgroundPrimary">
    <template #left>
      <va-navbar-item class="logo">
        TREX
      </va-navbar-item>
    </template>
    <template #right>
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
import { ref } from 'vue'

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
}
</style>
