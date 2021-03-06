import Vue from 'vue'
// 引入vue-router模块
import VueRouter from 'vue-router'
// 引入各个组件
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'
import Classify from '../components/Classify.vue'
import Special from '../components/Special.vue'
import My from '../components/My.vue'
import Reg from '../components/Reg.vue'
import HomeClass from '../childcomponents/home/Classifys.vue'
import Details from '../childcomponents/classify/Details.vue'
import Classification from '../childcomponents/classify/classification.vue'
import Searchjw from '../childcomponents/classify/search.vue'
import Login from '../components/Login.vue'

// 安装（使用）路由
Vue.use(VueRouter);
// 实例化router并配置参数
let router = new VueRouter({
    // mode:'history' -> /xxx ,// 默认hash -> /#/xxx  
    mode: 'history',
    routes: [{
        // 当url路径为/home时渲染home组件到<router-view>上
        name: 'home',
        path: '/home',
        component: Home
    },
    {
        name: 'cart',
        path: '/cart',
        component: Cart,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("username") == null) {
                next({
                    path: '/login'
                })
            } else {
                next();

            }
        }
    },
    {
        name: 'classify',
        path: '/classify',
        component: Classify
    },
    {
        name: 'classification',
        path: 'classification',
        component: Classification
    },
    {
        name: 'details',
        path: '/details/:id',
        component: Details
    },
    {
        name: 'special',
        path: '/special',
        component: Special
    },

    {
        name: 'my',
        path: '/my',
        component: My,
        beforeEnter: (to, from, next) => {
            if (localStorage.getItem("username") == null) {
                next({
                    path: '/login'
                })
            } else {
                next();

            }
        }
    },
    {
        name: 'homeclass',
        path: '/homeclass/:id',
        component: HomeClass
    }, {
        name: 'reg',
        path: '/reg',
        component: Reg
    },
    {
        name: 'searchjw',
        path: '/searchjw',
        component: Searchjw
    },
    {
        name: 'searchjw',
        path: '/searchjw',
        component: Searchjw

    },
    {
        name: 'reg',
        path: '/reg',
        component: Reg
    }, {
        name: 'login',
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
            localStorage.clear();
            next();
        }
    },

    {
        // 当浏览器路径为/时，重定向到/home
        path: '/',
        redirect: {
            name: 'home'
        }

    }
    ]
})

export default router;