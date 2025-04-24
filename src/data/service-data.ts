
import service2 from '/featured_service/2.jpg'
import { PATH } from '@/constants/route-constants'
import { SERVICE_TYPES } from '@/constants/service-type-constants'

const servicesData: any = [
    {
        id: SERVICE_TYPES.NOI_THAT,
        name: 'Thi công đèn LED nội thất',
        url: PATH.NOI_THAT_SERVICE_DETAIL,
        led_types: [
            {
                id: 'noithat1',
                name: 'Chiếu sáng tổng thể (Ambient / General Lighting)',
                leds: [
                    {
                        id: 'noithat11',
                        name: 'Đèn âm trần (Recessed downlights)',
                        image: service2
                    },
                    {
                        id: 'noithat12',
                        name: 'Đèn ốp trần (Flush‑mount / Surface‑mount)',
                        image: service2
                    },
                    {
                        id: 'noithat13',
                        name: 'Đèn LED bảng (LED Panel)',
                        image: service2
                    },
                    {
                        id: 'noithat14',
                        name: 'Đèn thanh linear LED (Linear fixtures)',
                        image: service2
                    },
                    {
                        id: 'noithat15',
                        name: 'Đèn chùm & đèn thả (chandeliers and pendant lights)',
                        image: service2
                    },
                ]
            },
            {
                id: 'noithat2',
                name: 'Chiếu sáng điểm nhấn (Accent Lighting)',
                leds: [
                    {
                        id: 'noithat21',
                        name: 'Đèn hắt tường (Wall washer fixtures)',
                        image: service2
                    },
                    {
                        id: 'noithat22',
                        name: 'Đèn hắt khe trần (Cove lighting)',
                        image: service2
                    },
                    {
                        id: 'noithat23',
                        name: 'Đèn rọi (Track lights)',
                        image: service2
                    }
                ]
            },
            {
                id: 'noithat3',
                name: 'Chiếu sáng nhiệm vụ (Task Lighting)',
                leds: [
                    {
                        id: 'noithat31',
                        name: 'Đèn dọc hộc bếp / kệ làm việc (Under-cabinet LED strips)',
                        image: service2
                    },
                    {
                        id: 'noithat32',
                        name: 'Đèn gương trang điểm (Vanity lights)',
                        image: service2
                    },
                    {
                        id: 'noithat33',
                        name: 'Đèn đọc sách / đèn bàn (Reading/Table lamps)',
                        image: service2
                    }
                ]
            },
            {
                id: 'noithat4',
                name: 'Chiếu sáng trang trí (Decorative Lighting)',
                leds: [
                    {
                        id: 'noithat41',
                        name: 'Đèn tường trang trí (Decorative wall sconces)',
                        image: service2
                    },
                    {
                        id: 'noithat42',
                        name: 'Đèn dây LED / Neon Flex (LED string & neon flex)',
                        image: service2
                    }
                ]
            }
        ]
    },
    {
        id: SERVICE_TYPES.NGOAI_THAT,
        name: 'Thi công đèn LED ngoại thất',
        url: PATH.NGOAI_THAT_SERVICE_DETAIL,
        led_types: [
            {
                id: 'ngoaithat1',
                name: 'Chiếu sáng cảnh quan & sân vườn (Garden & Landscape Lighting)',
                leds: [
                    {
                        id: 'ngoaithat11',
                        name: 'Đèn LED quấn cây (Tree Wrap Lights)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat12',
                        name: 'Đèn rọi tiểu cảnh (Landscape Spotlights / Bullet Lights)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat13',
                        name: 'Đèn âm đất (In-ground Uplights)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat14',
                        name: 'Đèn floodlight hắt bụi cây',
                        image: service2
                    }
                ]
            },
            {
                id: 'ngoaithat2',
                name: 'Chiếu sáng kiến trúc & mặt tiền (Facade & Architectural Lighting)',
                leds: [
                    {
                        id: 'ngoaithat21',
                        name: 'Đèn hắt tường (LED Wall Washers)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat22',
                        name: 'Thanh LED linear ngầm tường (Linear Wash Fixtures)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat23',
                        name: 'Đèn grazing chi tiết (Grazing Lights)',
                        image: service2
                    }
                ]
            },
            {
                id: 'ngoaithat3',
                name: 'Chiếu sáng lối đi & an ninh (Pathway & Security Lighting)',
                leds: [
                    {
                        id: 'ngoaithat31',
                        name: 'Đèn âm bậc thang (Step Lights)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat32',
                        name: 'Đèn cột, trụ / đèn đường (Pole-mount Lights)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat33',
                        name: 'Đèn pha an ninh (Security Floodlights)',
                        image: service2
                    }
                ]
            },
            {
                id: 'ngoaithat4',
                name: 'Chiếu sáng biển quảng cáo & bảng hiệu (Signage & Billboard Lighting)',
                leds: [
                    {
                        id: 'ngoaithat41',
                        name: 'Chữ sáng mặt (Front-lit Channel Letters)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat42',
                        name: 'Chữ viền sáng (Back-lit / Halo-lit Letters)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat43',
                        name: 'Chữ sáng cả mặt & viền (Dual-lit Letters)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat44',
                        name: 'Đèn rọi bảng hiệu (Signboard Spotlights)',
                        image: service2
                    }
                ]
            },
            {
                id: 'ngoaithat5',
                name: 'Chiếu sáng trang trí (Decorative)',
                leds: [
                    {
                        id: 'ngoaithat51',
                        name: 'Đèn LED trang trí theo nhu cầu (đa dạng mẫu mã)',
                        image: service2
                    }
                ]
            },
            {
                id: 'ngoaithat6',
                name: 'Chiếu sáng khẩn cấp & thoát hiểm (Emergency & Egress Lighting)',
                leds: [
                    {
                        id: 'ngoaithat61',
                        name: 'Đèn sự cố / exit sign LED (Emergency Bulkhead Lights)',
                        image: service2
                    },
                    {
                        id: 'ngoaithat62',
                        name: 'Đèn chạy mép bậc thang',
                        image: service2
                    }
                ]
            }
        ]
    },
    {
        id: SERVICE_TYPES.TRON_GOI,
        name: 'Gói trọn gói thi công - thiết kế từ nội thất - ánh sáng',
        url: PATH.TRON_GOI_SERVICE_DETAIL,
        led_types: []
    },
    {
        id: SERVICE_TYPES.BAN_BUON,
        name: 'Bán buôn đèn led giá xưởng',
        url: PATH.BAN_BUON_LED_SERVICE_DETAIL,
        led_types: []
    }
]

export default servicesData
