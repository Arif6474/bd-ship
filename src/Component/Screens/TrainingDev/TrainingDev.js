import React, { useState } from "react";
import "./TrainingDev.css";
import post from "../../../assets/images/Page3/post2.png";
import play from "../../../assets/images/shipping/play_circle_filled.svg";
import TrainingBanner from "./TrainingBanner/TrainingBanner";
import Video from "./Video/Video";
import { Link } from "react-router-dom";
function TrainingDev() {
  const [videoModal , setVideoModal] =useState(false);
  const handleVideoModal =()=>{
    setVideoModal(!videoModal);
  }
  return (
    <div>
      <TrainingBanner />
      <div className="bg">
        <div className="container newsBlog">
          <div className="news-blog-content">
            <div className="news-blog">
              <Link>
                <div className="card newsCard h-100">
                  <div className="overlayContainer">
                    <img src={post} className="card-img-top" alt="..." />

                    <div className="overlay">
                      <button
                      onClick={handleVideoModal}
                       
                        
                      >
                        <img src={play} alt="" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6>20 October, 2021</h6>
                    <h1>
                      Call for action against Gulf of Guinea piracy gains
                      support in Asia
                    </h1>
                    <p>
                      Support for eradicating piracy in the Gulf of Guinea is
                      gaining strength both in Asia and worldwide.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {
        videoModal && <Video setVideoModal={setVideoModal} videoModal={videoModal}/>
      }
    </div>
  );
}

export default TrainingDev;
