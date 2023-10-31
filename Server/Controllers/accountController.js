"use strict";

const AccountData = require("../db/Accounts");

const getAllUserAccounts = async (req, res, next) => {
  try {
    const useraccounts = await AccountData.getUsersAccount();
    res.status(200).json({
      status: "OK",
      datauseraccount: {
        useraccounts: useraccounts,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllUserAccountsAndInfos = async (req, res, next) => {
  try {
    const useraccountsandinfos = await AccountData.getUsersAccountAndInfo();
    res.status(200).json({
      status: "OK",
      datauseraccountandinfo: {
        useraccountsandinfos: useraccountsandinfos,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllManagerAccounts = async (req, res, next) => {
  try {
    const manageraccounts = await AccountData.getManagersAccount();
    res.status(200).json({
      status: "OK",
      datamanageraccount: {
        manageraccounts: manageraccounts,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await AccountData.getAccounts();
    res.status(200).json({
      status: "OK",
      dataaccount: {
        accounts: accounts,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const getAUserAccount = async (req, res, next) => {
  try {
    const iduseraccount = req.params.userId;
    console.log(
      "🚀 ~ file: userAccountController.js:45 ~ getAUserAccount ~ iduseraccount:",
      iduseraccount
    );

    const Auseraccount = await AccountData.getByIdUserAccount(iduseraccount);
    console.log(
      "🚀 ~ file: userAccountController.js:48 ~ getAUserAccount ~ Auseraccount:",
      Auseraccount
    );

    res.status(200).json({
      status: "OK",
      datauseraccount: {
        useraccount: Auseraccount,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAUserInfo = async (req, res, next) => {
  try {
    const iduserinfo = req.params.userId;
    console.log("🚀 ~ file: userAccountController.js:48 ~ getAUserInfo ~ iduserinfo:", iduserinfo)
 

    const Auserinfo = await AccountData.getByIdUserInfo(iduserinfo);
    console.log("🚀 ~ file: userAccountController.js:52 ~ getAUserInfo ~ Auserinfo:", Auserinfo)


    res.status(200).json({
      status: "OK",
      datauserinfo: {
        userinfo: Auserinfo,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAUserAccountPassOnly = async (req, res, next) => {
  try {
    const iduseraccountpassonly = req.params.userId;
    console.log("🚀 ~ file: userAccountController.js:48 ~ getAUserAccountPassOnly ~ iduseraccountpassonly:", iduseraccountpassonly)

    const Auseraccountpassonly = await AccountData.getByIdUserAccountPassOnly(iduseraccountpassonly);
    console.log("🚀 ~ file: userAccountController.js:51 ~ getAUserAccountPassOnly ~ Auseraccountpassonly:", Auseraccountpassonly)


    res.status(200).json({
      status: "OK",
      datauseraccountpassonly: {
        useraccountpassonly: Auseraccountpassonly,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAManagerAccountPassOnly = async (req, res, next) => {
  try {
    const idmanageraccountpassonly = req.params.managerId;


    const Amanageraccountpassonly = await AccountData.getByIdManagerAccountPassOnly(idmanageraccountpassonly);



    res.status(200).json({
      status: "OK",
      datamanageraccountpassonly: {
        manageraccountpassonly: Amanageraccountpassonly,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getAManagerInfo = async (req, res, next) => {
  try {
    const idmanagerinfo = req.params.managerId;
    console.log("🚀 ~ file: accountController.js:117 ~ getAManagerInfo ~ idmanagerinfo:", idmanagerinfo)

    const Amanagerinfo = await AccountData.getByIdManagerInfo(idmanagerinfo);
    console.log("🚀 ~ file: accountController.js:119 ~ getAManagerInfo ~ Amanagerinfo:", Amanagerinfo)



    res.status(200).json({
      status: "OK",
      datamanagerinfo: {
        managerinfo: Amanagerinfo,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const addUserAccount = async (req, res, next) => {
  try {
    const datauseraccounts = req.body;
    const created = await AccountData.CreateUserAccount(datauseraccounts);
    res.status(200).json({
      status: "OK",
      datauseraccount: {
        useraccount: created,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUserAccount = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const updateduseraccount = await AccountData.UpdateUserAccount(
      id,
      data
    );

    res.status(200).json({
      status: "OK",
      datauseraccount: {
        useraccount: updateduseraccount,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUserAccountPassOnly = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const updateduseraccountpassonly = await AccountData.UpdateUserAccountPassOnly(
      id,
      data
    );

    res.status(200).json({
      status: "OK",
      datauseraccountpassonly: {
        useraccountpassonly: updateduseraccountpassonly,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUserInfo = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const updateduserinfo = await AccountData.UpdateUserInfo(
      id,
      data
    );

    res.status(200).json({
      status: "OK",
      datauserinfo: {
        userinfo: updateduserinfo,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateManagerAccount = async (req, res, next) => {
  try {
    const id = req.params.managerId;
    const data = req.body;
    const updatedmanageraccount = await AccountData.UpdateManagerAccount(id, data);

    res.status(200).json({
      status: "OK",
      datamanageraccount: {
        manageraccount: updatedmanageraccount,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateManagerInfo = async (req, res, next) => {
  try {
    const id = req.params.managerId;
    const data = req.body;
    const updatedmanagerinfo = await AccountData.UpdateManagerInfo(id, data);

    res.status(200).json({
      status: "OK",
      datamanagerinfo: {
        managerinfo: updatedmanagerinfo,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const deleteUserAccount = async (req, res, next) => {
  try {
    const UserAccount_id = req.params.userId;
    const deleteduseraccount = await AccountData.DeleteUserAccount(UserAccount_id);
    res.status(200).json({
      status: "OK",
      datauseraccountdelete: {
        useraccountdelete: deleteduseraccount,
      },
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllUserAccountsAndInfos,
  getAllAccounts,
  getAllManagerAccounts,
  getAllUserAccounts,
  getAUserAccount,
  getAUserAccountPassOnly,
  getAManagerAccountPassOnly,
  getAManagerInfo,
  getAUserInfo,
  addUserAccount,
  updateUserAccount,
  updateManagerInfo,
  updateManagerAccount,
  updateUserInfo,
  updateUserAccountPassOnly,
  deleteUserAccount
};
