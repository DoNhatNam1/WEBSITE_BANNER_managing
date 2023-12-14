import React, { useState, createContext } from "react"
import {useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie';

export const Context = createContext();

export const ContextProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const [banners, setBanners] = useState([]);
  const [bannersSize, setBannersSize] = useState([]);
  const [adminAccounts, setAdminAccounts] = useState([]);
  const [clickLogList, setClickLogList] = useState([]);
  const[passwordFromDb, setPasswordFromDb] = useState([]);
  const [bannerRows, setBannerRows] = useState([]);
  const [bannerWithPosition, setBannerWithPosition] = useState([]);
  const [userIdShowInfoInMgDashData, setUserIdShowInfoInMgDashData] = useState();
  const [bannerIdShowInfoInMgDashData, setBannerIdShowInfoInMgDashData] = useState();
  const [reLoadBannerEditPage, setReLoadBannerEditPage] = useState();
  const [reLoadBannerAddPage, setReLoadBannerAddPage] = useState();
  const [dashboardShowNLoginSuccess, setDashboardShowLoginSuccess] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(false);
  const [dashboardShowChangePassSuccess, setDashboardShowChangePassSuccess] = useState(false);
  const [dashboardShowSendingDelMessSucss, setDashboardShowSendingDelMessSucss] = useState(false);
  const [dashboardShowSendingDelMessFail, setDashboardShowSendingDelMessFail] = useState(false);
  const [dashboardShowSendingDelMessInOneDay, setDashboardShowSendingDelMessInOneDay] = useState(false);
  const [isOpenPopupRequestUserDashboard, setIsOpenPopupRequestUserDashboard] = useState(false);
  const [isOpenPopupUserInfoInMgDashboard, setIsOpenPopupUserInfoInMgDashboard] = useState(false);
  const [isOpenPopupBannerAddInMgDashboard, setIsOpenPopupBannerAddInMgDashboard] = useState(false);
  const [isOpenPopupBannerEditInMgDashboard, setIsOpenPopupBannerEditInMgDashboard] = useState(false);

  const [secondBannerClickLogs, setSecondBannerClickLogs] = useState(0);
  const [currentTimeBannerClickLog, setCurrentTimeBannerClickLog] = useState(new Date());
  const [isLoggedInUser, setIsLoggedInUser] = useState(
    Boolean(localStorage.getItem('isLoggedInUser'))
  );
  const [isLoggedInManager, setIsLoggedInManager] = useState(
    Boolean(localStorage.getItem('isLoggedInManager'))
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem('userData'))
  );

  const [bannerData, setBannerData] = useState(
    JSON.parse(localStorage.getItem('bannerData'))
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

  const closePopupShowBannerEditInMgDashboard = () => {
    setIsOpenPopupBannerEditInMgDashboard(false);
    setBannerIdShowInfoInMgDashData();
  };
  

  const closePopupShowBannerAddInMgDashboard = () => {
    setIsOpenPopupBannerAddInMgDashboard(false);
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
  const addBanners = (banners) => {
    setBannerRows([...banners, banners]);
  };

  return (
    <Context.Provider
      value={{
        users,
        userAccounts,
        banners,
        bannerRows,
        bannerWithPosition,
        bannersSize,
        adminAccounts,
        clickLogList,
        userData,
        managerData,
        bannerData,
        registerStatus,
        isLoggedInUser,
        isLoggedInManager,
        reLoadBannerEditPage,
        reLoadBannerAddPage,
        passwordFromDb,
        userIdShowInfoInMgDashData,
        bannerIdShowInfoInMgDashData,
        dashboardShowNLoginSuccess,
        dashboardShowChangePassSuccess,
        isOpenPopupBannerEditInMgDashboard,
        isOpenPopupBannerAddInMgDashboard,
        isOpenPopupRequestUserDashboard,
        isOpenPopupUserInfoInMgDashboard,
        dashboardShowSendingDelMessSucss,
        dashboardShowSendingDelMessFail,
        dashboardShowSendingDelMessInOneDay,
        currentTimeBannerClickLog,
        secondBannerClickLogs,
        setUsers,
        setBanners,
        setBannersSize,
        setBannerRows,
        setBannerWithPosition,
        setPasswordFromDb,
        setRegisterStatus,
        setIsLoggedInUser,
        setIsLoggedInManager,
        setUserAccounts,
        setAdminAccounts,
        setManagerData,
        setBannerData,
        setReLoadBannerEditPage,
        setReLoadBannerAddPage,
        setUserIdShowInfoInMgDashData,
        setBannerIdShowInfoInMgDashData,
        setIsOpenPopupUserInfoInMgDashboard,
        setIsOpenPopupBannerAddInMgDashboard,
        setIsOpenPopupBannerEditInMgDashboard,
        setDashboardShowChangePassSuccess,
        setDashboardShowLoginSuccess,
        setIsOpenPopupRequestUserDashboard,
        setDashboardShowSendingDelMessSucss,
        setDashboardShowSendingDelMessFail,
        setDashboardShowSendingDelMessInOneDay,
        setClickLogList,
        setCurrentTimeBannerClickLog,
        setSecondBannerClickLogs,
        addUsers,
        addUserAccounts,
        addBanners,
        loginUser,
        loginManager,
        logout,
        closePopupUserDashboard,
        closePopupShowUserInfoInMgDashboard,
        closePopupShowBannerEditInMgDashboard,
        closePopupShowBannerAddInMgDashboard,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};