import React, { useContext } from 'react';
import classes from './RainCheck.module.css';
import { WeatherContext } from '../../Store/WeatherProvider';

export default function RainCheck({weather,isRainy}) {
  const {bgToggle} = useContext(WeatherContext)
  let todayWeather;
  let todayColor;

  let rainyTime;
  if (isRainy) {
    rainyTime = isRainy.fcstTime.replace(/0/g,'')   // 문자열에서 0을 제거하는 정규표현식
  }
  
  switch (weather) {
    case "normal":
      todayWeather = "비 예보 없음";
      break;
    case "rainy":
      todayWeather = "비";
      todayColor = classes.rainy;
      break;
    case "snow":
      todayWeather = "눈";
      todayColor = classes.snow;
      break;
    default:
      break;
  }

  let rainCheck;

  if(weather === "normal") {
    rainCheck = (
    <div className={classes.RainCheck} style={bgToggle ? undefined : {color:'var(--light_red)'}}>
      비 예보 없음
    </div>      
    )
  }
  else {
    rainCheck = (
      <div className={`${classes.RainCheck} ${todayColor}`}>
        <span>{rainyTime}시</span>
        부터
        <b> {todayWeather}</b>
      </div>        
    )
  }
  return (
    <>  
    {/* 안 감싸면 혼자서는 존재할 수 없음 */}
    {rainCheck}
    </>
  )
}
