import * as React from "react";
import "./mgprofilecontainer.css";
import backendinfomanager from "../../../../apis/ManagerDashboardAPI";
import { Context } from "../../../../context/Context";
import imgUserAvatar from "../../../../assets/iconUserAvata.png";
import { useParams, useNavigate } from "react-router-dom";
import ManagerSidebarListHeader from "../../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import TopManagerSection from '../../TopManagerSection/TopManagerSection'

const MgProfileContainer = () => {
  const [mgImg, setMgImg] = React.useState("");
  const [mgName, setMgName] = React.useState("");
  const [mgGender, setMgGender] = React.useState("");
  const [mgAge, setMgAge] = React.useState();
  const [mgAddress, setMgAddress] = React.useState("");
  const { managerId } = useParams();
  const navigateTo = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await backendinfomanager.get(
        `/${managerId}/profile/info`
      );
      console.log(response.data.datamanagerinfo);
      setMgImg(response.data.datamanagerinfo.managerinfo[0].MgImg);
      setMgName(response.data.datamanagerinfo.managerinfo[0].MgName);
      setMgGender(response.data.datamanagerinfo.managerinfo[0].MgGender);
      setMgAge(response.data.datamanagerinfo.managerinfo[0].MgAge);
      setMgAddress(response.data.datamanagerinfo.managerinfo[0].MgAddress);
    };
    fetchData();
  }, []);

  const handleUpdate = (e, managerId) => {
    e.stopPropagation();
    navigateTo(`/managerdashboard/${managerId}/profile/edit`);
  };

  return (
    <div className="MgProfileContainer flex">
      <ManagerSidebarListHeader />
      <div className="MgUserListBodyRightPage flex">
        <TopManagerSection />
        <div className="mainMgProfileContent">
          <form className="formMgGroup">
            <div className="headingMgProfileSection flex">
              <div className="ImgMgUserInfoContainer">
                <img
                  src={mgImg === null || mgImg === "" ? imgUserAvatar : mgImg}
                  alt="User Profile"
                />
              </div>

              <div className="NameAndSelectMgUserListGroup grid">
                <h5>{mgName}</h5>
                <h6>Vai trò: Manager</h6>
              </div>

              <div className="editMgProfilebtn">
                <button
                  className="btnMgProfile"
                  onClick={(e) => handleUpdate(e, managerId)}>
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="bottomMgProfile flex">
              <div className="bodyMgProfileSection">
                <div className="labelMgGp grid">
                  <div className="labelMgItem flex">
                    <div className="spanMgItem">
                      <span>Tuổi:</span>
                    </div>
                    <div className="PagrarphMgItem">
                      <p>{mgAge} tuổi</p>
                    </div>
                  </div>
                  <div className="labelMgItem flex">
                    <div className="spanMgItem">
                      <span>Giới tính:</span>
                    </div>
                    <div className="PagrarphMgItem">
                      <p>{mgGender}</p>
                    </div>
                  </div>
                  <div className="labelMgItem flex">
                    <div className="spanMgItem">
                      <span>Địa chỉ hiện tại:</span>
                    </div>
                    <div className="PagrarphMgItem">
                      <p>{mgAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MgProfileContainer;
