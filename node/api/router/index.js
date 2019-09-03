const express = require('express');
const Router = express.Router();

const goodsRouter = require('./classify');
const detialsjw = require('./detialsjw');
const home = require('./home');

Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/classify', goodsRouter);
Router.use('/detialsjw', detialsjw);
Router.use('/home', home);

module.exports = Router;

