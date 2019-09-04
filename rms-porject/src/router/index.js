import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../components/Home.vue"
import Reg from "../components/Reg.vue"

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [{
        name: 'home',
        path: '/home',
        component: Home
    }, {
        name: 'reg',
        path: '/reg',
        component: Reg
    }, {
        path: '/',
        redirect: {
            name: 'reg'
        }
    }]
})

export default router;