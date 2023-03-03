import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import banner from '../../../../assets/images/HeroImages/Rectangle 1.png'
import axios from "axios";
import { HOME_HERO_SECTION_API, IMAGE_URL } from "../../../../Utilities/APIs";
function Banner() {
    const [heroSections, setHeroSections] = useState([])
    console.log(heroSections);
    useEffect(() => {
       const getHeroSections = async() =>{
            const { data } = await axios.get(HOME_HERO_SECTION_API)
            setHeroSections(data)
        }
        getHeroSections()
    }, [])
    const pagination = {
        clickable: true,

    };


    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={pagination}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {
                    heroSections?.map(heroSection => 
                <SwiperSlide key={heroSection._id}>
                    <div className="swiper-slide" >
                        <img className="w-00" src={IMAGE_URL + heroSection?.image} alt="" />
                        <div className="hero-container homeContent">
                            <div className="container">
                                <h1 className="heroTitle">{heroSection?.heading}
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                        )
                }
              
            </Swiper>
        </div>
    )
}

export default Banner