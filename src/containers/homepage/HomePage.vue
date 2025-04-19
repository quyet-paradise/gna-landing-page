<template>
    <div class="homepage">
        <BannerSlider />
        <IntroduceHomepage />
        <FeaturedService />
        <RealImages />
        <WhyUs />
        <Partners />
        <ContactForm />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BannerSlider = defineAsyncComponent(() => import('@/components/homepage/BannerSlider.vue'))
const IntroduceHomepage = defineAsyncComponent(() => import('@/components/homepage/IntroduceHomepage.vue'))
const FeaturedService = defineAsyncComponent(() => import('@/components/homepage/FeaturedService.vue'))
const RealImages = defineAsyncComponent(() => import('@/components/homepage/RealImages.vue'))
const WhyUs = defineAsyncComponent(() => import('@/components/homepage/WhyUs.vue'))
const Partners = defineAsyncComponent(() => import('@/components/homepage/Partners.vue'))
const ContactForm = defineAsyncComponent(() => import('@/components/homepage/ContactForm.vue'))

</script>
<style scoped lang="scss">
.homepage {
    min-height: 100vh;
}
</style>