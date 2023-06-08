import React, { createContext, useState, useEffect, useRef } from 'react';
import DateInfo from './DateInfo';
import GetInfo from './GetInfo';

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  let today = new Date();
  const todayDate = DateInfo(today);

  let changeDate = useRef(new Date());
  let changeDate2 = useRef(new Date());
  let changeDate3 = useRef(new Date());
  let date = useRef(DateInfo(changeDate.current));
  let date2 = useRef(DateInfo(changeDate.current));
  let date3 = useRef(DateInfo(changeDate.current));

  const [info, setInfo] = useState(null);
  const [state, setState] = useState(null);
  const [on, setOn] = useState(true);
  const [on2, setOn2] = useState(true);
  const [on3, setOn3] = useState(false);
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [TMN, setTMN] = useState({});
  const [TMX, setTMX] = useState({});
  const [rain, setRain] = useState({});
  const [indexPage, setIndexPage] = useState(1);
  const [indexPage2, setIndexPage2] = useState(1);
  const [indexPage3, setIndexPage3] = useState(1);


  useEffect(() => {
    GetInfo(todayDate, 1)
      .then(res => {
        setInfo(res.response.body);
        setState(res.response.header);
      }
      )
  }, [])
    useEffect(() => {
      setOn(false);
      GetInfo(todayDate, indexPage)
        .then((res) => {
          const item = res.response.body.items.item
          const result = item.find((aa) => { return aa.fcstDate === date.current && aa.category === "TMN" })
          
          if (result) {
            setTMN({ ...TMN, [num]: result.fcstValue })
            if (num < 2) {
              changeDate.current = new Date(changeDate.current.setDate(changeDate.current.getDate() + 1));
              date.current = DateInfo(changeDate.current);
              setNum(num => num + 1)
            }
            else {
              setOn(true);
            }
          }
          else {
            setIndexPage(num => num + 1)
          }
        })
    }, [indexPage, num])
    useEffect(() => {
      setOn2(false);
      GetInfo(todayDate, indexPage2)
        .then((res) => {
          const item = res.response.body.items.item
          const result = item.find((aa) => { return aa.fcstDate === date2.current && aa.category === "TMX" })
  
          if (result) {
            setTMX({ ...TMX, [num2]: result.fcstValue })
            if (num2 < 2) {
              changeDate2.current = new Date(changeDate2.current.setDate(changeDate2.current.getDate() + 1));
              date2.current = DateInfo(changeDate2.current);
              setNum2(num => num + 1)
            }
            else {
              setOn2(true);
            }
          }
          else {
            setIndexPage2(num => num + 1)
          }
        })
    }, [indexPage2, num2])
  useEffect(() => {
    setOn3(false);
    GetInfo(todayDate, indexPage3)
      .then((res) => {
        const item = res.response.body.items.item
        const rainArr = item.filter((aa) => {
          return aa.fcstDate === date3.current && aa.category === "POP"
        })
        setRain({ ...rain, [num3]: rainArr })
        if (num3 < 3) {
          if (rainArr[rainArr.length - 1].fcstTime === "2300") {
            changeDate3.current = new Date(changeDate3.current.setDate(changeDate3.current.getDate() + 1));
            date3.current = DateInfo(changeDate3.current);
            setNum3(num => num + 1);
          }
          else {
            setIndexPage3(num => num + 1);
          }
        }
        else {
          setOn3(true);
        }
      })
  }, [indexPage3, num3])

  const [bgToggle, setbgToggle] = useState(true);
  const [settingToggle, setSettingToggle] = useState(false);
  const [weather, setWeather] = useState("normal");

  function bgToggleBtn() {
    setbgToggle((show) => !show)
  }
  function settingToggleBtn() {
    setSettingToggle((show) => !show)
  }
  function changeWeather(item) {
    setWeather(item);
  }

  return (
    <>
      {on3 && on2 && on && <WeatherContext.Provider value={{ weather, changeWeather, bgToggle, bgToggleBtn, settingToggle, settingToggleBtn, info, state, TMN, TMX, rain,todayDate }}>
        {children}
      </WeatherContext.Provider>}
    </>
  )
}
