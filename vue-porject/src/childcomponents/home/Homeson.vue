<template>
  <div class="homeson">
    <van-swipe :autoplay="2000" indicator-color="white" class="swipe" touchable>
      <van-swipe-item
        ><img
          src="http://s1.hgcang.com/bsimg/ec/public/images/6b/13/6b13fe91df1be087bdcff2f52ce99579.jpg?x-oss-process=style/high"
          alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img
          src="http://s2.hgcang.com/bsimg/ec/public/images/b9/93/b993931520c90ea420dd6e4a6235e194.jpg?x-oss-process=style/high"
          alt=""
      /></van-swipe-item>
    </van-swipe>
    <van-row class="iconsize">
      <van-col span="8">
        <van-icon
          color="red"
          size="14px"
          name="flower-o"
        />名创优品自营</van-col
      >
      <van-col span="8">
        <van-icon
          color="red"
          size="14px"
          name="flower-o"
        />30天无忧退货</van-col
      >
      <van-col span="8">
        <van-icon
          color="red"
          size="14px"
          name="flower-o"
        />2个工作日退款</van-col
      >
    </van-row>
    <div class="box"></div>
    <div class="brand">
      <p class="brand-p">品牌甄选</p>
      <div class="brand-box">
        <a
          href=""
          v-for="item in brand"
          :key="item.url"
          @click.prevent="goto(item.id)"
        >
          <div class="pic">
            <img :src="item.imgurl" alt="" />
          </div>
          <div class="desc">
            <p class="name">{{ item.title }}</p>
            <p class="price">
              <span>{{ item.price }}</span
              >元起
            </p>
            <span class="tag">{{ item.tag }}</span>
          </div>
        </a>
      </div>
    </div>
    <div class="box"></div>
    <div class="newlist">
      <p class="newlist-p">新品首发</p>
      <div class="newlist-dx">
        <div class="newlist-box">
          <a
            href=""
            v-for="item in newlist"
            :key="item.id"
            @click.prevent="goto(item.id)"
          >
            <div class="pic">
              <img :src="item.imgurl" alt="" />
            </div>
            <div class="info">
              <p class="name">{{ item.title }}</p>
              <p class="desc">{{ item.desc }}</p>
              <p class="price ">
                <span>{{ item.price }}</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="box"></div>
    <div class="hotlist">
      <div class="hotlist-p">
        人气推荐
      </div>
      <div class="hotlist-box">
        <ul>
          <li class="item" v-for="item in hotlist" :key="item.id">
            <a href="" class="clearfix" @click.prevent="goto(item.id)">
              <div class="pic">
                <div>
                  <img :src="item.imgurl" />
                </div>
              </div>
              <div class="info">
                <p class="name">{{ item.title }}</p>
                <p class="brief">{{ item.brief }}</p>
                <p class="price ">
                  <span>{{ item.price }}</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="box"></div>
    <div class="ztjx">
      <div class="ztjx-p">专题精选</div>
      <img src="../../images/1-1P3131F2180-L.jpg" alt="" />
      <div class="info">
        <div class="line1">
          <h4>MINISO白色情人节</h4>
          <p class="price">¥ <span>7</span>起</p>
        </div>
        <div class="desc">味蕾替我说爱你</div>
      </div>
    </div>
    <div class="box"></div>
    <div class="likelist">
      <div class="likelist-p">猜你喜欢</div>
      <div class="likelist-box">
        <a
          href=""
          v-for="item in hotlist"
          :key="item.id"
          class="ms-product-item"
          @click.prevent="goto(item.id)"
        >
          <div class="pic ">
            <div>
              <img :src="item.imgurl" />
            </div>
          </div>
          <div class="info">
            <p class="brief">{{ item.brief }}</p>
            <p class="name">{{ item.title }}</p>
            <p class="price ">
              <span>{{ item.price }}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Row, Col, Icon, Grid, GridItem } from "vant";
import { log } from 'util';

Vue.use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
  .use(Icon)
  .use(Grid)
  .use(GridItem);
export default {
  data() {
    return {
      brand: [],
      newlist: [],
      hotlist: []
    };
  },
  methods: {
    goto(id) {
      this.$router.push({ name: "details", params: { id: `${id}` } });
    }
  },
  created() {
    this.$axios.get("http://localhost:5786/home/xptl").then(res => {
      this.brand = res.data.data.tuijian;
    });
    this.$axios.get("http://localhost:5786/home/xpsf").then(res => {
      this.newlist = res.data.data.tuijian;
    });
    this.$axios.get("http://localhost:5786/home/rptj").then(res => {
      this.hotlist = res.data.data.tuijian;
    });
  }
};
</script>

