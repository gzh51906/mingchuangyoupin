const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
Router.route('/').get(async (req, res) => {

    let { category } = req.query;
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`select * from  goods WHERE  category LIKE  '${category}' LIMIT 0 , 30`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
module.exports = Router;