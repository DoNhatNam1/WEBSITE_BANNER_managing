import React, { useState } from 'react';
import './profilebody2.css'

const ProfileBody2 = () => {
  // const { id } = useParams();


  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [phone, setPhone] = useState('');
  // const [borned, setBorned] = useState('');
  // const [address, setAddress] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await backendinfoandrankinguser.get(`/${id}`);
  //     console.log(response.data.datauseraccout);
  //     setName(response.data.datauseraccout.useraccoutinfo[0].HoVaTen);
  //     setAge(response.data.datauseraccout.useraccoutinfo[0].Tuoi);
  //     setPhone(response.data.datauseraccout.useraccoutinfo[0].Sdt);
  //     setBorned(response.data.datauseraccout.useraccoutinfo[0].QueQuan);
  //     setAddress(response.data.datauseraccout.useraccoutinfo[0].DiaChi);
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className='bodyProfile2Section'>
        <div className="labelGp grid">
        <div className="labelItem flex">
          <div className="spanItem">
          <span>Ranking:</span>
          </div>
            <div className="PagrarphItem">
            <p className='ranking-text-gold'>Gold</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Tiến trình:</span>
          </div>
            <div className="PagrarphItem">
            <p>3.000.000đ / 6.000.000đ</p>
            </div>
        </div>
        <div className="labelItem flex">
        <div className="spanItem">
          <span>Ưu đãi hiện có:</span>
          </div>
            <div className="PagrarphItem">
            <p>Giảm giá voucher du lịch Đà Lạt 20% cho gia đình có con nhỏ, được ngồi xe vip</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBody2