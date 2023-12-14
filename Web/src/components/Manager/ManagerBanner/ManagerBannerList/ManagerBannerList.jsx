import React, { useState, useEffect, useContext } from "react";
import "./managerbannerlist.css";
import backendbannerapi from "../../../../apis/ManagerDashboardAPI";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";
import { storage } from "../../../../Firebase/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { v4 } from "uuid";
import { Context } from "../../../../context/Context";
import TopManagerSection from "../../TopManagerSection/TopManagerSection";
import ManagerSidebarListHeader from "../../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import ManagerBannerListTableUI from "./ManagerBannerListTableUI";
import { AiOutlineSave } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import { MdOutlineDeleteForever } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManagerBannerList = () => {
  const [bannerName, setBannerName] = useState("");
  const [bannerSizeName, setBannerSizeName] = useState("");
  const [contentLink, setContentLink] = useState("");
  const [statusbanner, setStatusBanner] = useState("");
  const [position, setPosition] = useState("");
  const [bannerSize_id, setBannerSize_id] = useState();
  const [bannerPosition_id, setBannerPosition_id] = useState();
  const [bannersPosition, setBannersPosition] = useState([]);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("" || null);
  const [initialImageUrl, setInitialImageUrl] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
  const status = [
    {
      value: "On Process",
    },
    {
      value: "Success",
    },
  ];

  const {
    isLoggedInManager,
    managerData,
    banners,
    addBanners,
    bannerRows,
    setBannerRows,
    bannersSize,
    setBannersSize,
    logout,
    reLoadBannerEditPage,
    reLoadBannerAddPage,
    setReLoadBannerEditPage,
    setReLoadBannerAddPage,
    bannerIdShowInfoInMgDashData,
    isOpenPopupBannerAddInMgDashboard,
    isOpenPopupBannerEditInMgDashboard,
    isOpenPopupBannerPositionSelectInMgDashboard,
    setIsOpenPopupBannerPositionSelectInMgDashboard,
    closePopupShowBannerEditInMgDashboard,
    closePopupShowBannerAddInMgDashboard,
    closePopupShowBannerPositionSelectInMgDashboard,
  } = useContext(Context);

  const bannerId = bannerIdShowInfoInMgDashData;

  // Router Dom Hooks
  const { managerId } = useParams();
  const navigateTo = useNavigate();

  // UseEffect Hook Group
  let handleEventfectch = false;
  React.useEffect(() => {
    if(!handleEventfectch){
      handleEventfectch = true
      const fetchDataBannerById = async () => {
        const responsebanner = await backendbannerapi.get(
          `/${managerId}/bannerlist/${bannerId}/edit`
        );
        console.log(responsebanner.data.databanner);
        setImageUrl(responsebanner.data.databanner.banner[0].ImgLinking);
        setBannerSizeName(
          responsebanner.data.databanner.banner[0].BannerSizeName
        );
        setBannerSize_id(responsebanner.data.databanner.banner[0].BannerSize_id);
        setBannerPosition_id(responsebanner.data.databanner.banner[0].BannerPosition_id);
        setBannerName(responsebanner.data.databanner.banner[0].BannerName);
        setPosition(responsebanner.data.databanner.banner[0].position);
        setContentLink(responsebanner.data.databanner.banner[0].ContentLink);
        setStatusBanner(responsebanner.data.databanner.banner[0].StatusBanner);
        setInitialImageUrl(responsebanner.data.databanner.banner[0].ImgLinking);
      };
  
      const fetchDataBannerSize = async () => {
        const responsebannersize = await backendbannerapi.get(
          `/${managerId}/bannerlist/size`
        );
        console.log(responsebannersize.data.databannerssize);
        setBannersSize(responsebannersize.data.databannerssize.bannerssize);
      };
  
      const fetchDataBannerPosition = async () => {
        const responsebannersize = await backendbannerapi.get(
          `/${managerId}/bannerlist/position`
        );
        console.log(responsebannersize.data.databannersposition);
        setBannersPosition(
          responsebannersize.data.databannersposition.bannersposition
        );
      };
  
      fetchDataBannerById();
      fetchDataBannerSize();
      fetchDataBannerPosition();
    }
  }, [
    isOpenPopupBannerEditInMgDashboard, 
    reLoadBannerEditPage
  ]);

  let handleEventLogin = false;
  useEffect(() => {
    if(!handleEventLogin){
      handleEventLogin = true
      console.log(managerData);
    console.log(isLoggedInManager);
    if (!isLoggedInManager && managerData === null) {
      logout();
      navigateTo("/login");
    }
    }
    
  }, [isLoggedInManager, managerData, navigateTo]);

  React.useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  // Funtions handleBtn
  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };


  const handleSubmit = async (e) => {
    setDisableBtn(true);
    setReLoadBannerEditPage(v4());
    e.preventDefault();
      if(bannerPosition_id === 4 || bannerPosition_id === '4'){
        if (image !== null && (imageUrl === "" || imageUrl === null)) {
          const storageRef = ref(storage, `imageBanner/${image.name + v4()}`);
          uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              setImageUrl(url);
              backendbannerapi
                .put(`/${managerId}/bannerlist/${bannerId}/edit`, {
                  BannerName: bannerName,
                  BannerSize_id: bannerSize_id,
                  BannerPosition_id: bannerPosition_id,
                  ContentLink: contentLink,
                  StatusBanner: statusbanner,
                  ImgLinking: url,
                })
                .then((response) => {
                  console.log(response.data.databanner);
                  setInitialImageUrl(null);
                  setImage(null);
                  closePopupShowBannerEditInMgDashboard();
                  setTimeout(() => {
                    toast.success("Update Banner Success", {
                      position: "bottom-right",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  }, 1000);
                  // window.location.reload(false);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          });
        } else {
          const updateBanner = await backendbannerapi
            .put(`/${managerId}/bannerlist/${bannerId}/edit`, {
              BannerName: bannerName,
              BannerSize_id: bannerSize_id,
              BannerPosition_id: bannerPosition_id,
              ContentLink: contentLink,
              StatusBanner: statusbanner,
              ImgLinking: imageUrl,
            })
            .then((response) => {
              console.log(response.data.databanner);
              setInitialImageUrl(null);
              setImage(null);
              closePopupShowBannerEditInMgDashboard();
              setTimeout(() => {
                toast.success("Update Banner Success", {
                  position: "bottom-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }, 1000);
              // window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
    
        if (initialImageUrl !== null && imageUrl === "") {
          let imageRef = ref(storage, initialImageUrl);
          deleteObject(imageRef)
            .then(() => {
              console.log("Previous file deleted");
            })
            .catch((error) => {
              console.error("Error in deleting previous file: ", error);
            });
        }
      } else {
        if (statusbanner === 'On Process') {
          setTimeout(() => {
            toast.error("Banner này chưa được duyệt nên không thể chọn làm vị trí được!", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }, 1000);
        } else
        if (bannerRows.filter((row) => row.BannerPosition_id == bannerPosition_id).length > 0) {
          setTimeout(() => {
            toast.error("Vị trí này đã có Banner, vui lòng chọn vị trí khác hoặc hủy Banner cũ!", {
              position: "bottom-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }, 1000);
        } else 
        if (image !== null && (imageUrl === "" || imageUrl === null)) {
          const storageRef = ref(storage, `imageBanner/${image.name + v4()}`);
          uploadBytes(storageRef, image).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
              setImageUrl(url);
              backendbannerapi
                .put(`/${managerId}/bannerlist/${bannerId}/edit`, {
                  BannerName: bannerName,
                  BannerSize_id: bannerSize_id,
                  BannerPosition_id: bannerPosition_id,
                  ContentLink: contentLink,
                  StatusBanner: statusbanner,
                  ImgLinking: url,
                })
                .then((response) => {
                  console.log(response.data.databanner);
                  setInitialImageUrl(null);
                  setImage(null);
                  closePopupShowBannerEditInMgDashboard();
                  setTimeout(() => {
                    toast.success("Update Banner Success", {
                      position: "bottom-right",
                      autoClose: 4000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                  }, 1000);
                  // window.location.reload(false);
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          });
        } else {
          const updateBanner = await backendbannerapi
            .put(`/${managerId}/bannerlist/${bannerId}/edit`, {
              BannerName: bannerName,
              BannerSize_id: bannerSize_id,
              BannerPosition_id: bannerPosition_id,
              ContentLink: contentLink,
              StatusBanner: statusbanner,
              ImgLinking: imageUrl,
            })
            .then((response) => {
              console.log(response.data.databanner);
              setInitialImageUrl(null);
              setImage(null);
              closePopupShowBannerEditInMgDashboard();
              setTimeout(() => {
                toast.success("Update Banner Success", {
                  position: "bottom-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }, 1000);
              // window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        }
    
        if (initialImageUrl !== null && imageUrl === "") {
          let imageRef = ref(storage, initialImageUrl);
          deleteObject(imageRef)
            .then(() => {
              console.log("Previous file deleted");
            })
            .catch((error) => {
              console.error("Error in deleting previous file: ", error);
            });
        }
      }
  
  };
  if (disableBtn === true) {
    setTimeout(() => {
      setDisableBtn(false);
    }, 6000);
  }

  const createBanner = async (e) => {
    setDisableBtn(true);
    setReLoadBannerAddPage(v4());
    e.preventDefault();
    if (bannerName === "" || bannerName == undefined || contentLink === "" || contentLink == undefined || bannerSize_id == null || image == null) {
      setTimeout(() => {
        toast.error("Vui lòng nhập đầy đủ thông tin!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, 1000);
    } else if (
      bannerRows.find(
        (banner) =>
          banner.BannerName === bannerName || banner.ImgLinking === imageUrl
      )
    ) {
      setTimeout(() => {
        toast.error("Banner đã tồn tại. Vui lòng điền thông tin Banner khác!", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }, 1000);
    } else if (contentLink.length > 1000) {
      setTimeout(() => {
        toast.warn(
          `Nội dung nhập quá dài, vui lòng nhập dưới 1000 ký tự! (Ký tự đã nhập: ${contentLink.length} từ`,
          {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      }, 1000);
    } else {
      const storageRef = ref(storage, `imageBanner/${image.name + v4()}`);
      uploadBytes(storageRef, image).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrl(url);
          backendbannerapi
            .post(`/${managerId}/bannerlist/add`, {
              BannerName: bannerName,
              BannerSize_id: bannerSize_id,
              ContentLink: contentLink,
              StatusBanner: "On Process",
              BannerPosition_id: 4,
              ImgLinking: url,
            })
            .then((response) => {
              console.log(response.data.databanner);
              setInitialImageUrl(null);
              setImage(null);
              setBannerName("");
              setBannerSize_id();
              setStatusBanner("");
              setContentLink("");
              closePopupShowBannerAddInMgDashboard();
              setTimeout(() => {
                toast.success("Thêm Banner thành công!", {
                  position: "bottom-right",
                  autoClose: 4000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }, 1000);
              // window.location.reload(false);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    }
  };


  return (
    <>
      <div className="MgProfileContainer flex">
        <ManagerSidebarListHeader />
        <div className="MgUserListBodyRightPage flex">
          <TopManagerSection />
          <ManagerBannerListTableUI />
        </div>
      </div>
      {isOpenPopupBannerAddInMgDashboard === true ? (
        <div className="popupMgUserInfo">
          <div data-aos="fade-down" className="popupContentMgUserInfo">
            <div className="ClosePopBtnDiv flex">
              <button
                className="popupCloseUserInfo"
                onClick={closePopupShowBannerAddInMgDashboard}>
                <AiFillCloseCircle className="icon" />
              </button>
            </div>
            <form className="edit-form flex">
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Tên Banner:</p>
                </div>
                <input
                  className="inputMgBannerEdit"
                  type="text"
                  id="bannerName"
                  value={bannerName || ""}
                  onChange={(e) => setBannerName(e.target.value)}
                />
              </label>
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Kích thước:</p>
                </div>
                <select
                  onChange={(e) => setBannerSize_id(e.target.value)}
                  className="inputMgBannerEdit">
                  <option value={null}>
                    Please choose the size of banner!
                  </option>
                  {bannersSize.map((item) => (
                    <option key={item.BannerSize_id} value={item.BannerSize_id}>
                      {item.BannerSizeName}
                    </option>
                  ))}
                </select>
              </label>
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Nội dung:</p>
                </div>
                <textarea
                  className="textareaMgBannerEdit"
                  id="contentLink"
                  value={contentLink || ""}
                  onChange={(e) => setContentLink(e.target.value)}
                />
              </label>
              <div className="LabelContainerMgBannerEdit-img flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Tải ảnh:</p>
                </div>
                <input
                  type="file"
                  className="inputMgBannerEdit-img"
                  id="imageUrl"
                  onChange={handleImageUpload}
                />
              </div>
              <div className="button-update flex">
                <button
                  className="btn"
                  type="submit"
                  onClick={createBanner}
                  disabled={disableBtn}>
                  <div className="button-container-profile-edit flex">
                    <p>Add</p>
                    <GrFormAdd className="icon-dashboard" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : isOpenPopupBannerEditInMgDashboard === true ? (
        <div className="popupMgUserInfo">
          <div data-aos="fade-down" className="popupContentMgUserInfo">
            <div className="ClosePopBtnDiv flex">
              <button
                className="popupCloseUserInfo"
                onClick={closePopupShowBannerEditInMgDashboard}>
                <AiFillCloseCircle className="icon" />
              </button>
            </div>
            <form className="edit-form flex">
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Tên Banner:</p>
                </div>
                <input
                  className="inputMgBannerEdit"
                  type="text"
                  id="bannerName"
                  value={bannerName || ""}
                  onChange={(e) => setBannerName(e.target.value)}
                />
              </label>
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Kích thước:</p>
                </div>
                <select
                  value={bannerSize_id}
                  onChange={(e) => setBannerSize_id(e.target.value)}
                  className="inputMgBannerEdit">
                  {bannersSize.map((item) => (
                    <option key={item.BannerSize_id} value={item.BannerSize_id}>
                      {item.BannerSizeName}
                    </option>
                  ))}
                </select>
              </label>
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Trạng thái:</p>
                </div>
                <select
                  value={statusbanner}
                  onChange={(e) => setStatusBanner(e.target.value)}
                  className="inputMgBannerEdit">
                  {status.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.value}
                    </option>
                  ))}
                </select>
              </label>
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Vị trí:</p>
                </div>
                <select
                  value={bannerPosition_id}
                  onChange={(e) => setBannerPosition_id(e.target.value)}
                  className="inputMgBannerEdit">
                  {bannersPosition.map((item) => (
                    <option key={item.BannerPosition_id} value={item.BannerPosition_id}>
                      {item.position}
                    </option>
                  ))}
                </select>
              </label>
              <label className="LabelContainerMgBannerEdit flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Nội dung:</p>
                </div>
                <textarea
                  className="textareaMgBannerEdit"
                  id="contentLink"
                  value={contentLink || ""}
                  onChange={(e) => setContentLink(e.target.value)}
                />
              </label>
              <div className="LabelContainerMgBannerEdit-img flex">
                <div className="labelNameMgBannerEdit flex">
                  <p>Tải ảnh:</p>
                </div>
                {imageUrl ? (
                  <div className="img-and-button-remove flex">
                    <div className="image-container">
                      <img
                        src={imageUrl}
                        alt="Profile Image"
                        className="profile-img"
                      />
                    </div>

                    <div className="btn-image-container">
                      <button
                        className="btn-image"
                        onClick={() => setImageUrl("")}>
                        <MdOutlineDeleteForever className="icon-dashboard" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <input
                    type="file"
                    className="inputMgBannerEdit-img"
                    id="imageUrl"
                    onChange={handleImageUpload}
                  />
                )}
              </div>
              <div className="button-update flex">
                <button
                  className="btn"
                  type="submit"
                  onClick={handleSubmit}
                  disabled={disableBtn}>
                  <div className="button-container-profile-edit flex">
                    <p>Save</p>
                    <AiOutlineSave className="icon-dashboard" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) 
      : null}
      <ToastContainer />
    </>
  );
};

export default ManagerBannerList;
