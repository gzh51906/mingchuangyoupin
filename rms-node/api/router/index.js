const express = require('express');
const Router = express.Router();
const rms = require('./rms');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/rms', rms);
module.exports = Router;

