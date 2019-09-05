const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils');
Router.post('/',async (req,res)=>{
    let {username,password} = req.body;
    let result;
    try {
        let data = {}
        data.spe = await mysql(`SELECT * FROM admin where username like '${username}'`);
        result = formatData({data});
    }catch(err){
        result = formatData({code : 0,data:err});
    }
    // res.send(result)
    if((result.data.spe.join('') == '')){
        res.send('用户名不存在')
    }else{
        let psw = result.data.spe[0].password;
        console.log(psw,password);
        if(psw == password){
            res.send('登陆成功')
        }else{
            res.send('密码错误');
        }
    }
})
module.exports = Router;