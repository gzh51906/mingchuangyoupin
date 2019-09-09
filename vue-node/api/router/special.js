const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils');

Router.get('/',async (req,res)=>{
    let result;
    try {
        let data = {}
        data.spe = await mysql(`select * from spe`)
        result = formatData({data});
    }catch(err){
        result = formatData({code : 0,data:err});
    }
    res.send(result)
})
module.exports = Router;