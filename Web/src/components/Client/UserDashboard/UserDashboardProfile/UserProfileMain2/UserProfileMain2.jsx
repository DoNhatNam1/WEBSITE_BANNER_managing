import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './userprofilemain2.css'
import ProfileHeading2 from '../ProfileHeading2/ProfileHeading2'
import { Context } from '../../../../../context/Context'
import ProfileBody2 from '../ProfileBody2/ProfileBody2'

const UserProfileMain2 = () => {
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
        <ProfileHeading2/>

        <div className="bottom flex">
         <ProfileBody2 />          
        </div>
    </form>
    </div>
  )
}

export default UserProfileMain2