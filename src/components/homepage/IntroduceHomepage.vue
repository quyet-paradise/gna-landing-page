<template>
    <div class="introduce-inner">
        <div class="introduce">
            <div class="introduce--header">
                <h2 class="introduce--header--title">ThicongdenLED247</h2>
                <div class="introduce--header--star">
                    <img src="@/assets/images/ico/ico-5-star.png" alt="5-star">
                </div>
            </div>

            <div class="introduce--content">
                <div class="text">
                    <p>Với 7 năm kinh nghiệm và hàng ngàn dự án chiếu sáng LED khắp cả nước, ThicongdenLED247 tự hào mang đến giải pháp trọn gói, đồng bộ cho mọi không gian:</p>

                    <ul>
                        <li><b>Thi công đèn LED nội & ngoại thất</b><br />Khảo sát – Thiết kế – Lắp đặt – Vận hành – Bảo trì, đảm bảo tiến độ nhanh, an toàn, bảo hành dài hạn và thẩm mỹ vượt trội.</li>
                        <li><b>Setup showroom chuyên nghiệp</b><br />Không chỉ chuyên về thi công đèn LED chúng tôi có giải pháp tổng thể về thiết kế & thi công nội thất từ  tư vấn concept không gian, lựa chọn mẫu mã, phối cảnh ánh sáng, tối ưu trải nghiệm khách hàng.</li>
                        <li><b>Buôn sỉ đèn LED giá xưởng</b><br />Cam kết giá tốt nhất thị trường, mẫu mã đa dạng, bảo hành chu đáo.</li>
                    </ul>

                    <h3>Hệ sinh thái ThicongdenLED247</h3>
                    <ul>
                        <li>Showroom trưng bày trải nghiệm</li>
                        <li>Kho bãi quy mô lớn, sẵn sàng cung ứng ngay trên khắp cả nước</li>
                        <li>Văn phòng điều hành chuyên nghiệp, hỗ trợ 24/7</li>
                    </ul>

                    <h3>Cam kết của chúng tôi</h3>
                    <ol>
                        <li><b>Giá xưởng – Tối ưu ngân sách</b></li>
                        <li><b>Chất lượng bền bỉ</b> – Vật tư đạt chuẩn, tuổi thọ cao</li>
                        <li><b>Phản hồi siêu tốc</b> – Trong 10 phút, mọi lúc, kể cả lễ, Tết</li>
                        <li><b>Hậu mãi tận tâm</b> – Bảo trì & bảo hành nhanh chóng</li>
                    </ol>

                    <p><b>ThicongdenLED247</b> – Thắp sáng không gian, nâng tầm giá trị!</p>
                </div>

                <div class="image" >
                    <img src="/introduce/introduce.png" alt="thicongdenled247">
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.introduce-inner {
    width: 100%;
    height: auto;
    position: relative;
    background-image: url('/introduce/bg/introduce-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.1);
    background-blend-mode: multiply;
}

.introduce {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 32px 0;
    line-height: 1.5;
    text-shadow: 0 0 1px var(--dls-secondary-color);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;

    &--header {
        &--title {
            text-align: center;
            font-size: 32px;
            color: var(--dls-third-color);
            text-shadow: 0 0 1px var(--dls-third-color);
        }

        &--star {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 25px;
                width: auto;
            }
        }
    }

    &--content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 16px;

        .text {
            flex: 1;
            ul, ol {
                li {
                    padding: 4px 0;
                }
            }

            h3 {
                color: var(--dls-primary-color);
                text-shadow: 0 0 1px var(--dls-primary-color);
            }
        }

        .image {
            margin-top: 16px;
            width: 50%;
            img {
                width: 100%;
            }
        }
    }
}
</style>