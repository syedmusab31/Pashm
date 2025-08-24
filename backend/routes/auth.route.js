const express = require("express");
const router = express.Router();

// Import controller functions
const { Login, Logout, Signup} = require("../controllers");

// Routes
router.post("/login", Login);
router.post("/signup", Signup);
//router.post("/logout", Logout);

module.exports = router;
