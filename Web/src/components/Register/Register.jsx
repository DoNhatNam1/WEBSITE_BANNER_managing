import React , { useState, useContext } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import './register.css'
import bcrypt from 'bcryptjs';
import video from '../../assets/video-rain.mp4'
// import logo from '../../assets/logos+icons - Copy/logo-GWELL.png'
import { SiYourtraveldottv } from 'react-icons/si'
import { Context } from '../../context/Context'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userAccountRegisterUrl from '../../apis/UserAccountRegisterAPI'
import { FaUserShield } from 'react-icons/fa'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Register = () => {
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [hasFetched, setHasFetched] = useState(false);
  const navigateTo = useNavigate()

  const { 
    userAccounts, 
    addUserAccounts, 
    setRegisterStatus, 
    setUserAccounts 
  } = useContext( Context )

  const fetchData = async () => {
    try {
      const response = await userAccountRegisterUrl.get("/")
      console.log(response.data.datauseraccount);
      setUserAccounts(response.data.datauseraccount.useraccounts);
      setHasFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  if (!hasFetched) {
    fetchData();
  }

  const createUser = async (e) => {
    e.preventDefault()
    const hashedUserName = bcrypt.hashSync(userName, 10);
    const hashedPassword = bcrypt.hashSync(password, 10);
    if(email === '' || userName === '' || password === '') {
     setTimeout(() => {
      toast.error('Vui lòng nhập đầy đủ thông tin!', {
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
      navigateTo('/register')
    } else if(!email.endsWith('@gmail.com')) {
      setTimeout(() => {
        toast.error('Email không hợp lệ!', {
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
       navigateTo('/register')
    } else if(userAccounts.some(account => account.UserName === userName)) {
      setTimeout(() => {
        toast.error('Tên đăng nhập đã được sử dụng. Vui lòng chọn tên đăng nhập khác!', {
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
      navigateTo('/register')
    } else if (password.length < 10) {
      setTimeout(() => {
        toast.warn('Để nâng cao bảo mật, vui lòng nhập mật khẩu không dưới 10 ký tự!', {
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
      navigateTo('/register')
    } else {

      try {
        const response = await userAccountRegisterUrl.post("/", {
          email: email,
          AccountName: hashedUserName,
          Pass: hashedPassword
        });
        console.log(response.data.datauseraccount);
        addUserAccounts(response.data.datauseraccount.useraccount);
        setRegisterStatus(true);
        navigateTo('/login');
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div className='registerPage flex'>
        <div className="container-register flex">
            <div className="videoDiv">
              <video src={video} autoPlay muted loop></video>

              <div className="textDiv">
                <h2 className="title">Tự do làm điều mình muốn</h2>
                <p>Hãy cảm nhận vẻ đẹp thiên nhiên!</p>
              </div>

              <div className="footerDiv flex">
                <span className="text">Đã có tài khoản?</span>
                <Link to='/login'>
                <button className="btn-register">Đăng nhập</button>
                </Link>
              </div>
            </div>

            <div className="formDiv flex">
              <div className="headerDiv">
                {/* <img src={logo} alt="Logo Image" /> */}
                <SiYourtraveldottv className="icon-register"/>
                <h3>Hãy để chúng tôi biết bạn! </h3>
              </div>

              <form action='' className='form grid'>
  
                <div className="inputDiv">
                  <label htmlFor="email">Email</label>
                  <div className="input flex">
                    <MdEmail className='icon-register'/>
                    <input type="email" id='email' placeholder='Enter Email' onChange={(e) => {setEmail(e.target.value)}}/>
                  </div>
                </div>

                <div className="inputDiv">
                  <label htmlFor="username">Tài khoản</label>
                  <div className="input flex">
                    <FaUserShield className='icon-register'/>
                    <input type="text" id='username' placeholder='Enter Username' onChange={(e) => {setUserName(e.target.value)}}/>
                  </div>
                </div>

                <div className="inputDiv">
                  <label htmlFor="password">Mật khẩu</label>
                  <div className="input flex">
                    <BsFillShieldLockFill className='icon-register'/>
                    <input type="password" id='password' placeholder='Enter Password' onChange={(e) => {setPassword(e.target.value)}}/>
                  </div>
                </div>

                <button type='submit' className='btn-register flex' onClick={createUser}>
                  <span>Đăng ký</span>
                  <AiOutlineSwapRight className='icon-register'/>
                </button>

              </form>
            </div>

        </div>
        <ToastContainer />
    </div>

  )
}

export default Register