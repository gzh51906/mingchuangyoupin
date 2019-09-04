// import axios from 'axios';

export default {
    state: {
        cartlist: []
    },
    getters: {
        totalprice: function (state) {
            let result = 0
            state.cartlist.forEach(element => {
                result += element.qty * element.price * Number(element.ischeck)
            });
            return result;
        },
        totalqty(state) {
            let result = 0
            state.cartlist.forEach(element => {
                result += element.qty * Number(element.ischeck)
            });
            return result;
        }
    },
    mutations: {
        additem(state, goods) {
            state.cartlist.push(goods);
        },
        removeitem(state, id) {
            window.console.log(id);
            for (let i = 0; i < id.length; i++) {
                for (let j = 0; j < state.cartlist.length; j++) {
                    if (state.cartlist[j].id == id[i]) {
                        window.console.log(j);
                        state.cartlist.splice(j, 1);
                    }
                }
            }
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
        // getusercart(context, { username }) {
        //     axios.get('http://localhost:5786/usercart/', {
        //         params: {
        //             username: username
        //         }
        //     }).then((data) => {
        //         window.console.log(data);
        //     })
        // }
        // changeQtyAsync(context, { id, qty }) {
        //     // context：类似与store
        //     window.console.log('changeQtyAsync:', qty, id)
        //     // 需要向服务器获取库存信息，再修改数量
        //     axios.get('http://localhost:5786/goods/kucun').then(({ data }) => {
        //         let kucun = data.data;
        //         // 库存不足
        //         if (qty > kucun) {
        //             qty = kucun;
        //         }
        //         context.commit('changeQty', { id, qty })
        //     })

        //     return qty;
        // }
    }
}