import React,{useContext, useEffect, useState} from 'react';
import Modal from '../Modal/Modal';
import classes from './AppSetting.module.css';
import Main from './Main/Main';
import Header from './Header/Header';
import { WeatherContext } from '../Store/WeatherProvider';

export default function AppSetting() {
  const {settingToggle,bgToggle} = useContext(WeatherContext);
  const checked = document.querySelector('.MuiButtonBase-root');

  if (settingToggle) {
    if(bgToggle) {
      checked.classList.add('Mui-checked')
    }
    else {
      checked.classList.remove('Mui-checked')
    }
  }


  
  return (
    <Modal>
      <div className={classes.AppSetting} style={settingToggle ? {display:"block"} : {display:"none"}}>
        <Header/>
        <Main/>
      </div>
    </Modal>
  )
}
