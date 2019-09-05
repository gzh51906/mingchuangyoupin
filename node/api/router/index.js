const express = require('express');
const Router = express.Router();

const goodsRouter = require('./classify');
const detialsjw = require('./detialsjw');
const classifiaction = require('./classifiaction');
const home = require('./home');


const special = require('./special');

const searchjw = require('./searchjw');
const reg = require('./reg');
const login = require('./login');



const usercart = require('./usercart');



const rms = require('./rms');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/classify', goodsRouter);
Router.use('/detialsjw', detialsjw);
Router.use('/classifiaction', classifiaction);
Router.use('/searchjw', searchjw);
Router.use('/home', home);
Router.use('/login', login)


Router.use('/reg', reg);

Router.use('/special', special);
Router.use('/usercart', usercart);

Router.use('/rms', rms);


module.exports = Router;

