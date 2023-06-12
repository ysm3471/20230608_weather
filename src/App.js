import { useContext} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NextWeather from './components/Main/NextWeather/NextWeather';
import TodayWeather from './components/Main/TodayWeather/TodayWeather';
import AppSetting from './components/AppSetting/AppSetting';
import { WeatherContext } from './components/Store/WeatherProvider';


function App() {
  const { bgToggle, info, state, TMN, TMX, rain ,howPer } = useContext(WeatherContext);

  const today = new Date();
  const now = today.getHours();

  let weather = "normal"
  const isRainy = rain[1].find((aa) => Number(aa.fcstValue) >= Number(howPer) && Number(aa.fcstTime) >= Number(now)*100)    // 금일 pop의 fcstvalue가 50이상일 경우

  if (isRainy) {   
    const how = info[1].find((aa) => aa.fcstTime === isRainy.fcstTime && aa.category === "PTY")
    if (how.fcstValue === "3") weather = "snow"
    else weather = "rainy"
  }

  let bgUrl = "img/normal.png";

  switch (weather) {
    case "normal":
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
        <Header TMN={TMN} weather={weather} isRainy={isRainy} />
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
