<template>
  <div class="detailsbox">
    <header>
      <el-row>
        <el-col :span="6">
          <i class="icon1 el-icon-house" @click="gohome"></i>
        </el-col>
        <el-col :span="12">
          <h3>{{this.name}}</h3>
        </el-col>
        <el-col :span="6">
          <i class="icon2 el-icon-shopping-cart-1" @click="gocart">
            <em v-if="numlittle">{{numlittle}}</em>
          </i>
          <i class="icon2 el-icon-search" @click="gosearch"></i>
        </el-col>
      </el-row>
    </header>
    <nav>
      <van-tabs border line-height="2px" v-model="active" @click="onClick">
        <van-tab v-for="(item,idx) in tab.listtop" :key="idx" :title="item.name"></van-tab>
      </van-tabs>
    </nav>
    <main>
      <el-row class="list" :gutter="20">
        <el-col :span="12" v-for="(item,idx) in tab.listbot" :key="idx">
          <div class="grid-content bg-purple" :id="item.id" @click="gotodetails(item.id)">
            <img :src="item.imgurl" alt />
            <h4>{{item.title}}</h4>
            <p>{{item.price}}</p>
          </div>
        </el-col>
      </el-row>
    </main>
  </div>
</template>

<script>
import Vue from "vue";
// import Bus from "../../busforjw.js";
import { Swipe, SwipeItem, Stepper, Grid, GridItem, Tab, Tabs } from "vant";
import { Script } from "vm";

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Stepper)
  .use(Grid)
  .use(GridItem)
  .use(Tab)
  .use(Tabs);
export default {
  data() {
    return {
      active: "",
      type: "",
      name: "",
      tab: {},
      numlittle: ""
    };
  },
  created() {
    this.type = this.$route.query.a;
    this.name = this.$route.query.b;
    this.active = this.$route.query.c - 1;
    // this.getRouterData();
    this.getlistdata();
    this.getlistdatabot(this.name);
  },
  updated() {
    let timer = setTimeout(() => {
      this.numlittle = this.$store.getters.totalqty;
    }, 1000);
  },
  mounted() {
    let timer = setTimeout(() => {
      this.numlittle = this.$store.getters.totalqty;
    }, 1000);
  },
  methods: {
    gocart() {
      this.$router.push({ name: "cart" });
    },
    onClick(name, title) {
      // console.log(name, title);

      this.active = name;
      this.getlistdatabot(title);
    },
    gotodetails(id) {
      this.$router.push({ name: "details", params: { id } });
    },
    getRouterData() {},
    gohome() {
      this.$router.push({ name: "home" });
    },
    gosearch() {
      this.$router.push({ name: "searchjw" });
    },
    async getlistdata() {
      let { data } = await this.$axios.get("http://localhost:5786/classify/", {
        params: {
          type: this.type,
          charset: "utf8"
        }
      });
      this.tab.listtop = data.data.fenlei;
      // console.log(this.tab.listtop);

      this.$forceUpdate();
    },
    async getlistdatabot(name) {
      let { data } = await this.$axios.get(
        "http://localhost:5786/classifiaction/",
        {
          params: {
            category: name,
            charset: "utf8"
          }
        }
      );
      // console.log(this.name, data);
      this.tab.listbot = data.data.tuijian;

      // this.tab.listbot = data.data;
      this.$forceUpdate();
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
      em {
        width: 16px;
        height: 16px;
        border-radius: 8px;
        background-color: #f00;
        line-height: 16px;
        font-size: 12px;
        color: #effeee;
        position: absolute;
        right: 1px;
        top: 4px;
      }
    }
  }
}
nav {
  position: absolute;
  top: 1.166667rem;
  width: 100%;
}
main {
  background: #effeef;
  margin: auto;
  width: 10rem;
  position: absolute;
  top: 2.266667rem;
  bottom: 1.466667rem;
  overflow: auto;
  .list {
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
</style>