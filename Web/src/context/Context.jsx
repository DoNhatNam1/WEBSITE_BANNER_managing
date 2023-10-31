import React, { useState, createContext } from "react";
import {useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const [adminAccounts, setAdminAccounts] = useState([]);
  const[passwordFromDb, setPasswordFromDb] = useState([]);
  const [userIdShowInfoInMgDashData, setUserIdShowInfoInMgDashData] = useState();
  const [dashboardShowNLoginSuccess, setDashboardShowLoginSuccess] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);
  const [dashboardShowChangePassSuccess, setDashboardShowChangePassSuccess] = useState(false);
  const [dashboardShowSendingDelMessSucss, setDashboardShowSendingDelMessSucss] = useState(false);
  const [dashboardShowSendingDelMessFail, setDashboardShowSendingDelMessFail] = useState(false);
  const [dashboardShowSendingDelMessInOneDay, setDashboardShowSendingDelMessInOneDay] = useState(false);
  const [isOpenPopupRequestUserDashboard, setIsOpenPopupRequestUserDashboard] = useState(false);
  const [isOpenPopupUserInfoInMgDashboard, setIsOpenPopupUserInfoInMgDashboard] = useState(false);
  const [isLoggedInUser, setIsLoggedInUser] = useState(
    Boolean(localStorage.getItem('isLoggedInUser'))
  );
  const [isLoggedInManager, setIsLoggedInManager] = useState(
    Boolean(localStorage.getItem('isLoggedInManager'))
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  const [managerData, setManagerData] = useState(
    JSON.parse(localStorage.getItem('managerData'))
  );
  const loginUser = (user) => {
    setDashboardShowLoginSuccess(true);
    setIsLoggedInUser(true);
    setUserData(user);
    localStorage.setItem('isLoggedInUser', 'true');
    localStorage.setItem('userData', JSON.stringify(user));
  };

  const loginManager = (manager) => {
    setDashboardShowLoginSuccess(true);
    setIsLoggedInManager(true);
    setManagerData(manager);
    localStorage.setItem('isLoggedInManager', 'true');
    localStorage.setItem('managerData', JSON.stringify(manager));
  };

  const closePopupUserDashboard = () => {
    setIsOpenPopupRequestUserDashboard(false);
  };

    const closePopupShowUserInfoInMgDashboard = () => {
    setIsOpenPopupUserInfoInMgDashboard(false);
    setUserIdShowInfoInMgDashData();
  };

  const logout = () => {
    setIsLoggedInUser(false);
    setIsLoggedInManager(false);
    setUserData(null);
    setManagerData(null);
    localStorage.removeItem('isLoggedInUser');
    localStorage.removeItem('userData');
    localStorage.removeItem('isLoggedInManager');
    localStorage.removeItem('managerData');
  };
  const addUsers = (users) => {
    setUsers([...users, users]);
  };
  const addUserAccounts = (userAccounts) => {
    setUserAccounts([...userAccounts, userAccounts]);
  };

  return (
    <Context.Provider
      value={{
        users,
        userAccounts,
        adminAccounts,
        userData,
        managerData,
        registerStatus,
        isLoggedInUser,
        isLoggedInManager,
        passwordFromDb,
        userIdShowInfoInMgDashData,
        dashboardShowNLoginSuccess,
        dashboardShowChangePassSuccess,
        isOpenPopupRequestUserDashboard,
        isOpenPopupUserInfoInMgDashboard,
        dashboardShowSendingDelMessSucss,
        dashboardShowSendingDelMessFail,
        dashboardShowSendingDelMessInOneDay,
        setUsers,
        setPasswordFromDb,
        setRegisterStatus,
        setIsLoggedInUser,
        setIsLoggedInManager,
        setUserAccounts,
        setAdminAccounts,
        setManagerData,
        setUserIdShowInfoInMgDashData,
        setIsOpenPopupUserInfoInMgDashboard,
        setDashboardShowChangePassSuccess,
        setDashboardShowLoginSuccess,
        setIsOpenPopupRequestUserDashboard,
        setDashboardShowSendingDelMessSucss,
        setDashboardShowSendingDelMessFail,
        setDashboardShowSendingDelMessInOneDay,
        addUsers,
        addUserAccounts,
        loginUser,
        loginManager,
        logout,
        closePopupUserDashboard,
        closePopupShowUserInfoInMgDashboard,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};