<template>
  <div class="search">
    <header>
      <el-row>
        <el-col :span="2">
          <i class="icon1 el-icon-house" @click="gohome"></i>
        </el-col>
        <el-col :span="22">
          <form class="search" action="/">
            <van-search
              v-model="value"
              placeholder="请输入搜索关键词"
              show-action
              @search="onSearch"
              @cancel="onCancel"
            />
          </form>
        </el-col>
      </el-row>
    </header>
    <main>
      <el-row class="list" :gutter="20">
        <el-col :span="12" v-for="(item,idx) in searchdata" :key="idx">
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
import { Search } from "vant";

Vue.use(Search);
export default {
  data() {
    return {
      value: "",
      searchdata: ""
    };
  },
  methods: {
    gohome() {
      this.$router.push({ name: "home" });
    },
    gotodetails(id) {
      this.$router.push({ name: "details", params: { id } });
    },
    async getsearchdata(text) {
      let { data } = await this.$axios.get("http://localhost:5786/searchjw/", {
        params: {
          text: text,
          charset: "utf8"
        }
      });
      this.searchdata = data.data.suju;
      //   console.log(data.data);

      this.$forceUpdate();
    },
    onSearch() {
      let text = this.value;
      this.getsearchdata(text);
    },
    onCancel() {}
  }
};
</script>
<style lang="scss" scoped>
header {
  height: 1.146667rem;
  i {
    line-height: 1.44rem;
    height: 1.44rem;
    font-size: 0.7rem;
    text-align: center;
    color: #ccc;
  }
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