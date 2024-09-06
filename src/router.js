import { createWebHistory, createRouter } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('./App.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), //html file history mode
    routes
})

export default router;