const express = require('express');
const Router = express.Router();

const goodsRouter = require('./classify');
const detialsjw = require('./detialsjw');
const classifiaction = require('./classifiaction')
const home = require('./home');
<<<<<<< HEAD

const special = require('./special')

const searchjw = require('./searchjw')
const reg = require('./reg')

=======
const special = require('./special')
const searchjw = require('./searchjw')
const usercart = require('./usercart')
>>>>>>> 3fc5cb1e826556b3baf8338f0bf1cfb54b592872

const rms = require('./rms')
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/classify', goodsRouter);
Router.use('/detialsjw', detialsjw);
Router.use('/classifiaction', classifiaction);
Router.use('/searchjw', searchjw);
Router.use('/home', home);
<<<<<<< HEAD
Router.use('/special',special);
Router.use('/reg',reg);
=======
Router.use('/special', special);
Router.use('/usercart', usercart);
Router.use('/special', special);
Router.use('/rms', rms);
>>>>>>> 3fc5cb1e826556b3baf8338f0bf1cfb54b592872

module.exports = Router;

