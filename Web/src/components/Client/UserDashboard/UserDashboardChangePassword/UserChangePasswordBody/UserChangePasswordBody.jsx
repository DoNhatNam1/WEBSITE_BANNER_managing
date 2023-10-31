import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './userchangepasswordbody.css'
import { Context } from '../../../../../context/Context'
import BackEndChangePassDashboard from '../../../../../apis/UserDashboardAPI'
import { AiOutlineSave } from 'react-icons/ai'
import bcrypt from 'bcryptjs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UserChangePasswordBody = () => {
  const { userId } = useParams();
  const navigateTo = useNavigate();
  
  const[oldPassword, SetOldPassword] = useState('')
  const[newPassword, SetNewPassword] = useState('')
  const[passwordConfirm, SetPasswordConfirm] = useState('')
  const [hasFetched, setHasFetched] = useState(false);
  const [loginStatus, setLoginStatus] = useState('Off')
  const [compareOldAndNewPass, SetCompareOldAndNewPass] = useState('Off')
    const { 
    passwordFromDb, 
    setPasswordFromDb, 
    setDashboardShowChangePassSuccess 
  } = useContext( Context ); 


  const fetchData = async () => {
    try {
      const response = await BackEndChangePassDashboard.get(`/${userId}/changepassword`);
      console.log(response.data.datauseraccountpassonly);
      setPasswordFromDb(response.data.datauseraccountpassonly.useraccountpassonly);
      setHasFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hasFetched) {
    fetchData();
  }


  useEffect(() => {
    if(compareOldAndNewPass !== 'Off'){
      setTimeout(() => {
        toast.error('Comfirm password fail, please check again!', {
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
    }
  }, [compareOldAndNewPass])

  useEffect(() => {
    if(loginStatus !== 'Off'){
      setTimeout(() => {
        toast.error('Invalid password!', {
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
    }
  }, [loginStatus])

  
  const handleSubmit = async (e) => {
    e.preventDefault();

      let matchUserAccountPassOnly = passwordFromDb.find(accountPass => bcrypt.compareSync(oldPassword, accountPass.Pass));
      console.log(passwordFromDb)
      console.log(matchUserAccountPassOnly); 

       if (matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm !== ''){
        let hashedPassword = bcrypt.hashSync(newPassword, 10);
   
        const updatedUserAccount = await BackEndChangePassDashboard.put(`/${userId}/changepassword`, {
          Pass: hashedPassword
        }).then((response) => {
          console.log(response.data.datauseraccountpassonly);
          setDashboardShowChangePassSuccess(true)
          navigateTo(`/userdashboard/${userId}/home`);
        }).catch((err) => {
          console.log(err);
        });
        
    } else if (
      (!matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm !== '') || 
      (!matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm === '') || 
      (!matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm === '') || 
      (!matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm !== '')) {
      setLoginStatus('On');
        SetOldPassword('')
        SetNewPassword('');
        SetPasswordConfirm('');
        setTimeout(() => {
          setLoginStatus('Off');
        }, 500);
        navigateTo(`/userdashboard/${userId}/changepassword`);
    } else if (
      (matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm !== '') || 
      (matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm === '') || 
      (matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm === '') || 
      (matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm !== '')) {
      SetCompareOldAndNewPass('On');
        SetOldPassword('')
        SetNewPassword('');
        SetPasswordConfirm('');
        setTimeout(() => {
          SetCompareOldAndNewPass('Off');
        }, 500);
        navigateTo(`/userdashboard/${userId}/changepassword`);
    } else if (
      (matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm === '') || 
      (matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm !== '') || 
      (matchUserAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm === '')) {
      SetCompareOldAndNewPass('On');
        SetOldPassword('')
        SetNewPassword('');
        SetPasswordConfirm('');
        setTimeout(() => {
          SetCompareOldAndNewPass('Off');
        }, 500);
        navigateTo(`/userdashboard/${userId}/changepassword`);
    } else if (
      (!matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm === '') || 
      (!matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm !== '') || 
      (!matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm === '') || 
      (!matchUserAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm !== '')) {
        setLoginStatus('On');
        SetOldPassword('')
        SetNewPassword('');
        SetPasswordConfirm('');
        setTimeout(() => {
          setLoginStatus('Off');
        }, 500);
        navigateTo(`/userdashboard/${userId}/changepassword`);
    }
  };
  return (
    <div className='mainContentChangePass'>
        <div className="formTitleChangePass flex">
        <h1>Đổi mật khẩu</h1>
        </div>


    <div className="formContainerChangePass flex">
    <form className="edit-form-change-pass flex">
      <label className='label-container-changepass flex'>
        <div className="labelNameChangePass flex">
        <p>Mật khẩu cũ:</p>
        </div>
        <input 
        className='input-changepass' 
        type="password" 
        id="oldPassword" 
        value={oldPassword} 
        onChange={(e) => {SetOldPassword(e.target.value)}}
        />
      </label>
      <label className='label-container-changepass flex'>
      <div className="labelNameChangePass flex">
        <p>Mật khẩu mới:</p>
        </div>
        <input 
        className='input-changepass' 
        type="password" 
        id="newPassword" 
        value={newPassword} 
        onChange={(e) => {SetNewPassword(e.target.value)}}
        />
      </label>
      <label className='label-container-changepass flex'>
      <div className="labelNameChangePass flex">
        <p>Xác nhận lại mật khẩu:</p>
        </div>
        <input 
        className='input-changepass' 
        type="password" 
        id="passwordConfirm" 
        value={passwordConfirm} 
        onChange={(e) => {SetPasswordConfirm(e.target.value)}}
        />
      </label >
      <div className="button-update-changepass flex">
      <button 
      className='btn' 
      type="submit" 
      onClick={handleSubmit}
      >
        <div className="button-container-changepass flex">
        <p>Save</p>
        <AiOutlineSave className='icon-dashboard'/>
        </div>
        </button>
      </div>
     
    </form>
    </div>
    <ToastContainer />
</div>
  )
}

export default UserChangePasswordBody