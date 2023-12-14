'use strict';

const utils = require('../utils/loadSql');
const config = require('../../config/mssql');
const sql = require('mssql');

const getBanners = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const list = await pool.request().query(sqlQueries.bannerList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getBannersWithPosition = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const list = await pool.request().query(sqlQueries.bannerWithpositionList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdBanner = async (banner_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const oneBanner = await pool.request()
                                    .input('banner_id', sql.Int, banner_id)
                                    .query(sqlQueries.bannerById);

        return oneBanner.recordset;
    } catch (error) {
        return error.message;
    }
}

const getByIdBannersWithPosition = async (banner_id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const oneBannerWithPosition = await pool.request()
                                    .input('banner_id', sql.Int, banner_id)
                                    .query(sqlQueries.bannerWithpositionById);

        return oneBannerWithPosition.recordset;
    } catch (error) {
        return error.message;
    }
}

const getBannersPosition = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const list = await pool.request().query(sqlQueries.bannerPositionsList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}


const getBannersSize = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const list = await pool.request().query(sqlQueries.bannerSizeList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}


const CreateBanner = async (bannerData) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const insertBanner = await pool.request()
                                        .input("BannerName", sql.NVarChar(50), bannerData.BannerName)
                                        .input("BannerSize_id", sql.Int, bannerData.BannerSize_id)
                                        .input("BannerPosition_id", sql.Int, bannerData.BannerPosition_id)
                                        .input("ContentLink", sql.NVarChar(1000), bannerData.ContentLink)
                                        .input("ImgLinking", sql.NVarChar(1000), bannerData.ImgLinking)
                                        .input("StatusBanner", sql.NVarChar(50), bannerData.StatusBanner)
                                        .query(sqlQueries.createBanner);
        return insertBanner.recordset;
    } catch (error) {
        return error.message;
    }
}


const UpdateBanner = async (banner_id, bannerData) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners');
        const updatebanner = await pool.request()
                                .input("banner_id", sql.Int, banner_id)
                                .input("BannerName", sql.NVarChar(50), bannerData.BannerName)
                                .input("BannerSize_id", sql.Int, bannerData.BannerSize_id)
                                .input("BannerPosition_id", sql.Int, bannerData.BannerPosition_id)
                                .input("ContentLink", sql.NVarChar(1000), bannerData.ContentLink)
                                .input("ImgLinking", sql.NVarChar(1000), bannerData.ImgLinking)
                                .input("StatusBanner", sql.NVarChar(50), bannerData.StatusBanner)
                                .query(sqlQueries.updateBanner);
        return updatebanner.recordset;

    } catch (error) {
        return error.message;
    }
}

const DeleteBanner = async (banner_id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Banners'); 
        const deletedbanner = await pool.request()
                                    .input('banner_id', sql.Int, banner_id)
                                    .query(sqlQueries.deleteBanner);
        return deletedbanner.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getBanners,
    getBannersPosition,
    getBannersWithPosition,
    getBannersSize,
    getByIdBanner,
    getByIdBannersWithPosition,
    CreateBanner,
    UpdateBanner,
    DeleteBanner,
}
