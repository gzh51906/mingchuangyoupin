<template>
  <div class="reg">
    <div class="reg-top">
      <h4>名创优品后台管理系统</h4>
      <input type="text" placeholder="用户名" @focus="focusa" @blur="blura" v-model="username" />
      <i class="icona" :style="'background-position-y:' + iay"></i>
      <input type="password" placeholder="密码" @focus="focusb" @blur="blurb" v-model="password"/>
      <i class="iconb" :style="'background-position-y:' + iby"></i>
      <button @click="goto">登入</button>
    </div>
    <div class="reg-bottom">
      <i></i>
      <a href="">恰饭入口</a>
    </div>
  </div>
</template>

<script>
import "../static/jquery-3.4.1.js"
import "../static/md5.js"
export default {
  data() {
    return {
      iay: "",
      iby:"",
      username:"",
      password:""
    };
  },
  methods: {
    focusa() {
      this.iay = "0px";
    },
    blura() {
      this.iay = "-30px";
    },
    focusb() {
      this.iby = "0px";
    },
    blurb() {
      this.iby = "-30px";
    },
    goto(){
        if(this.username.length == 0){
            alert("账号密码不能为空！")
        }else{
            let passwordMD5 = $.md5(this.password);
            this.$axios.post("../rms",{
              username:this.username,
              password:passwordMD5
            }).then(res =>{
              if(res.data == "用户名不存在"){
                alert("对不起，用户名不存在！")
                this.username = "";
                this.password = "";
              }else if(res.data == "密码错误"){
                alert("对不起，密码错误，请重新输入！")
                this.password = "";
              }else if(res.data == "登录成功"){
                console.log("ok");
                localStorage.setItem("user",this.username)
                this.$router.push({name:'home'})
              }
            })
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.reg {
  transform: translateY(120px);
  margin: 0 auto;
  border: 1px solid red;
  height: 307px;
  width: 375px;
  border: 6px solid #394557;
  box-sizing: border-box;
  .reg-top {
    width: 291px;
    height: 218px;
    padding: 16px 36px;
    background-color: #f7f7f7;
    position: relative;
    h4 {
      margin: 18px 0px 16px;
      padding: 0px 0px 8px;
      color: #478fca;
      height: 28px;
      text-align: center;
      font-size: 27px;
      font-weight: 100;
      border-bottom: 1px solid #ccc;
    }
    input {
      width: 291px;
      padding: 5px 24px 5px 6px;
      height: 34px;
      box-sizing: border-box;
      margin: 5px 0px;
      color: #858585;
    }
    input:focus {
      outline: none;
      border: 1px solid orange;
    }
    button {
      margin-top: 15px;
      width: 291px;
      padding: 4px 9px;
      background-color: #428bca;
      font-size: 13px;
      height: 33.6px;
      border: none;
      color: #fff;
      cursor: pointer;
    }
    button:hover {
      background-color: #0f5ea3;
      border: 3px solid #137cd8;
    }
    i {
      width: 18px;
      height: 20px;
      display: inline-block;
    }
    .icona {
      position: absolute;
      top: 98px;
      right: 45px;
      background: url("../static/img/icon.png") no-repeat;
      background-position-y: -30px;
    }
    .iconb {
      position: absolute;
      top: 142px;
      right: 45px;
      background: url("../static/img/icon.png") no-repeat;
      background-position-x: -30px;
      background-position-y: -30px;
    }
  }
  .reg-bottom {
    height: 45.2px;
    border-top: 2px solid #394557;
    box-sizing: border-box;
    background-color: #5090c1;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #fff;
      font-size: 15px;
      height: 18px;
      line-height: 18px;
      display: inline-block;
      margin-left: 10px;
    }
    i {
      background: url("../static/img/icon.png") no-repeat;
      background-position: -60px 0px;
      display: inline-block;
      width: 17px;
      height: 18px;
    }
  }
}
</style>