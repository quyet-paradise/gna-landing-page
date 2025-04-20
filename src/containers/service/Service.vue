<template>
    <div class="service">
        <div class="service--title">Dịch vụ: {{ currentServiceName }}</div>

        <div class="service--content">
            <div class="service--content--left">
                <h4>Thi công đèn LED nội thất</h4>
                <div v-for="item in noiThat" :key="item?.id" @click="setNoiNgoaiThatServicesList(item)" class="item">
                    {{ item.name }}
                </div>

                <h4>Thi công đèn LED ngoại thất</h4>
                <div v-for="item in ngoaiThat" :key="item?.id" @click="setNoiNgoaiThatServicesList(item)" class="item">
                    {{ item.name }}
                </div>

                <h4 class="item" @click="setTronGoiServicesList()">Set up showroom trọn gói</h4>
                <h4>Bán buôn đèn led giá xưởng</h4>
            </div>
            <div class="service--content--right">
                <div v-for="(item, index) in currentServicesList" :key="index" class="item">
                    <img :src="item?.image" alt="thicongdenLED247">
                    <div class="item--name">{{ item?.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import service2 from '/featured_service/2.jpg'

const noiThat: any = [
    {
        id: 1,
        name: 'Chiếu sáng tổng thể (Ambient / General Lighting)',
        services: [
            {
                name: 'Đèn trần âm trần (Recessed downlights)',
                image: service2
            },
            {
                name: 'Đèn ốp trần (Flush‑mount / Surface‑mount)',
                image: service2
            },
            {
                name: 'Đèn thanh linear LED (Linear fixtures), Đèn chùm & đèn thả.',
                image: service2
            }
        ]
    },
    {
        id: 2,
        name: 'Chiếu sáng điểm nhấn (Accent Lighting)',
        services: [
            {
                name: 'Đèn hắt tranh (Picture / Art lights)',
                image: service2
            },
            {
                name: 'Đèn hắt tường (Wall washer fixtures)',
                image: service2
            },
            {
                name: 'Đèn hắt khe trần (Cove lighting)',
                image: service2
            },
            {
                name: 'Track lights',
                image: service2
            }
        ]
    },
    {
        id: 3,
        name: 'Chiếu sáng nhiệm vụ (Task Lighting)',
        services: [
            {
                name: 'Đèn dưới tủ bếp',
                image: service2
            },
            {
                name: 'Kệ văn phòng (Under‑cabinet LED strips)',
                image: service2
            },
            {
                name: 'Đèn thả đảo bếp',
                image: service2
            }
        ]
    },
    {
        id: 4,
        name: 'Chiếu sáng trang trí (Decorative Lighting)',
        services: [
            {
                name: 'Đèn tường trang trí (Decorative wall sconces)',
                image: service2
            },
            {
                name: 'Đèn dây LED / Neon Flex (LED string & neon flex)',
                image: service2
            },
            {
                name: 'Đèn nghệ thuật (Artistic LED modules)',
                image: service2
            }
        ]
    }
]

const ngoaiThat: any = [
    {
        id: 1,
        name: 'Chiếu sáng sân vườn & tiểu cảnh',
        services: [
            {
                name: 'Path Lights (đèn lối đi)',
                image: service2
            },
            {
                name: 'Garden Stake Lights (đèn cắm cỏ)',
                image: service2
            },
            {
                name: 'Uplights & Downlights (đèn chiếu lên/chụp xuống)',
                image: service2
            },
            {
                name: 'Deck & Patio Lights (đèn sàn & sàn gỗ)',
                image: service2
            }
        ]
    },
    {
        id: 2,
        name: 'Chiếu sáng kiến trúc & mặt tiền (Facade Lighting)',
        services: [
            {
                name: 'Wall‑washer Fixtures (đèn hắt tường)',
                image: service2
            },
            {
                name: 'Architectural Floodlights (đèn pha kiến trúc)',
                image: service2
            },
            {
                name: 'Linear Cove & Recessed Lights (đèn hắt khe/ngầm)',
                image: service2
            },
        ]
    },
    {
        id: 3,
        name: 'Chiếu sáng biển quảng cáo & bảng hiệu (Signage & Billboard)',
        services: [
            {
                name: 'Rotatable LED Sign Lights',
                image: service2
            },
            {
                name: 'Billboard Floodlights',
                image: service2
            },{
                name: 'Spotlights & Wash Lights for Signs',
                image: service2
            },
            {
                name: 'Smart LED Modules',
                image: service2
            }
        ]
    },
    {
        id: 4,
        name: 'Chiếu sáng an ninh & lối đi (Security & Pathway)',
        services: [
            {
                name: 'Motion‑Sensor Floodlights (đèn pha cảm biến chuyển động)',
                image: service2
            },
            {
                name: 'Wall‑Mounted Security Lights',
                image: service2
            },
            {
                name: 'Bollard & Post‑Cap Lights (trụ cột & đèn trụ)',
                image: service2
            },
            {
                name: 'Step & Riser Lights (đèn bậc thềm)',
                image: service2
            },
        ]
    },
    {
        id: 5,
        name: 'Chiếu sáng trang trí & sự kiện (Decorative & Event Lighting)',
        services: [
            {
                name: 'String & Festoon Lights (đèn dây, đèn treo)',
                image: service2
            },
            {
                name: 'Globe & Lantern Lights (đèn quả cầu, đèn lồng)',
                image: service2
            },
            {
                name: 'RGB LED Strips',
                image: service2
            }
        ]
    }
]

const tronGoi: any = [
    {
        name: 'Nhà hàng',
        image: service2
    },
    {
        name: 'Cà phê',
        image: service2
    },
    {
        name: 'Spa',
        image: service2
    },
    {
        name: 'Showroom',
        image: service2
    }
]

const currentServiceName = ref<string>(noiThat[0]?.name)
const currentServicesList = ref<any[]>(noiThat[0]?.services)

const setNoiNgoaiThatServicesList = (item: any) => {
    currentServicesList.value = item.services
    currentServiceName.value = item.name
}

const setTronGoiServicesList = () => {
    currentServicesList.value = tronGoi
    currentServiceName.value = 'Set up showroom trọn gói'
}
</script> 
<style scoped lang="scss">
.service {
    min-height: 100vh;
    max-width: var(--dls-max-width);
    margin: 0 auto;
    padding: 32px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &--title {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }


    &--content {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 32px;
        line-height: 1.5;

        &--left {
            width: 300px;

            .item {
                cursor: pointer;

                &:hover {
                    color: var(--dls-primary-color);
                }
            }
        }

        &--right {
            flex: 1;
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            gap: 32px;
            flex-wrap: wrap;

            .item {
                width: 280px;
                border-radius: 16px;
                overflow: hidden;
                border: 1px solid var(--dls-divider-color);

                &--name {
                    padding: 8px;
                    text-align: center;
                }

                img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>