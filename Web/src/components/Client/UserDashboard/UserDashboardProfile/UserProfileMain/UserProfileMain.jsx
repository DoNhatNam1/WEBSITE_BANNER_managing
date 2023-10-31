import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './userprofilemain.css'
import ProfileHeading from '../ProfileHeading/ProfileHeading'
import ProFileBody from '../ProfileBody/ProfileBody'
import { Context } from '../../../../../context/Context'

const UserProfileMain = () => {
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
     <div className='mainContent'>
      <form className='form-group'>
        <ProfileHeading/>

        <div className="bottom flex">
           <ProFileBody />         
        </div>
    </form>
    </div>
  )
}

export default UserProfileMain