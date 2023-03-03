import React, { useEffect, useState } from 'react'
import './BerthingReport.css'
import print from '../../../assets/images/Icons and Logos/u_print.svg'
import download from '../../../assets/images/Icons and Logos/fi_download.svg'
import BerthingBanner from './BerthingBanner/BerthingBanner'
import axios from 'axios'
import { BERTHING_REPORTS_API } from '../../../Utilities/APIs'

function BerthingReport() {
    const [berthingReports, setBerthingReports] = useState([])
    useEffect(() => {
       const getBerthingReports = async() =>{
            const { data } = await axios.get(BERTHING_REPORTS_API)
            setBerthingReports(data)
        }
        getBerthingReports()
    }, [])
    return (
        <div className='bg'>
            <BerthingBanner />
            <div className="container berthingSec">
                <div className="berthing-schedule">
                    <div className="berthing-title">
                        <h3>Berthing Schedule</h3>
                    </div>
                    <div className="print">
                        <button className="btn"><img src={print} alt="" /> Print</button>
                    </div>
                </div>


                {/* <!-- Desktop Berthing Report --> */}
                <div className="berthing-report">
                    <div className="berthing-report-table desktopTable">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Title</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        berthingReports?.map((berthingReport , index) =>
                                    <tr key={berthingReport._id}>
                                        <td>{index + 1}</td>
                                        <td>{berthingReport?.name}</td>
                                        <td>{berthingReport?.date}</td>
                                        <td>
                                            <button className="btn">

                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                                                        stroke="#BBC9ED" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                    <path d="M5.83301 8.33325L9.99967 12.4999L14.1663 8.33325" stroke="#BBC9ED"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M10 12.5V2.5" stroke="#BBC9ED" stroke-width="2"
                                                        stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                                Download</button>
                                        </td>
                                    </tr>
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


                {/* <!-- Mobile Berthing Report --> */}

                <div className="br">
                    <div className="br-mobile mobileBerthRep">
                        <div className="berthingRepCard">
                            <div className="d-flex">
                                <h6 className="sn">1</h6>

                                <div>
                                    <h4>Berthing Report 1</h4>
                                    <h5>20 October, 2021</h5>
                                </div>
                            </div>

                            <div>
                                <button className=""><img src={download} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="berthingRepCard">
                            <div className="d-flex">
                                <h6 className="sn">2</h6>

                                <div>
                                    <h4>Berthing Report 1</h4>
                                    <h5>20 October, 2021</h5>
                                </div>
                            </div>

                            <div>
                                <button className=""><img src={download} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="berthingRepCard">
                            <div className="d-flex">
                                <h6 className="sn">3</h6>

                                <div>
                                    <h4>Berthing Report 1</h4>
                                    <h5>20 October, 2021</h5>
                                </div>
                            </div>

                            <div>
                                <button className=""><img src={download} alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="berthingRepCard">
                            <div className="d-flex">
                                <h6 className="sn">4</h6>

                                <div>
                                    <h4>Berthing Report 1</h4>
                                    <h5>20 October, 2021</h5>
                                </div>
                            </div>

                            <div>
                                <button className=""><img src={download} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default BerthingReport