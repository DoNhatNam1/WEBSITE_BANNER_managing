import React from 'react'
import './listingsection.css'
import { BsArrowRightShort } from 'react-icons/bs'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import img from '../../../../../assets/travelpic/imgSapa.jpg'
import img2 from '../../../../../assets/travelpic/imgDaLat.jpg'
import img3 from '../../../../../assets/travelpic/imgHaNoi.jpg'
import img4 from '../../../../../assets/travelpic/imgHue.jpg'
import imgUser1 from '../../../../../assets/user1.jpg'
import imgUser2 from '../../../../../assets/user2.jpg'
import imgUser3 from '../../../../../assets/user3.jpg'
import imgUser4 from '../../../../../assets/user4.png'

const ListingSection = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>Danh sách của tôi</h1>
        <button className="btn-dashboard flex">
          See All <BsArrowRightShort className ='icon-dashboard' />
        </button>
      </div>

      <div className="secContainer flex">

        <div className="singleItem">
          <BsFillBookmarkStarFill className = 'icon-dashboard'/>
          <img src={img} alt="Image Name" />
          <h3> Du Lịch Sapa</h3>
        </div>

        <div className="singleItem">
          <BsFillBookmarkStarFill className = 'icon-dashboard'/>
          <img src={img2} alt="Image Name" />
          <h3>Du Lich Đà Lạt</h3>
        </div>

        <div className="singleItem">
          <BsFillBookmarkStarFill className = 'icon-dashboard'/>
          <img src={img3} alt="Image Name" />
          <h3>Du Lịch Hà Nội</h3>
        </div>

        <div className="singleItem">
          <BsFillBookmarkStarFill className = 'icon-dashboard'/>
          <img src={img4} alt="Image Name" />
          <h3> Du Lịch Huế</h3>
        </div>

      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Xếp hạng hướng dẫn viên </h3>
            <button className="btn-dashboard flex">
              See All <BsArrowRightShort className ='icon-dashboard' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={imgUser1} alt="User Image" />
              <img src={imgUser2} alt="User Image" />
              <img src={imgUser3} alt="User Image" />
              <img src={imgUser4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                536 Chuyến đã quản lý <br/>
                <small>
                  20 Hướng dẫn viên <span className="date">320 Ngày</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingSection