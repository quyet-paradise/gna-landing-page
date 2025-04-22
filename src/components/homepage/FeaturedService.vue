<template>
    <div class="service--inner">
        <div class="service">
            <div class="service--title">
                <img class="star" src="@/assets/images/ico/ico-star-white.svg" alt="star">
                <h2 class="heading">DỊCH VỤ NỔI BẬT</h2>
            </div>

            <div class="service--list">
                <div class="service--list--item" v-for="(item, index) in servicesList" :key="index">
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

import service1 from '/featured_service/1.jpg'
import service2 from '/featured_service/2.jpg'
import service3 from '/featured_service/3.jpg'
import service4 from '/featured_service/4.jpg'
import service5 from '/featured_service/5.jpg'
import service6 from '/featured_service/6.jpg'

import { PATH } from '@/constants/route-constants'

const router = useRouter()

const servicesList: any = [
    {
        image: service1,
        text: 'Thi công đèn LED sân vườn',
        link: PATH.SAN_VUON_SERVICE
    },
    {
        image: service2,
        text: 'Thi công đèn LED nội thất<br /> nhà ở và văn phòng',
        link: PATH.NOI_THAT_SERVICE
    },
    {
        image: service3,
        text: 'Thi công đèn LED bảng biển quảng cáo',
        link: PATH.BIEN_QUANG_CAO_SERVICE
    },
    {
        image: service4,
        text: 'Thi công đèn LED nhà hàng,<br /> khách sạn, Spa, cafe',
        link: PATH.NHA_HANG_SERVICE
    },
    {
        image: service5,
        text: 'Setup showroom, nhà hàng trọn gói',
        link: PATH.TRON_GOI_SERVICE
    },
    {
        image: service6,
        text: 'Màn hình LED module',
        link: PATH.MODULE_SERVICE
    },
]

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
}
</style>