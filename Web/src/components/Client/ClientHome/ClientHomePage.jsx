import React, { useState, useContext, useEffect } from "react";
import "./clienthomepage.css";
import UserAccountMainDashBoardUrl from "../../../apis/UserDashboardAPI";
import ManagerAccountMainDashBoardUrl from "../../../apis/ManagerDashboardAPI";
import { Context } from "../../../context/Context";
import { useNavigate, Link } from "react-router-dom";
import imgUserAvata from "../../../assets/iconUserAvata.png";

const ClientHomePage = () => {
  const { managerData, userData } = useContext(Context);
  const [imageUserUrl, setImageUserUrl] = useState("");
  const [imageMgUrl, setImageMgUrl] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await UserAccountMainDashBoardUrl.get(
        `/${userData.idUser}/profile/info`
      );
      console.log(response.data.datauserinfo);
      setImageUserUrl(response.data.datauserinfo.userinfo[0].ImgUser);
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchMgData = async () => {
      const response = await ManagerAccountMainDashBoardUrl.get(
        `/${managerData.idManager}/profile/info`
      );
      console.log(response.data.datamanagerinfo);
      setImageMgUrl(response.data.datamanagerinfo.managerinfo[0].MgImg);
    };

    fetchMgData();
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
                navigate("/login");
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
                  src={imageUserUrl !== "" ? imageUserUrl : imgUserAvata}
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
        <div className="rectangle-3" />
        <div className="rectangle-4" />
        <div className="rectangle-5" />
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
