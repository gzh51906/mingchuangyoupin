<template>
  <div class="box">
    <el-input
      placeholder="请输入内容"
      v-model="input5"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend" placeholder="请选择" class="huang">
        <el-option label="ID" value="id"></el-option>
        <el-option label="商品名称" value="title"></el-option>
        <el-option label="分区" value="class"></el-option>
        <el-option label="类别" value="category"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-table :data="goodslist" stripe style="width: 100%" border>
      <el-table-column prop="id" label="ID" width="80" align="center">
      </el-table-column>
      <el-table-column
        prop="title"
        label="名称"
        width="280"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="brief"
        label="简介"
        align="center"
        width="200"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column prop="price" label="价格" width="120" align="center">
      </el-table-column>
      <el-table-column prop="class" label="分区" width="120" align="center">
      </el-table-column>
      <el-table-column prop="category" label="类别" align="center" width="120">
      </el-table-column>
      <el-table-column
        prop="imgurl"
        label="图片"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="number"
        @current-change="sizeChange"
      >
      </el-pagination>
    </div>
    <div class="none" :style="'display:' + display">
      <el-form
        :label-position="labelPosition"
        label-width="80px"
        :model="formLabelAlign"
      >
        <el-form-item label="ID">
          <el-input v-model="formLabelAlign.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.title" autofocus></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="formLabelAlign.brief"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="formLabelAlign.price"></el-input>
        </el-form-item>
        <el-form-item label="分区">
          <el-input v-model="formLabelAlign.category" disabled></el-input>
        </el-form-item>
        <el-form-item label="类别">
          <el-input v-model="formLabelAlign.class" disabled></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <el-input v-model="formLabelAlign.imgurl"></el-input>
        </el-form-item>
      </el-form>
      <div class="button">
        <el-button type="primary" @click="change">提交</el-button>
        <el-button type="info" @click="esc">取消</el-button>
      </div>
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
      number: 601,
      page: "",
      labelPosition: "right",
      formLabelAlign: {},
      display: "none",
      input5: "",
      select: ""
    };
  },
  watch: {
    input5(val, oldVal) {
      if (this.select == "") {
        alert("请选择，您需要搜索的类型！");
        this.input5 = "";
      } else {
        if (
          this.select == "title" ||
          this.select == "class" ||
          this.select == "category"
        ) {
          this.$axios
            .get("../rms/title", {
              params: {
                select: this.select,
                item: this.input5
              }
            })
            .then(res => {
              this.number = res.data.data.tuijian.length;
              if (this.page) {
                this.$axios
                  .get("../rms/title/page", {
                    params: {
                      select: this.select,
                      item: this.input5,
                      page: this.page
                    }
                  })
                  .then(res => {
                    this.goodslist = res.data.data.tuijian;
                  });
              } else {
                this.$axios
                  .get("../rms/title/page", {
                    params: {
                      select: this.select,
                      item: this.input5,
                      page: 1
                    }
                  })
                  .then(res => {
                    this.goodslist = res.data.data.tuijian;
                  });
              }
            });
        } else if (this.select == "id") {
          if (this.input5) {
            this.$axios
              .get("../rms/id", {
                params: {
                  id: this.input5
                }
              })
              .then(res => {
                this.number = res.data.data.tuijian.length;
                this.goodslist = res.data.data.tuijian;
              });
          } else {
            this.$axios
              .get("../rms/goods", {
                params: {
                  page: 1
                }
              })
              .then(res => {
                this.goodslist = res.data.data.tuijian;
              });
            this.$axios.get("../rms").then(res => {
              this.number = res.data.length;
            });
          }
        }
      }
    }
  },
  methods: {
    sizeChange(page) {
      if (this.input5) {
        this.page = page;
        this.$axios
          .get("../rms/title/page", {
            params: {
              select: this.select,
              item: this.input5,
              page: page
            }
          })
          .then(res => {
            this.goodslist = res.data.data.tuijian;
          });
      } else {
        this.page = page;
        this.$axios
          .get("../rms/goods", {
            params: {
              page: page
            }
          })
          .then(res => {
            this.goodslist = res.data.data.tuijian;
          });
      }
    },
    handleEdit(index, row) {
      this.formLabelAlign = row;
      this.display = "block";
    },
    handleDelete(index, row) {
      this.$axios
        .delete("../rms", {
          params: {
            id: row.id
          }
        })
        .then(res => {
          this.$axios
            .get("../rms/goods", {
              params: {
                page: this.page
              }
            })
            .then(res => {
              this.goodslist = res.data.data.tuijian;
            });
        });
    },
    esc() {
      this.display = "none";
    },
    change() {
      this.$axios
        .post("../rms/change", {
          id: this.formLabelAlign.id,
          title: this.formLabelAlign.title,
          brief: this.formLabelAlign.brief,
          price: this.formLabelAlign.price,
          category: this.formLabelAlign.category,
          classs: this.formLabelAlign.class,
          imgurl: this.formLabelAlign.imgurl
        })
        .then(res => {
          this.display = "none";
        });
    }
  },
  created() {
    this.$axios
      .get("../rms/goods", {
        params: {
          page: 1
        }
      })
      .then(res => {
        this.goodslist = res.data.data.tuijian;
      });
    this.$axios.get("../rms").then(res => {
      this.number = res.data.length;
    });
  }
};
</script>
<style scoped>
.box {
  position: relative;
}
.block {
  text-align: center;
  margin-top: 35px;
}
.none {
  border: 3px solid #ccc;
  width: 500px;
  position: absolute;
  top: 10%;
  right: 30%;
  background-color: #fff;
  border-radius: 10px;
  z-index: 99;
}
.button {
  text-align: center;
}
.huang{
  width: 150px;
}
</style>