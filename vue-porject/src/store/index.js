import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart'
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        classifyIdx: 0,
    },
    mutations: {
        chanfeClassifyIdx(state, idx) {
            state.classifyIdx = idx;
        }
    },
    modules: {
        cart
    }
})

export default store;