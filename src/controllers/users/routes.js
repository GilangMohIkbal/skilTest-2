const express = require('express');
const router = express.Router();
const userRegister = require("./register.userController")
const validator = require("../../helpers/validator")

router.post("/register", userRegister.validation, validator, userRegister.service);


module.exports = router;