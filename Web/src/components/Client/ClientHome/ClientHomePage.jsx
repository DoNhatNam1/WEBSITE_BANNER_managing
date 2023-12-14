import React, { useState, useContext, useEffect } from "react";
import "./clienthomepage.css";
import UserAccountMainDashBoardUrl from "../../../apis/UserDashboardAPI";
import ManagerAccountMainDashBoardUrl from "../../../apis/ManagerDashboardAPI";
import backendallbannerwithpositionapi from "../../../apis/ClientHomePageWithBannerPosition";
import backendallclicklogapi from "../../../apis/ClientHomePageClickLog";
import { Context } from "../../../context/Context";
import { useNavigate, Link } from "react-router-dom";
import imgUserAvata from "../../../assets/iconUserAvata.png";

const ClientHomePage = () => {
  const { 
    bannerData,
    managerData, 
    userData, 
    bannerWithPosition, 
    secondBannerClickLogs,
    currentTimeBannerClickLog,
    setBannerWithPosition, 
    setSecondBannerClickLogs,
    setCurrentTimeBannerClickLog,
    setBannerData,
  } = useContext(Context);
  const [imageUserUrl, setImageUserUrl] = useState("");
  const [imageMgUrl, setImageMgUrl] = useState("");

  const IntBannerData = parseInt(bannerData)

  const navigateTo = useNavigate();

  let handleEventFectchUIList = false;
  React.useEffect(() => {
    if(!handleEventFectchUIList){
      handleEventFectchUIList = true
      const fetchDataBannerWithPosition = async () => {
        try {
          const response = await backendallbannerwithpositionapi.get(`/get`)
          console.log(response.data.databannerswithposition);
          setBannerWithPosition(response.data.databannerswithposition.bannerswithposition);
        } catch (err) {
          console.log(err);
        }
      };
      fetchDataBannerWithPosition();
    }

  }, []);


  let handleEventFectchUserAndMgList = false;
  useEffect(() => {
    if(!handleEventFectchUserAndMgList){
      if(userData){
        handleEventFectchUserAndMgList = true
        const fetchUserData = async () => {
          const response = await UserAccountMainDashBoardUrl.get(
            `/${userData.idUser}/profile/info`
          );
          console.log(response.data.datauserinfo);
          setImageUserUrl(response.data.datauserinfo.userinfo[0].ImgUser); 
        }
        fetchUserData();
      } 
      if(managerData){
        handleEventFectchUserAndMgList = true
        const fetchMgData = async () => {
          const response = await ManagerAccountMainDashBoardUrl.get(
            `/${managerData.idManager}/profile/info`
          );
          console.log(response.data.datamanagerinfo);
          setImageMgUrl(response.data.datamanagerinfo.managerinfo[0].MgImg);
        }
        fetchMgData();
      }
    }

  }, []);

  const handleLinkingBelowNav = (e, bannerId) => {
    e.stopPropagation();
    navigateTo(`/${bannerId}/bannerbelownavbar`);
  };

  const handleLinkingBody1 = (e, bannerId) => {
    e.stopPropagation();
    navigateTo(`/${bannerId}/bannerbody1`);
  };


  const handleLinkingBody2 = (e, bannerId) => {
    e.stopPropagation();
    navigateTo(`/${bannerId}/bannerbody2`);
  };

  let handleEventFectchCreated = false;
  React.useEffect(() => {
    if(!handleEventFectchCreated){
      handleEventFectchCreated = true
      if(secondBannerClickLogs !== 0 && userData !== null){
        backendallclicklogapi.post('/created', {
          UserAccount_id: userData.idUser,
          ThoiGianChuyenDoi: secondBannerClickLogs,
          banner_id: IntBannerData,
          ClickHistory: currentTimeBannerClickLog,
        })
              .then((response) => {
              console.log(response.data.dataclicklog);
              setTimeout(() => {
              localStorage.removeItem(`totalSecondsBannerClickLog${bannerData}`);
              localStorage.removeItem(`dateBannerClickLog${bannerData}`);
              localStorage.removeItem('bannerData');
              setSecondBannerClickLogs(0)
              setCurrentTimeBannerClickLog('')
              setBannerData()
            }, 3000);
              })
              .catch((err) => {
                console.log(err);
              });
      }
    }
  
  }, []);


  return (
    <div className="frame">
      <div className="div">
        <div className="rectangle grid">
          {
            ((userData === null ||
              userData === undefined ||
              userData === "") &&
            (managerData === null ||
              managerData === undefined ||
              managerData === "")) ? (
            <button
              className="btn"
              onClick={() => {
                navigateTo("/login");
              }}>
              Sign In
            </button>
          ) :
          (userData !== null || 
            userData !== undefined || 
            userData !== "") &&
          (managerData === null ||
            managerData === undefined ||
            managerData === "") ? (
            <Link to="/login">
              <div className="adminImage">
                <img
                  src={imageUserUrl !== ""  ? imageUserUrl : imgUserAvata}
                  alt="Admin Image"
                />
              </div>
            </Link>
          ) : ((userData === null ||
              userData === undefined ||
              userData === "") &&
            (managerData !== null ||
              managerData !== undefined ||
              managerData !== "")) ? (
            <Link to="/login">
              <div className="adminImage">
                <img
                  src={imageMgUrl !== "" ? imageMgUrl : imgUserAvata}
                  alt="Admin Image"
                />
              </div>
            </Link>
          ) :  null}
        </div>
        <div className="rectangle-2" />
        <div className="rectangle-3">
          {bannerWithPosition.map((item) => {
            return item.position === 'Below Navbar' ? (
              <button
              key={item.position} 
              onClick={(e) => handleLinkingBelowNav(e, item.banner_id)} 
             className='BtnBanner'
             >
              <img className="imgBelowNav" src={item.ImgLinking}/>
             </button>


            ) : <></>
          })}
        </div>
        <div className="rectangle-4">
        {bannerWithPosition.map((item) => {
            return item.position === 'Body2' ? (
              <button 
              key={item.position}
              onClick={(e) => handleLinkingBody2(e, item.banner_id)} 
             className='BtnBanner'
             >
            <img className="imgBody2" src={item.ImgLinking}/>
            </button>
            ) : <></>
          })}
        </div>
        <div className="rectangle-5">
        {bannerWithPosition.map((item) => {
            return item.position === 'Body1' ? (
              <button 
              key={item.position}
              onClick={(e) => handleLinkingBody1(e, item.banner_id)} 
             className='BtnBanner'
             >
            <img className="imgBody1" src={item.ImgLinking}/>
            </button>
            ) : <></>
          })}
        </div>
        <div className="text-wrapper">XU HƯỚNG MUA SẮM</div>
        <div className="text-wrapper-2">Tuần Lễ Vàng</div>
        <div className="rectangle-6" />
        <div className="rectangle-7" />
        <div className="rectangle-8" />
        <div className="rectangle-9" />
        <div className="rectangle-10" />
        <div className="rectangle-11" />
        <div className="rectangle-12" />
        <div className="rectangle-13" />
        <div className="rectangle-14" />
        <div className="rectangle-15" />
        <div className="rectangle-16" />
        <div className="rectangle-17" />
      </div>
    </div>
  );
};

export default ClientHomePage;
