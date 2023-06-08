import React, { useContext } from 'react';
import Title from '../UI/Title';
import classes from './DevControl.module.css'
import { WeatherContext } from '../../../Store/WeatherProvider';

export default function DevControl() {
  const {weather,changeWeather} = useContext(WeatherContext)

  return (
    <div> 
      <Title title={"개발자 설정"}/>
      <div className={classes.DevControl}>
        <p>표시할 상태</p>
        <select defaultValue={weather} onChange={(e) => {changeWeather(e.target.value)}}>
          <option value="normal">맑음</option>
          <option value="rainy">비</option>
          <option value="snow">눈</option>
        </select>
      </div>
    </div>
  )
}
