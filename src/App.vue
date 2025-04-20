<template>
  <Header />
  <router-view />
  <Footer />

  <LeftSupport />
  <RightSupport />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/Footer.vue'))
const LeftSupport = defineAsyncComponent(() => import('@/components/support/LeftSupport.vue'))
const RightSupport = defineAsyncComponent(() => import('@/components/support/RightSupport.vue'))
</script>

<style lang="scss">
#app {
  position: relative;
}
</style>