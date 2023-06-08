import React from 'react';
import classes from './More.module.css';

export default function More() {
  const url = "https://www.naver.com"

  return (
    <div className={classes.More}><button onClick={()=>{window.open(url)}}>더보기</button></div>
  )
}
