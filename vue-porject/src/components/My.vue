<template>
  <div class="app">
    <div class="my">
      <div class="myuser">
        <div class="pic">
          <a href="#">
            <img src="http://m.miniso.cn/public/app/b2c/statics/sprites/default-avatar.png" alt />
          </a>
        </div>
        <div class="info">
          <p class="name">{{username}}</p>
          <p class="grade">
            <i>
              <img
                src="http://s2.hgcang.com/bsimg/ec/public/images/7a/62/7a62171389bdef128cb35c461add86b9.png?x-oss-process=image/resize,m_lfit,h_150,w_150"
                alt
              />
            </i>普卡
          </p>
        </div>
      </div>
    </div>
    <div class="mid">
      <div class="hd">
        我的订单
        <van-icon class="icoa" name="arrow" />
      </div>
      <div class="navlist">
        <a href="#">
          <van-icon name="pending-payment" size="0.8rem" />
          <p>待付款</p>
        </a>
        <a href="#">
          <van-icon name="paid" size="0.8rem" />
          <p>待发货</p>
        </a>
        <a href="#">
          <van-icon name="logistics" size="0.8rem" />
          <p>已收货</p>
        </a>
        <a href="#">
          <van-icon name="flower-o" size="0.8rem" />
          <p>待评价</p>
        </a>
      </div>
    </div>
    <div class="msf">
      <div class="mymsf">我的服务</div>
      <div class="navlist">
        <a href="#">
          <van-icon name="coupon-o" size="0.8rem" />
          <p>优惠券</p>
        </a>
        <a href="#">
          <van-icon name="star-o" size="0.8rem" />
          <p>收藏</p>
        </a>
        <a href="#">
          <van-icon name="location-o" size="0.8rem" />
          <p>地址</p>
        </a>
        <a href="#">
          <van-icon name="service-o" size="0.8rem" />
          <p>客服</p>
        </a>
      </div>
      <div class="navlist">
        <a href="#">
          <van-icon name="pending-payment" size="0.8rem" />
          <p>账号安全</p>
        </a>
        <a href="#">
          <van-icon name="question-o" size="0.8rem" />
          <p>帮助中心</p>
        </a>
        <a href="#">
          <van-icon name="logistics" size="0.8rem" />
          <p>意见反馈</p>
        </a>
        <a href="#">
          <van-icon name="flower-o" size="0.8rem" />
          <p>企业定制</p>
        </a>
      </div>
    </div>
    <div class="out">
      <van-button class="iout" type="primary" @click="showPopup">退出登录</van-button>

      <van-popup class="check" v-model="show">
        <p>您确定要退出登录？</p>
        <!-- 这里点退出还要把登录状态给改成false -->
        <router-link to="/login" style=" color: #d9232e;">确定</router-link>
        <a href="#" @click="showup">取消</a>
        </van-popup>

    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Image } from "vant";
import { Icon } from "vant";
import { Popup } from "vant";
import { Button } from "vant";

Vue.use(Popup);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Button);
export default {
  
   data() {
     console.log(this.$route.query.username)
    return {
      username:this.$route.query.username*1,
      show: false
    }
  },

  methods: {
    
    showPopup() {
      this.show = true;
    },
    showup(){
      this.show = false;
    }
    
    
    
  }
  
  
};
</script>
<style scoped>

.my {
  width: 10rem;
  height: 4rem;
  background: #000;
  overflow: hidden;
}
.Login {
  background: #f4f4f4;
  height: 17.5rem;

}
.myuser {
  /* overflow: hidden; */
  margin: 1rem auto;
  height: 2.5rem;
  width: 8rem;
}
.pic {
  float: left;
  margin-right: 0.7rem;
}
.info {
  color: #fff;
  font-size: 0.4rem;
  float: left;
  height: 2.5rem;
  /* line-height: 2.5rem; */
}
.name {
  margin-top: 0.4rem;
  margin-bottom: 0.2rem;
}
.grade img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.2rem;
}
.grade {
  font-size: 0.37rem;
  color: #c7a582;
}
.pic img {
  width: 2rem;
  height: 2rem;
}
.hd {
  font-size: 0.4rem;
  line-height: 1rem;
  margin-left: 0.5rem;
}
.icoa {
  float: right;
  margin-right: 0.5rem;
  line-height: 1rem;
}
.navlist {
  padding-left: 0.2rem;
  height: 2rem;
}
.navlist a {
  /* border-top:1px solid #d9d9d9;  */
  display: block;
  width: 1.2rem;
  text-align: center;
  float: left;
  color: #b9b9b9;
  padding-left: 1rem;
  margin-top: 0.3rem;
}
.mymsf {
  font-size: 0.4rem;
  line-height: 1rem;
  margin-left: 0.5rem;
}

.out {
  margin-top: 0.5rem;
  background: #d9232e;
  height: 1.1rem;
  width: 10rem;
  text-align: center;
}
.iout {
  line-height: 1rem;
  font-size: 0.5rem;
  background: #d9232e;
  width: 10rem;
  border: none;
  color: #fff;
}
.check{
  font-size: 0.5rem;
  width: 8rem;
  height: 3.94rem;
}
.check p{
  line-height: 2.9rem;
}

.check a{
  display: block;
  float: left;
  text-align: center;
  width: 3.95rem;
  height: 1rem;
  line-height: 1rem;
  border: 1px solid #b9b9b9;
  /* background: #d9232e; */
  color: #b9b9b9;
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