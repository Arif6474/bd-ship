import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import news from '../../../../assets/images/latestnews.png'
import useNews from '../../../../hooks/useNews';
import { IMAGE_URL } from '../../../../Utilities/APIs';
import './News.css'
function News() {
    const [newsEvents] =useNews();
    const navigate = useNavigate();
  const navigateToNewsDetails = (id) => {
    navigate(`/news-event-details/${id}`);
  };
    return (
            <div className=" newsEven">
                <div className="container">
                    <div className="news">
                        <div className="news-event-title">
                            <div className="newsTitle">
                                Latest News & Events
                            </div>
                        </div>
                        <div className="news-events">
                            <div className="latestNews">
                                <img className="w-100" src={news} alt="" />
                                <h6>20 October, 2021</h6>
                                <a href="newsEventDetails.html">
                                    <h1>Call for action against Gulf of Guinea piracy gains support in Asia</h1>
                                </a>
                                <p>Support for eradicating piracy in the Gulf of Guinea is gaining strength both in Asia and
                                    worldwide.</p>
                            </div>
                        </div>
                        <div className="news-events">
                        {
                                newsEvents?.slice(-3).map(newsEvent => 
                            <button onClick={() => navigateToNewsDetails(newsEvent._id)}>
                                <div className="relatedNews"  key={newsEvent._id}>
                                    <div>
                                        <img src={IMAGE_URL + newsEvent.image} alt="" />
                                    </div>
                                    <div>
                                        <h6>{newsEvent.date}</h6>
                                        <h1>{newsEvent.name}</h1>
                                    </div>
                                </div>
                            </button>
                                    )
                            }
                         

                        </div>

                        <div className="news-event-btn text-center mt-5 pt-5">
                            <Link to='/news-events'>
                                <button className="btn btn-outline-brand viewBtn">View All

                                    <svg width="12" height="11" viewBox="0 0 12 11" 
                                    className='arrow-icon'
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.99999 0.166585L5.05999 1.10658L8.77999 4.83325L0.666656 4.83325L0.666656 6.16658L8.77999 6.16658L5.05332 9.88659L5.99999 10.8333L11.3333 5.49992L5.99999 0.166585Z"
                                            fill="#BBC9ED" />
                                    </svg>

                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default News