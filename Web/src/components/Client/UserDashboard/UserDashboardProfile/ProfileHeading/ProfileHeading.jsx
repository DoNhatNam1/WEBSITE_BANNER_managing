import React, { useContext, useEffect, useState } from 'react'
import backendinfoandrankinguser from '../../../../../apis/UserDashboardAPI'
import imgUserAvatar from '../../../../../assets/iconUserAvata.png'
import { useParams, useNavigate } from 'react-router-dom'
import './profileheading.css'

const ProfileHeading = () => {
  const [imageUrl, setImageUrl] = useState(""); 
  const [name, setName] = useState(""); 
  const { userId } = useParams();
  const navigateTo = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await backendinfoandrankinguser.get(`/${userId}/profile/info`);
      console.log(response.data.datauserinfo);
      setImageUrl(response.data.datauserinfo.userinfo[0].ImgUser);
      setName(response.data.datauserinfo.userinfo[0].Full_Name);
    };

    fetchData();
  }, []);

  const handleUpdate = (e, userId) => {
    e.stopPropagation();
    navigateTo(`/userdashboard/${userId}/profile/edit`);
  };

  const handleLinkClick1 = (e, userId) => {
    e.preventDefault();
    navigateTo(`/userdashboard/${userId}/profile/info`);
  };
  const handleLinkClick2 = (e, userId) => {
    e.preventDefault();
    navigateTo(`/userdashboard/${userId}/profile/ranking`);
  };


  return (
    <div className='headingSection flex'>
      <div className="ImgContainer">
        <img src={imageUrl === null || imageUrl === "" ? imgUserAvatar : imageUrl} alt="User Profile"/>
      </div>

      <div className="NameAndSelectGroup grid">
        <h5>{name}</h5>
        <h6>Vai trò: Khách hàng</h6>
        
        <div className="linkGp flex">
          <button         
            className='active'
            onClick={(e) => handleLinkClick1(e, userId)}
          >
            Thông tin
          </button>
          <button 
            className=''
            onClick={(e) => handleLinkClick2(e, userId)}
          >
            Hội viên
          </button>
        </div>
      </div>

      <div className="edit-btn">
        <button className='btn'
        onClick={(e) => handleUpdate(e, userData.idUser)}>Edit Profile</button>
      </div>
    </div>
  )
}

export default ProfileHeading