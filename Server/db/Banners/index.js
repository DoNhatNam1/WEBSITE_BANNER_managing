// 'use strict';

// const utils = require('../utils/loadSql');
// const config = require('../../config/mssql');
// const sql = require('mssql');

// const getBanners = async () =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Banners');
//         const list = await pool.request().query(sqlQueries.bannerList);
//         return list.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const getByIdBanner = async (banner_id) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Banners');
//         const oneBanner = await pool.request()
//                                     .input('banner_id', sql.Int, banner_id)
//                                     .query(sqlQueries.bannerById);

//         return oneBanner.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const CreateBanner = async (bannerData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Banners');
//         const insertBanner = await pool.request()
//                                         .input("bannerName", sql.NVarChar(50), bannerData.bannerName)
//                                         .input("BannerSize_id", sql.Int, bannerData.BannerSize_id)
//                                         .input("ContentLink", sql.NVarChar(1000), bannerData.ContentLink)
//                                         .input("ImgLinking", sql.NVarChar(1000), bannerData.ImgLinking)
//                                         .query(sqlQueries.createBanner);
//         return insertBanner.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const CreateBannerPosition = async (bannerPositionData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Banners');
//         const insertBannerPosition = await pool.request()
//                                         .input("position", sql.NVarChar(50), bannerPositionData.position)
//                                         .input("Status", sql.NVarChar(15), bannerPositionData.Status)
//                                         .query(sqlQueries.createBannerPosition);
//         return insertBannerPosition.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const UpdateBanner = async (banner_id, bannerData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Banners');
//         const updatebanner = await pool.request()
//                                 .input("banner_id", sql.Int, banner_id)
//                                 .input("bannerName", sql.NVarChar(50), bannerData.bannerName)
//                                 .input("BannerSize_id", sql.Int, bannerData.BannerSize_id)
//                                 .input("ContentLink", sql.NVarChar(1000), bannerData.ContentLink)
//                                 .input("ImgLinking", sql.NVarChar(1000), bannerData.ImgLinking)
//                                 .query(sqlQueries.updateBanner);
//         return updatebanner.recordset;

//     } catch (error) {
//         return error.message;
//     }
// }

// const UpdateBannerPosition = async (BannerPosition_id, bannerPositionData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Banners');
//         const updatebannerposition = await pool.request()
//                                 .input("BannerPosition_id", sql.Int, BannerPosition_id)
//                                 .input("banner_id", sql.Int, bannerPositionData.banner_id)
//                                 .input("Status", sql.NVarChar(15), bannerPositionData.Status)
//                                 .query(sqlQueries.updateBannerPosition);
//         return updatebannerposition.recordset;

//     } catch (error) {
//         return error.message;
//     }
// }

// const DeleteBanner = async (banner_id) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Banners'); 
//         const deletedbanner = await pool.request()
//                                     .input('banner_id', sql.Int, banner_id)
//                                     .query(sqlQueries.deleteBanner);
//         return deletedbanner.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// module.exports = {
//     getBanners,
//     getByIdBanner,
//     CreateBanner,
//     CreateBannerPosition,
//     UpdateBanner,
//     UpdateBannerPosition,
//     DeleteBanner
// }
