import React, { useContext } from 'react';
import classes from './WeatherBox.module.css'
import Icon from '../../Icon';
import { WeatherContext } from '../../../Store/WeatherProvider';

export default function WeatherBox({time}) {
  const {info} = useContext(WeatherContext)
  let tmpTime = time;

/*   if (tmpTime < 10) {
    tmpTime = "0" + tmpTime + "00"
  }
  else {
    tmpTime = tmpTime + "00"
  }

  const tmp = info.items.item.find((aa) => {
    return aa.category === "TMP" && aa.fcstTime === tmpTime
  })
  const rainPer = info.items.item.find((aa) => {
    return aa.category === "POP" && aa.fcstTime === tmpTime
  }) */
  return (
    <div className={classes.WeatherBox}>
      <h3>{time}시</h3>
      <Icon/>
{/*       <p className={classes.temp}>{tmp.fcstValue}°</p>
      <p className={rainPer === '60%' ? classes.rainPer : classes.noRain }>{rainPer.fcstValue}%</p> */}
    </div>
  )
}
