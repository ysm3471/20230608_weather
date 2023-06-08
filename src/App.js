import { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NextWeather from './components/Main/NextWeather/NextWeather';
import TodayWeather from './components/Main/TodayWeather/TodayWeather';
import AppSetting from './components/AppSetting/AppSetting';
import { WeatherContext } from './components/Store/WeatherProvider';
import DateInfo from './components/Store/DateInfo';


function App() {
  const { bgToggle, weather, info, state ,TMN,TMX,rain } = useContext(WeatherContext);

  let today = new Date();
  const todayDate = DateInfo(today);


  console.log(TMN, TMX, rain)


  let bgUrl = "img/normal.png";

  switch (weather) {
    case "noraml":
      bgUrl = "img/normal.png";
      break;
    case "rainy":
      bgUrl = "img/rainy.jpg";
      break;
    case "snow":
      bgUrl = "img/snow.jpg";
      break;
    default:
      break;
  }

  return (
    <>
      <AppSetting />
      <div className={'container'} style={bgToggle ? { backgroundImage: `url(${bgUrl})` } : undefined} >
        <Header TMN={TMN} />
        <main>
          <TodayWeather />
          <NextWeather />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
