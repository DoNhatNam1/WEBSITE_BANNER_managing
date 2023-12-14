import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./managerhome.css";
import { Context } from "../../../context/Context";
import ManagerSidebarListHeader from "../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import TopManagerSection from "../TopManagerSection/TopManagerSection";
import CardTbChart from "./CardTbChart";
import CardMailChart from "./CardMailChart";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { SlWallet } from "react-icons/sl";
import { IoIosRadio } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { MdFlight } from "react-icons/md";
import { BsArrowUpShort } from "react-icons/bs";
import { BsArrowDownShort } from "react-icons/bs";
import backendclicklogapi from "../../../apis/ClientHomePageClickLog";

const ManagerHome = () => {
  const { isLoggedInManager, managerData, logout,clickLogList, setClickLogList } = React.useContext(Context);

  const [clickLogLastMonthList, setClickLogLastMonthList] = React.useState();
  const [clickLogInMonthList, setClickLogInMonthList] = React.useState();
  const [greenDiv, setGreenDiv] = React.useState(false);
  const [redDiv, setRedDiv] = React.useState(false);
  const [clickLogPerCent, setClickLogPerCent] = React.useState(null || "");
  const navigateTo = useNavigate();

  React.useEffect(() => {
    console.log(managerData);
    console.log(isLoggedInManager);
    if (!isLoggedInManager && managerData === null) {
      logout();
      navigateTo("/login");
    }
  }, [isLoggedInManager, managerData, navigateTo]);

  let handleEventFectchClickLogList = false;
  React.useEffect(() => {
    if (!handleEventFectchClickLogList) {
      handleEventFectchClickLogList = true;
      const fetchDataAllClickLog = async () => {
        try {
          const response = await backendclicklogapi.get(`/all/get`);
          console.log(response.data.dataclicklogs);
          setClickLogList(response.data.dataclicklogs.clicklogs);
        } catch (err) {
          console.log(err);
        }
      };

      const fetchDataClickLogInMonth = async () => {
        try {
          const response = await backendclicklogapi.get(`/inmonth/get`);
          console.log(
            response.data.dataclicklogsinmonth.clicklogsinmonth[0]
              .NumberOfViewsThisMonth
          );
          setClickLogInMonthList(
            response.data.dataclicklogsinmonth.clicklogsinmonth[0]
              .NumberOfViewsThisMonth
          );
        } catch (err) {
          console.log(err);
        }
      };

      const fetchDataClickLogLastMonth = async () => {
        try {
          const response = await backendclicklogapi.get(`/lastmonth/get`);
          console.log(
            response.data.dataclicklogslastmonth.clicklogslastmonth[0]
              .NumberOfViewsLastMonth
          );
          setClickLogLastMonthList(
            response.data.dataclicklogslastmonth.clicklogslastmonth[0]
              .NumberOfViewsLastMonth
          );
        } catch (err) {
          console.log(err);
        }
      };
      fetchDataAllClickLog();
      fetchDataClickLogInMonth();
      fetchDataClickLogLastMonth();
    }
  }, []);


  let percentfetch = false;
  React.useEffect(() => {
      if (!percentfetch) {
        percentfetch = true;
        if(clickLogLastMonthList === null && clickLogInMonthList === null){
          return;
        }

        if (clickLogLastMonthList <= 0 && clickLogInMonthList > 0) {
          setClickLogPerCent("Dương vô cùng");
          setGreenDiv(true);
        } else if (clickLogInMonthList <= 0 && clickLogLastMonthList > 0) {
          setClickLogPerCent("Âm vô cùng");
          setRedDiv(true);
        } else if (clickLogLastMonthList > 0 && clickLogInMonthList > 0 && clickLogInMonthList < clickLogLastMonthList) {
          const sum1 =
            100 *
            ((clickLogInMonthList - clickLogLastMonthList) /
              clickLogLastMonthList);
          setClickLogPerCent(Math.abs(sum1).toFixed(2));
          setRedDiv(true);
        } else if (clickLogLastMonthList > 0 && clickLogInMonthList > 0 && clickLogInMonthList >= clickLogLastMonthList){
          const sum2 =
          100 *
          ((clickLogInMonthList - clickLogLastMonthList) /
            clickLogLastMonthList);
        setClickLogPerCent(sum2.toFixed(2));
        setGreenDiv(true);
        }

        
        console.log(clickLogPerCent); 
      }
  }, [clickLogLastMonthList]);


  return (
    <>
      <div className="MgHomeBody flex">
        <ManagerSidebarListHeader />
        <div className="MgHomeBodyRightPage flex">
          <TopManagerSection />
          <div className="BodyMgSecContainer">
            <div className="BodyMgDivContainer grid">
              <div className="MgCardGroup">
                <div className="MgCardBody grid">
                  <div className="MgCardInfo">
                    <h3>$100,000</h3>
                    <p>Tổng lợi nhuận</p>
                  </div>
                  <div className="MgCardBigIcon grid">
                    <PiSuitcaseSimpleBold className="MgCardIconItem" />
                  </div>
                  <div className="MgCardLastMonthSuccess">
                    <p>
                      <span>
                        <BsArrowUpShort className="MgArrowIcon" />
                        4.65%
                      </span>
                      tháng trước
                    </p>
                  </div>
                </div>
                <div className="MgProcessBarGroup">
                  <div className="MgProcessBarValue" />
                </div>
              </div>
              <div className="MgCardGroup">
                <div className="MgCardBody grid">
                  <div className="MgCardInfo">
                    <h3>$20,000</h3>
                    <p>Tổng thu nhập</p>
                  </div>
                  <div className="MgCardBigIcon grid">
                    <SlWallet className="MgCardIconItem grid" />
                  </div>
                  <div className="MgCardLastMonthSuccess">
                    <p>
                      <span>
                        <BsArrowUpShort className="MgArrowIcon" />
                        6.64%
                      </span>
                      tháng trước
                    </p>
                  </div>
                </div>
                <div className="MgProcessBarGroup">
                  <div className="MgProcessBarValue" />
                </div>
              </div>
              <div className="MgCardGroup">
                <div className="MgCardBody grid">
                  <div className="MgCardInfo">
                    <h3>38%</h3>
                    <p>Doanh thu</p>
                  </div>
                  <div className="MgCardBigIcon grid">
                    <IoIosRadio className="MgCardIconItem" />
                  </div>
                  <div className="MgCardLastMonthSuccess">
                    <p>
                      <span>
                        <BsArrowUpShort className="MgArrowIcon" />
                        2.12%
                      </span>{" "}
                      tháng trước
                    </p>
                  </div>
                </div>
                <div className="MgProcessBarGroup">
                  <div className="MgProcessBarValue" />
                </div>
              </div>
              <div className="MgCardGroup">
                <div className="MgCardBody grid">
                  <div className="MgCardInfo">
                    <h3>6,240 Order</h3>
                    <p>Tổng đơn đặt</p>
                  </div>
                  <div className="MgCardBigIcon grid">
                    <MdFlight className="MgCardIconItem" />
                  </div>
                  <div className="MgCardLastMonthSuccess">
                    <p>
                      <span>
                        <BsArrowUpShort className="MgArrowIcon" />
                        8.63%
                      </span>
                      tháng trước
                    </p>
                  </div>
                </div>
                <div className="MgProcessBarGroup">
                  <div className="MgProcessBarValue" />
                </div>
              </div>
              <div className="MgCardGroup">
                <div className="MgCardBody grid">
                  <div className="MgCardInfo">
                    <h3>{clickLogInMonthList} Visitor</h3>
                    <p>Tổng truy cập</p>
                  </div>
                  <div className="MgCardBigIcon grid">
                    <GrView className="MgCardIconItem" />
                  </div>
                  {greenDiv === true ? (
                    <div className="MgCardLastMonthSuccess">
                      <p>
                        <span>
                          <BsArrowUpShort className="MgArrowIcon" />
                          {clickLogPerCent}%
                        </span>
                        tháng trước
                      </p>
                    </div>
                  ) : (redDiv === true ? (
                    <div className="MgCardLastMonthFail">
                      <p>
                        <span>
                        <BsArrowDownShort className="MgArrowIcon" />
                          {clickLogPerCent}%
                        </span>
                        tháng trước
                      </p>
                    </div>
                  ) : <></>)}
                </div>
                <div className="MgProcessBarGroup">
                  <div className="MgProcessBarValue" />
                </div>
              </div>
              <div className="TableChartMgHomeGroup grid">
                <CardTbChart />
              </div>
              <div className="MailChartMgHomeGroup grid">
                <CardMailChart />
              </div>
            </div>
          </div>

          <div className="FooterMgSecContainer">
            <span>@2023 Copy Right by Nam IT. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerHome;
