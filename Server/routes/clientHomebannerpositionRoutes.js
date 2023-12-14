"use strict";

const express = require("express");
const bannerController = require("../Controllers/bannerController");
const router = express.Router();

const {
getAllBannerWithPosition,
  
} = bannerController;

router.get("/get", getAllBannerWithPosition);
module.exports = {
  routes: router,
};
