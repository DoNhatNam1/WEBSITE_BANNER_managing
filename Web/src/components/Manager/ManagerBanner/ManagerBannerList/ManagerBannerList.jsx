import React, { useState, useEffect, useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../../../../context/Context";
import TopManagerSection from "../../TopManagerSection/TopManagerSection";
import ManagerSidebarListHeader from "../../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import ManagerBannerListTableUI from "./ManagerBannerListTableUI";

const ManagerBannerList = () => {
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
        <ManagerBannerListTableUI/>
      </div>
    </div>
  );
};

export default ManagerBannerList;
