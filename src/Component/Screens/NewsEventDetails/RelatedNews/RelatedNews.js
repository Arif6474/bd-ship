import React from 'react'
import './RelatedNews.css'
import post from '../../../../assets/images/Page3/post1.png'
function RelatedNews() {
  return (
    <div className="container">
        <div className="related-news">
            <div className="related-news-title">
                <h1 className="relTitle">Related News</h1>
            </div>
        </div>

        <div className="related-news relatedNewsBx">
            <div className="related-news-card">
                <a href="newsEventDetails.html">
                    <div className="relNewsCard">
                        <div>
                            <h6>20 October, 2021</h6>
                            <img src={post} alt=""/>
                        </div>
                        <div>
                            <h6>20 October, 2021</h6>
                            <h1>How digital standards transform customer experience</h1>
                        </div>
                    </div>
                </a>
            </div>
            <div className="related-news-card">
                <a href="newsEventDetails.html">
                    <div className="relNewsCard">
                        <div>
                            <h6>20 October, 2021</h6>
                            <img src={post} alt=""/>
                        </div>
                        <div>
                            <h6>20 October, 2021</h6>
                            <h1>How digital standards transform customer experience</h1>
                        </div>
                    </div>
                </a>
            </div>
            <div className="related-news-card">
                <a href="newsEventDetails.html">
                    <div className="relNewsCard">
                        <div>
                            <h6>20 October, 2021</h6>
                            <img src={post} alt=""/>
                        </div>
                        <div>
                            <h6>20 October, 2021</h6>
                            <h1>How digital standards transform customer experience</h1>
                        </div>
                    </div>
                </a>
            </div>
            <div className="related-news-card">
                <a href="newsEventDetails.html">
                    <div className="relNewsCard">
                        <div>
                            <h6>20 October, 2021</h6>
                            <img src={post} alt=""/>
                        </div>
                        <div>
                            <h6>20 October, 2021</h6>
                            <h1>How digital standards transform customer experience</h1>
                        </div>
                    </div>
                </a>
            </div>
          
        </div>
    </div>

  )
}

export default RelatedNews