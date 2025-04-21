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
import project1 from '/projects/1.png'
import project2 from '/projects/2.png'
import project3 from '/projects/3.png'
import project4 from '/projects/4.png'
import project5 from '/projects/5.png'
import project6 from '/projects/6.png'
import project7 from '/projects/7.png'
import project8 from '/projects/8.png'
import project9 from '/projects/9.png'
import project10 from '/projects/10.png'
import project11 from '/projects/11.png'
import project12 from '/projects/12.png'
import project13 from '/projects/13.png'
import project14 from '/projects/14.png'
import project15 from '/projects/15.png'
import project16 from '/projects/16.png'
import project17 from '/projects/17.png'
import project18 from '/projects/18.png'
import project19 from '/projects/19.png'
import project20 from '/projects/20.png'
import project21 from '/projects/21.png'
import project22 from '/projects/22.png'
import project23 from '/projects/23.png'
import project24 from '/projects/24.png'


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
    project21,
    project22,
    project23,
    project24
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

