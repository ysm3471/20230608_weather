import React from 'react';
import BgControl from './BgControl/BgControl';
import LocalEdit from './LocalEdit/LocalEdit';
import RainCheck from './RainCheck/RainCheck';
import DevControl from './DevControl/DevControl';
import classes from './Main.module.css';

export default function Main() {
  return (
    <main className={classes.main}>
      <LocalEdit/>
      <BgControl/>
      <RainCheck/>
      <DevControl/>
    </main>
  )
}
