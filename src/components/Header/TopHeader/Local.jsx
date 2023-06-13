import React, { useContext, useEffect, useRef } from 'react';
import classes from './Local.module.css';
import { WeatherContext } from '../../Store/WeatherProvider';

export default function Local({weather}) {
  const {bgToggle,userAddress,settingToggleBtn} = useContext(WeatherContext)
  let localName = useRef("서울특별시, 중구")
  
  useEffect (() => {
    if(userAddress) {
      localName.current = userAddress.replace(/[0-9]/g,"")    // 숫자 제거
      localName.current = localName.current.replace(/-/g,"")    // 문자열 제거      
    }
  },[userAddress])
  let local;

  

  if (weather === 'snow' || !bgToggle) {
    local = (
      <div className={`${classes.Local} ${classes.snow}`}>
      <div className={`icon ${classes.gps}`}>
        <img src="img/gps_b.png" alt="gps_b" />
      </div>
      <p>{localName.current}</p>
      <div className={`icon ${classes.edit}`} onClick={settingToggleBtn}>
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
      <p>{localName.current}</p>
      <div className={`icon ${classes.edit}`} onClick={settingToggleBtn}>
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
