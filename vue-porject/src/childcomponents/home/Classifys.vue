<template>
  <div class="homeclassify">
    <img :src="idximgurl" alt class="bigimg" />
    <div class="listbox">
      <div class="listbox-p">{{ idxitem }}</div>
      <div class="list-box">
        <a
          href
          v-for="item in goods"
          :key="item.id"
          class="ms-product-item"
          @click.prevent="goto(item.id)"
        >
          <div class="pic">
            <div>
              <img :src="item.imgurl" />
            </div>
          </div>
          <div class="info">
            <p class="brief">{{ item.brief }}</p>
            <p class="name">{{ item.title }}</p>
            <p class="price">
              <span>{{ item.price }}</span>
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  props: ["classify", "idxitem"],
  data() {
    return {
      goods: [],
      imgurl: [],
      idximgurl:
        "http://s2.hgcang.com/bsimg/ec/public/images/14/c0/14c0fe41ac0a2e4608c557479b329c33.jpg?x-oss-process=style/high"
    };
  },
  methods: {
    goto(id) {
      this.$router.push({ name: "details", params: { id: `${id}` } });
    }
  },
  created() {
    this.$axios.get("http://localhost:5786/home/homeclassifyimg").then(res => {
      this.imgurl = res.data.data.tuijian;
    });
    this.$axios.get("http://localhost:5786/home/rptj").then(res => {
      this.goods = res.data.data.tuijian;
    });
  },
  updated() {
    this.idximgurl = this.imgurl[this.classify - 1].imgurl;
  },
  watch: {
    classify() {
      this.idximgurl = this.imgurl[this.classify - 1].imgurl;
    },
    idxitem() {
      if (this.idxitem != "新品") {
        this.$axios
          .get(`http://localhost:5786/home/homeclassify/${this.idxitem}`)
          .then(res => {
            this.goods = res.data.data.tuijian;
          });
      } else {
        this.$axios.get("http://localhost:5786/home/rptj").then(res => {
          this.goods = res.data.data.tuijian;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.homeclassify {
  .bigimg {
    height: 5.546667rem;
  }
  .listbox {
    .listbox-p {
      margin: 0;
      height: 1.133333rem;
      text-align: center;
      line-height: 1.133333rem;
      color: rgb(15, 15, 15);
      font-size: 18px;
    }
    .list-box {
      display: flex;
      flex-wrap: wrap;
      padding: 0.126667rem;
      justify-content: space-around;
      a {
        width: 4.702667rem;
        margin-bottom: 0.066667rem;
        .pic {
          img {
            width: 4.702667rem;
            height: 4.702667rem;
            background-color: rgb(247, 247, 247);
          }
        }
        .info {
          .brief {
            color: #7f7f7f;
            padding: 0.133333rem 0.173333rem;
            background-color: #eaeaea;
          }
          .name {
            color: #333;
            font-size: 16px;
            width: 4.702667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 0.133333rem 0 0.02rem;
          }
          .price span {
            color: #d9232e;
            font-size: 17px;
            margin-top: 0.066667rem;
          }
        }
      }
    }
  }
}
</style>