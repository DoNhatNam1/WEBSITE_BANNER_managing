'use strict';

const utils = require('../utils/loadSql');
const config = require('../../config/mssql');
const sql = require('mssql');

const getClickLogsInMonth = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ClickLogs');
        const list = await pool.request().query(sqlQueries.clickLogInMonthList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getClickLogsLastMonth = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ClickLogs');
        const list = await pool.request().query(sqlQueries.clickLogLastMonthList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const getClickLogs = async () =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ClickLogs');
        const list = await pool.request().query(sqlQueries.clickLogList);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

// const getByIdClickLog = async (clicklog_id) => {
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('ClickLogs');
//         const oneCampaign = await pool.request()
//                                     .input('clicklog_id', sql.Int, clicklog_id)
//                                     .query(sqlQueries.clickLogById);

//         return oneCampaign.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

const CreateClickLog = async (clickLogData) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('ClickLogs');
        const insertClickLog = await pool.request()
                                        .input("ClickHistory", sql.DateTime, clickLogData.ClickHistory)
                                        .input("UserAccount_id", sql.Int, clickLogData.UserAccount_id)
                                        .input("banner_id", sql.Int, clickLogData.banner_id)
                                        .input("ThoiGianChuyenDoi", sql.Int, clickLogData.ThoiGianChuyenDoi)
                                        .query(sqlQueries.createClickLog);
        return insertClickLog.recordset;
    } catch (error) {
        return error.message;
    }
}

// const UpdateClickLog = async (clicklog_id, clickLogData) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('ClickLogs');
//         const updateclickLog = await pool.request()
//                                 .input("clicklog_id", sql.Int, clicklog_id)
//                                 .input("ClickHistory", sql.DateTime, clickLogData.ClickHistory)
//                                 .input("UserAccount_id", sql.Int, clickLogData.UserAccount_id)
//                                 .input("banner_id", sql.Int, clickLogData.banner_id)
//                                 .input("campaign_id", sql.Int, clickLogData.campaign_id)
//                                 .query(sqlQueries.updateCampaign);
//         return updateclickLog.recordset;

//     } catch (error) {
//         return error.message;
//     }
// }


// const DeleteClickLog = async (clicklog_id) =>{
//     try {
//         let pool = await sql.connect(config.sql);
//         const sqlQueries = await utils.loadSqlQueries('ClickLogs'); 
//         const deletedclicklog = await pool.request()
//                                     .input('clicklog_id', sql.Int, clicklog_id)
//                                     .query(sqlQueries.deleteClickLog);
//         return deletedclicklog.recordset;
//     } catch (error) {
//         return error.message;
//     }
// }

module.exports = {
    getClickLogsInMonth,
    getClickLogsLastMonth,
    getClickLogs,
    CreateClickLog,
}
