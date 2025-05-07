<template>
    <div class="contact">
        <div class="contact--info">
            <h2>THICONGDENLED247</h2>
            <p><b>Địa chỉ:</b> 40 P. Ngụy Như Kon Tum, Nhân Chính, Thanh Xuân, Hà Nội</p>
            <p><b>Số điện thoại, zalo:</b></p>
            <p><b>0865077247:</b> Liên hệ tư vấn - báo giá thi công nội thất & đèn LED</p>
            <p><b>0947931247:</b> Liên hệ bộ phận phân phối đại lí cấp 1 đèn LED</p>
            <p><b>Email:</b> chuyenthicongdenled247@gmail.com</p>
            <p><b>Mạng xã hội:</b> <a href="https://www.facebook.com/profile.php?id=61568493685782" target="_blank">Link</a></p>
        </div>
    </div>
    <ContactForm />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ContactForm = defineAsyncComponent(() => import('@/components/homepage/ContactForm.vue'))
</script>
<style scoped lang="scss">
.contact {
    width: 100%;
    height: auto;
    position: relative;
    background-image: url('/contact/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.1);
    background-blend-mode: multiply;

    &--info {
        max-width: var(--dls-max-width);
        margin: 0 auto;
        padding: 32px 0;
    }

    @media only screen and (min-width: 576px) and (max-width: 992px) {
        padding: 16px 20px;
    }

    @media only screen and (max-width: 576px) {
        padding: 16px 10px;
        line-height: 1.2;

        &--info {
            padding: 16px 0;
        }
    }
}
</style>