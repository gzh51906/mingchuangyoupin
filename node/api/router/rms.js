const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
Router.post('/',async (req, res) => {
    let {username,password} = req.body;
    let result;
    try {
        let data = {}
        data.user = await mysql(`SELECT * FROM  rmguser WHERE  username LIKE  '${username}'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    if((result.data.user.join('') == '')){
        res.send("用户名不存在")
    }else{
        let md5 = result.data.user[0].password;
        console.log(md5,password);
        
        if(md5 == password){
            res.send("登录成功")
        }else{
            
            res.send("密码错误");
        }
    }
})
module.exports = Router;
