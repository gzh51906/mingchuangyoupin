const express = require('express');
const Router = express.Router();

const goodsRouter = require('./classify');
const detialsjw = require('./detialsjw');
const classifiaction = require('./classifiaction')
const home = require('./home');
const searchjw = require('./searchjw')

Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/classify', goodsRouter);
Router.use('/detialsjw', detialsjw);
Router.use('/classifiaction', classifiaction);
Router.use('/searchjw', searchjw);
Router.use('/home', home);

module.exports = Router;

