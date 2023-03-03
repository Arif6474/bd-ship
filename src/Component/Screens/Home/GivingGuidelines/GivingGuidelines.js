import React from 'react'
import image from '../../../../assets/images/Page1/react5.png'
import './GivingGuidelines.css'
function GivingGuidelines() {
    return (
        <div className='giving-guidelines'>
            <img className="historyMobileImg w-100" src={image} alt=""/>
                <section className="valuableSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>Giving valuable guidelines to promote shipping trade in Bangladesh</h3>
                                <p>The main objective of this Association is to promote and protect the interest of the members
                                    in
                                    conformity with the policy of the Government.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}

export default GivingGuidelines