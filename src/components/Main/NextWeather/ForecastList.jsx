import React from 'react';
import Icon from '../Icon';
import classes from './ForecastList.module.css'

export default function ForecastList({ date,TMN,TMX }) {
  return (
    <li className={classes.ForecastList}>
      <div className={classes.date}>{date}</div>
      <div>낮<Icon /></div>
      <div>밤<Icon /></div>
      <p>{/* {TMX}°/{TMN}° */}</p>
    </li>
  )
}
