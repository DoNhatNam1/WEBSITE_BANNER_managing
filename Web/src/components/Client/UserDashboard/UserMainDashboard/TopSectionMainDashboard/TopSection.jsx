import React, { useContext, useEffect, useState } from 'react'
import './topsection.css'
// import { BiSearchAlt } from 'react-icons/bi'
import { Context } from '../../../../../context/Context'
import backendinfoandrankinguser from '../../../../../apis/UserDashboardAPI'
import { useParams } from 'react-router-dom'
import { TbMessageCircle } from 'react-icons/tb'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsQuestionCircle } from 'react-icons/bs'
import video from '../../../../../assets/video-rain.mp4'
import img2 from '../../../../../assets/home-furniture.jpg'
import imgUserAvata from '../../../../../assets/iconUserAvata.png'

const TopSection = () => {
  const { userData } = useContext(Context); 
  const [imageUrl, setImageUrl] = useState(""); 
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await backendinfoandrankinguser.get(`/${userId}/home`);
      console.log(response.data.datauserinfo);
      setImageUrl(response.data.datauserinfo.userinfo[0].ImgUser);
    };

    fetchData();
  }, []);
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title-dashboard">
          <h1>Chào mừng tới Travel.</h1>
          <p>Xin chào {userData.UserNameLogin}, mừng bạn quay trở lại!</p>
        </div>

        {/* <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard'/>
          <BiSearchAlt className= 'icon-dashboard' />
        </div> */}

        <div className="adminDiv flex">
          <TbMessageCircle className= 'icon-dashboard' />
          <IoIosNotificationsOutline className = 'icon-dashboard' />
          <div className="adminImage">
            <img src={imageUrl !== '' ? imageUrl : imgUserAvata} alt="Admin Image" />
          </div>
        </div>

      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Tự do làm điều mà bản thân muốn</h1>
          <p>Hãy cảm nhận vẻ đẹp thiên nhiên!</p>

          <div className="buttons flex">
            <button className="btn-dashboard">Tìm hiểu thêm</button>
            <button className="btn-dashboard transparent">Tin tức mới nhất</button>
          </div>

          <div className="videoDiv">
            <video src= {video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="mainDashboard flex">

            <div className="textDashboardDiv">
              <h1>Lịch sử</h1>

              <div className="flex">
                <span>
                  Tuần này <br/> <small>4 Orders</small>
                </span>
                <span>
                 Tháng này <br/> <small>127 Orders</small>
                </span>
              </div>

                  <span className="flex link">
                    Xem thêm <BsArrowRightShort className= 'icon-dashboard'/>
                  </span>

            </div>

            <div className="imgDiv">
            <img src={img2} alt="Image Name" />
            </div>
            
           

            </div> 
        </div>

        <div className="sideBarCard">
              <BsQuestionCircle className = 'icon-dashboard'/>
              <div className="cardContent">
                  <div className="circle1"></div>
                  <div className="circle2"></div>

                  <h3>CỞ SỞ CSKH</h3>
                  <p>Bạn gặp vấn đề tại website Travel.? Hãy liên lạc với chúng tôi để giải quyết vấn đề.</p>
                  <button className="btn-dashboard">Đến trung tâm giúp đỡ</button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default TopSection