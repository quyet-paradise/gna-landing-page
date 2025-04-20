<template>
    <div class="contact">
        <div class="contact--info">
            <h2>THICONGDENLED247</h2>
            <p><b>Địa chỉ:</b> 40 P. Ngụy Như Kon Tum, Nhân Chính, Thanh Xuân, Hà Nội</p>
            <p><b>Số điện thoại, zalo:</b> +84 33 293 7600</p>
            <p><b>Email:</b> thicongdenled247.com.vn</p>
            <p><b>Mạng xã hội:</b> <a href="https://www.facebook.com/profile.php?id=61568493685782" target="_blank">Link</a></p>
            <div class="address-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.429154899475!2d105.79745704837006!3d20.998316086775674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbc89f2aa1b%3A0xd5b7b6aa22d84ecf!2zNDAgUC4gTmfhu6V5IE5oxrAgS29uIFR1bSwgTmjDom4gQ2jDrW5oLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1744822064106!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">                        
                </iframe>
            </div>
        </div>
        <ContactForm />
    </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const ContactForm = defineAsyncComponent(() => import('@/components/homepage/ContactForm.vue'))
</script>
<style scoped lang="scss">
.contact {
    &--info {
        max-width: var(--dls-max-width);
        margin: 0 auto;
        padding: 32px 0;
    }
}
</style>