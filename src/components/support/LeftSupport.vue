<template>
    <div class="left-support">
        <div class="left-support--zalo">
            <div class="left-support--zalo__fill"></div>
            <div class="left-support--zalo__circle">
                <a href="https://zalo.me/0865077247" target="_blank">
                    <img src="@/assets/images/ico/ico-zalo.png" alt="https://zalo.me/0865077247">
                </a>
            </div>
        </div>
        <div class="left-support--phone">
            <div class="left-support--phone__fill"></div>
            <div class="left-support--phone__circle">
                <a href="tel:0865077247">
                    <img src="@/assets/images/ico/ico-phone-white.png" alt="0865077247">
                </a>
            </div>

            <div class="left-support--phone__number">0865077247</div>
        </div>
    </div>
</template>
<script lang="ts" setup></script>

<style lang="scss" scoped>
.left-support {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2; // overlay banner

    &--zalo {
        position: relative;
        visibility: visible;
        background-color: transparent;
        width: 90px;
        height: 90px;
        cursor: pointer;
        z-index: 11;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: visibility .5s;
        left: 0;
        bottom: 0;
        display: block;

        &__fill {
            width: 65px;
            height: 65px;
            top: 12px;
            left: 12px;
            position: absolute;
            box-shadow: 0 0 0 0 #2196F3;
            background-color: rgba(33,150,243,0.7);
            border-radius: 50%;
            border: 2px solid transparent;
            transition: all .5s;
            -webkit-transform-origin: 50% 50%;
            -ms-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-animation: zoom-anim 1.3s infinite;
            animation: zoom-anim 1.3s infinite;
        }

        &__circle {
            background-color: #2196F3;
            width: 40px;
            height: 40px;
            line-height: 40px;
            top: 25px;
            left: 25px;
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            -webkit-animation: incoming-call-anim 1s infinite ease-in-out;
            animation: incoming-call-anim 1s infinite ease-in-out;

            a {
                display: block;
                line-height: 37px;

                img {
                    max-height: 25px;
                    max-width: 27px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -moz-transform: translate(-50%,-50%);
                    -webkit-transform: translate(-50%, -50%);
                    -o-transform: translate(-50%,-50%);
                }
            }
        }
    }

    &--phone {
        position: relative;
        visibility: visible;
        background-color: transparent;
        width: 90px;
        height: 90px;
        cursor: pointer;
        z-index: 11;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        transition: visibility .5s;
        left: 0;
        bottom: 0;
        display: block;

        &__fill {
            width: 65px;
            height: 65px;
            top: 12px;
            left: 12px;
            position: absolute;
            box-shadow: 0 0 0 0 #c31d1d;
            background-color: rgba(230,8,8,0.7);
            border-radius: 50%;
            border: 2px solid transparent;
            transition: all .5s;
            -webkit-transform-origin: 50% 50%;
            -ms-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            -webkit-animation: zoom-anim 1.3s infinite;
            animation: zoom-anim 1.3s infinite;
        }

        &__circle {
            background-color: #ff1919;
            width: 40px;
            height: 40px;
            line-height: 40px;
            top: 25px;
            left: 25px;
            position: absolute;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            -webkit-animation: incoming-call-anim 1s infinite ease-in-out;
            animation: incoming-call-anim 1s infinite ease-in-out;

            a {
                display: block;
                line-height: 37px;

                img {
                    max-height: 25px;
                    max-width: 27px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -moz-transform: translate(-50%,-50%);
                    -webkit-transform: translate(-50%, -50%);
                    -o-transform: translate(-50%,-50%);
                }
            }
        }

        &__number {
            position: absolute;
            background-color: #ff1919;
            color: white;
            padding: 10px 10px 10px 40px;
            border-radius: 16px;
            top: 50%;
            left: 50%;
            transform: translate(-5%, -50%);
            -moz-transform: translate(-5%,-50%);
            -webkit-transform: translate(-5%, -50%);
            z-index: -1;
            font-weight: 500;
        }
    }

    @keyframes zoom-anim {
        0% {
            transform: scale(.9);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 15px transparent;
        }

        100% {
            transform: scale(.9);
            box-shadow: 0 0 0 0 transparent;
        }
    }

    @keyframes incoming-call-anim {
        0% {
            -webkit-transform: rotate(0) scale(1) skew(1deg);
        }
        10% {
            -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
        }
        20% {
            -webkit-transform: rotate(25deg) scale(1) skew(1deg);
        }
        30% {
            -webkit-transform: rotate(-25deg) scale(1) skew(1deg);
        }
        40% {
            -webkit-transform: rotate(25deg) scale(1) skew(1deg);
        }
        50% {
            -webkit-transform: rotate(0) scale(1) skew(1deg);
        }
        100% {
            -webkit-transform: rotate(0) scale(1) skew(1deg);
        }
    }
}
</style>
