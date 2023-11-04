import React, {useState, useEffect, useContext} from 'react'
import './mgprofileedit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from '../../../../context/Context'
import { storage } from "../../../../Firebase/firebase"; 
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject 

  } from "firebase/storage";
  import { v4 } from "uuid";
  import backendinfomanager from '../../../../apis/ManagerDashboardAPI'
import ManagerSidebarListHeader from "../../../Manager/ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import TopManagerSection from '../../TopManagerSection/TopManagerSection'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { AiOutlineSave } from 'react-icons/ai'

const MgProfileEdit = (props) => {
  const { managerId } = useParams();
  const { 
    isLoggedInManager, 
    managerData, 
    logout 
  } = useContext(Context); 

  const navigateTo = useNavigate()
      useEffect(() => {
        console.log(managerData);
        console.log(isLoggedInManager);
         if (!isLoggedInManager && managerData === null){
           logout();
           navigateTo('/login');
        }
      }, [isLoggedInManager, managerData, navigateTo]);

    const [mgName, setMgName] = useState('');
    const [mgAge, setMgAge] = useState('');
    const [mgGender, setMgGender] = useState('');
    const [mgAddress, setMgAddress] = useState('');
    const [image, setImage] = useState(null);
     const [imageUrl, setImageUrl] = useState('' || null); 
     const [initialImageUrl, setInitialImageUrl] = useState(null); 


    useEffect(() => {
      const fetchData = async () => {
        const response = await backendinfomanager.get(`/${managerId}/profile/edit`);
        console.log(response.data.datamanagerinfo);
        setMgName(response.data.datamanagerinfo.managerinfo[0].MgName);
        setMgAge(response.data.datamanagerinfo.managerinfo[0].MgAge);
        setMgAddress(response.data.datamanagerinfo.managerinfo[0].MgAddress);
        setMgGender(response.data.datamanagerinfo.managerinfo[0].MgGender);
        setImageUrl(response.data.datamanagerinfo.managerinfo[0].MgImg);
        setInitialImageUrl(response.data.datamanagerinfo.managerinfo[0].MgImg);
      };
  
      fetchData();
    }, []);

      const handleImageUpload = (e) => {
      if (e.target.files[0]) {
          setImage(e.target.files[0]);
      }
    }; 


  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if(image !== null && (imageUrl === '' || imageUrl === null)){
        const storageRef = ref(storage, `imageUserProfile/${image.name + v4()}`);
        uploadBytes(storageRef, image).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrl(url);
      
            backendinfomanager.put(`/${managerId}/profile/edit`, {
              MgName: mgName,
              MgAddress: mgAddress,
              MgGender: mgGender,
              MgAge: mgAge,
              MgImg: url
            }).then((response) => {
              console.log(response.data.datamanagerinfo);
              navigateTo(`/managerdashboard/${managerId}/profile/info`);
            }).catch((err) => {
              console.log(err);
            });
          }); 
        });
      } else {
        const updatedManagerAccount = await backendinfomanager.put(`/${managerId}/profile/edit`, {
          MgName: mgName,
          MgGender: mgGender,
          MgAddress: mgAddress,
          MgAge: mgAge,
          MgImg: imageUrl
        }).then((response) => {
          console.log(response.data.datamanagerinfo);
          navigateTo(`/managerdashboard/${managerId}/profile/info`);
        }).catch((err) => {
          console.log(err);
        });
      }

      if (initialImageUrl && imageUrl === '') {
        let imageRef = ref(storage, initialImageUrl);
        deleteObject(imageRef).then(() => {
          console.log('Previous file deleted');
        }).catch((error) => {
          console.error('Error in deleting previous file: ', error);
        });
      }
      
    };
  
  return (
    <div className="MgProfileContainer flex">
      <ManagerSidebarListHeader />
      <div className="MgUserListBodyRightPage flex">
      <TopManagerSection />
      <div className='MgEditMainContent'>
        <div className="MgEditFormTitle flex">
        <h1>Cập nhập Profile</h1>
        </div>

    <div className="MgEditFormContainer flex">
    <form className="MgEdit-form flex">

      <label className='MgEditlabel-container flex'>
        <div className="MgEditLabelName flex">
        <p>Họ và tên:</p>
        </div>
        <input 
        className='MgEditInput-profile' 
        type="text" 
        id="mgName" 
        value={mgName || ""} 
        onChange={(e) => setMgName(e.target.value)} 
        />
      </label>

      <label className='MgEditlabel-container flex'>
      <div className="MgEditLabelName flex">
        <p>Tuổi:</p>
        </div>
        <input 
        className='MgEditInput-profile' 
        type="number" 
        id="mgAge" 
        value={mgAge || ""} 
        onChange={(e) => setMgAge(e.target.value)} 
        />
      </label>

      <label className='MgEditlabel-container flex'>
      <div className="MgEditLabelName flex">
        <p>Giới tính:</p>
        </div>
        <input 
        className='MgEditInput-profile' 
        type="text" 
        id="mgGender" 
        value={mgGender || ""} 
        onChange={(e) => setMgGender(e.target.value)} 
        />
      </label >

      <label className='MgEditlabel-container flex'>
      <div className="MgEditLabelName flex">
        <p>Địa chỉ:</p>
        </div>
        <input 
        className='MgEditInput-profile' 
        type="text" 
        id="mgAddress"
        value={mgAddress || ""} 
        onChange={(e) => setMgAddress(e.target.value)} 
        />
      </label >

      <div className="MgEditlabel-container-img flex">
  <div className="MgEditLabelName flex">
    <p>Tải ảnh:</p>
  </div>

  {imageUrl ? (
    <div className='img-and-button-remove flex'>
      <div className="image-container">
      <img src={imageUrl} alt="Profile Image" className='profile-img'/>
      </div>

     <div className="btn-mg-edit-info-image-container">
        <button 
        className='btn-mg-edit-info-image' 
        onClick={() => setImageUrl('')}
        >
        <MdOutlineDeleteForever className = 'icon-dashboard' />
      </button>
     </div>
      
    </div>
  ) : (
    <input
      type="file"
      className='MgEditInput-profile-img'
      id="imageUrl"
      onChange={handleImageUpload}
    />
  )}
</div>
      <div className="button-update flex">
      <button 
      className='btn-mg-edit-info' 
      type="submit" 
      onClick={handleSubmit}
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