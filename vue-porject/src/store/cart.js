// import axios from 'axios';

export default {
    state: {
        cartlist: []
    },
    getters: {
        totalprice(state) {
            return state.cartlist.reduce(function (prev, item) {
                return prev + item.goods_price * item.qty
            })
        }
    },
    mutations: {
        additem(state, goods) {
            state.cartlist.push(goods);
        },
        removeitem(state, id) {
            state.cartlist = state.cartlist.filter(item => {
                item.goods_id === id
            })
        },
        changeqty(state, { qty, id }) {
            state.cartlist = state.cartlist.map(item => {
                if (item.id === id) {
                    item.qty = qty;
                }
                return item;
            })
        },
        clearcart(state) {
            state.cartlist = []
        }
    },
    actions: {
        // changeQtyAsync(context, { id, qty }) {
        //     axios.get("").then(({data}))=>{}
        // }
    }
}