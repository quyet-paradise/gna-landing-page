<template>
    <div class="header-inner">
        <div class="header">
            <a class="header__logo" href="#">
                <img src="/logos/thicongdenled_logo.png" alt="logo" id="ledlogo">
            </a>

            <div class="toolbar">
                <div class="toolbar__menubar">
                    <a class="toolbar__menubar--item" href="javascript:void()" @click="goToPage(PATH.HOME)">Trang chủ</a>
                    <a class="toolbar__menubar--item" href="javascript:void()" @click="goToPage(PATH.INTRODUCE)">Giới thiệu</a>
                    <a class="toolbar__menubar--item" href="javascript:void()" @click="goToPage(PATH.SERVICE)">Dịch vụ</a>
                    <a class="toolbar__menubar--item" href="javascript:void()" @click="goToPage(PATH.PROJECT)">Dự án</a>
                    <a class="toolbar__menubar--item" href="javascript:void()" @click="goToPage(PATH.CONTACT)">Liên hệ</a>
                </div>

                <div class="toolbar__contact">
                    <a class="toolbar__contact--item" target="_blank" href="https://www.facebook.com/profile.php?id=61568493685782">
                        <img src="@/assets/images/ico/ico-fb.svg" alt="fb">
                    </a>

                    <a class="toolbar__contact--item" href="mailto:thicongdenled247.com.vn">
                        <img src="@/assets/images/ico/ico-email.svg" alt="email">
                    </a>

                    <a class="toolbar__contact--item" href="tel:+84332937600">
                        <img src="@/assets/images/ico/ico-phone.svg" alt="phone">
                    </a>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { PATH } from '@/constants/route-constants'

const router = useRouter()

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

</script>

<style scoped lang="scss">
.header-inner {
    background-color: blanchedalmond;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;

    .header {
        max-width: var(--dls-max-width);
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;
        padding: 4px 16px 4px 0;

        &__logo {
            img {
                height: 100px;
                width: auto;
            }
        }

        .toolbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            flex: 1;

            &__menubar {
                display: flex;
                gap: 12px;
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
                }
            }
        }
    }
}

</style>