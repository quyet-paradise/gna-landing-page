
import noithat11 from '/service/noi-that/tong-the/am-tran.jpg'
import noithat12 from '/service/noi-that/tong-the/op-tran.jpg'
import noithat13 from '/service/noi-that/tong-the/led-panel.png'
import noithat14 from '/service/noi-that/tong-the/thanh-nhom.png'
import noithat15 from '/service/noi-that/tong-the/den-chum.png'

import noithat21 from '/service/noi-that/diem-nhan/hat-tuong.png'
import noithat22 from '/service/noi-that/diem-nhan/hat-khe-tran.png'
import noithat23 from '/service/noi-that/diem-nhan/roi.png'

import noithat31 from '/service/noi-that/nhiem-vu/bep.jpg'
import noithat32 from '/service/noi-that/nhiem-vu/guong.png'
import noithat33 from '/service/noi-that/nhiem-vu/lam-viec.jpg'

import noithat41 from '/service/noi-that/trang-tri/tuong.png'
import noithat42 from '/service/noi-that/trang-tri/neon-strip.jpg'
import noithat43 from '/service/noi-that/trang-tri/theo-nhu-cau.png'

import ngoaithat11 from '/service/ngoai-that/canh-quan-va-san-vuon/quan-cay.png'
import ngoaithat12 from '/service/ngoai-that/canh-quan-va-san-vuon/tieu-canh-roi.png'
import ngoaithat13 from '/service/ngoai-that/canh-quan-va-san-vuon/am-dat.png'
import ngoaithat14 from '/service/ngoai-that/canh-quan-va-san-vuon/floodlight-hat-bui-cay.png'

import ngoaithat21 from '/service/ngoai-that/kien-truc-va-mat-tien/hat-tuong.png'
import ngoaithat22 from '/service/ngoai-that/kien-truc-va-mat-tien/linear-ngam-tuong.png'
import ngoaithat23 from '/service/ngoai-that/kien-truc-va-mat-tien/grazing-chi-tiet.png'

import ngoaithat31 from '/service/ngoai-that/loi-di-va-an-ninh/am-bac-thang.png'
import ngoaithat32 from '/service/ngoai-that/loi-di-va-an-ninh/cot-tru.png'
import ngoaithat33 from '/service/ngoai-that/loi-di-va-an-ninh/pha-an-ninh.png'

import ngoaithat41 from '/service/ngoai-that/bien-quang-cao-va-bang/sang-mat.png'
import ngoaithat42 from '/service/ngoai-that/bien-quang-cao-va-bang/sang-chan.png'
import ngoaithat43 from '/service/ngoai-that/bien-quang-cao-va-bang/sang-full.png'
import ngoaithat44 from '/service/ngoai-that/bien-quang-cao-va-bang/roi-bien.png'
import ngoaithat45 from '/service/ngoai-that/bien-quang-cao-va-bang/led-module.png'

import ngoaithat51 from '/service/ngoai-that/trang-tri/trang-tri-theo-nhu-cau.jpg'

import ngoaithat61 from '/service/ngoai-that/khan-cap-va-thoat-hiem/exit.png'
import ngoaithat62 from '/service/ngoai-that/khan-cap-va-thoat-hiem/bac-thang-thoat-hiem.jpg'

import featuredService1 from '/featured_service/1.jpg'
import featuredService2 from '/featured_service/2.jpg'
import featuredService3 from '/featured_service/3.jpg'
import featuredService4 from '/featured_service/4.jpg'
import featuredService5 from '/featured_service/5.jpg'
import featuredService6 from '/featured_service/6.png'

import { PATH } from '@/constants/route-constants'
import { SERVICE_TYPES } from '@/constants/service-type-constants'

