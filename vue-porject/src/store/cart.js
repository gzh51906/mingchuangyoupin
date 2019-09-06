import axios from 'axios';

export default {
    state: {
        cartlist: []
    },
    getters: {
        totalprice: function (state) {
            let result = 0
            state.cartlist.forEach(element => {
                result += (element.qty * element.price) * Number(Boolean(element.ischeck));
            });
            return result;
        },
        totalqty(state) {
            let result = 0
            state.cartlist.forEach(element => {
                result += Number(Boolean(element.ischeck))
                // * Number(element.ischeck)
            });
            return result;
        }
    },
    mutations: {
        additem(state, goods) {

            axios.delete('http://localhost:5786/usercart', {
                data: {
                    username: goods.username,
                    id: goods.id
                }
            }).then(() => {
                axios.post("http://localhost:5786/usercart", goods).then(() => {
                    state.cartlist.push(goods);

                })
            })


        },
        removeitem(state, { username, id }) {
            for (let i = 0; i < id.length; i++) {
                for (let j = 0; j < state.cartlist.length; j++) {
                    if (state.cartlist[j].id == id[i]) {
                        axios.delete('http://localhost:5786/usercart', {
                            data: {
                                username: username,
                                id: state.cartlist[j].id
                            }
                        }).then(() => {
                        })
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
        },
        getuserdata(state, { username }) {
            axios.get('http://localhost:5786/usercart/', {
                params: {
                    username: username
                }
            }).then((data) => {
                let abcd = data.data.data;
                abcd.forEach(e => {
                    e.ischeck = Boolean(e.ischeck);
                });
                state.cartlist = abcd;
            })
        }
    },
    actions: {
        getusercart(context, { username }) {

            axios.get('http://localhost:5786/usercart/', {
                params: {
                    username: username
                }
            }).then((data) => {
                this.state.cartlist = data.data.data
            })
        }
    }
}