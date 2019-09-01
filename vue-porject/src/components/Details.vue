<template>
  <div class="detailsbox">
    <header>
      <el-row>
        <el-col :span="7">
          <i class="icon1 el-icon-house"></i>
        </el-col>
        <el-col :span="10">
          <h3>于海谢谢</h3>
        </el-col>
        <el-col :span="7">
          <i class="icon2 el-icon-shopping-cart-1"></i>
          <i class="icon2 el-icon-search"></i>
        </el-col>
      </el-row>
    </header>
    <main>
      <div class="block">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img :src="data.imgsrc" alt />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="price">
        <el-row>
          <el-col :span="19">
            <h4>{{data.title}}</h4>
            <p></p>
            <p>
              <span>￥{{data.price}}</span>
              <del></del>
            </p>
          </el-col>
          <el-col style="border-left:1px solid #ccc" :span="5"></el-col>
        </el-row>
      </div>
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
export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    let { id } = this.$route.params;
    this.getData(id);
  },
  methods: {
    async getData(id) {
      let {
        data: { data }
      } = await this.$axios.get("http://localhost:5786/detialsjw/", {
        params: {
          uid: id
        }
      });
      this.data = data.tuijian[0];
    }
  }
};
</script>
<style lang="scss" scoped>
.detailsbox {
  // display: flex;
  // flex-direction: column;
  height: 100%;
  width: 100%;
}
header {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 43px;
  background: #fff;
  border-bottom: 1px solid #dcdfe6;
  .el-row {
    height: 100%;
    h3 {
      height: 100%;
      line-height: 43px;
      text-align: center;
      margin: 0;
      color: #303133;
      font-size: 20px;
      font-family: "Helvetica Neue", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
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
  position: absolute;
  top: 44px;
  bottom: 55px;
  left: 0;
  right: 0;
  overflow: auto;
  .price {
    width: 100%;
    padding: 15px;
  }
}
footer {
  border-top: 1px solid #dcdfe6;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0;
  height: 54px;
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