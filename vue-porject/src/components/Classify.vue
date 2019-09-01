<template>
  <div>
    <div class="search">
      <van-row>
        <van-col span="24">
          <van-search placeholder="请输入搜索关键词" shape="round" input-align="center" />
        </van-col>
      </van-row>
    </div>
    <div>
      <el-row>
        <el-col :span="4">
          <el-tabs tab-position="left" @tab-click="changeIdx">
            <el-tab-pane
              class="tablist"
              v-for="(item,idx) in tablist"
              :label="item.name"
              :key="idx"
            ></el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="20">
          <img :src="listdata.src" class="banner" alt />
          <p class="namebox">
            <el-divider class="titlediv">{{listdata.name}}分类</el-divider>
          </p>
          <el-row class="lalala" :gutter="20">
            <el-col
              class="fenleibox"
              :span="8"
              type="flex"
              v-for="type in listdata.listtop"
              :key="type.uid"
            >
              <div class="grid-content bg-purple">
                <img :src="type.imgurl" alt />
                <h4>{{type.name}}</h4>
              </div>
            </el-col>
          </el-row>
          <p class="namebox">
            <el-divider class="titlediv">人气推荐</el-divider>
          </p>
          <el-row class="lalala" :gutter="20">
            <el-col
              class="fenleibox"
              :span="8"
              type="flex"
              v-for="type in listdata.listbot"
              :key="type.uid"
            >
              <div class="grid-content bg-purple" @click="gotodetails(type.uid)">
                <img :src="type.imgsrc" alt />
                <h4>{{type.title}}</h4>
                <p>￥{{type.price}}</p>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// localhost:5786/classify/?type=居家&charset=utf8
export default {
  data() {
    return {
      active: { index: 0, fenlei: "居家" },
      tablist: [
        {
          name: "居家",
          id: 0,
          bimg:
            "http://s1.hgcang.com/bsimg/ec/public/images/2f/49/2f493ed5d17fe3af698e224626761ff8.jpg?x-oss-process=style/high",
          bd: "963"
        },
        {
          name: "餐厨",
          id: 1,
          bimg:
            "http://s2.hgcang.com/bsimg/ec/public/images/e0/f9/e0f9812f526e39a7b4f0cf15c4b3200e.jpg?x-oss-process=style/high",
          bd: "60"
        },
        {
          name: "服装",
          id: 2,
          bimg:
            "http://s1.hgcang.com/bsimg/ec/public/images/bb/2f/bb2f115a1ba7fd1dde824d071bfccb7b.jpg?x-oss-process=style/high",
          bd: "79"
        },
        {
          name: "美护",
          id: 3,
          bimg:
            "http://s2.hgcang.com/bsimg/ec/public/images/d0/2c/d02c735f67cdb2515558379694418cb0.jpg?x-oss-process=style/high",
          bd: "1017"
        },
        {
          name: "出行",
          id: 4,
          bimg:
            "http://s2.hgcang.com/bsimg/ec/public/images/c1/62/c162ab4846c60c2d16dee41f0755516d.jpg?x-oss-process=style/high",
          bd: "2362"
        },
        {
          name: "电器",
          id: 5,
          bimg:
            "http://s1.hgcang.com/bsimg/ec/public/images/c4/ce/c4cef547f4eff3535a9b462fb3f0cd75.jpg?x-oss-process=style/high",
          bd: "926"
        },
        {
          name: "杂货",
          id: 6,
          bimg:
            "http://s2.hgcang.com/bsimg/ec/public/images/a8/6e/a86edab993a7c1ba180234f5173bf174.jpg?x-oss-process=style/high",
          bd: "609"
        },
        {
          name: "系列",
          id: 7,
          bimg:
            "http://s2.hgcang.com/bsimg/ec/public/images/ed/de/edde081888c15b8232f1b809bf55515d.jpg?x-oss-process=style/high",
          bd: "3184"
        }
      ],
      listdata: {}
    };
  },
  methods: {
    async getlistdata(idx) {
      let { data } = await this.$axios.get("http://localhost:5786/classify/", {
        params: {
          type: this.listdata.name,
          charset: "utf8"
        }
      });
      // console.log(data.data.fenlei);

      this.listdata.listtop = data.data.fenlei;
      this.listdata.listbot = data.data.tuijian;
      this.$forceUpdate();
      // console.log(this.listdata);
    },
    changeIdx(idx) {
      this.active.index = Number(idx.index);
      this.updatedata(idx);
    },
    updatedata(idx) {
      this.listdata.src = this.tablist[this.active.index].bimg;
      this.listdata.name = this.tablist[this.active.index].name;
      this.getlistdata(idx);

      //添加this.$forceUpdate();进行强制渲染，效果实现。网上找的还是搞不懂为什么不刷新，数据打印明明变了的，周一找林芳问下。
    },
    goto() {
      this.$router.push({ name: "goods" });
    },
    gotodetails(id) {
      this.$router.push({ name: "details", params: { id } });
    }
  },
  created() {
    this.updatedata();
  }
};
</script>
<style lang="scss" scoped>
.search {
  height: 60px;
  border-bottom: 1px solid #ccc;
}
.tablist {
  font-size: 20px;
  width: 100%;
}
.lalala {
  text-align: center;
}
.banner {
  width: 100%;
}
.namebox {
  width: 300px;
  margin: auto;
}
.fenleibox {
  width: 30%;
  img {
    width: 100%;
    display: block;
    margin: auto;
  }
  h4 {
    color: #000;
    font-size: 18px;
    text-align: center;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    color: #f00;
    text-align: center;
    font-size: 14px;
    margin-bottom: 60px;
  }
}
</style>