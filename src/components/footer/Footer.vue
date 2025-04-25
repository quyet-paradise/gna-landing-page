<template>
    <div class="footer-inner">
        <div class="footer">
            <div class="footer__left">
                <h2 class="company-name">ThicongdenLED247</h2>
                <div class="subtitle">Mang đến giải pháp toàn diện, tiết kiệm và thẩm mỹ cho mọi không gian</div>
                <div class="hotline"><b>Số điện thoại / Zalo:</b> +84 33 293 7600</div>
                <div class="email"><b>Email:</b> chuyenthicongdenled247@gmail.com</div>

                <div class="contact">
                    <a href="https://www.facebook.com/profile.php?id=61568493685782" target="_blank" class="contact--item fb">
                        <img src="@/assets/images/ico/ico-fb.svg" alt="fb">
                    </a>

                    <a href="mailto:chuyenthicongdenled247@gmail.com" class="contact--item email">
                        <img src="@/assets/images/ico/ico-email.svg" alt="email">
                    </a>

                    <a href="tel:+84332937600" class="contact--item phone">
                        <img src="@/assets/images/ico/ico-phone.svg" alt="phone">
                    </a>
                </div>
            </div>
            <div class="footer__right">
                <h2 class="address">Địa chỉ</h2>
                <div class="address-sub">40 P. Ngụy Như Kon Tum, Nhân Chính, Thanh Xuân, Hà Nội</div>
                <div class="address-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.429154899475!2d105.79745704837006!3d20.998316086775674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbc89f2aa1b%3A0xd5b7b6aa22d84ecf!2zNDAgUC4gTmfhu6V5IE5oxrAgS29uIFR1bSwgTmjDom4gQ2jDrW5oLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1744822064106!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">                        
                    </iframe>
                </div>
            </div>
        </div>

        <div class="copyright">© 2025 <b>ThicongdenLED247</b></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer-inner {
    background-color: var(--dls-secondary-color);
    padding: 32px 0;

    .footer {
        max-width: var(--dls-max-width);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        &__left {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 16px;
            color: var(--dls-white-color);

            .company-name {
                border-left: 4px solid var(--dls-third-color);
                padding-left: 16px;
            }

            .contact {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 8px;

                &--item {
                    padding: 8px;
                    border-radius: 9999px;
                    border: 2px solid var(--dls-white-color);
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: var(--dls-white-color);
                    transition: all .3s ease-in-out;

                    img {
                        height: 16px;
                        width: 16px;
                    }

                    &:hover {
                        &.fb {
                            background-color: #0866FF;
                        }

                        &.email {
                            background-color: #EA4335;
                        }

                        &.phone {
                            background-color: #34A953;
                        }
                    }
                }
            }
        }

        &__right {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 16px;
            color: var(--dls-white-color);

            .address {
                border-left: 4px solid var(--dls-third-color);
                padding-left: 16px;
            }

            .address-map {
                iframe {
                    border-radius: 16px;
                }
            }
        }
    }

    .copyright {
        color: var(--dls-white-color);
        display: block;
        text-align: center;
        margin-top: 32px;
    }
}
</style>