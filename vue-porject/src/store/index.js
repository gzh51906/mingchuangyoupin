import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        classifyIdx: 0,
        state: {
            classifyIdx: 0,
            imgurl: 'http://s2.hgcang.com/bsimg/ec/public/images/14/c0/14c0fe41ac0a2e4608c557479b329c33.jpg?x-oss-process=style/high'
        },
        mutations: {
            chanfeClassifyIdx(state, idx) {
                state.classifyIdx = idx;
            },
            imgurl(state, item) {
                state.imgurl = item;
            }
        },
        modules: {
            cart
        }
    }
})

export default store;