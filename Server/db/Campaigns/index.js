// 'use strict';

// const utils = require('../utils/loadSql');
// const config = require('../../config/mssql');
// const sql = require('mssql');

// const getCampaigns = async () =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Campaigns');
//         const list = await pool.request().query(sqlQueries.campaignList);
//         return list.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const getByIdCampaign = async (campaign_id) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Campaigns');
//         const oneCampaign = await pool.request()
//                                     .input('campaign_id', sql.Int, campaign_id)
//                                     .query(sqlQueries.campaignById);

//         return oneCampaign.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const CreateCampaign = async (campaignData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Campaigns');
//         const insertCampaign = await pool.request()
//                                         .input("CampaignName", sql.NVarChar(50), campaignData.CampaignName)
//                                         .input("manager_id", sql.Int, campaignData.manager_id)
//                                         .input("DayStart", sql.DateTime, campaignData.DayStart)
//                                         .input("DayEnd", sql.DateTime, campaignData.DayEnd)
//                                         .input("TanSuatHienThi", sql.NVarChar(50), campaignData.TanSuatHienThi)
//                                         .input("Status", sql.NVarChar(20), campaignData.Status)
//                                         .input("TotalBudget", sql.Int, campaignData.TotalBudget)
//                                         .input("DailyBudget", sql.Int, campaignData.DailyBudget)
//                                         .input("TotalBudgetUsed", sql.Int, campaignData.TotalBudgetUsed)
//                                         .query(sqlQueries.createCampaign);
//         return insertCampaign.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// const UpdateCampaign = async (campaign_id, campaignData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Campaigns');
//         const updatecampaign = await pool.request()
//                                 .input("campaign_id", sql.Int, campaign_id)
//                                 .input("CampaignName", sql.NVarChar(50), campaignData.CampaignName)
//                                 .input("manager_id", sql.Int, campaignData.manager_id)
//                                 .input("DayStart", sql.DateTime, campaignData.DayStart)
//                                 .input("DayEnd", sql.DateTime, campaignData.DayEnd)
//                                 .input("TanSuatHienThi", sql.NVarChar(50), campaignData.TanSuatHienThi)
//                                 .input("Status", sql.NVarChar(20), campaignData.Status)
//                                 .input("TotalBudget", sql.Int, campaignData.TotalBudget)
//                                 .input("DailyBudget", sql.Int, campaignData.DailyBudget)
//                                 .input("TotalBudgetUsed", sql.Int, campaignData.TotalBudgetUsed)
//                                 .query(sqlQueries.updateCampaign);
//         return updatecampaign.recordset;

//     } catch (error) {
//         return error.message;
//     }
// }

// const DeleteCampaign = async (campaign_id) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('Campaigns'); 
//         const deletedcampaign = await pool.request()
//                                     .input('campaign_id', sql.Int, campaign_id)
//                                     .query(sqlQueries.deleteCampaign);
//         return deletedcampaign.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

// module.exports = {
//     getCampaigns,
//     getByIdCampaign,
//     CreateCampaign,
//     UpdateCampaign,
//     DeleteCampaign
// }
