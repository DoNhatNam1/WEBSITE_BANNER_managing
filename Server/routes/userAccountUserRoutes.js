"use strict";

const express = require("express");
const userAccountController = require("../Controllers/accountController");
const router = express.Router();

const {
  getAUserAccountPassOnly,
  updateUserAccountPassOnly,
} = userAccountController;

router.get("/:userId/changepassword", getAUserAccountPassOnly);
router.put("/:userId/changepassword", updateUserAccountPassOnly);

module.exports = {
  routes: router,
};
