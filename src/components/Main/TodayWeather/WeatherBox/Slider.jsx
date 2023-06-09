import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar } from "swiper";
import WeatherBox from "./WeatherBox";
import DateInfo from "../../../Store/DateInfo";

export default function Slider() {
  const today = new Date();
  const now = today.getHours();
  const todayDate = DateInfo(today);

  let changeDate= new Date(today.setDate(today.getDate() + 1));
  let nextDate = DateInfo(changeDate);

  let arr = []
  let day = [];

  for(let i=now;i<now+16;i++) {
    if (i<24) {
      arr.push(i);
      day.push(todayDate);
    }
    else {
      arr.push(i-24);
      day.push(nextDate);
    }
  }
  const weatherBoxes = arr.map((aa,index) => {
    return <SwiperSlide key={index}><WeatherBox time={aa} date={day[index]}/></SwiperSlide>
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
