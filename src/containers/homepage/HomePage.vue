<template>
    <div class="homepage">
        <BannerSlider />
        <IntroduceHomepage />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BannerSlider = defineAsyncComponent(() => import('@/components/homepage/BannerSlider.vue'))
const IntroduceHomepage = defineAsyncComponent(() => import('@/components/homepage/IntroduceHomepage.vue'))

</script>
<style scoped lang="scss">
.homepage {
    min-height: 100vh;
}
</style>