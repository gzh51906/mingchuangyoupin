<template>
  <div class="search">
    <van-row>
      <van-col span="5">
        <router-link to="/home"
          ><img class="img" src="../images/db4828be9abfbb1ef95e8b9e7028aa30.png"
        /></router-link>
      </van-col>
      <van-col span="18">
        <van-search
          placeholder="请输入搜索关键词"
          shape="round"
          input-align="center"
        />
      </van-col>
    </van-row>
    <van-tabs border line-height="2px" @click="goto" v-model="classify">
      <van-tab
        v-for="(item, idx) in navlist"
        :title="item.title"
        :key="idx"
        :name="idx"
      ></van-tab>
      <keep-alive>
        <component :is="son"></component>
      </keep-alive>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Search, Row, Col, Tab, Tabs } from "vant";
import Homeson from "../childcomponents/home/Homeson.vue";
import Classifys from "../childcomponents/home/Classifys.vue";

Vue.use(Search)
  .use(Row)
  .use(Col)
  .use(Tab)
  .use(Tabs);
export default {
  components: {
    Homeson,
    Classifys
  },
  data() {
    return {
      son: "Homeson",
      classify: this.$store.state.classifyIdx,
      navlist: [
        {
          title: "首页",
          to: "/home"
        },
        {
          title: "新品",
          to: "/home"
        },
        {
          title: "居家",
          to: "/home"
        },
        {
          title: "餐厨",
          to: "/home"
        },
        {
          title: "服装",
          to: "/home"
        },
        {
          title: "美护",
          to: "/home"
        },
        {
          title: "出行",
          to: "/home"
        },
        {
          title: "杂货",
          to: "/home"
        },
        {
          title: "系列",
          to: "/home"
        }
      ]
    };
  },
  methods: {
    onClick(name, title) {
      this.$toast(title);
    },
    goto(a, b) {
      this.$store.commit("chanfeClassifyIdx", a);
      if (a >= 1) {
        this.son = "Classifys";
      } else {
        this.son = "Homeson";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
  height: 1.013333rem;
  .img {
    height: .853333rem;
    text-align: center;
    margin: .266667rem;
  }
}
</style>