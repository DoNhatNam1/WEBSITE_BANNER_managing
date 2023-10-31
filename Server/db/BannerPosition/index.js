// 'use strict';

// const utils = require('../utils/loadSql');
// const config = require('../../config/mssql');
// const sql = require('mssql');

// const getBannerPositions = async () =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerPosition');
//         const list = await pool.request().query(sqlQueries.bannerPositionList);
//         return list.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const getByIdBannerPosition = async (BannerPosition_id) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerPosition');
//         const oneBannerPosition = await pool.request()
//                                     .input('BannerPosition_id', sql.Int, BannerPosition_id)
//                                     .query(sqlQueries.bannerPositionById);

//         return oneBannerPosition.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const CreateBannerPosition = async (bannerPositionData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerPosition');
//         const insertBannerPosition = await pool.request()
//                                         .input("StatusPosition", sql.NVarChar(15), bannerPositionData.StatusPosition)
//                                         .input("position", sql.NVarChar(15), bannerPositionData.position)
//                                         .input("banner_id", sql.Int, bannerPositionData.banner_id)
//                                         .query(sqlQueries.createBannerPosition);
//         return insertBannerPosition.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const UpdateBannerPosition = async (BannerPosition_id, bannerPositionData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerPosition');
//         const updatebannerposition = await pool.request()
//                                 .input("BannerPosition_id", sql.Int, BannerPosition_id)
//                                 .input("banner_id", sql.Int, bannerPositionData.banner_id)
//                                 .input("StatusPosition", sql.NVarChar(15), bannerPositionData.StatusPosition)
//                                 .input("position", sql.NVarChar(15), bannerPositionData.position)
//                                 .query(sqlQueries.updateBannerPosition);
//         return updatebannerposition.recordset;

//     } catch (error) {
//         return error.message;
//     }
// }

// const DeleteBannerPosition = async (BannerPosition_id) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('BannerPosition'); 
//         const deletedbannerposition = await pool.request()
//                                     .input('BannerPosition_id', sql.Int, BannerPosition_id)
//                                     .query(sqlQueries.deleteBannerPosition);
//         return deletedbannerposition.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// module.exports = {
//     getBannerPositions,
//     getByIdBannerPosition,
//     CreateBannerPosition,
//     UpdateBannerPosition,
//     DeleteBannerPosition
// }
