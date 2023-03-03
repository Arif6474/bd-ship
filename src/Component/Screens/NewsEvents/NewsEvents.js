import React from 'react'
import './NewsEvents.css'
import NewsBanner from './NewsBanner/NewsBanner'
import { IMAGE_URL } from '../../../Utilities/APIs'
import useNews from '../../../hooks/useNews'
function NewsEvents() {
      const [newsEvents] =useNews();
    return (
      <div>
        <NewsBanner/>
          <div className='news'>
            <div className="container newsBlog">
                <div className="news-blog-content">
                    {
                       newsEvents?.map(newsEvent => 
                    <div className="news-blog" key={newsEvent._id} >
                        <a href="newsEventDetails.html">
                            <div className="card newsCard h-100">
                                <img src={IMAGE_URL + newsEvent.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h6>{newsEvent.date}</h6>
                                    <h1>{newsEvent.name}</h1>
                                    <p>{newsEvent.description}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                        ) 
                    }
                    

                </div>
            </div>
        </div>
      </div>

    )
}

export default NewsEvents