<template>
  <div class="Login">
    <van-nav-bar title="登录">
      <van-icon name="wap-home" @click="home" slot="left" size="0.8rem" />
      <van-icon name="search" slot="right" size="0.8rem" class="search" />
      <!-- <van-icon name="shopping-cart-o" @click="cart" slot="right" size="0.8rem" /> -->
    </van-nav-bar>
    <van-row type="flex" class="logo" justify="center" align="center">
      <van-col span="6">
        <van-image
          class="logoi"
          width="100"
          height="100"
          fit="contain"
          src="http://s1.hgcang.com/bsimg/ec/public/images/96/1b/961b0504ef548e0273b6625d2e310193.png"
        />
      </van-col>
    </van-row>
    <van-cell-group>

      <van-field v-model="phone" placeholder="手机号" />
      <van-field v-model="password" type="password" placeholder="密码" />

    </van-cell-group>
    <div class="gogo">
      <van-row type="flex" justify="center" align="center">
        <van-col span="21.5">

          <button class="login" @click="dl">登录</button>

        </van-col>
      </van-row>
      <van-row type="flex" justify="center" align="center">
        <van-col span="21.5">
          <button class="reg">手机号快速登录</button>
        </van-col>
      </van-row>
      <div class="link">
        <router-link to="/reg">注册账号</router-link>
        <a href="#">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
import { NavBar } from "vant";
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import { Dialog } from "vant";
import "../static/jquery-3.4.1"
import "../static/md5"
// 全局注册
Vue.use(Dialog);
Vue.use(Cell).use(CellGroup);
Vue.use(Field);
Vue.use(NavBar);
export default {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    
    dl() {
      if (this.phone.length == 0) {
        this.$dialog.alert({
          title: "提示",
          message: "账号不能为空"
        });
      } else {
        let password = $.md5(this.password)
        this.$axios
          .post("../login", {
            username: this.phone,
            password: password
          })
          .then(res => {
            console.log(res.data);
            if (res.data == "用户名不存在") {
              this.$dialog.alert({
                title: "提示",
                message: "账号不存在"
              });
            } else if (res.data == "密码错误") {
              this.$dialog.alert({
                title: "提示",
                message: "密码错误"
              });
            }else if(res.data == "登陆成功"){
                localStorage.setItem("username",this.phone)
                this.$dialog.alert({
                title: "提示",
                message: "登陆成功"
              });
              this.$router.push({
                path : '/my',
                
              })
            }
          });
      }
    },
    home(){
      this.$router.push({
              name:"home"
            })
    },
    // cart(){
    //   this.$router.push({
    //           name:"cart"
    //         })
    // }
  }
};
</script>
<style scoped>
.Login {
  background: #f4f4f4;
  height: 17.5rem;
}
.search {
  margin-right: 0.5rem;
}
.logo {
  background: #f4f4f4;
  width: 10rem;
  height: 3.5rem;
}
.login {
  width: 9rem;
  height: 1.173333rem;
  background: #d9232e;
  color: #fff;
  font-size: 0.4rem;
  border: none;
}
.reg {
  margin-top: 0.4rem;
  background: 0 0;
  color: #d9232e;
  border: 1px solid #d9232e;
  width: 9rem;
  font-size: 0.4rem;
  height: 1.173333rem;
}
.gogo {
  padding-top: 1rem;
  /* padding-bottom:5rem ; */
}
.link {
  margin: 0.3rem auto;
  /* background: #fff; */
  width: 9rem;

  display: flex;
  justify-content: space-between;
}
.link a {
  font-size: 0.4rem;
  color: #7f7f7f;
}
</style>