const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
Router.route('/').get(async (req, res) => {

    let { uid } = req.query;
    // console.log(type);
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`select * from tuijian where uid = ${uid}`)
        // data.fenlei = await mysql(`select * from fenlei where id = '${id}'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
module.exports = Router;