<style lang="scss" scoped>
.homeson {
  margin-bottom: 0.266667rem;
  .swipe img {
    height: 5.6rem;
  }
  .iconsize {
    font-size: 12px;
    text-align: center;
    height: 0.8rem;
    line-height: 0.4rem;
    margin-top: 0.066667rem;
    div {
      i {
        margin-top: 0.093333rem;
        border: 1px solid red;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        line-height: 0.533333rem;
      }
    }
  }
  .box {
    height: 0.266667rem;
    background-color: rgb(240, 239, 239);
  }
  .brand {
    margin-bottom: 0.096667rem;
    .brand-p {
      margin: 0;
      height: 1.133333rem;
      text-align: center;
      line-height: 1.133333rem;
      color: #333;
      font-size: 16px;
    }
    .brand-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      a {
        height: 2.96rem;
        width: 4.666667rem;
        margin-bottom: 0.066667rem;
        position: relative;
        .pic {
          img {
            width: 4.666667rem;
            height: 2.96rem;
          }
          position: absolute;
          top: 0;
          z-index: -99;
        }
        .desc {
          padding: 0.4rem 0.186667rem;
          .name {
            font-size: 14px;
            width: 2.533333rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
          }
          .price {
            color: #333;
            span {
              font-size: 16px;
            }
            margin-bottom: 0.166667rem;
          }
          .tag {
            font-size: 11px;
            padding: 0px 0.1rem;
            color: #cea47d;
            border: 1px solid #cea47d;
          }
        }
      }
    }
  }
  .newlist {
    .newlist-p {
      margin: 0;
      height: 1.133333rem;
      text-align: center;
      line-height: 1.133333rem;
      color: #333;
      font-size: 16px;
    }
    .newlist-dx {
      overflow: hidden;
      overflow-x: auto;
      .newlist-box {
        width: 42.333333rem;
        a {
          display: inline-block;
          margin-left: 0.4rem;
          margin-bottom: 0.286667rem;

          .pic {
            background-color: rgb(245, 243, 243);
            img {
              height: 3.4rem;
              width: 3.4rem;
            }
          }
          .info {
            .name {
              font-size: 15px;
              width: 3.4rem;
              overflow: hidden;
              color: #333;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-top: 0.066667rem;
            }
            .desc {
              color: #7f7f7f;
              margin: 0.05rem 0px 0.05rem 0px;
            }
            .price span {
              color: #d9232e;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
  .hotlist {
    .hotlist-p {
      margin: 0;
      height: 1.133333rem;
      text-align: center;
      line-height: 1.133333rem;
      color: #333;
      font-size: 16px;
    }
    .hotlist-box {
      ul li a {
        border: 1px solid #ccc;
        display: flex;
        margin: 0.25rem;
        padding: 0.45rem 0.36rem;
        .pic img {
          width: 3rem;
          height: 3rem;
        }
        .info {
          margin-left: 0.586667rem;
          .name {
            font-size: 15px;
            color: #333;
            width: 5.333333rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 0.656667rem;
          }
          .brief {
            margin-top: 0.083333rem;
            font-size: 14px;
            color: #7f7f7f;
            margin-bottom: 0.233333rem;
          }
          .price span {
            color: #d9232e;
            font-size: 14px;
          }
        }
      }
    }
  }
  .ztjx {
    .ztjx-p {
      margin: 0;
      height: 1.133333rem;
      text-align: center;
      line-height: 1.133333rem;
      color: #333;
      font-size: 16px;
    }
    img {
      height: 5.6rem;
      width: 10rem;
    }
    .info {
      padding: 0.293333rem 0.4rem;
      .line1 {
        display: flex;
        justify-content: space-between;
        h4 {
          font-size: 20px;
        }
        p {
          color: #d9232e;
          font-size: 16px;
        }
      }
      .desc {
        color: #7f7f7f;
        font-size: 16px;
      }
    }
  }
  .likelist {
    .likelist-p {
      margin: 0;
      height: 1.133333rem;
      text-align: center;
      line-height: 1.133333rem;
      color: #333;
      font-size: 16px;
    }
    .likelist-box {
      display: flex;
      flex-wrap: wrap;
      padding: .126667rem;
      justify-content: space-around;
      a {
        width: 4.702667rem;
        margin-bottom: .066667rem;
        .pic {
          img {
            width: 4.702667rem;
            height: 4.702667rem;
            background-color: rgb(247, 247, 247);
          }
        }
        .info{
          .brief{
            color: #7f7f7f;
            padding: .133333rem .173333rem;
            background-color: #eaeaea;    
          }
          .name{
            color: #333;
            font-size: 16px;
            width: 4.702667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: .133333rem 0 .02rem;
          }
          .price span{
            color: #d9232e;
            font-size: 17px;
            margin-top: .066667rem;
          }
        }
      }
    }
  }
  .border {
    height: 1.233333rem;
  }
}
</style>