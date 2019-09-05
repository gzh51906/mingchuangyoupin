const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
//增
Router.post('/', async (req, res) => {
    let { id, title, imgurl, price, ischeck, username, qty } = req.body;
    console.log(id, req.body);

    try {
        let data = {}
        data.spe = await mysql(`INSERT INTO usercart(id, title, imgurl, price, ischeck, username, qty) values ('${id}','${title}','${imgurl}','${price}','${ischeck}','${username}','${qty}')`)
        result = formatData({ data });

    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
//改
Router.patch('/', async (req, res) => {
    let { id, ischeck, username, qty } = req.body;
    try {
        let data = {}
        data.spe = await mysql(`UPDATE  vueporject.usercart SET  qty = '${qty}',ischeck=  '${ischeck}' WHERE  usercart.username =  '${username}' AND  usercart.id =${id}`)
        result = formatData({ data });

    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
//删
Router.delete('/', async (req, res) => {
    let { id, username } = req.body;
    // let { username } = req.body;
    console.log(id, username);

    try {
        let data = {}
        //"DELETE FROM vueporject.usercart WHERE  usercart.username =  'undefined' AND  usercart.id =undefined"
        data.spe = await mysql(`DELETE FROM vueporject.usercart WHERE  usercart.username =  '${username}' AND  usercart.id =${id}`)
        // data.spe = await mysql(`DELETE FROM vueporject.usercart WHERE  usercart.username = '${username}'`)
        result = formatData({ data });

    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
});
//查
Router.get('/', async (req, res) => {
    let { username } = req.query;
    let result;
    try {
        let data = await mysql(`SELECT * FROM  usercart WHERE username = '${username}'`)
        result = formatData({ data });

    } catch (err) {
        result = formatData({ code: 0, data: err })
    }

    res.send(result)
});

module.exports = Router;