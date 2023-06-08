import React from 'react';
import classes from './Footer.module.css'
import { useContext } from 'react';
import { WeatherContext } from '../Store/WeatherProvider';

export default function Footer() {
  const {settingToggleBtn} = useContext(WeatherContext);

  return (
    <footer className={classes.Footer}>
      <div className={`icon ${classes.icon}`} onClick={settingToggleBtn}>
        <img src="img/setting_b.png" alt="" />
      </div>
    </footer>
  )
}
