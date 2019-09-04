<template>
  <div class="cartbox">
    <header>
      <h3>购物车</h3>
    </header>
    <main>
      <div class="listbox" v-for="(item,idx) in list" :key="idx">
        <div class="listdiv1">
          <van-checkbox v-model="item.ischeck" checked-color="#FF0000"></van-checkbox>
        </div>
        <div class="listdiv2">
          <van-card
            :num="item.qty"
            price="2.00"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <div class="input" slot="footer">
              <van-stepper v-model="item.qty" min="1" max="8" />
            </div>
          </van-card>
        </div>
      </div>
      <div class="tuijian">
        <h4>猜您喜欢</h4>
        <el-row class="listt" :gutter="20">
          <el-col :span="12" v-for="(item,idx) in goodlist" :key="idx">
            <div class="grid-content bg-purple" :id="item.id" @click="gotodetails(item.id)">
              <img :src="item.imgurl" alt />
              <h4>{{item.title}}</h4>
              <p>{{item.price}}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </main>
    <footer>
      <div class="fdiv1">
        <van-checkbox v-model="checked" checked-color="#FF0000">已选</van-checkbox>
      </div>
      <div class="fdiv2">
        <p>
          <span>￥50</span>
        </p>
        <p>总额：￥50.00 立减￥0</p>
      </div>
      <div class="fdiv3">下单</div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Card, Checkbox, CheckboxGroup, Stepper } from "vant";
Vue.use(Card)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper);
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      checked: true,
      list: [{ ischeck: true, qty: 2 }, { ischeck: true, qty: 6 }],
      goodlist: []
    };
  },
  computed: {
    ...mapState({
      cartlist(state) {
        return state.cart.cartlist;
      }
    }),
    ...mapGetters(["totalprice"])
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    ...mapMutations({
      changeQty: "changeqty",
      remove: "removeitem",
      clear: function(commit, payload) {
        commit("clearcart");
      }
    }),
    ...mapActions(["changeQtyAsync"]),

    goto(id) {
      this.$router.push(`/goods/${id}`);
    },
    async getlistdata() {
      let { data } = await this.$axios.get("http://localhost:5786/classify/", {
        params: {
          type: "居家",
          charset: "utf8"
        }
      });
      // this.listdata.listtop = data.data.fenlei;
      this.goodlist = data.data.tuijian;
      // console.log(this.goodlist);

      // this.$forceUpdate();
      console.log(this.goodlist);
    }
  },
  created() {
    this.getlistdata();
  }
};
</script>
<style lang="scss" scoped>
.cartbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 1.44rem;
  color: rgb(51, 51, 51);
  font-size: 0.32rem;
  display: flex;
  flex-direction: column;
  header {
    width: 10rem;
    margin: auto;
    height: 1.146667rem;
    color: #000 !important;
    h3 {
      text-align: center;
      line-height: 1.14667rem;
      height: 100%;
      font-size: 0.42rem;
    }
  }
  main {
    background-color: #efefff;
    width: 10rem;
    margin: auto;
    flex: 1;
    overflow: auto;
    padding-top: 0.266667rem;

    .listbox {
      display: flex;
      height: 2.826667rem;
      justify-content: flex-start;
      background-color: #fafafa;
      margin-bottom: 1px;
      .listdiv1 {
        width: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .listdiv2 {
        width: 90%;
        .input {
          width: 2.666667rem;
          height: 0.4rem;
          margin-top: -0.833333rem;
          float: right;
        }
      }
    }
    .tuijian {
      background: #ffffff;
      h4 {
        padding: 0.266667rem;
        text-align: center;
        font-size: 0.4rem;
      }
      .listt {
        background: #fff;
        .grid-content {
          padding: 0.133333rem;
          box-sizing: border-box;
          img {
            width: 100%;
            background: #eee;
          }
          h4 {
            color: #000;
            font-size: 0.36rem;
            text-align: left;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            color: #f00;
            text-align: left;
            margin-bottom: 0.133333rem;
          }
        }
      }
    }
  }
  footer {
    width: 10rem;
    margin: auto;
    height: 1.333333rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    div {
      //   display: flex;
      // flex-direction: column;
      // justify-content: center;
    }
    .fdiv1 {
      padding: 0.26666rem;
      box-sizing: border-box;
      width: 2rem;
      white-space: nowrap;
    }
    .fdiv2 {
      flex: 1;
      p {
        padding-right: 0.266667rem;
        box-sizing: border-box;
        width: 100%;
        text-align: right;
        color: #333;
        span {
          color: firebrick;
        }
      }
    }
    .fdiv3 {
      width: 2.333333rem;
      background: #ff0000;
      height: 100%;
      text-align: center;
      line-height: 1.333333rem;
    }
  }
}
</style>