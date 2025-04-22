<template>
    <div class="popup-mb" v-if="props?.visible">
        <div class="popup-mb--nav">
            <a class="popup-mb--nav--item" href="javascript:void(0)" @click="goToPage(PATH.HOME)">TRANG CHỦ</a>
            <a class="popup-mb--nav--item" href="javascript:void(0)" @click="goToPage(PATH.INTRODUCE)">GIỚI THIỆU</a>
            <a class="popup-mb--nav--item" href="javascript:void(0)" @click="goToPage(PATH.SERVICE)">DỊCH VỤ</a>
            <a class="popup-mb--nav--item" href="javascript:void(0)" @click="goToPage(PATH.PROJECT)">DỰ ÁN</a>
            <a class="popup-mb--nav--item" href="javascript:void(0)" @click="goToPage(PATH.CONTACT)">LIÊN HỆ</a>
        </div>
        <div class="popup-mb--contact">
            <a class="popup-mb--contact--item" target="_blank" href="https://www.facebook.com/profile.php?id=61568493685782">
                <img src="@/assets/images/ico/ico-fb.svg" alt="fb">
            </a>

            <a class="popup-mb--contact--item" href="mailto:thicongdenled247.com.vn">
                <img src="@/assets/images/ico/ico-email.svg" alt="email">
            </a>

            <a class="popup-mb--contact--item" href="tel:+84332937600">
                <img src="@/assets/images/ico/ico-phone.svg" alt="phone">
            </a>
        </div>

        <div class="popup-mb--close" @click="emits('update:visible', false)">
            <img src="@/assets/images/ico/ico-close-popup.svg" alt="close">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { PATH } from '@/constants/route-constants'

const router = useRouter()

const props = defineProps({
    visible: {
        type: Boolean,
        default: false,
        required: true
    }
})

const emits = defineEmits(['update:visible'])

const goToPage = (routePath: string) => {
    router.push(routePath)

    emits('update:visible', false)
}

watch(() => props.visible, (newVal: boolean) => {
    const body = document.body;

    if (newVal) {
        body.style.overflowY = 'hidden'
    } else {
        body.style.overflowY = 'auto'
    }
})
</script>

<style lang="scss" scoped>
.popup-mb {
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--dls-white-color);
    padding-top: 100px;

    &--nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
        width: 350px;
        margin: 0 auto;

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

    &--contact {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        width: auto;
        margin: 0 auto;
        padding-top: 32px;

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

    &--close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        img {
            width: 30px;
            height: 30px;
        }

        &:hover {
            opacity: 0.7;
        }
    }
}
</style>