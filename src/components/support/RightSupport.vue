<template>
    <div class="right-support">
        <div v-if="isOpen" class="right-support--open" >
            <div class="header" @click="isOpen = false">
                <div class="header--title">Nhận tư vấn miễn phí ngay</div>
                <div class="header--icon">
                    <img src="@/assets/images/ico/ico-minimize.svg" alt="minimize">
                </div>
            </div>

            <form class="form" @submit="submitForm">
                <div class="form--top">
                    <div class="form--top--introduce">
                        💡 Xin chào! Chào mừng bạn đến với ThicongdenLED247! Nếu bạn cần tư vấn về lắp đèn LED trang trí hoặc muốn biết thêm thông tin về các dịch vụ khác của chúng tôi, đừng ngần ngại nhắn tin nhé! Đội ngũ tư vấn của chúng tôi sẵn sàng hỗ trợ bạn. 🌟
                    </div>
                    <div class="form--top--phone">
                        <div>Điện thoại</div>
                        <input v-model="phoneInput" type="tel" required placeholder="Nhập số điện thoại của bạn">
                    </div>
                </div>

                <div class="form--bottom">
                    <input v-model="contentInput" class="text" type="text" placeholder="Nhập nội dung thông điệp" required>
                    <input class="btn" type="submit">
                </div>
            </form>
        </div>

        <div v-else class="right-support--close" @click="isOpen = true">
            <div class="title">Nhận tư vấn miễn phí ngay</div>
            <img src="@/assets/images/ico/ico-message.png" alt="message">
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isOpen = ref<boolean>(false)
const phoneInput = ref<string>('')
const contentInput = ref<string>('')

const submitForm = () => {
    if (!phoneInput.value || !contentInput.value) return

    const endPoint = `https://script.google.com/macros/s/AKfycbx9WAmDThc62ip3che2sDoiVdwuQOgHYwwqZTQDVjGzUhOLYIvH9JdvMi6Tw6uPTIIl/exec?phone=${phoneInput.value}&content=${contentInput.value}`

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
.right-support {
    position: fixed;
    right: 8px;
    bottom: 8px;
    z-index: 2; // overlay banner

    &--close {
        background: linear-gradient(rgba(0, 0, 0, 0.77), black);
        box-shadow: inset 0 5px 5px rgba(255, 255, 255, 0.4), 0 1px 3px rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 8px;
        border-radius: 8px;
        cursor: pointer;
        width: 300px;

        img {
            width: 24px;
            height: 24px;
        }

        .title {
            color: var(--dls-white-color);
            font-weight: 600;
        }
    }

    &--open {
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 2px 0 gray;
        width: 400px;

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: linear-gradient(rgba(0, 0, 0, 0.77), black);
            box-shadow: inset 0 5px 5px rgba(255, 255, 255, 0.4), 0 1px 3px rgba(0, 0, 0, 0.2);
            cursor: pointer;
            padding: 4px 8px;

            &--title {
                color: var(--dls-white-color);
                font-weight: 600;
            }

            &--icon {
                background-color: var(--dls-white-color);
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                padding: 4px;
            }
        }

        .form {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding: 8px;
            background-color: var(--dls-divider-color);

            &--top {
                border: 1px solid gray;
                box-shadow: rgb(74, 74, 74) 0px 1px 5px 0px;
                padding: 8px;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                gap: 32px;

                &--introduce {
                    color: red;
                    line-height: 1.2;
                }

                &--phone {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 8px;

                    input {
                        flex: 1;
                        font-size: 16px;
                    }
                }
            }

            &--bottom {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                gap: 8px;
                .text {
                    font-size: 16px;
                    flex: 1;
                }

                .btn {
                    font-size: 16px;
                    cursor: pointer;
                }
            }
        }
    }

    @media only screen and (max-width: 576px) {
        &--close {
            width: auto;
            gap: 4px;

            .title {
                font-size: 13px;
            }
        }

        &--open {
            width: 300px;
        }
    }
}
</style>