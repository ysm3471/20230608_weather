import React, { useContext, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import classes from './ForecastList.module.css'
import { WeatherContext } from '../../Store/WeatherProvider';

export default function ForecastList({ date, TMN, TMX, rain }) {
  const { howPer, info,rain:rainy } = useContext(WeatherContext);
  const [page, setPage] = useState(1);

  const dayRain = rain.filter((aa) => {
    return Number(aa.fcstTime) < 1800
  })
  const nightRain = rain.filter((aa) => {
    return Number(aa.fcstTime) > 1800
  })

  const day = dayRain.find((aa) => aa.fcstValue >= howPer)
  const night = nightRain.find((aa) => aa.fcstValue >= howPer)
  let dayWeather = useRef('normal')
  let nightWeather = useRef('normal')

  

  useEffect(() => {
    if (day) {
      let dayHow = info[page].find((aa) => aa.fcstTime === day.fcstTime & aa.category === "PTY");
      if (!dayHow) setPage(num => num + 1)        

      if(dayHow && dayHow.fcstValue === "3") dayWeather.current = 'snow'
      else dayWeather.current = 'rainy'  
    }
    else dayWeather.current = 'normal'
  }, [page,rainy])

  useEffect(() => {
    if (night) {
      let nightHow = info[page].find((aa) => aa.fcstTime === night.fcstTime & aa.category === "PTY");
      if (!nightHow) setPage(num => num + 1)        

      if(nightHow && nightHow.fcstValue === "3") nightWeather.current = 'snow'
      else nightWeather.current = 'rainy'  
    }
    else nightWeather.current = 'normal'
  },[page,rainy])



  return (
    <li className={classes.ForecastList}>
      <div className={classes.date}>{date}</div>
      <div>낮<Icon weather={dayWeather.current} /></div>
      <div>밤<Icon weather={nightWeather.current} /></div>
      <p>{TMX}°/{TMN}°</p>
    </li>
  )
}
