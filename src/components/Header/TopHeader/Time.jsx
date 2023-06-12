import React, { useContext } from 'react';
import classes from './Time.module.css';
import { WeatherContext } from '../../Store/WeatherProvider';

export default function Time({weather}) {
  const {bgToggle,refreshBtn} = useContext(WeatherContext)
  let time;

  const today = new Date();
  let now = today.getHours();

  if (now < 10) now = "0" + now

  if (weather === 'snow' || !bgToggle) {
    time = (
      <div className={`${classes.Time} ${classes.snow}`}>
      <div className={`icon ${classes.icon}`}>
        <img src="img/refresh_b.png" alt="refresh_b" />
      </div>
      <p>기준 시간 {now}:00</p>
    </div>
    )
  }
  else {
    time = (
      <div className={classes.Time}>
      <div className={`icon ${classes.icon}`} onClick={refreshBtn}>
        <img src="img/refresh_w.png" alt="refresh_w" />
      </div>
      <p>기준 시간 {now}:00</p>
    </div>
    )
  }

  return (
    <>
    {time}
    </>
  )
}
