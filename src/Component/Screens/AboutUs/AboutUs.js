import React from 'react'
import ReportCircular from '../Home/ReportCircular/ReportCircular'
import BoardMember from './BoardMember/BoardMember'
import Employees from './BoardMember/Employees/Employees'
import HistoryDetails from './HistoryDetails/HistoryDetails'
import VisionMisson from './VisionMisson/VisionMisson'
import Welcome from './Welcome/Welcome'
import './AboutUs.css'
import AboutBanner from './AboutBanner/AboutBanner'
function AboutUs() {
  return (
   <div>
      <AboutBanner/> 
       <div className='bg'>
      <div className="welcome">
        <Welcome />
      </div>
      <div className='about_us'>
        <HistoryDetails />
        <VisionMisson />
        <BoardMember />
        <Employees />
        <ReportCircular />
      </div>
    </div>
   </div>
  )
}

export default AboutUs