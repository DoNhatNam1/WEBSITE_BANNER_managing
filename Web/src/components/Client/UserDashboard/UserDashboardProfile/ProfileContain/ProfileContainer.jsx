import React from 'react'
import './profilecontainer.css'
import SideBarSection from '../../SideBarSectionDashboard/SideBarSection';
import UserProfileMain from '../UserProfileMain/UserProfileMain';

const ProfileContainer = () => {
  return (
    <>
         <div className='container-dashboard'>
                <SideBarSection />
                <UserProfileMain />
            </div>
    </>
  )
}

export default ProfileContainer