import React, { useContext } from 'react'
import './sidebarsection.css'
import { Link, useNavigate } from 'react-router-dom'
// import logo from '../../../assets/logo.png'
import { SiYourtraveldottv } from 'react-icons/si'
import { IoMdSpeedometer } from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'
import { Si1Password } from 'react-icons/si'
import { MdOutlinePermContactCalendar } from 'react-icons/md'
import { BsQuestionCircle } from 'react-icons/bs'
import { MdOutlineLogout } from 'react-icons/md'
import { MdPayment } from 'react-icons/md'
import { Context } from '../../../../context/Context'


const SideBarSection = () => {
      const { 
        logout, 
        userData, 
        setIsOpenPopupRequestUserDashboard 
    } = useContext(Context); 
    const navigateTo = useNavigate()

    const handleLogout = () => {
        logout();
        navigateTo('/login');
      };

    const handleLinkingInfo = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/profile/info`);
      };

      const handleLinkingMainDashBoard = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/home`);
      };

      const handleLinkingChangePassword = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/changepassword`);
      };

      const handleLinkingUserOrderList = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/orderlist`);
      };

      const handleLinkingCommentHistory = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/commenthistory`);
      };

      const handleLinkingUserFavor = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/savedfavor`);
      };

      const handleLinkingUserPaymentHistory = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/paymenthistory`);
      };

      const handleLinkingSendingMailToDeleteAccount = (e, MaTaiKhoan) => {
        e.stopPropagation();
        navigateTo(`/userdashboard/${MaTaiKhoan}/home`);
        setIsOpenPopupRequestUserDashboard(true);
      };





  return (
    <div className='sideBar grid-dashboard'>
        <div className="logoDiv flex">
            <Link to = '/' className='flex'>
           {/* <img src={logo} alt="Image Name" /> */}
           <SiYourtraveldottv className="icon-userdashboard-logo"/>
           <h2>Travel.</h2> 
           </Link>
        </div>

        <div className="menuDivDashboard">
            <h3 className="divTitle">
                QUICK MENU
            </h3>
            <ul className="menuLists grid-dashboard">
                <li className="listItem">
                    <button 
                     onClick={(e) => handleLinkingMainDashBoard(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <IoMdSpeedometer className = 'icon-dashboard'/>
                        <span className="smallText">
                            Dash board
                        </span>
                    </button>
                </li>

                <li className="listItem">
                <button 
                     onClick={(e) => handleLinkingUserOrderList(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <IoTicketOutline className = 'icon-dashboard'/>
                        <span className="smallText">
                            Đơn đặt chỗ
                        </span>
                    </button>
                </li>  

                <li className="listItem">
                <button 
                     onClick={(e) => handleLinkingCommentHistory(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <AiOutlineStar className = 'icon-dashboard'/>
                        <span className="smallText">
                            Đánh giá của tôi 
                        </span>
                    </button>
                </li> 

                <li className="listItem">
                <button 
                     onClick={(e) => handleLinkingUserFavor(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <AiOutlineHeart className = 'icon-dashboard'/>
                        <span className="smallText">
                            Yêu thích đã lưu
                        </span>
                    </button>
                </li>

            </ul>
        </div>

        <div className="settingsDiv">
            <h3 className="divTitle">
                SETTINGS
            </h3>
            <ul className="menuLists grid-dashboard">
                <li className="listItem">
                    <button 
                    onClick={(e) => handleLinkingInfo(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <MdOutlinePermContactCalendar className = 'icon-dashboard'/>
                        <span className="smallText">
                            Thông tin cá nhân
                        </span>
                    </button>
                </li>

                <li className="listItem">
                <button 
                    onClick={(e) => handleLinkingChangePassword(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <Si1Password className = 'icon-dashboard'/>
                        <span className="smallText">
                            Đổi mật khẩu
                        </span>
                    </button>
                </li>  

                <li className="listItem">
                <button 
                     onClick={(e) => handleLinkingUserPaymentHistory(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <MdPayment className = 'icon-dashboard'/>
                        <span className="smallText">
                            Lịch sử thanh toán
                        </span>
                    </button>
                </li> 

                <li className="listItem">
                <button 
                     onClick={(e) => handleLinkingSendingMailToDeleteAccount(e, userData.idUser)} 
                    className='menuLink flex'
                    >
                        <BiMailSend className = 'icon-dashboard'/>
                        <span className="smallText">
                            Yêu cầu xóa tài khoản
                        </span>
                    </button>
                </li> 

                <li className="listItem">
                    <button 
                    onClick={handleLogout} 
                    className='menuLink flex'
                    >
                        <MdOutlineLogout className = 'icon-dashboard'/>
                        <span className="smallText">
                            Log out
                        </span>
                    </button>
                </li>

            </ul>
        </div>

        <div className="sideBarCard">
            <BsQuestionCircle className = 'icon-dashboard'/>
            <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>

                <h3>CƠ SỞ CSKH</h3>
                <p>Bạn gặp vấn đề tại website Travel.? Hãy liên lạc với chúng tôi để giải quyết vấn đề.</p>
                <button className="btn-dashboard">Đến trung tâm giúp đỡ</button>
            </div>
        </div>
    </div>
  )
}

export default SideBarSection