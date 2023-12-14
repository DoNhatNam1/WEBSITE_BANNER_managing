import React from 'react'
import { Context } from "../../../../../context/Context";
import { useParams, useNavigate } from 'react-router-dom'
import './clientbodybannerat1.css'

const ClientBodyBannerAt1 = () => {
  const { 
    bannerData,
    setBannerData,
    secondBannerClickLogs,
    setSecondBannerClickLogs,
    currentTimeBannerClickLog,
    setCurrentTimeBannerClickLog

  } = React.useContext(Context);

  const { bannerId } = useParams();

  React.useEffect(() => {
    const totalSecondsBannerClickLog = JSON.parse(localStorage.getItem(`totalSecondsBannerClickLog${bannerId}`));
    if (totalSecondsBannerClickLog) {
      setSecondBannerClickLogs(totalSecondsBannerClickLog);
    }

    const dateBannerClickLog = JSON.parse(localStorage.getItem(`dateBannerClickLog${bannerId}`));
    if (dateBannerClickLog) {
      setCurrentTimeBannerClickLog(dateBannerClickLog);
    }
  }, []);

  React.useEffect(() => {
    return () => {
      saveSecondsBannerClickLogToLocalstorage(secondBannerClickLogs);
    }
  }, [secondBannerClickLogs]);

  React.useEffect(() => {
    return () => {
      saveDateBannerClickLogToLocalstorage(currentTimeBannerClickLog);
    }
  }, [currentTimeBannerClickLog]);

  const saveSecondsBannerClickLogToLocalstorage = (secondBannerClickLogs) => {
    localStorage.setItem(`totalSecondsBannerClickLog${bannerId}`, JSON.stringify(secondBannerClickLogs));
  }
  const saveDateBannerClickLogToLocalstorage = (dateBannerClickLog) => {
    localStorage.setItem(`dateBannerClickLog${bannerId}`, JSON.stringify(dateBannerClickLog));
  }


  React.useEffect(() => {
    const interval = setInterval(() => {
      setSecondBannerClickLogs(prevSeconds => prevSeconds + 1);

      setCurrentTimeBannerClickLog(new Date().toISOString().split('T')[0])

      setBannerData(bannerId)
    }, 1000);

    return () => {
      clearInterval(interval);
      // saveData(seconds, currentTime);
    };
  }, []);

  // console.log(currentTimeBannerClickLog)
  // console.log(userData)

  const handleOnclick = () => {
    localStorage.removeItem(`totalSecondsBannerClickLog${bannerId}`);
    localStorage.removeItem(`dateBannerClickLog${bannerId}`);
    setSecondBannerClickLogs(0)
    setCurrentTimeBannerClickLog('')
  }

  React.useEffect(() => {
    localStorage.removeItem(`totalSecondsBannerClickLog${bannerId}`);
    localStorage.removeItem(`dateBannerClickLog${bannerId}`);
    setSecondBannerClickLogs(0)
    setCurrentTimeBannerClickLog('')
  }, [bannerId]);

  React.useEffect(() => {
    if(bannerData != null){
      setBannerData()
    }
  }, []);


  // const saveData = (seconds, currentTime) => {

  // }

  return (
    <div>
      <p>Time: {secondBannerClickLogs} seconds</p>

      <button onClick={handleOnclick}>
        Remote data
      </button>
    </div>
  );
}

export default ClientBodyBannerAt1