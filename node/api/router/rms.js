const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
// 登录接口
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
// 获取分页商品接口
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
// 获取总商品的长度
Router.get('/',async (req, res) => {
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM goods`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result.data.tuijian)
})
// 删除接口
Router.delete('/',async (req, res) => {
    let {id} = req.query;
    let result;
    try {
        let data = {}
        data.tuijian = await mysql("DELETE FROM `vueporject`.`goods` WHERE `goods`.`id` = " + `${id}`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(id)
})
// 修改商品内容接口
Router.post('/change',async (req, res) => {
    let {id,title,brief,price,category,classs,imgurl} = req.body;
    console.log(id,title,brief,price,category,classs,imgurl);
    try {
        let data = {}
        data.tuijian = await mysql("UPDATE `vueporject`.`goods` SET `imgurl` = "+`'${imgurl}'`+",`title` =" +`'${title}'`+",`brief` = "+`'${brief}'`+",`price` = "+`'${price}'`+",`category` ="+ `'${category}'`+",`class` ="+ `'${classs}'`+" WHERE `goods`.`id` ="+`'${id}'`+";")
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send("yse")
})
// 商品添加接口
Router.post('/add',async (req, res) => {
    let {id,title,brief,price,category,classs,imgurl} = req.body;
    console.log(id,title,brief,price,category,classs,imgurl);
    try {
        let data = {}
        data.tuijian = await mysql("INSERT INTO `vueporject`.`goods` (`imgurl`, `title`, `brief`, `price`, `category`, `id`, `class`) VALUES"+` ('${imgurl}', '${title}', '${brief}', '${price}', '${category}', NULL, '${classs}');`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send("yse")
})
// 搜索title请求
Router.get('/title',async (req, res) => {
    let {select,item} = req.query;
    let result;
    try {
        let data = {}
        data.tuijian = await mysql("SELECT * FROM `goods` WHERE "+ `${select}`+" like "+`'%${item}%'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
// title分页
Router.get('/title/page',async (req, res) => {
    let {select,item,page} = req.query;
    let result;
    try {
        let data = {}
        data.tuijian = await mysql("SELECT * FROM `goods` WHERE "+ `${select}`+" like "+`'%${item}%'`+"limit "+`${(page-1)*10}`+",10")
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
// 搜索id请求
Router.get('/id',async (req, res) => {
    let {id} = req.query;
    let result;
    try {
        let data = {}
        data.tuijian = await mysql("SELECT * FROM `goods` WHERE `id` ="+`${id}`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
module.exports = Router;



