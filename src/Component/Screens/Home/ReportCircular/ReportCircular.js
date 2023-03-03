import React, { useEffect, useState } from 'react'
import './ReportCircular.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IMAGE_URL, IMPORTANT_LINKS_API } from '../../../../Utilities/APIs'
function ReportCircular() {
    const [importantLinks, setImportantLinks] = useState([])
    // console.log(importantLinks);
    useEffect(() => {
       const getImmportantLinks = async() =>{
            const { data } = await axios.get(IMPORTANT_LINKS_API)
            setImportantLinks(data)
        }
        getImmportantLinks()
    }, [])
  return (
    <section className="container-fluid LinkSection">
    <div className="member-report-circular">
        {
            importantLinks?.map(importantLink => 
        <div className="mrc" key={importantLink._id}>
            <Link className="aditionalLink" to={`/${importantLink.link}`}>
                <div className="imgBx">
                    <img className='member-img' src={IMAGE_URL + importantLink.image} alt=""/>
                    <div className="overlayContent">
                        <div className="mainText">
                            <h4>{importantLink.name}</h4>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
                )
        }
      
    </div>
</section>

  )
}

export default ReportCircular