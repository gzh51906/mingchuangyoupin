<template>
  <div class="detailsbox">
    <header>
      <el-row>
        <el-col :span="6">
          <i class="icon1 el-icon-house" @click="gohome"></i>
        </el-col>
        <el-col :span="12">
          <h3>{{data.title}}</h3>
        </el-col>
        <el-col :span="6">
          <i class="icon2 el-icon-shopping-cart-1"></i>
          <i class="icon2 el-icon-search"></i>
        </el-col>
      </el-row>
    </header>
    <main>
      <van-swipe :autoplay="3000" indicator-color="#ff0000">
        <van-swipe-item>
          <img :src="data.imgsrc" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="data.imgsrc" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="data.imgsrc" alt />
        </van-swipe-item>
      </van-swipe>
      <div class="price">
        <el-row class="pricebox">
          <el-col class="boxleft" :span="17">
            <h4>{{data.title}}</h4>
            <p>质量有保证，买了更放心</p>
            <p>
              <span>￥{{data.price}}</span>
              <del>￥{{data.price}}</del>
            </p>
          </el-col>
          <el-col class="boxright" style="border-left:1px solid #ccc" :span="7">
            <div>
              <p class="rightp1">6</p>
              <p class="rightp2">用户评价</p>
              <p class="rightp3">查看</p>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="guige">
        <div class="ggdiv ggdiv1">
          <span>规格选择</span>
          <van-icon style="float:right;line-height:1.146667rem;color:#7f7f7f;" name="arrow" />
          <span style="float:right;line-height:1.146667rem;color:#7f7f7f;">已选择规格...</span>
        </div>
        <div class="ggdiv ggdiv2">
          <span>购买数量</span>
          <van-stepper class="inoutforsuliang" v-model="value" min="1" max="8" integer />
        </div>
        <div class="ggdiv ggdiv3">
          <span>服务：</span>
          <van-icon style="float:right;line-height:1.146667rem;color:#7f7f7f;" name="arrow" />
          <div class="m">
            <span>30天无忧退货</span>
            <span>2个工作日退款</span>
            <span>满79元免邮</span>
            <span>名创优品自营</span>
          </div>
        </div>
      </div>
      <div class="img">
        <img src="../../images/timg.jpg" alt />
      </div>
      <div class="nameboxout">
        <p class="namebox">
          <el-divider class="titlediv">售后说明</el-divider>
        </p>
      </div>
      <div class="problem">
        <div class="item">
          <p>关于快递</p>
          <div>本店委托“韵达快递”“申通快递”“邮政小包”等进行商品配送，系统将根据订单地址选择合适快递，不支持指定快递。</div>
        </div>
        <div class="item">
          <p>关于订单</p>
          <div>本店大促期间不支持修改收货地址及商品属性，其他时间请您寻求在线人工客服协助处理。</div>
        </div>
        <div class="item">
          <p>关于运费</p>
          <div>本店单笔订单实际支付满79元（减去优惠金额后）包邮，不满79元，每单收取8元运费（港澳台地区暂不支持发货）。</div>
        </div>
        <div class="item">
          <p>关于发货</p>
          <div>本店订单支付成功后48小时内发货，预售商品以实际预售发货时间为准。</div>
        </div>
        <div class="item">
          <p>关于发票</p>
          <div>本店默认开具电子增值税普通发票，麻烦您在订单确认收货后，联系在线人工客服登记开票信息，我们将会在7个工作日内完成开具并发送到您登记的电子邮箱。</div>
        </div>
        <div class="item">
          <p>关于包装</p>
          <div>本店商品不断在更新迭代中，不同批次的部分商品可能会存在新旧包装交替发货，这种情况是不属于商品问题。</div>
        </div>
        <div class="item">
          <p>关于色差</p>
          <div>本店商品图片均为100%实物拍摄，但由于光线、角度和显示器对比度不同，会有些许色差存在。</div>
        </div>
      </div>
      <div class="nameboxout">
        <p class="namebox">
          <el-divider class="titlediv">大家在看</el-divider>
        </p>
      </div>
      <el-row class="tuijianlist" :gutter="20">
        <el-col :span="12" v-for="(item,idx) in goodlist" :key="idx">
          <div class="grid-content bg-purple" @click="updatedetails(item.uid)">
            <img :src="item.imgsrc" alt />
            <h4>{{item.title}}</h4>
            <p>￥{{item.price}}</p>
          </div>
        </el-col>
      </el-row>
    </main>
    <footer>
      <el-row>
        <el-col :span="4">
          <i class="el-icon-headset"></i>
        </el-col>
        <el-col :span="4">
          <i class="el-icon-star-off"></i>
        </el-col>
        <el-col :span="8">
          <div class="btnwhite">立即购买</div>
        </el-col>
        <el-col :span="8">
          <div class="btnwhite btnred">加入购物车</div>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Stepper, Grid, GridItem } from "vant";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Stepper)
  .use(Grid)
  .use(GridItem);
