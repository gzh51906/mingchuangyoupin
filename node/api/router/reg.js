const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils');
Router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else {
        next();
    }
});
Router.post('/',async (req,res)=>{
    let {username,password} = req.body;
    
    
    let result;
    try {
        let data = {}
        data.spe = await mysql(`INSERT INTO admin(username,password) values ('${username}','${password}')`)
        result = formatData({data});
        // console.log(`INSERT INTO admin(username,password) values ('${username}','${password}')`);
        
    }catch(err){
        result = formatData({code : 0,data:err});
    }
    res.send(req.body)
})
module.exports = Router;