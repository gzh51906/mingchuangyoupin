<template>
  <div class="cartbox">
    <header>
      <h3>购物车</h3>
      <div @click="changexiadan">{{isxiadantext}}</div>
    </header>
    <nav v-if="isxiadan">
      <van-notice-bar mode="closeable">中秋福利，广大程序猿同志们相亲见面会于中秋当日在千锋教育HTML5-1906班盛大召开</van-notice-bar>
    </nav>
    <main>
      <div class="listbox" v-for="(item,idx) in cartlist" :key="idx" :id="item.id">
        <div class="listdiv1">
          <van-checkbox v-model="item.ischeck" checked-color="#FF0000" @change="add125(item.id)"></van-checkbox>
        </div>
        <div class="listdiv2">
          <van-card
            :num="item.qty"
            :price="item.price"
            :title="item.title"
            :thumb="item.imgurl"
            @click-thumb="gotodetails(item.id)"
          >
            <div class="input" slot="footer">
              <van-stepper v-model="item.qty" min="1" max="8" />
            </div>
          </van-card>
        </div>
      </div>
      <div class="tuijian">
        <h4>猜您喜欢</h4>
        <el-row class="listt">
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
    <van-dialog
      class="tancuang"
      @confirm="ddconfirm"
      @cancel="ddcancel"
      v-model="show"
      title="扫码付款"
      show-cancel-button
    >
      <img src="1567737173.png" />
    </van-dialog>
    <footer>
      <div class="fdiv1">
        <van-checkbox v-model="checked" @click="add521" checked-color="#FF0000">已选({{totalqty}})</van-checkbox>
      </div>
      <div class="fdiv2">
        <p>
          <span>￥{{totalprice.toFixed(2)}}</span>
        </p>
        <p>总额：￥{{totalprice.toFixed(2)}} 立减￥0</p>
      </div>
      <div class="fdiv3" v-if="isxiadan" @click="changeerweima">下单</div>
      <div class="fdiv4" v-if="!isxiadan" @click="removeinbianji">删除</div>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Card,
  Checkbox,
  CheckboxGroup,
  Stepper,
  Dialog,
  NoticeBar
} from "vant";

Vue.use(Card)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Stepper)
  .use(Dialog)
  .use(NoticeBar);
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { log } from "util";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      show: false,
      username: "",
      isxiadan: true,
      isxiadantext: "编辑",
      checked: true,
      // list: [{ ischeck: true, qty: 2 }, { ischeck: true, qty: 6 }],
      goodlist: []
    };
  },
  computed: {
    ...mapState({
      cartlist(state) {
        return state.cart.cartlist;
      }
    }),
    ...mapGetters(["totalprice", "totalqty"])
  },
  methods: {
    ddconfirm() {
      // console.log("点击了确认按钮");
      // this.removeinbianji(); //在这之前应该先提交数据至订单表,应该去掉购物车里面已经购买的
      // this.$router.push({ name: "my", params: { username: this.username } });//跳转至订单页面
    },
    ddcancel() {
      // console.log("点击了取消按钮");
    },
    changeerweima() {
      this.show = !this.show;
    },
    removeinbianji() {
      let arrT = this.cartlist.filter(item => item.ischeck);
      let attr = [];
      arrT.forEach(e => {
        attr.push(e.id);
      });
      this.remove({ id: attr, username: this.username });
      this.$forceUpdate();
    },
    changexiadan() {
      this.isxiadan = !this.isxiadan;
      if (this.isxiadan) {
        this.isxiadantext = "编辑";
      } else {
        this.isxiadantext = "完成";
      }
      Dialog.alert({
        message: "您将离开当前页面"
      }).then(() => {
        // on close
      });
    },
    add125(id) {
      for (let i = 0; i < this.cartlist.length; i++) {
        if (this.cartlist[i].ischeck == false) {
          this.checked = false;
          break;
        } else {
          this.checked = true;
        }
      }
    },
    add521() {
      this.cartlist.forEach(element => {
        element.ischeck = !this.checked;
      });
    },
    ...mapMutations({
      getcart: "getuserdata",
      changeQty: "changeqty",
      remove: "removeitem",
      clear: function(commit, payload) {
        commit("clearcart");
      }
    }),
    ...mapActions(["getusercart"]),

    async getlistdata() {
      let { data } = await this.$axios.get("../classify/", {
        params: {
          type: "居家",
          charset: "utf8"
        }
      });
      this.goodlist = data.data.tuijian;
    },
    gotodetails(id) {
      this.$router.push({ name: "details", params: { id } });
    }
  },
  created() {
    this.getlistdata();
    this.username = localStorage.getItem("username");
    this.getcart({ username: this.username });
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
    div {
      position: absolute;
      top: 0.573333rem;
      right: 0.266667rem;
      transform: translate(0, -50%);
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
      position: relative;
      display: flex;
      // height: 2.826667rem;
      justify-content: flex-start;
      background-color: #fafafa;
      margin-bottom: 2px;
      .listdiv1 {
        width: 10%;
        // height: 100%;
        position: absolute;
        top: 0;
        bottom: 0px;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .listdiv2 {
        margin-left: 10%;
        width: 90%;
        .input {
          position: absolute;
          right: 0.133333rem;
          bottom: 0.133333rem;
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
        width: 100%;
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
            margin: 0;
            box-sizing: border-box;
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
  .tancuang {
    width: 80%;
    height: 50%;
    overflow: hidden;
    img {
      width: 80%;
      display: block;
      margin: auto;
    }
  }
  footer {
    width: 10rem;
    margin: auto;
    height: 1.333333rem;
    color: #ffffff;
    display: flex;
    align-items: center;

    .fdiv1 {
      padding: 0.26666rem;
      box-sizing: border-box;
      width: 3rem;
      white-space: nowrap;
      color: #bbb;
    }
    .fdiv2 {
      flex: 1;
      p {
        padding-right: 0.1rem;
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
      background: #58bc58;
      height: 100%;
      text-align: center;
      line-height: 1.333333rem;
    }
    .fdiv4 {
      width: 2.333333rem;
      background: #ff0000;
      height: 100%;
      text-align: center;
      line-height: 1.333333rem;
    }
  }
}
</style>