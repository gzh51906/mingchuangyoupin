const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
// 获取推荐商品
Router.get('/xptl',async (req, res) => {
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM  xptl`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
// 获取首发商品
Router.get('/xpsf',async (req, res) => {
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM  xpsf`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
// 获取人气商品
Router.get('/rptj',async (req, res) => {
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM  rqtj WHERE 1 `)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
// 获取首页分类的大图
Router.get('/homeclassifyimg',async (req, res) => {
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM  homeclassifyimg WHERE 1 `)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
// 
Router.get('/homeclassify/:id',async (req, res) => {
    let {id} = req.params;
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`SELECT * FROM  goods WHERE  class LIKE  '${id}'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
module.exports = Router;
