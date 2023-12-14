"use strict";

const express = require("express");
const bannerController = require("../Controllers/bannerController");
const router = express.Router();

const {
  getAllBanner,
  getAllBannerPosition,
  getAllBannerSize,
  getABanner,
  addBanner,
  updateBanner,
  deleteBanner
  
} = bannerController;

router.get("/:managerId/bannerlist", getAllBanner);
router.get("/:managerId/bannerlist/position", getAllBannerPosition);
router.get("/:managerId/bannerlist/:bannerId/edit", getABanner);
router.get("/:managerId/bannerlist/size", getAllBannerSize);
router.put("/:managerId/bannerlist/:bannerId/edit", updateBanner);
router.post("/:managerId/bannerlist/add", addBanner);
router.delete("/:managerId/bannerlist/:bannerId/delete", deleteBanner);
module.exports = {
  routes: router,
};
