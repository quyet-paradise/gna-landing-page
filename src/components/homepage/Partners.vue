<template>
    <div class="partners--inner">
        <div class="partners">
            <div class="partners--title">
                <img class="star" src="@/assets/images/ico/ico-star-white.svg" alt="star">
                <h2 class="heading">ĐỐI TÁC CỦA CHÚNG TÔI</h2>
            </div>

            <div class="partners--list">
                <img class="partners--list--item" v-for="(item, index) in partnersList" :key="index" :src="item" alt="thicongdenled247's partners">
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import anphuocLogo from '/logos/partners/an-phuoc.png'
import diorLogo from '/logos/partners/dior.png'
import eliseLogo from '/logos/partners/elise.png'
import highlandLogo from '/logos/partners/highland.png'
import longchauLogo from '/logos/partners/long-chau.png'
import pvbankLogo from '/logos/partners/pvbank.png'
import sixdoLogo from '/logos/partners/sixdo.png'

const partnersList = [
    anphuocLogo,
    diorLogo,
    eliseLogo,
    highlandLogo,
    longchauLogo,
    pvbankLogo,
    sixdoLogo
]

</script>

<style lang="scss" scoped>
.partners--inner{
    width: 100%;
    height: auto;
    position: relative;
    background-color: var(--dls-white-color);
}

.partners {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;

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
        justify-content: center;
        align-items: flex-start;
        gap: 64px;
        flex-wrap: wrap;

        &--item {
            height: 100px;
            width: auto;
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 992px) {
        padding: 16px 20px;

        &--title {
            .heading {
                font-size: 24px;
            }
        }
    }

    @media only screen and (max-width: 576px) {
        padding: 16px 10px;

        &--title {
            .heading {
                font-size: 18px;
            }
        }

        &--list {
            &--item {
                max-width: 100%;
            }
        }
    }
}
</style>