import React, { useContext, useEffect, useState } from 'react';
import Icon from '../Icon';
import classes from './ForecastList.module.css'
import { WeatherContext } from '../../Store/WeatherProvider';

export default function ForecastList({ date,TMN,TMX }) {
  const {rain,howPer} = useContext(WeatherContext);
  const [num,setNum] = useState(1);
  const [rainCheck,setRainCheck] = useState({});
  const [rainChecks,setRainChecks] = useState({});

  useEffect(() => {
    const dayRain = rain[num].filter((aa) => {
      return Number(aa.fcstTime) < 1800 
    })    
    const nightRain = rain[num].filter((aa) => {
      return Number(aa.fcstTime) > 1800 
    })    
    setRainCheck({...rainCheck,dayRain,nightRain})
    setRainChecks({...rainChecks,[num]:rainCheck})
    
    if(num<3) setNum(num => num + 1)
  },[num])


  console.log(rainChecks)




  return (
    <li className={classes.ForecastList}>
      <div className={classes.date}>{date}</div>
      <div>낮<Icon /></div>
      <div>밤<Icon /></div>
      <p>{TMX}°/{TMN}°</p>
    </li>
  )
}
