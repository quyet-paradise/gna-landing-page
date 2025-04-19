<template>
    <div class="real-images--inner">
        <div class="real-images">
            <div class="real-images--title">
                <img class="star" src="@/assets/images/ico/ico-star-white.svg" alt="star">
                <h2 class="heading">Hình ảnh thực tế</h2>
            </div>

            <div class="real-images--list">
                <div class="real-images--list--item" v-for="(item, index) in projectsList" :key="index">
                    <img :src="item" alt="thicongdenled247" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import project1 from '/projects/1.webp'
import project2 from '/projects/2.webp'
import project3 from '/projects/3.webp'
import project4 from '/projects/4.webp'
import project5 from '/projects/5.jpg'
import project6 from '/projects/6.jpg'
import project7 from '/projects/7.jpg'
import project8 from '/projects/8.jpg'
import project9 from '/projects/9.jpg'
import project10 from '/projects/10.jpg'
import project11 from '/projects/11.jpg'
import project12 from '/projects/12.jpg'
import project13 from '/projects/13.jpg'
import project14 from '/projects/14.jpg'
import project15 from '/projects/15.png'
import project16 from '/projects/16.jpg'
import project17 from '/projects/17.jpg'
import project18 from '/projects/18.jpg'
import project19 from '/projects/19.jpg'
import project20 from '/projects/20.jpg'

const projectsList: any = [
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    project9,
    project10,
    project11,
    project12,
    project13,
    project14,
    project15,
    project16,
    project17,
    project18,
    project19,
    project20,
]
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
            height: 25px;
            width: 25px;
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
}
</style>

