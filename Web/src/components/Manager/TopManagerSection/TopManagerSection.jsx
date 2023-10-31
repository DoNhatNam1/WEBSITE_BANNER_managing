import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./topmanagersection.css";
import { BsMailbox2 } from "react-icons/bs";
import { MdChecklistRtl } from "react-icons/md";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdZoomOutMap } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const TopManagerSection = () => {
  return (
    <section className="TopMgSecContainer">
      <div className="TopMgDivContainer flex">
        <div className="TopLeftMgGroup flex">
          <Link to="#">
            <div className="MessMgGroup flex">
              <BiSolidMessageDetail className="iconMgDashboard" />
            </div>
          </Link>

          <Link to="#">
            <div className="CheckListMgGroup flex">
              <MdChecklistRtl className="iconMgDashboard" />
            </div>
          </Link>
          <Link to="#">
            <div className="MailBoxMgGroup flex">
              <BsMailbox2 className="iconMgDashboard" />
            </div>
          </Link>
        </div>
        <div className="TopRightMgGroup flex">
          <Link to="#">
            <div className="ZoomMgGroup flex">
              <MdZoomOutMap className="iconMgDashboard" />
            </div>
          </Link>
          <div className="SearchMgGroup flex">
            <div className="SearchInputMgDiv">
              <input
                placeholder="Search"
                type="text"
                className="InputSearchMg"
              />
            </div>
            <Link to="#">
              <div className="SearchMgIconDiv flex">
                <BiSearch className="iconMgDashboard" />
              </div>
            </Link>
          </div>
          <Link to="#">
            <div className="NotificationMgGroup flex">
              <MdNotifications className="iconMgDashboard" />
            </div>
          </Link>
          <Link to="#">
            <div className="MgProfileCardGroup flex">
              <FaUser className="iconMgDashboard" />
            </div>
          </Link>
          <Link to="#">
            <div className="MenuChatAndCheckListGroup flex">
              <BsFillMenuButtonWideFill className="iconMgDashboard" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopManagerSection;
