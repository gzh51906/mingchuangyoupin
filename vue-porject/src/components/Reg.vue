<template>
  <div>
    <van-image
      width="10rem"
      height="5rem"
      src="http://m.miniso.cn/public/app/wapyx/statics/images/activy/regbanner.jpg"
    />
    <van-cell-group>
      <van-field placeholder="手机号" v-model="phone" @blur="test" />
      <van-field type="password" placeholder="密码不能含有非法字符，长度在4-10之间" @blur="psw" v-model="password" />
    </van-cell-group>
    <div class="next">
      <a href="#" @click="zc">注册</a>
    </div>
    <p class="login">
      <router-link to="/login">登录</router-link>
    </p>
    <p class="rule">
      用户注册即代表同意
      <a>《服务条款》</a>和
      <a>《用户隐私保护和个人信息利用政策》</a>
    </p>
  </div>
</template>
<script>
import Vue from "vue";
import { Image } from "vant";
import { NavBar } from "vant";
import { Field } from "vant";
import { Cell, CellGroup } from "vant";
import axios from "axios";
import "../static/jquery-3.4.1";
import "../static/md5";
Vue.use(Cell).use(CellGroup);
Vue.use(Image);
Vue.use(Field);
Vue.use(NavBar);
export default {
  data() {
    return {
      phone: "",
      password: "",
      check1: false,
      check2: false
    };
  },
  methods: {
    //注册
    zc() {
      if (this.check1 && this.check2) {
        console.log(this.phone, this.password);
        console.log($.md5(this.password));
        let password = $.md5(this.password);
        this.$axios
          .post("http://localhost:5786/reg", {
            username: this.phone,
            password: password
          })
          .then(res => {
            this.$router.push({
              name: "login"
            });
          });
      } else {
        this.$dialog.alert({
          title: "提示",
          message: "格式错误"
        });
      }
    },
    //手机号正则验证
    test() {
      //   let check1 = false;
      const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
      if (this.phone == "") {
        this.$dialog.alert({
          title: "提示",
          message: "内容不能为空"
        });
        this.check1 = false;
      } else if (!reg.test(this.phone)) {
        this.$dialog.alert({
          title: "提示",
          message: "手机号格式不正确"
        });
        this.check1 = false;
        console.log(this.check1);
      } else {
        this.check1 = true;
        console.log(this.check1);
        return this.check1;
      }
    },
    //密码正则验证
    psw() {
      const reg = /^[a-zA-Z0-9]{4,10}$/;
      if (this.password == "") {
        this.$dialog.alert({
          title: "提示",
          message: "内容不能为空"
        });
        this.check2 = false;
      } else if (!reg.test(this.password)) {
        this.$dialog.alert({
          title: "提示",
          message: "密码格式不正确"
        });
        this.check2 = false;
        console.log(this.check2);
      } else {
        this.check2 = true;
        console.log(this.check2);
        return this.check2;
      }
    },

    submit() {
      this.test().then(function(data) {
        console.log(data);
      });
    }
  }
};
</script>
<style scoped>
.next {
  margin-top: 1rem;
}
.next a {
  background: #d9232e;
  color: #fff;
  text-align: center;
  line-height: 1rem;
  font-size: 0.45rem;
  display: block;
  margin: 0 auto;
  width: 9rem;
  height: 1rem;
}
.login {
  height: 1rem;
  margin-left: 0.45rem;
  margin-top: 0.3rem;
  width: 9rem;
}
.login a {
  float: right;
  color: #a9a9a9;
  font-size: 0.45rem;
}
.rule {
  font-size: 0.35rem;
  height: 1rem;
  margin-left: 0.45rem;
  margin-top: 0.3rem;
  width: 9rem;
}
.rule a {
  color: blue;
}
</style>