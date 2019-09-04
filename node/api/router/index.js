const express = require('express');
const Router = express.Router();

const goodsRouter = require('./classify');
const detialsjw = require('./detialsjw');
const classifiaction = require('./classifiaction')
const home = require('./home');
<<<<<<< HEAD
const special = require('./special')
=======
const searchjw = require('./searchjw')
>>>>>>> c2167ee480b268f3cbf192312fe4542d16eaf844

Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/classify', goodsRouter);
Router.use('/detialsjw', detialsjw);
Router.use('/classifiaction', classifiaction);
Router.use('/searchjw', searchjw);
Router.use('/home', home);
Router.use('/special',special);

module.exports = Router;

