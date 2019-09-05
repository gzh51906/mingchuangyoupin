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
        if(md5 == password){
            res.send("登录成功")
        }else{
            
            res.send("密码错误");
        }
    }
})
Router.get('/goods',async (req, res) => {
    let {page} = req.query;
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM goods ORDER BY id limit ${(page-1)*10},10`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
Router.get('/',async (req, res) => {
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM goods ORDER BY id DESC LIMIT 0,1`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result.data.tuijian)
})
module.exports = Router;
