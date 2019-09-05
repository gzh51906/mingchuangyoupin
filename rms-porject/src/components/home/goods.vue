<template>
  <div>
    <el-table :data="goodslist" stripe style="width: 100%" border>
      <el-table-column prop="id" label="ID" width="80" align="center"> </el-table-column>
      <el-table-column prop="title" label="名称" width="300" align="center"> </el-table-column>
      <el-table-column prop="brief" label="简介" align="center" width="220"> </el-table-column>
      <el-table-column prop="price" label="价格" width="120" align="center"> </el-table-column>
      <el-table-column prop="class" label="分区" width="120" align="center"> </el-table-column>
      <el-table-column prop="category" label="类别" align="center" width="120"> </el-table-column>
      <el-table-column prop="imgurl" label="图片" align="center" show-overflow-tooltip> </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="number"
        @current-change="sizeChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
Vue.use(ElementUI);
import "element-ui/lib/theme-chalk/index.css";
export default {
  data() {
    return {
      goodslist: [],
      number:601,
    };
  },
  methods: {
    sizeChange(page) {
      this.$axios
        .get("http://localhost:5786/rms/goods", {
          params: {
            page: page
          }
        })
        .then(res => {
          this.goodslist = res.data.data.tuijian;
        });
    }
  },
  created() {
    this.$axios
      .get("http://localhost:5786/rms/goods", {
        params: {
          page: 1
        }
      })
      .then(res => {
        this.goodslist = res.data.data.tuijian;
      });
  this.$axios.get("http://localhost:5786/rms").then(res =>{
      this.number = res.data[0].id;
  })
  }
};
</script>