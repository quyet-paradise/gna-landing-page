<template>
    <div class="contact--inner">
        <div class="contact">
            <div class="contact--text">
                <div class="title">Bạn muốn tư vấn lắp đặt đèn LED?</div>
                <div class="subtitle">Đừng ngại liên hệ với chúng tôi →</div>
            </div>

            <form class="contact--form" @submit="submitForm">
                <input class="contact--form__input" v-model="fullnameInput" type="text" placeholder="Họ và tên" required>
                <input class="contact--form__input" v-model="phoneInput" type="tel" placeholder="Số điện thoại" required>
                <input class="contact--form__input" v-model="emailInput" type="email" placeholder="Email">

                <input class="contact--form__submit-btn" type="submit">
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fullnameInput = ref<string>('')
const phoneInput = ref<string>('')
const emailInput = ref<string>('')

const submitForm = () => {
    if(!fullnameInput.value || !phoneInput.value) return

    const endPoint = `https://script.google.com/macros/s/AKfycbz7DaS3PFeY4l-pG50TQG3ccj1dUHvFQntZqd8HPpK_1LVC9LqVzcWOE7qr1Jpn8L95/exec?fullname=${fullnameInput.value}&phone=${phoneInput.value}&email=${emailInput.value}`

    fetch(endPoint, {
        method: "POST"
    }).then(() => {
        alert('Gửi yêu cầu thành công')
    })
    .catch((error: any) => {
        alert('Có lỗi khi thực thi API:' + error)
    })
}
</script>

<style lang="scss" scoped>
.contact--inner {
    width: 100%;
    height: auto;
    position: relative;
    background-image: url('/featured_service/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
}

.contact {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 64px 0;
    display: flex;
    align-items: center;
    gap: 16px;

    &--text {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .title {
            font-family: Vinmec;
            font-weight: 600;
            font-size: 32px;
            color: var(--dls-white-color);
        }

        .subtitle {
            font-family: Vinmec;
            font-size: 24px;
            color: var(--dls-white-color);
        }
    }

    &--form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1;
        gap: 16px;


        &__input {
            width: 400px;
            padding: 16px;
            font-size: 18px;
            outline: 0;
        }

        &__submit-btn {
            padding: 16px;
            width: 150px;
            border-radius: 8px;
            background-color: var(--dls-primary-color);
            color: var(--dls-white-color);
            font-weight: 600;
            cursor: pointer;
            border: 0;
            transition: all .1s ease-in-out;

            &:hover {
                background-color: var(--dls-third-color);
            }
        }
    }

    @media only screen and (min-width: 576px) and (max-width: 992px) {
        padding: 32px 20px;
        flex-direction: column;
        gap: 32px;
    }

    @media only screen and (max-width: 576px) {
        padding: 32px 10px;
        flex-direction: column;
        gap: 32px;

        &--text {
            line-height: 1.2;
        }

        &--form {
            width: 100%;

            &__input {
                width: 100%;
            }
        }
    }
}
</style>