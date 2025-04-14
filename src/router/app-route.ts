import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/homepage/HomePage.vue')
const Service = () => import('@/containers/service/Service.vue')

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
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]
