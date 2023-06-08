import React from 'react';
import classes from './TodayWeather.module.css'
import WeatherBox from './WeatherBox/WeatherBox';
import More from './More/More';
import Slider from './WeatherBox/Slider';

export default function TodayWeather() {
  let arr = ["지금"]
  for(let i=10;i<16;i++) {
    arr.push(i+"시");
  }
  const weatherBoxes = arr.map((aa) => {
    return <WeatherBox time={aa}/>
  })
  return (
    <div className={classes.TodayWeather}>
      <div className={classes.BoxWraped}>
        <Slider/>
      </div>
      <More/>
    </div>
  )
}
