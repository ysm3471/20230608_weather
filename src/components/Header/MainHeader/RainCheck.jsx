import React, { useContext } from 'react';
import classes from './RainCheck.module.css';
import { WeatherContext } from '../../Store/WeatherProvider';

export default function RainCheck({weather}) {
  const {bgToggle} = useContext(WeatherContext)
  let todayWeather;
  let todayColor;
  
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
        <span>지금</span>
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
