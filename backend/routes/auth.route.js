const express = require('express');
const routes = express.Router();
const {login} = require("../controllers")

routes.route('/login').post(login);

module.exports = routes
