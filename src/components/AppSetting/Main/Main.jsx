import React from 'react';
import BgControl from './BgControl/BgControl';
import LocalEdit from './LocalEdit/LocalEdit';
import RainCheck from './RainCheck/RainCheck';
import DevControl from './DevControl/DevControl';
import classes from './Main.module.css';

export default function Main({mapToggleBtn,mapToggle,userEditing,editing}) {
  return (
    <main className={classes.main}>
      <LocalEdit mapToggle={mapToggle} mapToggleBtn={mapToggleBtn} editing={editing} userEditing={userEditing}/>
      <BgControl/>
      <RainCheck/>
      <DevControl/>
    </main>
  )
}
