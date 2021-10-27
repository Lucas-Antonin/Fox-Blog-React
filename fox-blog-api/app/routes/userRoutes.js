'use strict';

const express = require("express");
const router = express.Router();

/**
 * Routes controllers imports
 */
const { registerUsers } = require("../controllers/userController");

/**
 * Middlewares imports
 */
 const userRegisterRequestValidator = require('../middlewares/validators/userRegisterRequestValidator');

router.post("/user/register", userRegisterRequestValidator, registerUsers);

module.exports = router;