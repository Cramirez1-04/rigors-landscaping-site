import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Gallery from '../views/Gallery.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/gallery', component: Gallery }
]

const router = createRouter({
    history: createWebHistory( ),
    routes,
})

export default router