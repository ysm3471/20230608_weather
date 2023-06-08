import React from 'react';
import Title from '../UI/Title';
import classes from './RainCheck.module.css'

export default function RainCheck() {
  return (
    <div>
      <Title title={"강수표기 설정"}/>
      <div className={classes.RainCheck}>
        <label htmlFor="Rain_per"><p>표시할 강수확률</p></label>
        <div>
          <select id="">
            <option value="0%">0%</option>
            <option value="10%">10%</option>
            <option value="20%">20%</option>
            <option value="30%">30%</option>
            <option value="40%">40%</option>
            <option value="50%">50%</option>
            <option value="60%">60%</option>
            <option value="70%">70%</option>
            <option value="80%">80%</option>
            <option value="90%">90%</option>
            <option value="100%">100%</option>
          </select>
        </div>
      </div>
    </div>
  )
}
