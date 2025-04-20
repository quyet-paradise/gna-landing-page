<template>
    <div class="project">
        <RealImages />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const RealImages = defineAsyncComponent(() => import('@/components/homepage/RealImages.vue'))
</script>
<style scoped lang="scss">
.project {
    min-height: 100vh;
}
</style>