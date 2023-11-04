import React from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context/Context';
// import AdminHomePage from './components/Admin/AdminHome/AdminHomePage';
import ClientHomePage from './components/Client/ClientHome/ClientHomePage';
// import AdminAddBannerSize from './components/Admin/AdminBanner/AdminAddBannerSize/AdminAddBannerSize';
// import AdminCampaignList from './components/Admin/AdminCampaign/AdminCampaignList/AdminCampaignList';
// import AdminUserList from './components/Admin/AdminUser/AdminUserList/AdminUserList';
import AdminBannerList from './components/Admin/AdminBanner/AdminBannerList/AdminBannerList';
// import AdminManagerList from './components/Admin/AdminManager/AdminManagerList/AdminManagerList';
// import AdminAddBanner from './components/Admin/AdminBanner/AdminAddBanner/AdminAddBanner';
// import AdminAddCampaign from './components/Admin/AdminCampaign/AdminAddCampaign/AdminAddCampaign';
// import AdminAddUser from './components/Admin/AdminUser/AdminAddUser/AdminAddUser';
// import AdminAddManager from './components/Admin/AdminManager/AdminAddManager/AdminAddManager';
// import AdminUpdateUser from './components/Admin/AdminUser/AdminUpdateUser/AdminUpdateUser';
// import AdminUpdateManager from './components/Admin/AdminManager/AdminUpdateManager/AdminUpdateManager';
// import AdminUpdateCampaign from './components/Admin/AdminCampaign/AdminUpdateCampaign/AdminUpdateCampaign';
// import AdminUpdateBanner from './components/Admin/AdminBanner/AdminUpdateBanner/AdminUpdateBanner';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserDashboard from './components/Client/UserDashboard/UserMainDashboard/UserDashboard';
import ProfileContainer from './components/Client/UserDashboard/UserDashboardProfile/ProfileContain/ProfileContainer'
import ProfileContainer2 from './components/Client/UserDashboard/UserDashboardProfile/ProfileContainer2/ProfileContainer2'
import ProfileEditMain from './components/Client/UserDashboard/UserDashboardProfile/ProfileEditMain/ProfileEditMain'
import MgProfileEdit from './components/Manager/ManagerProfile/MgProfileEdit/MgProfileEdit'
import UserChangePasswordContainer from './components/Client/UserDashboard/UserDashboardChangePassword/UserChangePasswordContainer/UserChangePasswordContainer'
import ManagerHome from "./components/Manager/ManagerHome/ManagerHome";
import ManagerUserList from "./components/Manager/ManagerUser/ManagerUserList";
import MgProfileContainer from './components/Manager/ManagerProfile/MgProfileContainer/MgProfileContainer'
import ManagerChangepassword from './components/Manager/ManagerChangepassword/ManagerChangepassword'
import ManagerBannerList from './components/Manager/ManagerBanner/ManagerBannerList/ManagerBannerList'
import ManagerCampaignList from './components/Manager/ManagerCampaign/ManagerCampaignList/ManagerCampaignList'

const App = () => {
  const hours = 4;
  const now = new Date().getTime();
  const setupTime = localStorage.getItem("setupTime");
  if (setupTime === null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }

  const routeConfig = [
    {
      path: "/",
      element: <ClientHomePage />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },

    // {
    //   path: "/admindashboard/userlist/:id",
    //   element: <AdminUserList />,
    // },

    // {
    //   path: "/admindashboard/managerlist/:id",
    //   element: <AdminManagerList />,
    // },

    // {
    //   path: "/admindashboard/bannerlist/:id",
    //   element: <AdminBannerList />,
    // },

    // {
    //   path: "/admindashboard/campaignlist/:id",
    //   element: <AdminCampaignList />,
    // },

    // {
    //   path: "/admindashboard/addbannersize/:id",
    //   element: <AdminAddBannerSize />,
    // },

    // {
    //   path: "/admindashboard/addcampaign/:id",
    //   element: <AdminAddBanner />,
    // },

    // {
    //   path: "/admindashboard/addbanner/:id",
    //   element: <AdminAddCampaign />,
    // },

    // {
    //   path: "/admindashboard/adduser/:id",
    //   element: <AdminAddUser />,
    // },

    // {
    //   path: "/admindashboard/addmanager/:id",
    //   element: <AdminAddManager />,
    // },

    // {
    //   path: "/admindashboard/updatebanner/:idbanner/:id",
    //   element: <AdminUpdateBanner />,
    // },

    // {
    //   path: "/admindashboard/updatecampaign/:idcampaign/:id",
    //   element: <AdminUpdateCampaign />,
    // },

    // {
    //   path: "/admindashboard/updateuser/:iduser/:id",
    //   element: <AdminUpdateUser/>,
    // },

    // {
    //   path: "/admindashboard/updatemanager/:idmanager/:id",
    //   element: <AdminUpdateManager/>,
    // },
    
    {
      path: "/userdashboard/:userId/home",
      element: <UserDashboard />,
    },

        
    {
      path: "/userdashboard/:userId/profile/info",
      element: <ProfileContainer />,
    },

    // {
    //   path: "/userdashboard/profile/:id/ranking",
    //   element: <ProfileContainer2 />,
    // },

    {
      path: "/userdashboard/:userId/profile/edit",
      element: <ProfileEditMain />,
    },

    {
      path: "/userdashboard/:userId/changepassword",
      element: <UserChangePasswordContainer />,
    },

    {
      path: "/managerdashboard/:managerId/profile/info",
      element: <MgProfileContainer />,
    },

    {
      path: "/managerdashboard/:managerId/profile/edit",
      element: <MgProfileEdit />,
    },

    {
      path: "/managerdashboard/:managerId/home",
      element: <ManagerHome />,
    },

    {
      path: "/managerdashboard/:managerId/userlist",
      element: <ManagerUserList />,
    },

    {
      path: "/managerdashboard/:managerId/changepassword",
      element: <ManagerChangepassword />,
    },

    {
      path: "/managerdashboard/:managerId/bannerlist",
      element: <ManagerBannerList />,
    },

    {
      path: "/managerdashboard/:managerId/campaignlist",
      element: <ManagerCampaignList />,
    },

  ];

  const renderRoutes = routeConfig.map(({ path, element }) => (
    <Route key={path} path={path} element={element} />
  ));
  
  return (
    <ContextProvider>
      <>
        <Router>
          <Routes>
            {renderRoutes}
            </Routes>
        </Router>
      </>
    </ContextProvider>
  );

};

export default App
