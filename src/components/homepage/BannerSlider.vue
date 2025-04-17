<template>
    <div class="banner">
        <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
            <Slide >
                <img src="/banner/banner-1.jpg" alt="banner 1" class="gallery-image" loading="lazy" />
            </Slide>
            <Slide >
                <img src="/banner/banner-2.jpg" alt="banner 2" class="gallery-image" loading="lazy" />
            </Slide>

            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Navigation, Pagination, SlideEffect } from 'vue3-carousel'
import { ref } from 'vue'

const currentSlide = ref(0)

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade' as SlideEffect,
  mouseDrag: false,
  touchDrag: false,
  height: 600,
  autoplay: 3000
}
</script>
<style scoped lang="scss">
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}
</style>

<style lang="scss">
.carousel__prev {
    margin-left: 16px;
}

.carousel__next {
    margin-right: 16px;
}
</style>