"use strict";

const express = require("express");
const clickLogController = require("../Controllers/clicklogController");
const router = express.Router();

const {
    addClickLog,
    getAllClickLogInMonth,
    getAllClickLoglastMonth,
    getAllClickLog,
} = clickLogController;

router.get('/inmonth/get', getAllClickLogInMonth);
router.get('/lastmonth/get', getAllClickLoglastMonth);
router.get('/all/get', getAllClickLog);
router.post('/created', addClickLog);
module.exports = {
  routes: router,
};
