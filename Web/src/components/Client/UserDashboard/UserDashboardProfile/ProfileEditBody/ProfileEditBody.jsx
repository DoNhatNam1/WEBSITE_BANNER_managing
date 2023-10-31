import React, {useState, useEffect} from 'react'
import { storage } from "../../../../../Firebase/firebase"; 
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject 

  } from "firebase/storage";
  import { v4 } from "uuid";
import backendinfoandrankinguser from '../../../../../apis/UserDashboardAPI'
import { useParams, useNavigate } from 'react-router-dom'
import './profileeditbody.css'
import { AiOutlineSave } from 'react-icons/ai'
import { MdOutlineDeleteForever } from 'react-icons/md'


const ProfileEditBody = (props) => {
  const { userId } = useParams();
  const navigateTo = useNavigate();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);
     const [imageUrl, setImageUrl] = useState('' || null); 
     const [initialImageUrl, setInitialImageUrl] = useState(null); 


    useEffect(() => {
      const fetchData = async () => {
        const response = await backendinfoandrankinguser.get(`/${userId}/profile/edit`);
        console.log(response.data.datauserinfo);
        setName(response.data.datauserinfo.userinfo[0].Full_Name);
        setAge(response.data.datauserinfo.userinfo[0].Age);
        setPhone(response.data.datauserinfo.userinfo[0].phone_number);
        setAddress(response.data.datauserinfo.userinfo[0].DiaDiem);
        setGender(response.data.datauserinfo.userinfo[0].Gender);
        setImageUrl(response.data.datauserinfo.userinfo[0].ImgUser);
        setInitialImageUrl(response.data.datauserinfo.userinfo[0].ImgUser);
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
      
            backendinfoandrankinguser.put(`/${userId}/profile/edit`, {
              Full_Name: name,
              DiaDiem: address,
              phone_number: phone,
              Gender: gender,
              Age: age,
              ImgUser: url
            }).then((response) => {
              console.log(response.data.datauserinfo);
              navigateTo(`/userdashboard/${userId}/profile/info`);
            }).catch((err) => {
              console.log(err);
            });
          }); 
        });
      } else {
        const updatedUserAccount = await backendinfoandrankinguser.put(`/${userId}/profile/edit`, {
          Full_Name: name,
          Gender: gender,
          phone_number: phone,
          DiaDiem: address,
          Age: age,
          ImgUser: imageUrl
        }).then((response) => {
          console.log(response.data.datauserinfo);
          navigateTo(`/userdashboard/${userId}/profile/info`);
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
        <button className='btn-image' onClick={() => setImageUrl("")}>
        <MdOutlineDeleteForever className = 'icon-dashboard' />
      </button>
     </div>
      
    </div>
  ) : (
    <input
      type="file"
      className='input-profile-img'
      id="imageUrl"
      onChange={handleImageUpload}
    />
  )}
</div>
      <div className="button-update flex">
      <button 
      className='btn' 
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
  )
}

export default ProfileEditBody