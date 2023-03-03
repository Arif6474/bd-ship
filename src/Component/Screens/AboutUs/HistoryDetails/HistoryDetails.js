import React from 'react'
import './HistoryDetails.css'
import history from '../../../../assets/images/aboutUs/history1.png'
import history2 from '../../../../assets/images/aboutUs/history2.png'
function HistoryDetails() {
  return (
    <div className="bsaa">
    <div className="container">
        <div className="bsaa-history-content " data-aos="fade-in" data-aos-easing="ease-in-back" data-aos-delay="100"
            data-aos-offset="250">
            <div className="short-history">
                <div className="bsaaTitle">
                    <h1>Short History of BSAA</h1>
                    <p>To know the history of BSAA, we have to look decades back when a number of young and
                        energetic
                        Shipping Executives of Bangladesh, foreseeing the importance of an Association for the
                        Shipping
                        Community had formed a body and named it Bangladesh Steamer Agents’ Association.</p>
                </div>
            </div>
        </div>
    </div>


    <div className="historyContainer">
        <div className="bsaa-history-content">
            <div className="histo hisoryDetails" data-aos="fade-in" data-aos-easing="ease-in-back"
                data-aos-delay="100" data-aos-offset="250">
                <img className="w-100" src={history} alt=""/>
                <h1>The Outset</h1>
                <p>It was the 29th day of May 1978 the BSAA came into effect. The Ministry of Commerce
                    Government of the Peoples Republic of Bangladesh granted the License No. 02 of 1978 dated
                    May 6, 1978. As it is stated, in pursuance of section 3 of the trade organization ordnance,
                    1961 (Ordnance No. XLV of 1961) the Government is pleased to grant this license to this said
                    Association and to direct that it be registered with Registrar of Joint Stock Companies, 40,
                    Purana Paltan, Dacca (Presently Dhaka) under the Companies Act 1913, (Act VII of 1913) as a
                    company with limited liability without the word “Limited” in its name.</p>
            </div>
            <div className="col-12 hisoryDetails" data-aos="fade-in" data-aos-easing="ease-in-back"
                data-aos-delay="100" data-aos-offset="250">
                <img className="w-100" src={history2} alt=""/>
                <h1>Office in Khulna & Chittagong</h1>
                <p>It was the 29th day of May 1978 the BSAA came into effect. The Ministry of Commerce
                    Government of the Peoples Republic of Bangladesh granted the License No. 02 of 1978 dated
                    May 6, 1978. As it is stated, in pursuance of section 3 of the trade organization ordnance,
                    1961 (Ordnan/aboutHero.png1961) the Government is pleased to grant this license to this said
                    Association and to direct that it be registered with Registrar of Joint Stock Companies, 40,
                    Purana Paltan, Dacca (Presently Dhaka) under the Companies Act 1913, (Act VII of 1913) as a
                    company with limited liability without the word “Limited” in its name.</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default HistoryDetails