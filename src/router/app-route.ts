import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/homepage/HomePage.vue')
const Service = () => import('@/containers/service/Service.vue')
const Introduce = () => import('@/containers/introduce/Introduce.vue')
const Project = () => import('@/containers/project/Project.vue')
const Contact = () => import('@/containers/contact/Contact.vue')
const SanVuonService = () => import('@/containers/featured_service/SanVuonService.vue')
const NoiThatService = () => import('@/containers/featured_service/NoiThatService.vue')
const BienQuangCaoService = () => import('@/containers/featured_service/BienQuangCaoService.vue')
const NhaHangService = () => import('@/containers/featured_service/NhaHangService.vue')
const TronGoiService = () => import('@/containers/featured_service/TronGoiService.vue')
const ModuleService = () => import('@/containers/featured_service/ModuleService.vue')
const NoiThatDetail = () => import('@/containers/service/detail/NoiThatDetail.vue')
const NgoaiThatDetail = () => import('@/containers/service/detail/NgoaiThatDetail.vue')
const TronGoiDetail = () => import('@/containers/service/detail/TronGoiDetail.vue')
const BanBuonLedDetail = () => import('@/containers/service/detail/BanBuonLedDetail.vue')

const routes = [
    { 
        path: PATH.HOME, 
        name: ROUTE_NAME.HOME, 
        component: Home,
        meta: { title: ` ⊹ ${ROUTE_NAME.HOME}` }
    },
    {
        path: PATH.SERVICE, 
        name: ROUTE_NAME.SERVICE, 
        component: Service,
        meta: { title: ` ⊹ ${ROUTE_NAME.SERVICE}` }
    },
    {
        path: PATH.INTRODUCE, 
        name: ROUTE_NAME.INTRODUCE, 
        component: Introduce,
        meta: { title: ` ⊹ ${ROUTE_NAME.INTRODUCE}` }
    },
    {
        path: PATH.PROJECT, 
        name: ROUTE_NAME.PROJECT, 
        component: Project,
        meta: { title: ` ⊹ ${ROUTE_NAME.PROJECT}` }
    },
    {
        path: PATH.CONTACT, 
        name: ROUTE_NAME.CONTACT, 
        component: Contact,
        meta: { title: ` ⊹ ${ROUTE_NAME.CONTACT}` }
    },
    {
        path: PATH.SAN_VUON_SERVICE, 
        name: ROUTE_NAME.SAN_VUON_SERVICE, 
        component: SanVuonService,
        meta: { title: ` ⊹ ${ROUTE_NAME.SAN_VUON_SERVICE}` }
    },
    {
        path: PATH.NHA_HANG_SERVICE, 
        name: ROUTE_NAME.NHA_HANG_SERVICE, 
        component: NhaHangService,
        meta: { title: ` ⊹ ${ROUTE_NAME.NHA_HANG_SERVICE}` }
    },
    {
        path: PATH.NOI_THAT_SERVICE, 
        name: ROUTE_NAME.NOI_THAT_SERVICE, 
        component: NoiThatService,
        meta: { title: ` ⊹ ${ROUTE_NAME.NOI_THAT_SERVICE}` }
    },
    {
        path: PATH.TRON_GOI_SERVICE, 
        name: ROUTE_NAME.TRON_GOI_SERVICE, 
        component: TronGoiService,
        meta: { title: ` ⊹ ${ROUTE_NAME.TRON_GOI_SERVICE}` }
    },
    {
        path: PATH.BIEN_QUANG_CAO_SERVICE, 
        name: ROUTE_NAME.BIEN_QUANG_CAO_SERVICE, 
        component: BienQuangCaoService,
        meta: { title: ` ⊹ ${ROUTE_NAME.BIEN_QUANG_CAO_SERVICE}` }
    },
    {
        path: PATH.MODULE_SERVICE, 
        name: ROUTE_NAME.MODULE_SERVICE, 
        component: ModuleService,
        meta: { title: ` ⊹ ${ROUTE_NAME.MODULE_SERVICE}` }
    },
    {
        path: PATH.NOI_THAT_SERVICE_DETAIL, 
        name: ROUTE_NAME.NOI_THAT_SERVICE_DETAIL, 
        component: NoiThatDetail,
        meta: { title: ` ⊹ ${ROUTE_NAME.NOI_THAT_SERVICE_DETAIL}` }
    },
    {
        path: PATH.NGOAI_THAT_SERVICE_DETAIL, 
        name: ROUTE_NAME.NGOAI_THAT_SERVICE_DETAIL, 
        component: NgoaiThatDetail,
        meta: { title: ` ⊹ ${ROUTE_NAME.NGOAI_THAT_SERVICE_DETAIL}` }
    },
    {
        path: PATH.TRON_GOI_SERVICE_DETAIL, 
        name: ROUTE_NAME.TRON_GOI_SERVICE_DETAIL, 
        component: TronGoiDetail,
        meta: { title: ` ⊹ ${ROUTE_NAME.TRON_GOI_SERVICE_DETAIL}` }
    },
    {
        path: PATH.BAN_BUON_LED_SERVICE_DETAIL, 
        name: ROUTE_NAME.BAN_BUON_LED_SERVICE_DETAIL, 
        component: BanBuonLedDetail,
        meta: { title: ` ⊹ ${ROUTE_NAME.BAN_BUON_LED_SERVICE_DETAIL}` }
    },
    {
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]
