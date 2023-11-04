import React, { useState, useEffect, useContext } from "react";
import "./managerchangepassword.css";
import { useParams, useNavigate } from 'react-router-dom'
import { Context } from '../../../context/Context'
import BackEndChangePassDashboard from '../../../apis/ManagerDashboardAPI'
import TopManagerSection from "../TopManagerSection/TopManagerSection";
import ManagerSidebarListHeader from "../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader";
import bcrypt from 'bcryptjs';
import { AiOutlineSave } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManagerChangepassword = () => {
    const { managerId } = useParams();

    const navigateTo = useNavigate()

    const[oldPassword, SetOldPassword] = useState('')
    const[newPassword, SetNewPassword] = useState('')
    const[passwordConfirm, SetPasswordConfirm] = useState('')
    const [hasFetched, setHasFetched] = useState(false);
    const [loginStatus, setLoginStatus] = useState('Off')
    const [compareOldAndNewPass, SetCompareOldAndNewPass] = useState('Off')
      const { 
      passwordFromDb, 
      setPasswordFromDb, 
      isLoggedInManager, 
      managerData, 
      logout,
      setDashboardShowChangePassSuccess 
    } = useContext( Context ); 

    const fetchData = async () => {
        try {
          const response = await BackEndChangePassDashboard.get(`/${managerId}/changepassword`);
          console.log(response.data.datamanageraccountpassonly);
          setPasswordFromDb(response.data.datamanageraccountpassonly.manageraccountpassonly);
          setHasFetched(true);
        } catch (err) {
          console.log(err);
        }
      };
    
      if (!hasFetched) {
        fetchData();
      }
    
      useEffect(() => {
        console.log(managerData);
        console.log(isLoggedInManager);
         if (!isLoggedInManager && managerData === null){
           logout();
           navigateTo('/login');
        }
      }, [isLoggedInManager, managerData, navigateTo]);
    
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
    
          let matchManagerAccountPassOnly = passwordFromDb.find(accountPass => bcrypt.compareSync(oldPassword, accountPass.MgPass));
          console.log(passwordFromDb)
          console.log(matchManagerAccountPassOnly); 
    
           if (matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm !== ''){
            let hashedPassword = bcrypt.hashSync(newPassword, 10);
       
            const updatedManagerAccount = await BackEndChangePassDashboard.put(`/${managerId}/changepassword`, {
              MgPass: hashedPassword
            }).then((response) => {
              console.log(response.data.datamanageraccountpassonly);
              setDashboardShowChangePassSuccess(true)
              navigateTo(`/managerdashboard/${managerId}/home`);
            }).catch((err) => {
              console.log(err);
            });
            
        } else if (
          (!matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm !== '') || 
          (!matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm === '') || 
          (!matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm === '') || 
          (!matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm !== '')) {
          setLoginStatus('On');
            SetOldPassword('')
            SetNewPassword('');
            SetPasswordConfirm('');
            setTimeout(() => {
              setLoginStatus('Off');
            }, 500);
            navigateTo(`/managerdashboard/${managerId}/changepassword`);
        } else if (
          (matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm !== '') || 
          (matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm === '') || 
          (matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm === '') || 
          (matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm !== '')) {
          SetCompareOldAndNewPass('On');
            SetOldPassword('')
            SetNewPassword('');
            SetPasswordConfirm('');
            setTimeout(() => {
              SetCompareOldAndNewPass('Off');
            }, 500);
            navigateTo(`/managerdashboard/${managerId}/changepassword`);
        } else if (
          (matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm === '') || 
          (matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword === '' && passwordConfirm !== '') || 
          (matchManagerAccountPassOnly && newPassword === passwordConfirm && newPassword !== '' && passwordConfirm === '')) {
          SetCompareOldAndNewPass('On');
            SetOldPassword('')
            SetNewPassword('');
            SetPasswordConfirm('');
            setTimeout(() => {
              SetCompareOldAndNewPass('Off');
            }, 500);
            navigateTo(`/managerdashboard/${managerId}/changepassword`);
        } else if (
          (!matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm === '') || 
          (!matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm !== '') || 
          (!matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword !== '' && passwordConfirm === '') || 
          (!matchManagerAccountPassOnly && newPassword !== passwordConfirm && newPassword === '' && passwordConfirm !== '')) {
            setLoginStatus('On');
            SetOldPassword('')
            SetNewPassword('');
            SetPasswordConfirm('');
            setTimeout(() => {
              setLoginStatus('Off');
            }, 500);
            navigateTo(`/managerdashboard/${managerId}/changepassword`);
        }
      };
  return (
    <div className="MgProfileContainer flex">
      <ManagerSidebarListHeader />
      <div className="MgUserListBodyRightPage flex">
        <TopManagerSection />
        <div className="MgEditMainContent">
          <div className="MgEditFormTitle flex">
            <h1>Change Password</h1>
          </div>

          <div className="MgformContainerChangePass flex">
    <form className="Mg-edit-form-change-pass flex">
      <label className='Mg-label-container-changepass flex'>
        <div className="MglabelNameChangePass flex">
        <p>Mật khẩu cũ:</p>
        </div>
        <input 
        className='Mg-input-changepass' 
        type="password" 
        id="oldPassword" 
        value={oldPassword} 
        onChange={(e) => {SetOldPassword(e.target.value)}}
        />
      </label>
      <label className='Mg-label-container-changepass flex'>
      <div className="MglabelNameChangePass flex">
        <p>Mật khẩu mới:</p>
        </div>
        <input 
        className='Mg-input-changepass' 
        type="password" 
        id="newPassword" 
        value={newPassword} 
        onChange={(e) => {SetNewPassword(e.target.value)}}
        />
      </label>
      <label className='Mg-label-container-changepass flex'>
      <div className="MglabelNameChangePass flex">
        <p>Xác nhận lại mật khẩu:</p>
        </div>
        <input 
        className='Mg-input-changepass' 
        type="password" 
        id="passwordConfirm" 
        value={passwordConfirm} 
        onChange={(e) => {SetPasswordConfirm(e.target.value)}}
        />
      </label >
      <div className="button-update-changepass flex">
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
    <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ManagerChangepassword;
