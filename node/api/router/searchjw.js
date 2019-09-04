const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
Router.route('/').get(async (req, res) => {

    let { text } = req.query;
    console.log(text);
    let result;
    try {
        let data = {}
        data.suju = await mysql(`select * from  goods where  title like  '%${text}%' limit 0 , 30`);
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
module.exports = Router;