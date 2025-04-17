import { PATH, ROUTE_NAME } from '../constants/route-constants'

const Home = () => import('@/containers/homepage/HomePage.vue')
const Service = () => import('@/containers/service/Service.vue')
const Introduce = () => import('@/containers/introduce/Introduce.vue')
const Project = () => import('@/containers/project/Project.vue')
const Contact = () => import('@/containers/contact/Contact.vue')

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
        path: "/:catchAll(.*)", // Unrecognized path automatically matches 404
        redirect: PATH.HOME,
    },
]

export default [
    ...routes,
]
