import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import TopManagerSection from "../../TopManagerSection/TopManagerSection";
import ManagerCampaignTableListUI from './ManagerCampaignTableListUI'
import { Context } from "../../../../context/Context";
import ManagerSidebarListHeader from "../../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";

const ManagerCampaignList = () => {
  const { managerId } = useParams();
  const navigateTo = useNavigate()
    const { 
    isLoggedInManager, 
    managerData, 
    logout
  } = useContext( Context ); 

  useEffect(() => {
    console.log(managerData);
    console.log(isLoggedInManager);
     if (!isLoggedInManager && managerData === null){
       logout();
       navigateTo('/login');
    }
  }, [isLoggedInManager, managerData, navigateTo]);
  return (
    <div className="MgProfileContainer flex">
      <ManagerSidebarListHeader />
      <div className="MgUserListBodyRightPage flex">
        <TopManagerSection />
        <div className="selectMgCampaignbtn">
                <button
                  className="btnMgProfile"
                  // onClick={(e) => handleUpdate(e, managerId)}
                  >
                  Select Campaign
                </button>
              </div>
        <ManagerCampaignTableListUI />
      </div>
    </div>
  );
};

export default ManagerCampaignList;
