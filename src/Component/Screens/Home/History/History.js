import React from 'react'
import banner from '../../../../assets/images/Page1/Rectangle 6.png'
import './History.css'
function History() {
    return (
        <div >   
            <img className="historyMobileImg w-100" src={banner} alt=""/>
            <section className="historyBsaa">
                <div className="container">
                    <div className="history align-items-center">
                        <div className="history-content historyContent order-2 order-lg-1">
                            <h3>Short History of BSAA</h3>
                            <p>Bangladesh Shipping Agents’ Association was formed in May, 1978 and is the sole licensed
                                Trade
                                Association for Shipping Agents comprising over 400 reputed members handling vessels calling
                                Bangladesh Ports. BSAA is registered with the Ministry of Commerce under the Trade
                                Organizations
                                Ordinance, 1961.</p>
                            <button className="btn btn-outline-brand">Learn More

                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.00002 0.166646L5.06002 1.10665L8.78002 4.83331L0.666687 4.83331L0.666687 6.16665L8.78002 6.16665L5.05335 9.88665L6.00002 10.8333L11.3334 5.49998L6.00002 0.166646Z"
                                        fill="#BBC9ED" />
                                </svg>

                            </button>
                        </div>
                        <div className="history-content historyImg order-1 order-lg-2">
                            <img src={banner} alt=""/>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}

export default History