import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar } from "swiper";
import WeatherBox from "./WeatherBox";

export default function Slider() {
  const today = new Date();
  const now = today.getHours();


  let arr = []
  for(let i=now;i<now+16;i++) {
    if (i<24) {
      arr.push(i);
    }
    else {
      arr.push(i-24)
    }
  }
  const weatherBoxes = arr.map((aa,index) => {
    return <SwiperSlide key={index}><WeatherBox time={aa}/></SwiperSlide>
  })

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        scrollbar={
          {hide:true,
            dragSize:'50px'
          }
        }
        modules={[FreeMode, Scrollbar]}
        className="mySwiper"
      >
        {weatherBoxes}
      </Swiper>
    </>
  );
}
