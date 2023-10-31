import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../../context/Context'
import './userchangepasswordcontainer.css'
import SideBarSection from '../../SideBarSectionDashboard/SideBarSection'
import UserChangePasswordBody from '../UserChangePasswordBody/UserChangePasswordBody'

const UserChangePasswordContainer = () => {
  const { 
    isLoggedIn, 
    userData, 
    logout 
  } = useContext(Context); 

  const navigateTo = useNavigate()
      useEffect(() => {
        console.log(userData);
        console.log(isLoggedIn);
         if (!isLoggedIn && userData === null){
           logout();
           navigateTo('/login');
        }
      }, [isLoggedIn, userData, navigateTo]);
  return (
    <>
    <div className='container-dashboard'>
           <SideBarSection />
           <UserChangePasswordBody />
        </div>
</>
  )
}

export default UserChangePasswordContainer