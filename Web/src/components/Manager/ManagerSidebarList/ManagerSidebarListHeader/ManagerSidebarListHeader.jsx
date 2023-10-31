import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./managersidebarlistheader.css";
import { Context } from '../../../../context/Context'
import { SiYourtraveldottv } from 'react-icons/si'
import { MdDashboard } from "react-icons/md";
import { MdCampaign } from "react-icons/md";
import { IoApps } from "react-icons/io5";
import { GiKnightBanner } from "react-icons/gi";
import { PiUserListFill } from "react-icons/pi";
import { MdAdsClick } from "react-icons/md";
import { SiFsecure } from "react-icons/si";
import { MdOutlineLogout } from 'react-icons/md'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

const ManagerSidebarListHeader = () => {
  const { 
    logout, 
    managerData,
} = React.useContext(Context); 
const navigateTo = useNavigate()

const handleLogout = () => {
    logout();
    navigateTo('/login');
  };

  const handleLinkingInfo = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/profile/info`);
  };

  const handleLinkingMainDashBoard = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/home`);
  };

  const handleLinkingChangePassword = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/changepassword`);
  };

  const handleLinkingApp = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/apps`);
  };

  const handleLinkingClickLogs = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/clickloglist`);
  };

  const handleLinkingUserinfo = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/userlist`);
  };

  const handleLinkingCampaign = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/campaignlist`);
  };

  const handleLinkingBanner = (e, MaTaiKhoan) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${MaTaiKhoan}/bannerlist`);
  };
  return (
    <>
      <div className='sideBarMg grid-dashboard'>
        <div className="logoMgDiv flex">
            <Link to = '/' className='flex'>
           {/* <img src={logo} alt="Image Name" /> */}
           <SiYourtraveldottv className="iconMgdashboardLogo"/>
           <h2>Travel.</h2> 
           </Link>
        </div>

        <div className="menuDivMgDashboard">
            <h3 className="divMgTitle">
                QUICK MENU
            </h3>
            <ul className="menuMgLists grid-dashboard">
                <li className="MglistItem">
                    <button 
                     onClick={(e) => handleLinkingMainDashBoard(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <MdDashboard className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Dash board
                        </span>
                    </button>
                </li>

                <li className="MglistItem">
                <button 
                     onClick={(e) => handleLinkingApp(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <IoApps className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Apps
                        </span>
                    </button>
                </li>  

                <li className="MglistItem">
                <button 
                     onClick={(e) => handleLinkingCampaign(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <MdCampaign className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Campaign 
                        </span>
                    </button>
                </li> 

                <li className="MglistItem">
                <button 
                     onClick={(e) => handleLinkingBanner(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <GiKnightBanner className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Banner
                        </span>
                    </button>
                </li>

                <li className="MglistItem">
                <button 
                     onClick={(e) => handleLinkingUserinfo(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <PiUserListFill className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            User List
                        </span>
                    </button>
                </li>

                <li className="MglistItem">
                <button 
                     onClick={(e) => handleLinkingClickLogs(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <MdAdsClick className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Click Logs
                        </span>
                    </button>
                </li>


            </ul>
        </div>

        <div className="settingsDivMg">
            <h3 className="divMgTitle">
                SETTINGS
            </h3>
            <ul className="menuMgLists grid-dashboard">
                <li className="MglistItem">
                    <button 
                    onClick={(e) => handleLinkingInfo(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <MdOutlinePermContactCalendar className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Thông tin cá nhân
                        </span>
                    </button>
                </li>

                <li className="MglistItem">
                <button 
                    onClick={(e) => handleLinkingChangePassword(e, managerData.idManager)} 
                    className='menuMgLink flex'
                    >
                        <SiFsecure className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Đổi mật khẩu
                        </span>
                    </button>
                </li>  

                <li className="MglistItem">
                    <button 
                    onClick={handleLogout} 
                    className='menuMgLink flex'
                    >
                        <MdOutlineLogout className = 'icon-Mgdashboard'/>
                        <span className="smallText">
                            Log out
                        </span>
                    </button>
                </li>

            </ul>
        </div>
    </div>
    </>
  );
};

export default ManagerSidebarListHeader;
