const express = require('express');
const router = express.Router();
const userRegister = require("./register.userController")


router.post("/register", userRegister.service);


module.exports = router;