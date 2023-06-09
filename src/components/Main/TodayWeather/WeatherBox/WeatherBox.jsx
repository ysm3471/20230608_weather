import React, { useContext } from 'react';
import classes from './WeatherBox.module.css'
import Icon from '../../Icon';
import { WeatherContext } from '../../../Store/WeatherProvider';

export default function WeatherBox({ time,date }) {
  const { info,howPer } = useContext(WeatherContext);
  let weather = "normal";
  let num = 1;

  let tmpTime = time;

  if (tmpTime < 10) {
    tmpTime = "0" + tmpTime + "00"
  }
  else {
    tmpTime = tmpTime + "00"
  }


  let tmp = info[num].find((aa) => {
    return aa.category === "TMP" && aa.fcstTime === tmpTime && aa.fcstDate === date
  })
  let rainPer = info[num].find((aa) => {
    return aa.category === "POP" && aa.fcstTime === tmpTime && aa.fcstDate === date
  })
  if (!(tmp)) {    // 1페이지에 없으면(내일 새벽 2시 이후의 시간이면) 다음 페이지에서 찾음
    num++;
    tmp = info[num].find((aa) => {
      return aa.category === "TMP" && aa.fcstTime === tmpTime && aa.fcstDate === date
    })
    rainPer = info[num].find((aa) => {
      return aa.category === "POP" && aa.fcstTime === tmpTime && aa.fcstDate === date
    })
  }

  if(rainPer.fcstValue >= Number(howPer)) {
    const how = info[num].find((aa) => {
      return  rainPer.fcstTime === aa.fcstTime && aa.category === "PTY" && aa.fcstDate === date
    })
    if (how.fcstValue === "3") weather = "snow"
    else weather = "rainy"
  }




  return (
    <div className={classes.WeatherBox}>
      <h3>{time === 0 ? 24 : time}시</h3>
      <Icon weather={weather} />
      <p className={classes.temp}>{tmp.fcstValue}°</p>
      <p className={Number(rainPer.fcstValue) >= Number(howPer) ? classes.rainPer : classes.noRain}>{rainPer.fcstValue}%</p>
    </div>
  )
}
