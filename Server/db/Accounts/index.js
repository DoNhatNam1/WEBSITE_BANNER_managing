"use strict";

const utils = require("../utils/loadSql");
const config = require("../../config/mssql");
const sql = require("mssql");

const getUsersAccount = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const listuser = await pool.request().query(sqlQueries.userAccountList);
    return listuser.recordset;
  } catch (error) {
    return error.message;
  }
};

const getUsersAccountAndInfo = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const listuser = await pool
      .request()
      .query(sqlQueries.userAccountAndInfoList);
    return listuser.recordset;
  } catch (error) {
    return error.message;
  }
};

const getManagersAccount = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const listmanager = await pool
      .request()
      .query(sqlQueries.managerAccountList);
    return listmanager.recordset;
  } catch (error) {
    return error.message;
  }
};

const getAccounts = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const list = await pool.request().query(sqlQueries.accountsList);
    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

const getByIdUserAccount = async (UserAccount_id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const oneUserAccount = await pool
      .request()
      .input("UserAccount_id", sql.Int, UserAccount_id)
      .query(sqlQueries.userAccountById);

    return oneUserAccount.recordset;
  } catch (error) {
    return error.message;
  }
};

const getByIdUserInfo = async (UserAccount_id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const oneUserAccount = await pool
      .request()
      .input("UserAccount_id", sql.Int, UserAccount_id)
      .query(sqlQueries.userInfoById);

    return oneUserAccount.recordset;
  } catch (error) {
    return error.message;
  }
};

const getByIdManagerInfo = async (manager_id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const oneUserAccount = await pool
      .request()
      .input("manager_id", sql.Int, manager_id)
      .query(sqlQueries.managerInfoById);

    return oneUserAccount.recordset;
  } catch (error) {
    return error.message;
  }
};

const getByIdUserAccountPassOnly = async (UserAccount_id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const oneUserAccountPassOnly = await pool
      .request()
      .input("UserAccount_id", sql.Int, UserAccount_id)
      .query(sqlQueries.userAccountPassOnlyById);

    return oneUserAccountPassOnly.recordset;
  } catch (error) {
    return error.message;
  }
};

const getByIdManagerAccountPassOnly = async (manager_id) => {
    try {
      let pool = await sql.connect(config.sql);
      const sqlQueries = await utils.loadSqlQueries("Accounts");
      const oneUserAccountPassOnly = await pool
        .request()
        .input("manager_id", sql.Int, manager_id)
        .query(sqlQueries.managerAccountPassOnlyById);
  
      return oneUserAccountPassOnly.recordset;
    } catch (error) {
      return error.message;
    }
  };

const CreateUserAccount = async (userAccountData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const insertUserAccount = await pool
      .request()
      .input("AccountName", sql.NVarChar(100), userAccountData.AccountName)
      .input("Pass", sql.NVarChar(100), userAccountData.Pass)
      .input("email", sql.NVarChar(100), userAccountData.email)
      .query(sqlQueries.createUserAccount);
    return insertUserAccount.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateUserAccount = async (UserAccount_id, userAccountData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const updateuseraccount = await pool
      .request()
      .input("UserAccount_id", sql.Int, UserAccount_id)
      .input("AccountName", sql.NVarChar(100), userAccountData.AccountName)
      .input("Full_Name", sql.NVarChar(50), userAccountData.Full_Name)
      .input("Pass", sql.NVarChar(100), userAccountData.Pass)
      .input("email", sql.NVarChar(50), userAccountData.email)
      .query(sqlQueries.updateUserAccount);
    return updateuseraccount.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateUserAccountPassOnly = async (UserAccount_id, userAccountData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const updateuseraccountpassonly = await pool
      .request()
      .input("UserAccount_id", sql.Int, UserAccount_id)
      .input("Pass", sql.NVarChar(100), userAccountData.Pass)
      .query(sqlQueries.updateUserAccountPassOnly);
    return updateuseraccountpassonly.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateUserInfo = async (UserAccount_id, userAccountData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const updateuseraccount = await pool
      .request()
      .input("UserAccount_id", sql.Int, UserAccount_id)
      .input("Full_Name", sql.NVarChar(50), userAccountData.Full_Name)
      .input("phone_number", sql.NVarChar(15), userAccountData.phone_number)
      .input("DiaDiem", sql.NVarChar(50), userAccountData.DiaDiem)
      .input("Gender", sql.NVarChar(10), userAccountData.Gender)
      .input("ImgUser", sql.NVarChar(1000), userAccountData.ImgUser)
      .input("Age", sql.Int, userAccountData.Age)
      .query(sqlQueries.updateUserInfo);
    return updateuseraccount.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateManagerInfo = async (manager_id, managerAccountData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const updatemanagerinfo = await pool
      .request()
      .input("manager_id", sql.Int, manager_id)
      .input("MgName", sql.NVarChar(50), managerAccountData.MgName)
      .input("MgAddress", sql.NVarChar(50), managerAccountData.MgAddress)
      .input("MgGender", sql.NVarChar(10), managerAccountData.MgGender)
      .input("MgImg", sql.NVarChar(1000), managerAccountData.MgImg)
      .input("MgAge", sql.Int, managerAccountData.MgAge)
      .query(sqlQueries.updateManagerInfo);
    return updatemanagerinfo.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateManagerAccount = async (manager_id, managerAccountData) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const updatemanagerinfo = await pool
      .request()
      .input("manager_id", sql.Int, manager_id)
      .input("MgPass", sql.NVarChar(100), managerAccountData.MgPass)
      .query(sqlQueries.updateManagerAccount);
    return updatemanagerinfo.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteUserAccount = async (UserAccount_id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Accounts");
    const deleteduseraccount = await pool
      .request()
      .input("UserAccount_id", sql.Int, UserAccount_id)
      .query(sqlQueries.deleteUserAccount);
    return deleteduseraccount.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
    getAccounts,
    getManagersAccount,
    getUsersAccountAndInfo,
    getUsersAccount,
    getByIdManagerInfo,
    getByIdManagerAccountPassOnly,
    getByIdUserAccount,
    getByIdUserAccountPassOnly,
    getByIdUserInfo,
    CreateUserAccount,
    UpdateManagerInfo,
    UpdateManagerAccount,
    UpdateUserAccount,
    UpdateUserInfo,
    UpdateUserAccountPassOnly,
    DeleteUserAccount,
};
