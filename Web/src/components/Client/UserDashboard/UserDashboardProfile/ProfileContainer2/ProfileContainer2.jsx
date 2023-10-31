import React from 'react'
import './profilecontainer2.css'
import SideBarSection from '../../SideBarSectionDashboard/SideBarSection';
import UserProfileMain2 from '../UserProfileMain2/UserProfileMain2';

const ProfileContainer2 = () => {
    return (
        <>
             <div className='container-dashboard'>
                    <SideBarSection />
                    <UserProfileMain2 />
                </div>
        </>
      )
}

export default ProfileContainer2