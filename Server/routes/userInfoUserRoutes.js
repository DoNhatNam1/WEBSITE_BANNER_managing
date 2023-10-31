"use strict";

const express = require("express");
const userInfoController = require("../Controllers/accountController");
const router = express.Router();

const {
  getAUserInfo,
  updateUserInfo,
} = userInfoController;

router.get("/:userId/profile/info", getAUserInfo);
router.get("/:userId/profile/edit", getAUserInfo);
router.get("/:userId/home", getAUserInfo);
router.put("/:userId/profile/edit", updateUserInfo);
module.exports = {
  routes: router,
};
