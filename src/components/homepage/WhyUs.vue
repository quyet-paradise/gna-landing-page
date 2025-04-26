<template>
    <div class="why-us--inner">
        <div class="why-us">
            <div class="why-us--title">
                <img class="star" src="@/assets/images/ico/ico-star-white.svg" alt="star">
                <h2 class="heading">TẠI SAO LỰA CHỌN CHÚNG TÔI</h2>
            </div>

            <div class="why-us--content">
                <div class="why-us--content--item" v-for="(item, index) in whyUsContentList" :key="index">
                    <div class="icon">
                        <img :src="item?.icon" :alt="item?.title">
                    </div>

                    <div class="title">{{ item?.title }}</div>
                    <div class="subtitle">{{ item?.subtitle }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import awardIcon from '@/assets/images/ico/ico-award.svg'
import headsetIcon from '@/assets/images/ico/ico-headset.svg'
import listIcon from '@/assets/images/ico/ico-list.svg'
import penIcon from '@/assets/images/ico/ico-pen.svg'
import peopleGroupIcon from '@/assets/images/ico/ico-people-group.svg'
import phoneVolumnIcon from '@/assets/images/ico/ico-phone-volume.svg'

const whyUsContentList: any = [
    {
        icon: phoneVolumnIcon,
        title: 'Phục vụ nhanh chóng (24/7)',
        subtitle: 'Chúng luôn phục vụ 24/7 chỉ cần các bạn cần là có chúng tôi. Có mặt trong vòng 15 phút sau khi nhận điện thoại của khách hàng'
    },
    {
        icon: penIcon,
        title: 'Khảo sát tỉ mỉ, tư vấn miễn phí',
        subtitle: 'Đội ngũ nhân viên khảo sát cẩn thận, tỉ mỉ từng chi tiết. Tư vấn biện pháp tối ưu nhất cho khách hàng miễn phí 100%'
    },
    {
        icon: listIcon,
        title: 'Giá rẻ',
        subtitle: 'Dịch vụ hoàn hảo với giá thành hợp lý nhất.'
    },
    {
        icon: headsetIcon,
        title: 'Thái độ phục vụ chuyên nghiệp',
        subtitle: 'Đội ngũ nhân viên chuyên môn cao. Thái độ phục vụ chuyên nghiêp'
    },
    {
        icon: peopleGroupIcon,
        title: 'Đội ngũ công nhân có tay nghề cao',
        subtitle: 'Các tổ thợ công nhân có tay nghề cao, thái độ tốt được sàn lọc qua rất nhiều công trình làm việc cùng nhau'
    },
    {
        icon: awardIcon,
        title: 'Bảo hành hậu mãi',
        subtitle: 'Chế độ bảo hành đến từng linh kiện thay thế, lắp đặt'
    },
]
</script>

<style lang="scss" scoped>
.why-us--inner {
    width: 100%;
    height: auto;
    position: relative;
    background-color: #F3F3F3;
}

.why-us {
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    &--title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;

        .star {
            height: 30px;
            width: 30px;
        }

        .heading {
            font-size: 32px;
        }

        &::after, &::before {
            flex: 1;
            content: '';
            padding: 1px;
            background-color: var(--dls-divider-color);
        }
    }

    &--content {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        gap: 16px;
        flex-wrap: wrap;
        row-gap: 32px;

        &--item {
            width: 400px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 24px;
            padding: 20px;

            .icon {
                padding: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: var(--dls-third-color);
                border: 0;
                border-radius: 9999px;

                img {
                    width: 24px;
                    height: 24px;
                }
            }

            .title {
                font-size: 20px;
                font-weight: 600;
                text-align: center;
            }

            .subtitle {
                line-height: 1.2;
                text-align: center;
            }
        }
    }
}
</style>