"use strict";

const express = require("express");
const userAccountInfoController = require("../Controllers/accountController");
const router = express.Router();

const {
  getAllUserAccountsAndInfos,
  updateUserAccount,
  getAUserInfo,
  deleteUserAccount,
} = userAccountInfoController;

router.get("/:managerId/userlist", getAllUserAccountsAndInfos);
router.put('/:managerId/userlist/:userId/edit', updateUserAccount);
router.get("/:managerId/userlist/:userId/delete", getAUserInfo);
router.delete('/:managerId/userlist/:userId/delete', deleteUserAccount);

module.exports = {
  routes: router,
};
