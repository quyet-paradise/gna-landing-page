<template>
    <div class="header-inner">
        <div class="header">
            <a class="header__logo" href="/">
                <img src="/logos/thicongdenled_logo.png" alt="logo" id="ledlogo">
            </a>

            <div class="header__menubar">
                <a class="header__menubar--item" href="javascript:void(0)" @click="goToPage(PATH.HOME)">TRANG CHỦ</a>
                <a class="header__menubar--item" href="javascript:void(0)" @click="goToPage(PATH.INTRODUCE)">GIỚI THIỆU</a>
                <a class="header__menubar--item" href="javascript:void(0)" @click="goToPage(PATH.SERVICE)">DỊCH VỤ</a>
                <a class="header__menubar--item" href="javascript:void(0)" @click="goToPage(PATH.PROJECT)">DỰ ÁN</a>
                <a class="header__menubar--item" href="javascript:void(0)" @click="goToPage(PATH.ARTICLE)">BÀI VIẾT</a>
            </div>

            <div class="header__contact">
                <a class="header__contact--item" target="_blank" href="https://www.facebook.com/profile.php?id=61568493685782">
                    <img src="@/assets/images/ico/ico-fb.svg" alt="fb">
                </a>

                <a class="header__contact--item" href="mailto:chuyenthicongdenled247@gmail.com">
                    <img src="@/assets/images/ico/ico-email.svg" alt="email">
                </a>

                <a class="header__contact--item" href="tel:+84865077247">
                    <img src="@/assets/images/ico/ico-phone.svg" alt="phone">
                </a>
            </div>

            <a class="header__mb" href="javascript:void(0)" @click="openPopup">
                <img src="@/assets/images/ico/ico-menu-bars.svg" alt="menu-bar">
            </a>
        </div>
    </div>

    <HeaderPopupMb v-model:visible="isOpenPopup" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { PATH } from '@/constants/route-constants'

import HeaderPopupMb from '@/components/popup/HeaderPopupMb.vue'

const router = useRouter()

const isOpenPopup = ref<boolean>(false)

onMounted(() => {
    window.addEventListener("scroll", ()=> {
        const ledlogo: any = document.getElementById('ledlogo')

        if(window.scrollY > 100) {
            ledlogo.style.height = '50px'
        }

        if(window.scrollY < 50) {
            ledlogo.style.height = '100px'
        }
    })
})

const goToPage = (routePath: string) => {
    router.push(routePath)
}

const openPopup = () => {
    isOpenPopup.value = true
}
</script>

<style scoped lang="scss">
.header-inner {
    background-color: var(--dls-white-color);
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 99; // < 100 of popup
    box-shadow: 0 4px 2px -2px gray;
    -moz-box-shadow: 0 4px 2px -2px gray;
    -webkit-box-shadow: 0 4px 2px -2px gray;

    .header {
        max-width: var(--dls-max-width);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        padding: 4px 16px 4px 0;

        &__logo {
            text-decoration: none;
            img {
                height: 100px;
                width: auto;
            }
        }


        &__menubar {
            display: flex;
            gap: 16px;
            justify-content: center;
            align-items: center;
            &--item {
                padding: 4px; 
                text-decoration: none;
                color: var(--dls-secondary-color);
                font-weight: bold;

                &:hover {
                    color: var(--dls-primary-color);
                }
            }
        }

        &__contact {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;
            border-left: 2px solid var(--dls-secondary-color);
            padding-left: 16px;

            &--item {
                img {
                    width: 20px;
                    height: 20px;
                }

                &:hover {
                    opacity: 0.7;
                }
            }
        }
        
        &__mb {
            text-decoration: none;
            display: none;
            img {
                width: 20px;
                height: 20px;
            }
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 992px) {
        .header {
            &__menubar {
                display: none;
            }

            &__contact {
                display: none;
            }

            &__mb {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }

    @media only screen and (max-width: 576px) {
        .header {
            &__menubar {
                display: none;
            }

            &__contact {
                display: none;
            }

            &__mb {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}

</style>