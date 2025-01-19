import { createRouter, createWebHistory } from 'vue-router';

// Import Komponen
import Home from './pages/Home.vue';
import Detail from './pages/Detail.vue';
import Checkout from './pages/Checkout.vue';
import Success from './pages/Success.vue';

// Definisikan Rute
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/detail', name: 'detail', component: Detail },
    { path: '/checkout', name: 'checkout', component: Checkout },
    { path: '/success', name: 'success', component: Success },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;