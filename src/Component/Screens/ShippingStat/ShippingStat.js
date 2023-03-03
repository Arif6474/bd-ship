import React from 'react'
import shipping from '../../../assets/images/shipping/image.jpg'
import logo from '../../../assets/images/shipping/logo.svg'
import ShippingBanner from './ShippingBanner/ShippingBanner'
import './ShippingStat.css'
function ShippingStat() {
    return (

     <div>
        <ShippingBanner/>
           <div className='bg'>
            <div className="container shipStat">
                <div className="shipping-content">
                    <div className="shipping-img ">
                        <div className="shipStatImg">
                            <img className="w-100" src={shipping} alt="" />
                        </div>
                    </div>
                    <div className="shipping-info">
                        <div className="shipStatDetails">
                            <img src={logo} alt="" />
                            <h1>General Shipping Statistics No. 24</h1>
                            <h6><span>Published by:</span>  <br/>
                                Department of Shipping, Ministry of Shipping, Govt, of the People Republic of Bangladesh</h6>

                            <p>
                                This is a specialized publication in Bangladesh which includes shipping related statistics. To
                                take proper decisions the use of correct data & information is essential. The information in
                                this publication will be helpful for the decision makers in the shipping sector. This
                                publication is composed in a processed form so as to be more useful and presenetable to all.
                            </p>

                            <h6><span>Published in:</span> April, 2021</h6>

                            <div className="text-center text-md-start">
                                <button className="btn btn-brand">Download PDF <svg width="16" height="17" viewBox="0 0 16 17"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.6673 6.5H10.0007V2.5H6.00065V6.5H3.33398L8.00065 11.1667L12.6673 6.5ZM3.33398 12.5V13.8333H12.6673V12.5H3.33398Z"
                                        fill="#061425" />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>

    )
}

export default ShippingStat