import React, { useContext, useEffect } from 'react'
import './profileeditmain.css'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../../../context/Context'
import SideBarSection from '../../SideBarSectionDashboard/SideBarSection'
import ProfileEditBody from '../ProfileEditBody/ProfileEditBody'

const ProfileEditMain = () => {
    const { 
      isLoggedInUser, 
      userData, 
      logout 
    } = useContext(Context); 

    const navigateTo = useNavigate()
        useEffect(() => {
          console.log(userData);
          console.log(isLoggedInUser);
           if (!isLoggedInUser && userData === null){
             logout();
             navigateTo('/login');
          }
        }, [isLoggedInUser, userData, navigateTo]);
  return (
    <>
          {isLoggedInUser && userData !== null && (
            <div className='container-dashboard'>
                <SideBarSection />
                <ProfileEditBody />
            </div>
          )}
        </>
  )
}

export default ProfileEditMain