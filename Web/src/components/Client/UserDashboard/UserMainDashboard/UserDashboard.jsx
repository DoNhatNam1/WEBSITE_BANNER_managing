import React, { useContext, useEffect, useState } from 'react'
import './userdashboard.css'
import { Context } from '../../../../context/Context'
import UserAccountMainDashBoardUrl from '../../../../apis/UserDashboardAPI'
import {useParams, useNavigate } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import SideBarSection from '../SideBarSectionDashboard/SideBarSection';
import BodySection from './BodySectionMainDashboard/BodySection';

  const UserDashboard = () => {
      const { 
      isLoggedInUser, 
      userData, 
      logout, 
      dashboardShowNLoginSuccess,
      // dashboardShowSendingDelMessInOneDay,
      // dashboardShowSendingDelMessSucss,
      // dashboardShowSendingDelMessFail,
      // setDashboardShowSendingDelMessSucss, 
      setDashboardShowLoginSuccess, 
      // setDashboardShowSendingDelMessFail,
      // setDashboardShowSendingDelMessInOneDay,
      dashboardShowChangePassSuccess, 
      closePopupUserDashboard, 
      isOpenPopupRequestUserDashboard, 
      // addUserAccountsSendingDelMess 
    } = useContext(Context); 
    const { userId } = useParams();
    
    const [inputValuePopupUserDashboard, setInputValuePopupUserDashboard] = useState('');
    const [Timing, setTiming] = useState('');
    const [hasFetched, setHasFetched] = useState(false);

      const navigateTo = useNavigate()



          useEffect(() => {
            console.log(userData);
            console.log(isLoggedInUser);
             if (!isLoggedInUser && userData === null){
               logout();
               navigateTo('/login');
            }
          }, [isLoggedInUser, userData, navigateTo]);

          // useEffect(() => {
          //   if(dashboardShowSendingDelMessSucss === true){
          //     setDashboardShowSendingDelMessSucss(false);
          //       toast.success('Your request had been sended successful!', {
          //         position: "bottom-right",
          //         autoClose: 4000,
          //         hideProgressBar: false,
          //         closeOnClick: true,
          //         pauseOnHover: true,
          //         draggable: true,
          //         progress: undefined,
          //         theme: "colored",
          //       });
              
          //   }
          // }, [dashboardShowSendingDelMessSucss])

          // useEffect(() => {
          //   if(dashboardShowSendingDelMessFail === true){
          //     setDashboardShowSendingDelMessFail(false);
          //       toast.warn('Please enter your request before sending feedback!', {
          //         position: "bottom-right",
          //         autoClose: 4000,
          //         hideProgressBar: false,
          //         closeOnClick: true,
          //         pauseOnHover: true,
          //         draggable: true,
          //         progress: undefined,
          //         theme: "colored",
          //       });
              
          //   }
          // }, [dashboardShowSendingDelMessFail])

          // useEffect(() => {
          //   if(dashboardShowSendingDelMessInOneDay === true){
          //     setDashboardShowSendingDelMessInOneDay(false);
          //       toast.warn('You had been sending us a feedback today, please wait 24h to send next!', {
          //         position: "bottom-right",
          //         autoClose: 4000,
          //         hideProgressBar: false,
          //         closeOnClick: true,
          //         pauseOnHover: true,
          //         draggable: true,
          //         progress: undefined,
          //         theme: "colored",
          //       });
              
          //   }
          // }, [dashboardShowSendingDelMessInOneDay])

          useEffect(() => {
            if(dashboardShowNLoginSuccess === true){
              setDashboardShowLoginSuccess(false);
                toast.success('Login successful!', {
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
          }, [dashboardShowNLoginSuccess])

          useEffect(() => {
            if(dashboardShowChangePassSuccess === true){
              setDashboardShowLoginSuccess(false);
                toast.success('Changed password successful!', {
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
          }, [dashboardShowChangePassSuccess])

          useEffect(() =>{
            Aos.init({
              duration: 1000
            })
          }, [])


          // const fetchDataTiming = async () => {
          //   try {
          //     const responseTiming = await UserAccountMainDashBoardUrl.get(`/${userId}`);
          //     console.log(responseTiming.data.datauseraccoutsendingdelmess);
          //     setTiming(responseTiming.data.datauseraccoutsendingdelmess.useraccoutsendingdelmess[0].ThoiGianGui);
          //     setHasFetched(true);
          //   } catch (err) {
          //     console.log(err);
          //   }
          // };
        
          // if (!hasFetched) {
          //   fetchDataTiming();
          // }

          // const handleSubmitPopUp = async (e) => {
          //   e.preventDefault();
          //   const currentDate = new Date();
          //   console.log(currentDate)
          //   const currentTime = currentDate.getTime();
          //   console.log(currentTime)

          //   const latestSubmitTime = new Date(Timing).getTime();
          //   console.log(latestSubmitTime)


          //    // Calculate the time difference in milliseconds
          //     const timeDifference = currentTime - latestSubmitTime;
          //   console.log(timeDifference)


          //     // Define 24hrs in milliseconds
          //     const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
          //     console.log(oneDayInMilliseconds)

          //     console.log(inputValuePopupUserDashboard)
          //     console.log(Timing)

          //     if(((timeDifference < oneDayInMilliseconds) && inputValuePopupUserDashboard !== '') || (inputValuePopupUserDashboard === '' && (timeDifference < oneDayInMilliseconds))){
          //       setDashboardShowSendingDelMessInOneDay(true);
          //       navigateTo(`/userdashboard/${userId}/home`);
          //       setInputValuePopupUserDashboard('');
          //       closePopupUserDashboard();
          //     } else if(inputValuePopupUserDashboard !== '' && (timeDifference > oneDayInMilliseconds)){

          //         try {
          //           const response = await UserAccountMainDashBoardUrl.post(`/${userId}`, {
          //             MaTaiKhoan: userId,
          //             NoiDungYeuCau: inputValuePopupUserDashboard,
          //             ThoiGianGui: currentDate
          //           });
          //           navigateTo(`/userdashboard/${userId}/home`);
          //           setDashboardShowSendingDelMessSucss(true);
          //           console.log(response.data.datauseraccoutsendingdelmess);
          //           addUserAccountsSendingDelMess(response.data.datauseraccoutsendingdelmess.useraccoutsendingdelmess);
          //           setTiming('');
          //           setInputValuePopupUserDashboard('');
          //           closePopupUserDashboard();
          //         } catch (err) {
          //           console.log(err);
          //         }
                  
          //       } else if ((inputValuePopupUserDashboard === '' && (timeDifference > oneDayInMilliseconds))){
          //         navigateTo(`/userdashboard/${id}/home`);
          //         setDashboardShowSendingDelMessFail(true);
          //         setInputValuePopupUserDashboard('');
          //         closePopupUserDashboard();
          //       }    
          // };

      return (
        <>
          {isLoggedInUser && userData !== null && (
            <div className='container-dashboard'>
                <SideBarSection />
                <BodySection />
                {isOpenPopupRequestUserDashboard && (
                  <div className="popup">
                    <div data-aos="fade-down" className="popup-content">
                      <form>
                        <div className="popupMain flex">
                          <div className="titleAndCloseButtonGp flex">
                            <h2>GỬI YÊU CẦU XÓA TÀI KHOẢN</h2>
                              <button className="popup-close" onClick={closePopupUserDashboard}>
                                <AiFillCloseCircle className="icon" />
                                </button>
                          </div>
                        <div className="labelGp flex">
                            <label htmlFor="popup-textarea" className="popup-label">
                              Lý do<span className="popup-label-star">*</span>
                            </label>
                        </div>
                          <div className="textContentReport">
                              <textarea
                              className="popup-textarea"
                              id="popup-textarea"
                              placeholder='Vui lòng ghi rõ lý do...'
                              // value={inputValuePopupUserDashboard}
                              // onChange={(e) => setInputValuePopupUserDashboard(e.target.value)}
                            />
                          </div>
                        <div className="btn-sending-report flex">
                        <button
                        // onClick={handleSubmitPopUp} 
                        className="btn" 
                        type="submit"
                        >
                          <p>Gửi</p>
                        </button>
                        </div>
                        </div>                 
                      </form>
                    </div>
                  </div>
                )}
                
            </div>
          )}
            <ToastContainer />
        </>
      );
    }; 

export default UserDashboard;