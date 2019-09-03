const express = require('express');
const Router = express.Router();
const mysql = require('../db/mysql');
const { formatData } = require('../utils/index');
// Router.post('/', (req, res) => {
//     let { gid, title, src, original_price, sale_price, active_type, active_text } = req.body;
//     mysql(`insert into good0 (gid, title, src,original_price,sale_price,active_type, active_text) VALUES ('${gid}', '${title}', '${src}','${original_price}','${sale_price}','${active_type}', '${active_text}')`)
//         .then(result => {
//             res.send(formatData());
//         })
// });
Router.route('/').get(async (req, res) => {

    let { type } = req.query;
    console.log(type);
    let result;
    try {
        let data = {}
        data.tuijian = await mysql(`select * from goods order by rand() limit 6`)
        data.fenlei = await mysql(`select * from fenlei where type = '${type}'`)
        result = formatData({ data });
    } catch (err) {
        result = formatData({ code: 0, data: err });
    }
    res.send(result)
})
module.exports = Router;