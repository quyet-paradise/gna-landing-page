<template>
    <div class="real-images--inner">
        <div class="real-images">
            <div class="real-images--title">
                <img class="star" src="@/assets/images/ico/ico-star-white.svg" alt="star">
                <h2 class="heading">HÌNH ẢNH THỰC TẾ</h2>
            </div>

            <div class="real-images--list">
                <div class="real-images--list--item" v-for="item in projectsData" :key="item?.id">
                    <img :src="item?.image" alt="thicongdenled247" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import projectsData from '@/data/project-data'
</script>

<style lang="scss" scoped>
.real-images--inner {
    width: 100%;
    height: auto;
    position: relative;
    background-color: var(--dls-white-color);
}

.real-images {
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
        align-items: flex-start;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        row-gap: 16px;

        &--item {
            width: 300px;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            display: flex;

            img {
                width: 100%;
                height: 100%;
                transition: filter .6s, opacity .6s, transform .6s, box-shadow .3s;

                &:hover {
                    transform: scale(1.1);
                }
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
        }
    }
}
</style>

