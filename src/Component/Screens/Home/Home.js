import React from 'react'

import Header from '../../Partials/Header/Header'
import Banner from './Banner/Banner'
import GivingGuidelines from './GivingGuidelines/GivingGuidelines'
import History from './History/History'
import './Home.css'
import News from './News/News'
import ReportCircular from './ReportCircular/ReportCircular'
import Ship from './Ship/Ship'
function Home() {
  return (
    <>
      <div className="paralaxHero sticky-top">
        <div className='navbar-wrapper'>
          <div className='slider-wrapper'>
            <Banner />
          </div>
          <Header />
        </div>
      </div>
      <div className='main_section'>
        <Ship />
        <History />
        <GivingGuidelines />
        <News />
        <ReportCircular />

      </div>
    </>

  )
}

export default Home