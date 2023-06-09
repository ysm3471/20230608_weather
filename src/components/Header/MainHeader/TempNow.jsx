import React, { useContext } from 'react';
import classes from './TempNow.module.css';
import { WeatherContext } from '../../Store/WeatherProvider';

export default function TempNow() {
  const {info} = useContext(WeatherContext);

  const today = new Date();
  let now = today.getHours();

  if(now <10) {
    now = "0" + now + "00"
  }
  else {
    now = now + "00"
  }

  const tempNow = info[1].find((aa) => {
    return aa.category === "TMP" && aa.fcstTime === now
  })

  return (
    <div className={classes.TempNow}>
      <p>{tempNow.fcstValue}°</p>
    </div>
  )
}
