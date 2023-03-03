import React, { useEffect, useState } from 'react'
import './Circulars.css'
import download from '../../../assets/images/Icons and Logos/fi_download.svg'
import CircularBanner from './CircularBanner/CircularBanner'
import axios from 'axios'
import { CIRCULARS_API } from '../../../Utilities/APIs'
function Circulars() {
    const [circulars, setCirculars] = useState([])
    useEffect(() => {
       const getCirculars = async() =>{
            const { data } = await axios.get(CIRCULARS_API)
            setCirculars(data)
        }
        getCirculars()
    }, [])
    return (
        <div>
            <CircularBanner />
            <div className="container circularList">
                <div className="circular">
                    <div className="circular-title">
                        <h3 className='ct'>Circular List</h3>
                    </div>
                    <div className="circular-search">
                        <div className="search-date">
                            <div className="circular-title">
                                <input type="text" className="form-control searchMember" placeholder="Search Circulars" />
                            </div>
                            <div className="circular-src">
                                <input type="date" className="form-control date" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Desktop Circular List --> */}
                <div className="circulars-content circularListContainer">
                    {
                        circulars?.map(circular =>
                            <div className="circular-content listItem" key={circular._id}>
                                <div>
                                    <h6><span>Date:</span> {circular?.date}</h6>
                                    <h1>{circular?.description}</h1>
                                </div>
                                <div>
                                    <button className="btn"> <img src={download} alt="" /> Download
                                        Document</button>
                                </div>
                            </div>
                        )
                    }



                </div>

                {/* <!-- Mobile Circular List --> */}
                <div className="mc mobileCircularList">
                    <div className="circular-list">
                        {
                            circulars?.map(circular =>
                                <div className="mobileList" key={circular._id}>
                                    <h3>{circular?.description}
                                    </h3>

                                    <div>
                                        <div>
                                            <h6><span>Date:</span> {circular?.date}</h6>
                                        </div>
                                        <div>
                                            <button className="btn"><img src={download} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Circulars