import * as React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './managerhome.css'
import { Context } from '../../../context/Context'
import ManagerSidebarListHeader from '../ManagerSidebarList/ManagerSidebarListHeader/ManagerSidebarListHeader'
import TopManagerSection from '../TopManagerSection/TopManagerSection'
import { PiSuitcaseSimpleBold } from 'react-icons/pi'
import { SlWallet } from 'react-icons/sl'
import { IoIosRadio } from 'react-icons/io'
import { GrView } from 'react-icons/gr'
import { MdFlight } from 'react-icons/md'
import { BsArrowUpShort } from 'react-icons/bs'


const ManagerHome = () => {
  const { 
    isLoggedInManager,
    managerData,
    logout, 
} = React.useContext(Context); 

  const navigateTo = useNavigate()

  React.useEffect(() => {
    console.log(managerData);
    console.log(isLoggedInManager);
     if (!isLoggedInManager && managerData === null){
       logout();
       navigateTo('/login');
    }
  }, [isLoggedInManager, managerData, navigateTo]);
  return (
    <>
     <div className="MgHomeBody flex">
        <ManagerSidebarListHeader/>
        <div className="MgHomeBodyRightPage flex">
            <TopManagerSection />
            <div className='BodyMgSecContainer'>
              <div className="BodyMgDivContainer grid">
                <div className="MgCardGroup">
                  <div className="MgCardBody grid">
                    <div className="MgCardInfo">
                      <h3>$100,000</h3>
                      <p>Tổng lợi nhuận</p>
                    </div>
                    <div className="MgCardBigIcon grid">
                      <PiSuitcaseSimpleBold className='MgCardIconItem' />
                    </div>
                    <div className="MgCardLastMonth">
                      <p>
                        <span>
                        <BsArrowUpShort className='MgArrowIcon'/>
                          4.65%
                          </span>tháng trước
                      </p>
                    </div>
                  </div>
                  <div className="MgProcessBarGroup">
                    <div className="MgProcessBarValue" />
                  </div>
                </div>
                <div className="MgCardGroup">
                <div className="MgCardBody grid">
                <div className="MgCardInfo">
                      <h3>$20,000</h3>
                      <p>Tổng thu nhập</p>
                    </div>
                    <div className="MgCardBigIcon grid">
                      <SlWallet className='MgCardIconItem grid' />
                    </div>
                    <div className="MgCardLastMonth">
                      <p>
                        <span>
                        <BsArrowUpShort className='MgArrowIcon'/>
                          6.64%
                          </span>tháng trước
                      </p>
                    </div>
                </div>
                  <div className="MgProcessBarGroup">
                    <div className="MgProcessBarValue" />
                  </div>
                </div>
                <div className="MgCardGroup">
                <div className="MgCardBody grid">
                <div className="MgCardInfo">
                      <h3>38%</h3>
                      <p>Doanh thu</p>
                    </div>
                    <div className="MgCardBigIcon grid">
                      <IoIosRadio className='MgCardIconItem' />
                    </div>
                    <div className="MgCardLastMonth">
                      <p>
                         <span>
                         <BsArrowUpShort className='MgArrowIcon'/>
                          2.12%
                          </span> tháng trước
                      </p>
                    </div>
                </div>
                  <div className="MgProcessBarGroup">
                    <div className="MgProcessBarValue" />
                  </div>
                </div>
                <div className="MgCardGroup">
                <div className="MgCardBody grid">
                <div className="MgCardInfo">
                      <h3>6,240 Order</h3>
                      <p>Tổng đơn đặt</p>
                    </div>
                    <div className="MgCardBigIcon grid">
                      <MdFlight className ='MgCardIconItem' />
                    </div>
                    <div className="MgCardLastMonth">
                      <p>
                        <span>
                        <BsArrowUpShort className='MgArrowIcon'/>
                          8.63%
                          </span>tháng trước
                      </p>
                    </div>
                </div>
                  <div className="MgProcessBarGroup">
                    <div className="MgProcessBarValue" />
                  </div>
                </div>
                <div className="MgCardGroup">
                <div className="MgCardBody grid">
                <div className="MgCardInfo">
                      <h3>2,870 Visitor</h3>
                      <p>Tổng truy cập</p>
                    </div>
                    <div className="MgCardBigIcon grid">
                      <GrView className='MgCardIconItem' />
                    </div>
                    <div className="MgCardLastMonth">
                      <p>
                        <span>
                        <BsArrowUpShort className='MgArrowIcon'/>
                          4.65%
                          </span>tháng trước
                      </p>
                    </div>
                </div>
                  <div className="MgProcessBarGroup">
                    <div className="MgProcessBarValue" />
                  </div>
                </div>
                <div className="TableChartMgHomeGroup">Card TbChart</div>
                <div className="MailChartMgHomeGroup">Card MailChart</div>
              </div>
            </div>

            <div className="FooterMgSecContainer">
              <span>@2023 Copy Right by Nam IT. All Rights Reserved.</span>
            </div>
        </div>
     </div>
    </>
  )
}

export default ManagerHome