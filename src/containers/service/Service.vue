<template>
    <div class="service">
        <h2 class="service--title">{{ currentLedTypeName }}</h2>

        <div class="service--content">
            <div class="service--content--left">
                <div v-for="service in servicesData" :key="service?.id">
                    <h3 @click="goToDetail(service?.url)">{{ service?.name || '' }}</h3>
                    <div v-for="ledType in service?.led_types" :key="ledType?.id" class="item" :class="{ active: ledType?.id === currentLedTypeId }" @click="setLedsList(ledType)">
                        {{ ledType?.name }}
                    </div>
                </div>
            </div>
            <div class="service--content--right">
                <div v-for="(item, index) in currentLedsList" :key="index" class="item">
                    <img :src="item?.image" alt="thicongdenLED247">
                    <div class="item--name">{{ item?.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import servicesData from '@/data/service-data'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentLedTypeName = ref<string>(servicesData[0]?.led_types[0]?.name || '')
const currentLedsList = ref<any[]>(servicesData[0]?.led_types[0]?.leds || [])
const currentLedTypeId = ref<string>(servicesData[0]?.led_types[0]?.id || '')

const setLedsList = (item: any) => {
    currentLedsList.value = item.leds
    currentLedTypeName.value = item.name
    currentLedTypeId.value = item.id
}

const goToDetail = (path: string) => {
    router.push(path)
}
</script> 
<style scoped lang="scss">
.service {
    min-height: 100vh;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &--title {
        text-align: center;
        color: var(--dls-third-color);
    }


    &--content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 32px;
        line-height: 1.5;

        &--left {
            width: 280px;
            border-right: 1px solid var(--dls-divider-color);
            padding-right: 16px;

            h3 {
                border-bottom: 1px solid var(--dls-divider-color);
                color: var(--dls-primary-color);
                cursor: pointer;

                &:hover {
                    color: var(--dls-third-color);
                }
            }

            .item {
                cursor: pointer;
                padding: 4px 0;
                border-bottom: 1px solid var(--dls-divider-color);

                &:hover {
                    color: var(--dls-primary-color);
                }

                &.active {
                    color: var(--dls-third-color);
                }
            }
        }

        &--right {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            gap: 32px;
            flex-wrap: wrap;

            .item {
                width: 280px;
                border-radius: 16px;
                overflow: hidden;
                border: 1px solid var(--dls-divider-color);

                &--name {
                    padding: 8px;
                    text-align: center;
                }

                img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>