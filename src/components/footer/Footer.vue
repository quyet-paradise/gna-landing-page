<template>
    <div class="footer-inner">
        <div class="footer">
            <div class="footer__left">
                <h2 class="company-name">ThicongdenLED247</h2>
                <div class="subtitle">Mang đến giải pháp toàn diện, tiết kiệm và thẩm mỹ cho mọi không gian</div>
                <div class="hotline">
                    <p><b>Hotline / Zalo:</b></p>
                    <ul>
                        <li>0865077247: Liên hệ tư vấn - báo giá thi công nội thất & đèn LED</li>
                        <li>0947931247: Liên hệ bộ phận phân phối đại lí cấp 1 đèn LED</li>
                    </ul>
                </div>
                
                <div class="email"><b>Email:</b> chuyenthicongdenled247@gmail.com</div>

                <div class="contact">
                    <a href="https://www.facebook.com/profile.php?id=61568493685782" target="_blank" class="contact--item fb">
                        <img src="@/assets/images/ico/ico-fb.svg" alt="fb">
                    </a>

                    <a href="mailto:chuyenthicongdenled247@gmail.com" class="contact--item email">
                        <img src="@/assets/images/ico/ico-email.svg" alt="email">
                    </a>

                    <a href="tel:+84865077247" class="contact--item phone">
                        <img src="@/assets/images/ico/ico-phone.svg" alt="phone">
                    </a>
                </div>
            </div>
            <div class="footer__center">
                <h2 class="address">Địa chỉ</h2>
                <div class="address-sub"><b>Văn phòng:</b> 40 P. Ngụy Như Kon Tum, Nhân Chính, Thanh Xuân, Hà Nội</div>
                <div class="address-sub"><b>Showroom:</b> 26 Nguyễn Xiển - Thanh Xuân - Hà Nội</div>
                <div class="address-sub"><b>Kho xưởng:</b> Long Biên - Hà Nội & Hà Đông - Hà Nội</div>
                <div class="address-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.429154899475!2d105.79745704837006!3d20.998316086775674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acbc89f2aa1b%3A0xd5b7b6aa22d84ecf!2zNDAgUC4gTmfhu6V5IE5oxrAgS29uIFR1bSwgTmjDom4gQ2jDrW5oLCBUaGFuaCBYdcOibiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1744822064106!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade">                        
                    </iframe>
                </div>
            </div>

            <div class="footer__right">
                <h2 class="title">DỊCH VỤ NỔI BẬT</h2>
                <div class="list">
                    <a class="" href="javascript:void(0)" v-for="(service, index) in featuredServicesData" :key="index" @click="goToDetail(service?.link)">{{ service?.text?.replace('<br />', '') }}</a>
                </div>
            </div>
        </div>

        <div class="copyright">© 2025 <b>ThicongdenLED247</b></div>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { featuredServicesData } from '@/data/service-data'

const router = useRouter()

const goToDetail = (path: any) => {
    router.push(path)
}
</script>

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
        gap: 16px;
        line-height: 1.3;

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

        &__center {
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
                    width: 400px;
                    height: 300px;
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

            .title {
                border-left: 4px solid var(--dls-third-color);
                padding-left: 16px;
            }

            .list {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                gap: 16px;

                a {
                    text-decoration: none;
                    color: var(--dls-white-color);

                    &:hover {
                        color: var(--dls-third-color);
                    }
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

    @media only screen and (min-width: 576px) and (max-width: 992px) {
        padding: 16px 20px 200px 20px;

        .footer {
            flex-direction: column;
        }
    }

    @media only screen and (max-width: 576px) {
        padding: 16px 10px 200px 10px;

        .footer {
            flex-direction: column;

            &__center {
                .address-map {
                    width: 100%;
                    iframe {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>