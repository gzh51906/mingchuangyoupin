<template>
  <div>
    <el-form
      :label-position="labelPosition"
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="名称" required>
        <el-input v-model="formLabelAlign.title" autofocus></el-input>
      </el-form-item>
      <el-form-item label="简介" required>
        <el-input v-model="formLabelAlign.brief"></el-input>
      </el-form-item>
      <el-form-item label="价格" required>
        <el-input v-model="formLabelAlign.price"></el-input>
      </el-form-item>
      <el-form-item label="分区" required>
        <el-input v-model="formLabelAlign.category"></el-input>
      </el-form-item>
      <el-form-item label="类别" required>
        <el-input v-model="formLabelAlign.class"></el-input>
      </el-form-item>
      <el-form-item label="图片" required>
        <el-input v-model="formLabelAlign.imgurl"></el-input>
      </el-form-item>
    </el-form>
    <div class="button">
      <el-button type="primary" @click="change">提交</el-button>
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
      page: "",
      labelPosition: "right",
      formLabelAlign: {}
    };
  },
  methods: {
    change() {
      if (
        this.formLabelAlign.title &&
        this.formLabelAlign.brief &&
        this.formLabelAlign.price &&
        this.formLabelAlign.category &&
        this.formLabelAlign.class &&
        this.formLabelAlign.imgurl
      ) {
        this.$axios
          .post("../rms/add", {
            title: this.formLabelAlign.title,
            brief: this.formLabelAlign.brief,
            price: this.formLabelAlign.price,
            category: this.formLabelAlign.category,
            classs: this.formLabelAlign.class,
            imgurl: this.formLabelAlign.imgurl
          })
          .then(res => {
            alert("添加成功！")
            this.formLabelAlign = {}
          });
      } else {
        alert("对不起，请完整输入！");
      }
    }
  }
};
</script>
<style scoped>
.button {
  text-align: center;
}
</style>