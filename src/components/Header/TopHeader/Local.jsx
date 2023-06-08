import React, { useContext } from 'react';
import classes from './Local.module.css';
import { WeatherContext } from '../../Store/WeatherProvider';

export default function Local() {
  const {weather,bgToggle} = useContext(WeatherContext)
  let local;

  if (weather === 'snow' || !bgToggle) {
    local = (
      <div className={`${classes.Local} ${classes.snow}`}>
      <div className={`icon ${classes.gps}`}>
        <img src="img/gps_b.png" alt="gps_b" />
      </div>
      <p>서울특별시,강남구</p>
      <div className={`icon ${classes.edit}`}>
        <img src="img/edit_b.png" alt="edit_b" />
      </div>
    </div>
    )
  }
  else {
    local = (
      <div className={classes.Local}>
      <div className={`icon ${classes.gps}`}>
        <img src="img/gps_w.png" alt="gps_w" />
      </div>
      <p>서울특별시,강남구</p>
      <div className={`icon ${classes.edit}`}>
        <img src="img/edit_w.png" alt="edit_w" />
      </div>
    </div>
    )
  }

  return (
    <>
    {local}
    </>
  )
}
