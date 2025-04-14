<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const Header = defineAsyncComponent(() => import('@/components/header/Header.vue'))
const Footer = defineAsyncComponent(() => import('@/components/footer/footer.vue'))
</script>

<style scoped lang="scss">
#app {
  overflow-x: hidden; 
}
</style>