<template>
    <div class="banner">
        <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
            <Slide >
                <img src="/banner/banner-ngoai-that-led.png" alt="banner-ngoai-that-led" class="gallery-image" />
            </Slide>
            <Slide >
                <img src="/banner/banner-noi-that-led.png" alt="banner-noi-that-led" class="gallery-image" />
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
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
import { ref } from 'vue'

const currentSlide = ref(0)

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
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
  --vc-carousel-height: inherit !important;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
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