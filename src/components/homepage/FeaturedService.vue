<template>
    <div class="service--inner">
        <div class="service">
            <div class="service--title">
                <img class="star" src="@/assets/images/ico/ico-star-white.svg" alt="star">
                <h2 class="heading">DỊCH VỤ NỔI BẬT</h2>
            </div>

            <div class="service--list">
                <div class="service--list--item" v-for="(item, index) in featuredServicesData" :key="index">
                    <div class="image" @click="goToDetail(item?.link)">
                        <img :src="item?.image" :alt="item?.text" loading="lazy">
                    </div>
                    <div class="text" v-html="item?.text" @click="goToDetail(item?.link)"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { featuredServicesData } from '@/data/service-data'

const router = useRouter()

const goToDetail = (path: any) => {
    router.push(path)
}
</script>

<style lang="scss" scoped>
.service--inner {
    width: 100%;
    height: auto;
    position: relative;
    background-image: url('/featured_service/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
}

.service {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    &--title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;

        .star {
            height: 30px;
            width: 30px;
        }

        .heading {
            color: var(--dls-white-color);
            font-size: 32px;
        }

        &::after, &::before {
            flex: 1;
            content: '';
            padding: 1px;
            background-color: var(--dls-divider-color);
        }
    }

    &--list {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        row-gap: 32px;

        &--item {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: var(--dls-white-color);
            width: 380px;
            border-radius: 8px;
            overflow: hidden;


            .image {
                overflow: hidden;
                width: 100%;
                cursor: pointer;
                display: flex;
                img {
                    height: 300px;
                    width: 100%;
                    object-fit: cover;
                    transition: filter .6s, opacity .6s, transform .6s, box-shadow .3s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            .text {
                padding: 16px;
                font-weight: bold;
                text-align: center;
                line-height: 1.5;
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 992px) {
        padding: 16px 20px;

        &--list {
            justify-content: center;
        }
    }

    @media only screen and (max-width: 576px) {
        padding: 16px 10px;

        &--title {
            .heading {
                font-size: 24px;
            }
        }

        &--list {
            justify-content: center;

            &--item {
                width: 100%;
                max-width: 380px;
            }
        }
    }
}
</style>