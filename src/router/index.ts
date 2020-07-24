import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../page/home-page/home.vue';

Vue.use(VueRouter);

// tslint:disable-next-line:array-type
const routes: Array<RouteConfig> = [
    {
        path: '/',
        // tslint:disable-next-line:object-literal-sort-keys
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        // tslint:disable-next-line:object-literal-sort-keys
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    }
];

const router = new VueRouter({
    mode: 'history',
    // tslint:disable-next-line:object-literal-sort-keys
    base: process.env.BASE_URL,
    routes,
});

export default router;
