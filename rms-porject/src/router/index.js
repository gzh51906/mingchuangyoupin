import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/Home.vue"
import Reg from "../components/Reg.vue"

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
        name: 'home',
        path: '/home',
        component: Home,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("user") == null) {
                next({
                    path: '/reg'
                });
            } else {
                next();
            }
        }
    }, {
        name: 'reg',
        path: '/reg',
        component: Reg,
        beforeEnter: (to, from, next) => {
            localStorage.clear();
            next();
        }
    }, {
        path: '/',
        redirect: {
            name: 'reg'
        }
    }]
})

export default router;