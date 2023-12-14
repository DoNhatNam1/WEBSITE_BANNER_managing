"use strict";

const BannerData = require("../db/Banners");

const getAllBannerPosition = async (req, res, next) => {
  try {
    const bannersposition = await BannerData.getBannersPosition();
    res.status(200).json({
      status: "OK",
      databannersposition: {
        bannersposition: bannersposition,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllBannerWithPosition = async (req, res, next) => {
  try {
    const bannerswithposition = await BannerData.getBannersWithPosition();
    res.status(200).json({
      status: "OK",
      databannerswithposition: {
        bannerswithposition: bannerswithposition,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllBannerSize = async (req, res, next) => {
  try {
    const bannerssize = await BannerData.getBannersSize();
    res.status(200).json({
      status: "OK",
      databannerssize: {
        bannerssize: bannerssize,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllBanner = async (req, res, next) => {
  try {
    const banners = await BannerData.getBanners();
    res.status(200).json({
      status: "OK",
      databanners: {
        banners: banners,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const getABanner = async (req, res, next) => {
  try {
    const idbanner = req.params.bannerId;

    const Abanner = await BannerData.getByIdBanner(idbanner);

    res.status(200).json({
      status: "OK",
      databanner: {
        banner: Abanner,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addBanner = async (req, res, next) => {
  try {
    const databanner = req.body;
    const created = await BannerData.CreateBanner(databanner);
    res.status(200).json({
      status: "OK",
      databanner: {
        banner: created,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateBanner = async (req, res, next) => {
  try {
    const id = req.params.bannerId;
    const data = req.body;
    const updatedbanner = await BannerData.UpdateBanner(
      id,
      data
    );

    res.status(200).json({
      status: "OK",
      databanner: {
        banner: updatedbanner,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteBanner = async (req, res, next) => {
  try {
    const Banner_id = req.params.bannerId;
    const deletebanner = await BannerData.DeleteBanner(Banner_id);
    res.status(200).json({
      status: "OK",
      databannerdelete: {
        bannerdelete: deletebanner,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
    getAllBannerPosition,
    getAllBannerSize,
    getAllBanner,
    getAllBannerWithPosition,
    getABanner,
    addBanner,
    updateBanner,
    deleteBanner,
};
