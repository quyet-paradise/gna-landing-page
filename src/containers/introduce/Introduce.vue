<template>
    <div class="introduce--inner">
        <div class="introduce">
            <div class="introduce--content">
                <h2>GIỚI THIỆU THICONGDENLED247</h2>
                <p style="text-align: center; font-style: italic;">Chắp cánh không gian – Tỏa sáng thương hiệu</p>
                <p>Thành lập từ năm 2019, <b>ThicongdenLED247</b> đã đồng hành cùng hàng ngàn dự án chiếu sáng, từ những không gian gia đình ấm cúng đến các siêu thị, văn phòng, quán cà phê và showroom quy mô. Chúng tôi thấu hiểu rằng, ánh sáng không chỉ đơn thuần là nguồn sáng – mà còn là công cụ tạo cảm xúc, nâng tầm giá trị và ấn tượng thương hiệu.</p>

                <div class="introduce--content__img" >
                    <img src="/introduce/introduce.png" alt="thicongdenled247">
                </div>

                <h3>🔹 Thi công trọn gói – Bừng sáng mọi công trình</h3>
                <ul>
                    <li><b>Khảo sát & Tư vấn chuyên sâu:</b> Đội ngũ kỹ sư giàu kinh nghiệm đo đạc, phân tích hiện trạng, xác định nhu cầu và đề xuất giải pháp LED tiết kiệm, hiệu quả nhất.</li>
                    <li><b>Thiết kế & Lắp đặt chuẩn mực:</b> Từ bản vẽ 2D/3D đến hiện thực hóa trên công trường, đảm bảo tiến độ – thẩm mỹ – an toàn lao động.</li>
                    <li><b>Vận hành & Bảo trì định kỳ:</b> Kiểm tra, hiệu chỉnh ánh sáng và xử lý sự cố ngay khi phát sinh, giữ cho không gian luôn rực rỡ như ngày đầu.</li>
                </ul>

                <h3>🔹 Setup showroom – Nơi thương hiệu tỏa sáng</h3>
                <ul>
                    <li><b>Lên ý tưởng - thiết kế - thi công trọn gói:</b> Từ nhà hàng, cafe, spa, nhà ở, văn phòng,...</li>
                    <li><b>Trưng bày chuyên nghiệp:</b> Hệ thống mẫu thử, bảng màu và catalog sống động giúp khách trải nghiệm trực quan trước khi quyết định.</li>
                </ul>

                <h3>🔹 Cải tạo không gian cũ</h3>
                <ul>
                    <li><b>Sửa chữa và đưa ra giải pháp cải tạo:</b> Làm mới không gian, bắt kịp xu thế của thời đại</li>
                </ul>

                <h3>🔹 Buôn bán sỉ & Đại lý cấp 1 – Nguồn cung cấp tin cậy</h3>
                <ul>
                    <li><b>Kho bãi & Văn phòng tại Hà Nội:</b> Diện tích lớn, luôn sẵn sàng đáp ứng đơn hàng số lượng lớn.</li>
                    <li><b>Showroom trải nghiệm:</b> Trực tiếp kiểm định chất lượng, so sánh hiệu suất và kiểu dáng.</li>
                    <li><b>Sản phẩm đa dạng:</b> Đèn LED chiếu sáng – trang trí – quảng cáo,...</li>
                </ul>

                <hr />

                <h3>Cam kết của ThicongdenLED247</h3>
                <ol>
                    <li><b>Giá xưởng – Tối ưu ngân sách</b></li>
                    <li><b>Chất lượng bền bỉ</b> – Vật tư đạt chuẩn, tuổi thọ cao</li>
                    <li><b>Phản hồi siêu tốc</b> – Trong 10 phút, mọi lúc, kể cả lễ, Tết</li>
                    <li><b>Hậu mãi tận tâm</b> – Bảo trì & bảo hành nhanh chóng</li>
                </ol>

                <p>Hàng trăm đối tác lớn nhỏ đã tin tưởng và hợp tác với chúng tôi, tạo nên những công trình chiếu sáng ấn tượng, bền bỉ và giàu tính thẩm mỹ. <b>ThicongdenLED247</b> luôn xem sự hài lòng của Quý khách là thước đo thành công, và cam kết đồng hành cùng bạn trên mọi hành trình tỏa sáng.</p>
                <p>☎️ <b>Liên hệ ngay: +84 33 293 7600</b></p>
                <p>Chúng tôi rất hân hạnh được phục vụ và kiến tạo không gian lung linh cho bạn!</p>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
</script>
<style scoped lang="scss">
.introduce--inner {
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
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 32px 0;
    // text-shadow: 0 0 1px var(--dls-secondary-color);

    &--content {
        line-height: 1.5;

        h2 {
            color: var(--dls-third-color);
            text-align: center;
        }

        h3 {
            color: var(--dls-primary-color);
        }

        &__img {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            

            img {
                width: 50%;
            }
        }
    }
}
</style>