export default {
  data() {
    return {
      value: 1,
      data: {},
      goodlist: []
    };
  },
  created() {
    let { id } = this.$route.params;
    this.getData(id);
  },
  methods: {
    gohome() {
      this.$router.push({ name: "home" });
    },
    updatedetails(id) {
      this.value = 1;
      this.getData(id);
    },
    onChange(value) {
      Toast.loading({ forbidClick: true });
      setTimeout(() => {
        Toast.clear();
        this.value = value;
      }, 500);
    },
    async getData(id) {
      let {
        data: { data }
      } = await this.$axios.get("http://localhost:5786/detialsjw/", {
        params: {
          uid: id
        }
      });
      this.data = data.tuijian[0];
      let type = data.tuijian[0].type;
      this.getlistdata(type);
    },
    async getlistdata(type) {
      let { data } = await this.$axios.get("http://localhost:5786/classify/", {
        params: {
          type: type,
          charset: "utf8"
        }
      });
      // this.listdata.listtop = data.data.fenlei;
      this.goodlist = data.data.tuijian;
      console.log(this.goodlist);

      // this.$forceUpdate();
    }
  }
};
</script>
<style lang="scss" scoped>
.detailsbox {
  height: 100%;
  width: 100%;
  margin: auto;
}
header {
  width: 100%;
  position: absolute;
  top: 0px;
  height: 1.146667rem;
  background: #fff;
  border-bottom: 1px solid #dcdfe6;

  .el-row {
    height: 100%;
    h3 {
      height: 100%;
      line-height: 1.146667rem;
      text-align: center;
      margin: 0;
      color: #303133;
      font-size: 0.4rem;
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    i {
      cursor: pointer;
      height: 100%;
      line-height: 43px;
      text-align: center;
      margin: 0;
      color: #303133;
      font-size: 20px;
    }
    .icon1 {
      float: left;
      margin-left: 10px;
    }
    .icon2 {
      float: right;
      margin-right: 10px;
    }
  }
}
main {
  background: #effeee;
  margin: auto;
  width: 10rem;
  position: absolute;
  top: 1.173333rem;
  bottom: 1.466667rem;
  overflow: auto;
  img {
    width: 10rem;
  }

  .price {
    background: #ffffff;
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    // height: 2.666667rem;
    margin-bottom: 0.233333rem;
    .pricebox {
      height: 2.666667rem;
      width: 100%;
      .boxleft {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h4 {
          font-size: 0.533333rem;
          color: #333333;
        }
        p {
          font-size: 0.4rem;
          color: #7f7f7f;
          span {
            font-size: 0.56rem;
            color: #d9232e;
          }
          del {
            font-size: 0.4rem;
            color: #cccccc;
          }
        }
      }
      .boxright {
        height: 100%;
        border-left: #ccc;
        div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          p {
            margin: auto;
            text-align: center;
          }
          .rightp1 {
            color: #f00;
            font-size: 0.7rem;
          }
          .rightp2 {
            color: #fe0000;
            font-size: 0.5rem;
          }
          .rightp3 {
            width: 50%;
            height: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;
            font-size: 0.32rem;
            line-height: 0.5rem;
            color: #aaa;
          }
        }
      }
    }
  }
  .guige {
    // padding: 0 0.133333rem;
    // height: 13.333333rem;
    background: #ffffff;
    .ggdiv {
      padding: 0 0.266667rem;
      box-sizing: border-box;
      height: 1.146667rem;
      position: relative;
      span {
        line-height: 1.146667rem;
        display: inline-block;
        height: 100%;
        margin-right: 0.133333rem;
      }
      .inoutforsuliang {
        position: absolute;
        top: 50%;
        right: 0.266667rem;
        transform: translate(0, -50%);
      }
    }

    .ggdiv2 {
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
    }
    .ggdiv3 {
      height: 1.546667rem;
      span {
        display: block;
        float: left;
      }
      .m {
        display: inline-block;
        width: 6.933333rem;
        span {
          height: 0.506667rem;
          line-height: 0.506667rem;
          width: 48%;
          display: inline-block;
          box-sizing: border-box;
          // padding: 0 0.3rem;
          position: relative;
          // min-width: 3.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          // font-size: 0.373333rem;
          // max-width: 7rem;
          text-indent: 0.133333rem;
        }
        span::before {
          content: "";
          display: block;
          width: 0.1rem;
          height: 0.1rem;
          background-color: #d9232e;
          border-radius: 100%;
          position: absolute;
          top: 50%;
          margin-top: -0.05rem;
          left: 0;
        }
      }
    }
  }
  .img {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .problem {
    background: #ffffff;

    .item {
      p {
        font-size: 0.373333rem;
        padding: 0 0.133333rem;
        line-height: 0.58667rem;
        color: #333333;
      }
      div {
        font-size: 0.373333rem;
        color: #7f7f7f;
        line-height: 0.58667rem;
        padding: 0.133333rem;
      }
    }
  }
  .nameboxout {
    padding-top: 0.266667rem;
    height: 1.333333rem;
    width: 100%;
    background: #ffffff;
    .namebox {
      width: 6rem;
      margin: auto;
      font-size: 0.32rem;
      .titlediv {
        font-size: 0.32rem;
        white-space: nowrap;
      }
    }
  }
  .tuijianlist {
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
footer {
  width: 100%;
  border-top: 1px solid #dcdfe6;
  position: absolute;
  bottom: 0px;
  height: 1.44rem;
  z-index: 2;
  background: #fff;
  .el-row {
    height: 100%;
    text-align: center;
    i {
      line-height: 53px;
      height: 53px;
      font-size: 30px;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      border-right: 1px solid #dcdfe6;
    }
    .btnwhite {
      cursor: pointer;
      width: 100%;
      font-size: 16px;
      height: 53px;
      line-height: 53px;
    }
    .btnred {
      background: #f00;
      color: #dcdfe6;
    }
  }
}
</style>