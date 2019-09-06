<template>
  <div class="app">
    <van-row>
      <van-col offset="1">
        <van-image
          width="4.35rem"
          height="3rem"
          fit="contain"
          src="http://s1.hgcang.com/bsimg/dede_uploads/allimg/170925/1-1F9251039130-L.jpg"
        />
      </van-col>
      <p class="topp p1">优品推荐</p>
      
      <van-col offset="1">
        <van-image
          width="4.35rem"
          height="3rem"
          fit="contain"
          src="http://s1.hgcang.com/bsimg/dede_uploads/allimg/170915/1-1F9151211490-L.jpg"
        />
      </van-col>
      <p class="topp p2">买手推荐</p>
    </van-row>

    <a href="javascript:;" class="ms" v-for="(item,idx) in spclist" :key="idx">

      <div class="author">
        <div class="pic">
          <van-image
            class="sign"
            round
            width="1rem"
            height="1rem"
            v-bind:src="item.pic"
          />

          <p>{{item.picp}}</p>

        </div>
      </div>
      <van-image
        width="9.5rem"
        height="5.5rem"
        class="lazy"
        v-bind:src="item.img"
      />
      <div class="info">
        <van-row type="flex" justify="space-between" class="tit">
          <van-col span="18">
            <div class="line">

                <h4>{{item.line}}</h4>

            </div>
          </van-col>
          <van-col span="5">
            <p class="price">
                &yen;
                <span>{{item.price}}</span>起

            </p>
          </van-col>
        </van-row>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </a>
    
  </div>
</template>

<script>

import Vue from "vue";
import { Image } from "vant";
import { Row, Col } from "vant";
Vue.use(Image);
Vue.use(Row).use(Col);

export default {
    data(){
        return{
            spclist:[]
        }
    },
    created() {
    this.$axios.get("http://localhost:5786/special").then(res => {

      this.spclist = res.data.data.spe;

    });
    
  }
};
</script>

<style scoped>
.app {
  height: 120rem;
}
.topp{
  color: #fff;
  font-size: 0.6rem;
  position: absolute;
}
.p1{
  left: 1.3rem;
  top: 1.1rem;
}
.p2{
  left: 6.2rem;
  top: 1.1rem;
}
.ms {
  display: block;
  width: 9.5rem;
  height: 8.3rem;
  padding: 0.25rem;
  background: #fff;
  text-decoration:none;
}
.author {
  height: 1rem;
}
.author p {
  float: left;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.45rem;
  margin-left: 0.3rem;
  color: #000;
}
.sign {
  float: left;
}
.lazy {
  margin-top: 0.25rem;
  /* margin-left: 0.25rem; */
}
.tit{
    color: #000;
}
h4{
    font-size: 0.5rem;
}
.price{
    font-size: 0.45rem;
    line-height: 0.8rem;
    color: #d9232e;
}
.desc{
    font-size: 0.4rem;
    color: #7f7f7f;
}

</style>>



