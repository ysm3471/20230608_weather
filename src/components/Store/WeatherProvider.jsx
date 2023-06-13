import React, { createContext, useState, useEffect, useRef } from 'react';
import DateInfo from './DateInfo';
import GetInfo from './GetInfo';
import Loading from './Loading';
import LocationConverter from './LocationConverter';

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  let today = new Date();
  const todayDate = DateInfo(today);

  const [info, setInfo] = useState({});
  const [state, setState] = useState({});
  const [on, setOn] = useState(false);
  const [ready, getReady] = useState(false);
  const [number, setNumber] = useState(1);
  const [howPer, setHowPer] = useState(50);


  useEffect(() => {
    setOn(false)
    GetInfo(todayDate, number,convertLoaction.x,convertLoaction.y)
      .then(res => {
        if (number < 4) {
          setInfo({ ...info, [number]: res.response.body.items.item });
          setState({ ...info, [number]: res.response.header });
          setNumber(num => num + 1)
        }
        else {
          setOn(true);
        }
      })
  }, [number])

  let changeDate = useRef(new Date());
  let date = useRef(DateInfo(changeDate.current));
  const [num, setNum] = useState(1);
  const [page, setPage] = useState(1);
  const [TMN, setTMN] = useState({});
  const [TMX, setTMX] = useState({});
  const [rain, setRain] = useState({});

  let rainList = useRef([]);


  useEffect(() => {
    getReady(false)
    if (on) {
      let TMNres = info[page].find((aa) => { return aa.fcstDate === date.current && aa.category === "TMN" })
      let TMXres = info[page].find((aa) => { return aa.fcstDate === date.current && aa.category === "TMX" })
      let rainres = info[page].filter((aa) => { return aa.fcstDate === date.current && aa.category === "POP" })

      if (rainres[rainres.length - 1].fcstTime === "2300") {    // 찾은 결과의 마지막요소가 fcstTime이 23시일경우
        for (let key in rainres) {    // 임시 저장소에 병합 후 저장함
          rainList.current.push(rainres[key])
        }
        setRain({ ...rain, [num]: rainList.current })
        rainList.current = [];    // 임시 저장소 초기화
      }
      else {    // 23시가 아닐경우
        for (let key in rainres) {
          rainList.current.push(rainres[key])   // 임시저장소에 저장함
        }
      }


      switch (false) {
        case (!(TMXres) || !(TMNres)):       // 왜인지는 모르겠는데 그냥 배열을 괄호 안에 넣으면 true로 인식하지 않음. 그래서 !연산자를 사용해 불리언 값으로 만든 다음에 스위치문을 돌림
          setTMN({ ...TMN, [num]: TMNres.fcstValue })
          setTMX({ ...TMX, [num]: TMXres.fcstValue })
          if (num < 3) {
            changeDate.current = new Date(changeDate.current.setDate(changeDate.current.getDate() + 1));
            date.current = DateInfo(changeDate.current);
            setNum(num => num + 1)
          }
          else {
            getReady(true)
          }
          break;
        case (!(TMNres)):
          setTMN({ ...TMN, [num]: TMNres.fcstValue });
          setPage(num => num + 1);
          break;
        case (!(TMXres)):
          setTMN({ ...TMX, [num]: TMXres.fcstValue })
          setPage(num => num + 1)
          break;
        default:
          if (page < 3) {
            setPage(num => num + 1);
          }
          break;
      }
    }
  }, [num, page, on])



  const [bgToggle, setbgToggle] = useState(true);
  const [settingToggle, setSettingToggle] = useState(false);
  const [changeWeather, setChangeWeather] = useState("default");
  const [userAddress, setUserAddress] = useState(false);    // 유저의 주소
  const [userLocation, setUserLoaction] = useState(null);   // 유저의 좌표값
  const [convertLoaction,setConvertLocation] = useState({
    x:60,
    y:127
  });    // 유저의 변환된 좌표값

  useEffect(() => {
    if (userLocation) {
      const loaction = LocationConverter("toXY", userLocation.Ma, userLocation.La)
      setConvertLocation(loaction);
    }
  }, [userLocation])  

  function bgToggleBtn() {
    setbgToggle((show) => !show)
  }
  function settingToggleBtn() {
    setSettingToggle((show) => !show)
  }
  function refreshBtn() {
    setNumber(1);
  }

  return (
    <>
      {!(ready) && <Loading />}
      {ready && <WeatherContext.Provider
        value={{
          changeWeather,
          setChangeWeather,
          bgToggle,
          bgToggleBtn,
          settingToggle,
          settingToggleBtn,
          setInfo,
          info,
          state,
          TMN,
          TMX,
          rain,
          setRain,
          todayDate,
          howPer,
          setHowPer,
          refreshBtn,
          userAddress,
          setUserAddress,
          userLocation,
          setUserLoaction,
          convertLoaction
        }}>
        {children}
      </WeatherContext.Provider>}
    </>
  )
}
