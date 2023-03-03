import React from 'react'
import Header from '../../../Partials/Header/Header'
import './BerthingBanner.css'
function BerthingBanner() {
    return (
        <div className="berthing-wrapper berthing-img">
      <div className="imageGradiant">
        <Header />
      </div>
      <div className="container">
            <div className="banner_content">
                <div className="bnr-title">
                    <h1 className="pageTitle">Berthing Reports</h1>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BerthingBanner