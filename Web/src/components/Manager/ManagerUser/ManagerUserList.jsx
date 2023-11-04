import * as React from "react";
import "./manageruserlist.css";
import ManagerSidebarListHeader from "../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import TopManagerSection from "../TopManagerSection/TopManagerSection";
import UserListTableUI from "./UserListTableUI";
import imgUserAvatar from "../../../assets/iconUserAvata.png";
import backendinfouser from "../../../apis/UserDashboardAPI";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../../context/Context";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { AiFillCloseCircle } from "react-icons/ai";

const ManagerUserList = () => {
  const {
    isLoggedInManager,
    managerData,
    logout,
    isOpenPopupUserInfoInMgDashboard,
    closePopupShowUserInfoInMgDashboard,
    userIdShowInfoInMgDashData,
  } = React.useContext(Context);
  const [imageUrl, setImageUrl] = React.useState("");
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [address, setAddress] = React.useState("");
  const userId = userIdShowInfoInMgDashData;

  const navigateTo = useNavigate();

  React.useEffect(() => {
    console.log(managerData);
    console.log(isLoggedInManager);
    if (!isLoggedInManager && managerData === null) {
      logout();
      navigateTo("/login");
    }
  }, [isLoggedInManager, managerData, navigateTo]);

  React.useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await backendinfouser.get(`/${userId}/profile/info`);
      console.log(response.data.datauserinfo);
      setImageUrl(response.data.datauserinfo.userinfo[0].ImgUser);
      setName(response.data.datauserinfo.userinfo[0].Full_Name);
      setAge(response.data.datauserinfo.userinfo[0].Age);
      setPhone(response.data.datauserinfo.userinfo[0].phone_number);
      setGender(response.data.datauserinfo.userinfo[0].Gender);
      setAddress(response.data.datauserinfo.userinfo[0].DiaDiem);
    };

    fetchData();
  }, [isOpenPopupUserInfoInMgDashboard]);

  return (
    <>
      <div className="MgUserListBody flex">
        <ManagerSidebarListHeader />
        <div className="MgUserListBodyRightPage flex">
          <TopManagerSection />
          <UserListTableUI />
        </div>
      </div>
      {isOpenPopupUserInfoInMgDashboard === true ? (
        <div className="popupMgUserInfo">
          <div data-aos="fade-down" className="popupContentMgUserInfo">
            <div className="mainContentMgUserInfo">
              <form className="formGroupMg">
                <div className="headingMgUserInfoSection flex">
                  <div className="ImgMgUserInfoContainer">
                    <img
                      src={
                        imageUrl === null || imageUrl === ""
                          ? imgUserAvatar
                          : imageUrl
                      }
                      alt="User Profile"
                    />
                  </div>

                  <div className="NameAndSelectMgUserListGroup grid">
                    <h5>{name}</h5>
                    <h6>Vai trò: Khách hàng</h6>

                    <div className="linkMgUserInfoGp flex">
                      <button
                        className="active"
                        // onClick={(e) => handleLinkClick1(e, userData.idUser)}
                      >
                        Thông tin
                      </button>
                      <button
                        className=""
                        // onClick={(e) => handleLinkClick2(e, userData.idUser)}
                      >
                        Hội viên
                      </button>
                    </div>
                  </div>

                  <div className="ClosePopBtnDiv flex">
                    <button
                      className="popupCloseUserInfo"
                      onClick={closePopupShowUserInfoInMgDashboard}>
                      <AiFillCloseCircle className="icon" />
                    </button>
                  </div>
                </div>

                <div className="bottom flex">
                  <div className="bodyProfileSection">
                    <div className="labelGp grid">
                      <div className="labelItem flex">
                        <div className="spanItem">
                          <span>Tuổi:</span>
                        </div>
                        <div className="PagrarphItem">
                          <p>{age} tuổi</p>
                        </div>
                      </div>
                      <div className="labelItem flex">
                        <div className="spanItem">
                          <span>Giới tính:</span>
                        </div>
                        <div className="PagrarphItem">
                          <p>{gender}</p>
                        </div>
                      </div>
                      <div className="labelItem flex">
                        <div className="spanItem">
                          <span>Số điện thoại:</span>
                        </div>
                        <div className="PagrarphItem">
                          <p>{phone}</p>
                        </div>
                      </div>
                      <div className="labelItem flex">
                        <div className="spanItem">
                          <span>Địa chỉ hiện tại:</span>
                        </div>
                        <div className="PagrarphItem">
                          <p>{address}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ManagerUserList;
