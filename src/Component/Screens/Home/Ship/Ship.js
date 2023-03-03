import React from 'react'
import './Ship.css'
import anchor from '../../../../assets/images/Icons and Logos/fi_anchor.svg'
function Ship() {
    return (
        <div className="shipBg">
            <div className="container">
                <div className="ship">
                    <div className="ship-title" data-aos="fade-in" data-aos-easing="ease-in-back" data-aos-delay="100"
                        data-aos-offset="250">
                        <h1 className="shiptitle">Welcome to
                            Bangladesh Shipping
                            Agents’ Association</h1>
                    </div>

                    <div className="ship-content">
                        <div className="shipInfo leftBox1" data-aos="fade-in" data-aos-easing="ease-in-back"
                            data-aos-delay="100" data-aos-offset="250">
                            <div className="iconBx">
                                <img src={anchor} alt="" />
                            </div>
                            <div className="descBx">
                                <p>The main objective of this Association is to resolve problems faced by its members
                                    and to
                                    make a positive contribution to the long term progress of the Ports and Shipping
                                    industry in
                                    Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ship-content"></div>
                    <div className="ship-content"></div>
                    <div className="ship-content">
                        <div className="shipInfo rightBx1" data-aos="fade-in" data-aos-easing="ease-in-back"
                            data-aos-delay="100" data-aos-offset="250">
                            <div className="iconBx">
                                <img src={anchor} alt="" />
                            </div>
                            <div className="descBx">
                                <p>BSAA enjoys a high reputation at all official level including Ministry of Shipping,
                                    National Board of Revenue, Chittagong Customs House, Chittagong Port Authority,
                                    Mongla
                                    Port Authority, Payra Port Authority, Dhaka ICD, FBCCI, CCCI, BGMEA Etc</p>
                            </div>
                        </div>
                    </div>

                    <div className="ship-content">
                        <div className="shipInfo leftBox1" data-aos="fade-in" data-aos-easing="ease-in-back"
                            data-aos-delay="100" data-aos-offset="250">
                            <div className="iconBx">
                                <img src={anchor} alt="" />
                            </div>
                            <div className="descBx">
                                <p>The main objective of this Association is to resolve problems faced by its members
                                    and to
                                    make a positive contribution to the long term progress of the Ports and Shipping
                                    industry in
                                    Bangladesh.</p>
                            </div>
                        </div>
                    </div>
                    <div className="ship-content"></div>
                    <div className="ship-content"></div>
                    <div className="ship-content">
                        <div className="shipInfo rightBx1" data-aos="fade-in" data-aos-easing="ease-in-back"
                            data-aos-delay="100" data-aos-offset="250">
                            <div className="iconBx">
                                <img src={anchor} alt="" />
                            </div>
                            <div className="descBx">
                                <p>BSAA enjoys a high reputation at all official level including Ministry of Shipping,
                                    National Board of Revenue, Chittagong Customs House, Chittagong Port Authority,
                                    Mongla
                                    Port Authority, Payra Port Authority, Dhaka ICD, FBCCI, CCCI, BGMEA Etc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ship