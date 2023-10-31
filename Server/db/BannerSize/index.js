// 'use strict';

// const utils = require('../utils/loadSql');
// const config = require('../../config/mssql');
// const sql = require('mssql');

// const getBannerSizes = async () =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerSize');
//         const list = await pool.request().query(sqlQueries.bannerSizeList);
//         return list.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const getByIdBannerSize = async (BannerSize_id) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerSize');
//         const oneBannerSize = await pool.request()
//                                     .input('BannerSize_id', sql.Int, BannerSize_id)
//                                     .query(sqlQueries.bannerSizeById);

//         return oneBannerSize.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const CreateBannerSize = async (bannerSizeData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerSize');
//         const insertBannerSize = await pool.request()
//                                         .input("Length", sql.NVarChar(50), bannerSizeData.Length)
//                                         .input("Hight", sql.NVarChar(15), bannerSizeData.Hight)
//                                         .query(sqlQueries.createBannerSize);
//         return insertBannerSize.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const UpdateBannerSize = async (BannerSize_id, bannerSizeData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerSize');
//         const updatebannersize = await pool.request()
//                                 .input("BannerSize_id", sql.Int, BannerSize_id)
//                                 .input("Length", sql.NVarChar(15), bannerSizeData.Length)
//                                 .input("Hight", sql.NVarChar(15), bannerSizeData.Hight)
//                                 .query(sqlQueries.updateBannerSize);
//         return updatebannersize.recordset;

//     } catch (error) {
//         return error.message;
//     }
// }

// const DeleteBannerSize = async (BannerSize_id) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerSize'); 
//         const deletedbannersize = await pool.request()
//                                     .input('BannerSize_id', sql.Int, BannerSize_id)
//                                     .query(sqlQueries.deleteBannerSize);
//         return deletedbannersize.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// module.exports = {
//     getBannerSizes,
//     getByIdBannerSize,
//     CreateBannerSize,
//     UpdateBannerSize,
//     DeleteBannerSize
// }
