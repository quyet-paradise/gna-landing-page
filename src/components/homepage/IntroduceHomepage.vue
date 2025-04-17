<template>
    <div class="introduce">
        <h2 class="introduce--title">ThicongdenLED247</h2>
        <div class="introduce--star">
            <img src="@/assets/images/ico/ico-5-star.png" alt="5-star">
        </div>

        <p>Với 7 năm đồng hành cùng hàng ngàn dự án chiếu sáng LED trên khắp cả nước, ThicongdenLED247 mang đến giải pháp toàn diện, tiết kiệm và thẩm mỹ cho mọi không gian:</p>

        <ul class="introduce--">
            <li><b>Thi công trọn gói:</b> Từ khảo sát – thiết kế – lắp đặt đến vận hành, bảo trì, đảm bảo tiến độ nhanh chóng, an toàn và chất lượng vượt trội.</li>
            <li><b>Setup showroom chuyên nghiệp:</b> Tư vấn không gian, lựa chọn mẫu mã, phối cảnh ánh sáng, hoàn thiện trưng bày giúp tăng ấn tượng và trải nghiệm khách hàng.</li>
            <li><b>Đại lý cấp 1, buôn bán sỉ đèn LED:</b> Phân phối trực tiếp các thương hiệu hàng đầu (Trung Quốc, Đài Loan, Hàn Quốc…), mẫu mã đa dạng, giá cạnh tranh, bảo hành chính hãng.</li>
        </ul>

        <p><b>Hệ sinh thái ThicongdenLED247 tại Hà Nội:</b></p>
        <ul>
            <li>Hệ thống showroom trưng bày trải nghiệm</li>
            <li>Kho bãi quy mô lớn, sẵn sàng cung ứng ngay</li>
            <li>Văn phòng điều hành chuyên nghiệp, hỗ trợ 24/7</li>
        </ul>

        <p><b>Cam kết của chúng tôi</b></p>
        <ol>
            <li><b>Chất lượng đẳng cấp</b> – Vật tư cao cấp, thi công chuẩn mực, bàn giao đúng cam kết.</li>
            <li><b>Hiệu quả kinh tế</b> – Thiết kế tối ưu điện năng, tuổi thọ đèn LED bền lâu.</li>
            <li><b>Phản hồi siêu tốc</b> – Chỉ sau 10 phút kể từ khi nhận yêu cầu, sẵn sàng xử lý mọi tình huống, kể cả ngày lễ, cuối tuần.</li>
            <li><b>Hậu mãi tận tâm</b> – Bảo trì, bảo hành nhanh chóng để bạn hoàn toàn an tâm.</li>
        </ol>

        <p>Chúng tôi trân trọng <b>sự hợp tác chặt chẽ</b> và <b>niềm tin vững chắc</b> từ Quý khách hàng – nền tảng để ThicongdenLED247 không ngừng lớn mạnh và tỏa sáng cùng bạn!</p>
    </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.introduce {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 16px 0;
    line-height: 1.5;

    &--title {
        text-align: center;
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

    ul, ol {
        li {
            padding: 8px 0;
            line-height: 1.2;
        }
    }
}
</style>