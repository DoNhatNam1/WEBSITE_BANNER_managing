import React from 'react'
import './mgprofileedit.css'
import ManagerSidebarListHeader from "../../../Manager/ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import TopManagerSection from '../../TopManagerSection/TopManagerSection'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { AiOutlineSave } from 'react-icons/ai'

const MgProfileEdit = () => {
  return (
    <div className="MgProfileContainer flex">
      <ManagerSidebarListHeader />
      <div className="MgUserListBodyRightPage flex">
      <TopManagerSection />
      <div className='mainContent'>
        <div className="formTitle flex">
        <h1>Cập nhập Profile</h1>
        </div>


    <div className="formContainer flex">
    <form className="edit-form flex">
      <label className='label-container flex'>
        <div className="labelName flex">
        <p>Họ và tên:</p>
        </div>
        <input className='input-profile' type="text" id="name" value={name || ""} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className='label-container flex'>
      <div className="labelName flex">
        <p>Tuổi:</p>
        </div>
        <input className='input-profile' type="number" id="age" value={age || ""} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label className='label-container flex'>
      <div className="labelName flex">
        <p>Số điện thoại:</p>
        </div>
        <input className='input-profile' type="text" id="phone" value={phone || ""} onChange={(e) => setPhone(e.target.value)} />
      </label >
      <label className='label-container flex'>
      <div className="labelName flex">
        <p>Giới tính:</p>
        </div>
        <input className='input-profile' type="text" id="borned" value={gender || ""} onChange={(e) => setGender(e.target.value)} />
      </label >
      <label className='label-container flex'>
      <div className="labelName flex">
        <p>Địa chỉ:</p>
        </div>
        <input className='input-profile' type="text" id="address" value={address || ""} onChange={(e) => setAddress(e.target.value)} />
      </label >
      <div className="label-container-img flex">
  <div className="labelName flex">
    <p>Tải ảnh:</p>
  </div>
  {imageUrl ? (
    <div className='img-and-button-remove flex'>
      <div className="image-container">
      <img src={imageUrl} alt="Profile Image" className='profile-img'/>
      </div>

     <div className="btn-image-container">
        <button 
        className='btn-image' 
        // onClick={() => setImageUrl("")}
        >
        <MdOutlineDeleteForever className = 'icon-dashboard' />
      </button>
     </div>
      
    </div>
  ) : (
    <input
      type="file"
      className='input-profile-img'
      id="imageUrl"
      // onChange={handleImageUpload}
    />
  )}
</div>
      <div className="button-update flex">
      <button 
      className='btn' 
      type="submit" 
      // onClick={handleSubmit}
      >
        <div className="button-container-profile-edit flex">
        <p>Save</p>
        <AiOutlineSave className='icon-dashboard'/>
        </div>
        </button>
      </div>
     
    </form>
    </div>
</div>
      </div>
    </div>
  )
}

export default MgProfileEdit