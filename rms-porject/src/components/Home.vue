<template>
  <div class="home">
    <el-container>
      <el-container>
        <el-aside width="200px" class="left">
          <div class="user">
            <router-link to="/home"
              ><img
                class="img"
                src="http://www.miniso.cn/Content/Make/images/logo.png"
              />
            </router-link>
            <div class="out">
              <p>{{ user }}</p>
              <router-link to="/reg">退出</router-link>
            </div>
          </div>
          <el-menu
            default-active="goods"
            class="el-menu-vertical-demo"
            text-color="#000000"
            active-text-colo="#00ff00"
            background-color="#fff"
            @select="select"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="goods">商品列表</el-menu-item>
                <el-menu-item index="add">商品添加</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="right">
          <keep-alive>
            <component :is="item"></component>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);
import "element-ui/lib/theme-chalk/index.css";

import Goods from "./home/goods";
import Add from "./home/add.vue";

export default {
  components: {
    Goods,
    Add
  },
  data() {
    return {
      user: localStorage.getItem("user"),
      item: "Goods"
    };
  },
  methods: {
    select(item) {
      this.item = item;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .left {
    height: 720px;
    background-color: #fff;
    .img {
      width: 50px;
    }
    .user {
      display: flex;
      .out {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        p {
          font-size: 14px;
          font-weight: 900;
          color: black;
          width: 119px;
        }
        a {
          color: red;
          font-size: 16px;
        }
      }
    }
  }
  .right {
    background-color: #fff;
  }
}
.el-main {
  padding-top: 0px !important;
}
</style>