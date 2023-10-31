import React, {useEffect, useState, useContext} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import bcrypt from 'bcryptjs';
import './login.css'
import video from '../../assets/video-rain.mp4'
// import logo from '../../assets/logos+icons - Copy/logo-GWELL.png'
import { SiYourtraveldottv } from 'react-icons/si'
import { Context } from '../../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userAccountLoginUrl from '../../apis/UserAccountLoginAPI'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'

const Login = () => {
  const [loginUserName, setLoginUserName] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [hasFetchedUserAccount, setHasFetchedUserAccount] = useState(false);
  const [hasFetchedAdminAccount, setHasFetchedAdminAccount] = useState(false);
  const { 
    userAccounts, 
    adminAccounts, 
    setUserAccounts, 
    setAdminAccounts, 
    loginUser, 
    loginManager, 
    isLoggedInUser, 
    isLoggedInManager, 
    userData, 
    managerData,
    registerStatus, 
    setRegisterStatus 
  } = useContext( Context )
  const navigateTo = useNavigate()
  const [loginStatus, setLoginStatus] = useState('Off')

  const fetchDataUserAccount = async () => {
    try {
      const responseauseraccount = await userAccountLoginUrl.get("/")
      console.log(responseauseraccount.data.dataaccount);
      setUserAccounts(responseauseraccount.data.dataaccount.accounts);
      setHasFetchedUserAccount(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hasFetchedUserAccount) {
    fetchDataUserAccount();
  }
  
  const fetchDataAdminAccount = async () => {
    try {
      const responseauseraccount = await userAccountLoginUrl.get("/")
      console.log(responseauseraccount.data.dataaccount);
      setAdminAccounts(responseauseraccount.data.dataaccount.accounts);
      setHasFetchedAdminAccount(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hasFetchedAdminAccount) {
    fetchDataAdminAccount();
  }

  useEffect(() => {
    if (isLoggedInUser && userData !== null) {
      navigateTo(`/userdashboard/${userData.idUser}/home`);
    }
  }, [isLoggedInUser, navigateTo]);

  useEffect(() => {
    if (isLoggedInManager && managerData !== null) {
      navigateTo(`/managerdashboard/${managerData.idManager}/home`);
    }
  }, [isLoggedInManager, navigateTo]);


  useEffect(() => {
    if(loginStatus !== 'Off'){
      setTimeout(() => {
        toast.error('Invalid username or password!', {
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

  useEffect(() => {
    if(registerStatus === true){
      setRegisterStatus(false);

        toast.success('Register successful!', {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      
    }
  }, [registerStatus])

  const loginSubmit = (e) => {
    e.preventDefault();
    
    let matchUserAccount = userAccounts.find(account => bcrypt.compareSync(loginUserName, account.AccountName) && bcrypt.compareSync(loginPassword, account.Pass));
    let matchManagerAccount = adminAccounts.find(account => bcrypt.compareSync(loginUserName, account.MgAccountName) && bcrypt.compareSync(loginPassword, account.MgPass));
    
    console.log(matchUserAccount);
    // console.log(matchAdminAccount);


    if (matchUserAccount && !matchManagerAccount){
      let USerAccount = {
        idUser: matchUserAccount.UserAccount_id,
        UserNameLogin: loginUserName
      };
      let isMatchUserName = bcrypt.compareSync(loginUserName, matchUserAccount.AccountName);
      let isMatchUserPassword = bcrypt.compareSync(loginPassword, matchUserAccount.Pass);
      if (isMatchUserName && isMatchUserPassword) {
        loginUser(USerAccount);
        navigateTo(`/userdashboard/${matchUserAccount.UserAccount_id}/home`);
      } else {
        setLoginStatus('On');
        setLoginUserName('');
        setLoginPassword('');
        setTimeout(() => {
          setLoginStatus('Off');
        }, 500);
        navigateTo('/login');
      }
    } else if(matchManagerAccount && !matchUserAccount){
      let ManagerAccount = {
        idManager: matchManagerAccount.manager_id,
        ManagerNameLogin: loginUserName
      };
      let isMatchManagerName = bcrypt.compareSync(loginUserName, matchManagerAccount.MgAccountName);
      let isMatchManagerPassword = bcrypt.compareSync(loginPassword, matchManagerAccount.MgPass);
      if (isMatchManagerName && isMatchManagerPassword) {
        loginManager(ManagerAccount);
        navigateTo(`/managerdashboard/${matchManagerAccount.manager_id}/home`);
      } else {
        setLoginStatus('On');
        setLoginUserName('');
        setLoginPassword('');
        setTimeout(() => {
          setLoginStatus('Off');
        }, 500);
        navigateTo('/login');
      }
    } else {
      setLoginStatus('On');
        setLoginUserName('');
        setLoginPassword('');
        setTimeout(() => {
          setLoginStatus('Off');
        }, 500);
        navigateTo('/login');
    }

  
  };



  return (
    <div className='loginPage flex'>
        <div className="container-login flex">
            <div className="videoDiv">
              <video src={video} autoPlay muted loop></video>

              <div className="textDiv">
                <h2 className="title">Tự do làm điều mình muốn</h2>
                <p>Hãy cảm nhận vẻ đẹp thiên nhiên!</p>
              </div>

              <div className="footerDiv flex">
                <span className="text">Bạn chưa có tài khoản?</span>
                <Link to='/register'>
                <button className="btn-login">Đăng ký</button>
                </Link>
              </div>
            </div>

            <div className="formDiv flex">
              <div className="headerDiv">
              <SiYourtraveldottv className="icon-login"/>
                <h3>Chào mừng trở lại!</h3>
              </div>

              <form action='' className='form grid'>
                <div className="inputDiv">
                  <label htmlFor="username">Tài khoản</label>
                  <div className="input flex">
                    <FaUserShield className='icon-login'/>
                    <input type="text" id='username' placeholder='Enter Username' onChange={(e) => {setLoginUserName(e.target.value)}}/>
                  </div>
                </div>

                <div className="inputDiv">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className='icon-login'/>
                    <input type="password" id='password' placeholder='Enter Password' onChange={(e) => {setLoginPassword(e.target.value)}}/>
                  </div>
                </div>

                <button type='submit' className='btn-login flex' onClick={loginSubmit}>
                  <span>Đăng nhập</span>
                  <AiOutlineSwapRight className='icon-login'/>
                </button>

                <span className='forgotPassword'>
                  Bạn quên mật khẩu? <Link to='#'>Nhấp vào đây</Link>
                </span>

              </form>
            </div>

        </div>
        <ToastContainer />
    </div>

  )
}

export default Login