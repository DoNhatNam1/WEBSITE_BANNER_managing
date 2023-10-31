import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import backendinfoandrankinguser from '../../../../../apis/UserDashboardAPI'
import './profilebody.css'

const ProfileBody = () => {
    const { userId } = useParams();
    const [age, setAge] = useState();
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        const response = await backendinfoandrankinguser.get(`/${userId}/profile/info`);
        console.log(response.data.datauserinfo);
        setAge(response.data.datauserinfo.userinfo[0].Age);
        setPhone(response.data.datauserinfo.userinfo[0].phone_number);
        setGender(response.data.datauserinfo.userinfo[0].Gender);
        setAddress(response.data.datauserinfo.userinfo[0].DiaDiem);
      };
  
      fetchData();
    }, []);
  return (
    <>
    <div className='bodyProfileSection'>

      <div className="labelGp grid">
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Tuổi:</span>
          </div>
            <div className="PagrarphItem">
            <p>{age} tuổi</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Giới tính:</span>
          </div>
            <div className="PagrarphItem">
            <p>{gender}</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Số điện thoại:</span>
          </div>
            <div className="PagrarphItem">
            <p>{phone}</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Địa chỉ hiện tại:</span>
          </div>
            <div className="PagrarphItem">
            <p>{address}</p>
            </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ProfileBody