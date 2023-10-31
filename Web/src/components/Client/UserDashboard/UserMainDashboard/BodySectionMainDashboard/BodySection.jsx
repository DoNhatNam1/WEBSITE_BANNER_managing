import React from 'react'
import './bodysection.css'
import TopSection from '../TopSectionMainDashboard/TopSection'
import Listing from '../ListingSectionMainDashboard/ListingSection'
const BodySection = () => {
  return (
    <div className='mainContent'>
        <TopSection/>

        <div className="bottom flex">
            <Listing />
        </div>
    </div>
  )
}

export default BodySection