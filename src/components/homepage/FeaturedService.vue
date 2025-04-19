<template>
    <div class="service--inner">
        <div class="service">
            <div class="service--title">
                <img class="star" src="@/assets/images/ico/ico-star-white.svg" alt="star">
                <h2 class="heading">Dịch vụ nổi bật</h2>
            </div>

            <div class="service--list">
                <div class="service--list--item" v-for="(item, index) in servicesList" :key="index">
                    <div class="image">
                        <img :src="item?.image" :alt="item?.text" loading="lazy">
                    </div>
                    <div class="text">{{ item?.text }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import service1 from '/featured_service/1.jpg'
import service2 from '/featured_service/2.jpg'
import service3 from '/featured_service/3.jpg'
import service4 from '/featured_service/4.jpg'
import service5 from '/featured_service/5.jpg'
import service6 from '/featured_service/6.jpg'

const servicesList: any = [
    {
        image: service1,
        text: 'Thi công đèn LED sân vườn'
    },
    {
        image: service2,
        text: 'Thi công đèn LED nội thất nhà ở và văn phòng'
    },
    {
        image: service3,
        text: 'Thi công đèn LED bảng biển quảng cáo'
    },
    {
        image: service4,
        text: 'Thi công đèn LED nhà hàng, khách sạn, Spa, cafe'
    },
    {
        image: service5,
        text: 'Setup showroom, nhà hàng trọn gói'
    },
    {
        image: service6,
        text: 'Màn hình LED module'
    },
]
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
            height: 25px;
            width: 25px;
        }

        .heading {
            color: var(--dls-white-color);
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
            justify-content: flex-start;
            align-items: center;
            gap: 16px;
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
                line-height: 1.2;
            }
        }
    }
}
</style>