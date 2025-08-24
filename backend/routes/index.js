const express = require('express');
const authRoutes = require("./auth.route");
const {protect} = require("../middlewares/authMiddleware")

const routes = express.Router();

routes.use("/auth", authRoutes);
//routes.use(protect);


module.exports = routes;