export const servicesData: any = [
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
                        image: noithat11
                    },
                    {
                        id: 'noithat12',
                        name: 'Đèn ốp trần (Flush‑mount / Surface‑mount)',
                        image: noithat12
                    },
                    {
                        id: 'noithat13',
                        name: 'Đèn LED bảng (LED Panel)',
                        image: noithat13
                    },
                    {
                        id: 'noithat14',
                        name: 'Đèn thanh linear LED (Linear fixtures)',
                        image: noithat14
                    },
                    {
                        id: 'noithat15',
                        name: 'Đèn chùm & đèn thả (chandeliers and pendant lights)',
                        image: noithat15
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
                        image: noithat21
                    },
                    {
                        id: 'noithat22',
                        name: 'Đèn hắt khe trần (Cove lighting)',
                        image: noithat22
                    },
                    {
                        id: 'noithat23',
                        name: 'Đèn rọi (Track lights)',
                        image: noithat23
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
                        image: noithat31
                    },
                    {
                        id: 'noithat32',
                        name: 'Đèn gương trang điểm (Vanity lights)',
                        image: noithat32
                    },
                    {
                        id: 'noithat33',
                        name: 'Đèn đọc sách / đèn bàn (Reading/Table lamps)',
                        image: noithat33
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
                        image: noithat41
                    },
                    {
                        id: 'noithat42',
                        name: 'Đèn dây LED / Neon Flex (LED string & neon flex)',
                        image: noithat42
                    },
                    {
                        id: 'noithat43',
                        name: 'Đèn LED trang trí theo yêu cầu (liên hệ)',
                        image: noithat43
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
                        image: ngoaithat11
                    },
                    {
                        id: 'ngoaithat12',
                        name: 'Đèn rọi tiểu cảnh (Landscape Spotlights / Bullet Lights)',
                        image: ngoaithat12
                    },
                    {
                        id: 'ngoaithat13',
                        name: 'Đèn âm đất (In-ground Uplights)',
                        image: ngoaithat13
                    },
                    {
                        id: 'ngoaithat14',
                        name: 'Đèn floodlight hắt bụi cây',
                        image: ngoaithat14
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
                        image: ngoaithat21
                    },
                    {
                        id: 'ngoaithat22',
                        name: 'Thanh LED linear ngầm tường (Linear Wash Fixtures)',
                        image: ngoaithat22
                    },
                    {
                        id: 'ngoaithat23',
                        name: 'Đèn grazing chi tiết (Grazing Lights)',
                        image: ngoaithat23
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
                        image: ngoaithat31
                    },
                    {
                        id: 'ngoaithat32',
                        name: 'Đèn cột, trụ / đèn đường (Pole-mount Lights)',
                        image: ngoaithat32
                    },
                    {
                        id: 'ngoaithat33',
                        name: 'Đèn pha an ninh (Security Floodlights)',
                        image: ngoaithat33
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
                        image: ngoaithat41
                    },
                    {
                        id: 'ngoaithat42',
                        name: 'Chữ viền sáng (Back-lit / Halo-lit Letters)',
                        image: ngoaithat42
                    },
                    {
                        id: 'ngoaithat43',
                        name: 'Chữ sáng cả mặt & viền (Dual-lit Letters)',
                        image: ngoaithat43
                    },
                    {
                        id: 'ngoaithat44',
                        name: 'Đèn rọi bảng hiệu (Signboard Spotlights)',
                        image: ngoaithat44
                    },
                    {
                        id: 'ngoaithat45',
                        name: 'Màn hình LED module trong nhà & ngoài trời P10, P9, P8,...',
                        image: ngoaithat45
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
                        image: ngoaithat51
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
                        image: ngoaithat61
                    },
                    {
                        id: 'ngoaithat62',
                        name: 'Đèn chạy mép bậc thang',
                        image: ngoaithat62
                    }
                ]
            }
        ]
    },
    {
        id: SERVICE_TYPES.TRON_GOI,
        name: 'Dịch vụ trọn gói thi công - thiết kế nội thất - ánh sáng',
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

export const featuredServicesData: any = [
    {
        image: featuredService1,
        text: 'Thi công đèn LED sân vườn',
        link: PATH.SAN_VUON_SERVICE
    },
    {
        image: featuredService2,
        text: 'Thi công đèn LED nội thất<br /> nhà ở và văn phòng',
        link: PATH.NOI_THAT_SERVICE
    },
    {
        image: featuredService3,
        text: 'Thi công đèn LED bảng biển quảng cáo',
        link: PATH.BIEN_QUANG_CAO_SERVICE
    },
    {
        image: featuredService4,
        text: 'Thi công đèn LED nhà hàng,<br /> khách sạn, Spa, cafe',
        link: PATH.NHA_HANG_SERVICE
    },
    {
        image: featuredService5,
        text: 'Setup showroom, nhà hàng trọn gói',
        link: PATH.TRON_GOI_SERVICE
    },
    {
        image: featuredService6,
        text: 'Màn hình LED module',
        link: PATH.MODULE_SERVICE
    },
]