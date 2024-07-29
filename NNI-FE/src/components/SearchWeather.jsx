import React, { useEffect, useState } from "react";
import { useTheme } from "../utils/ThemeContext";
import axios from "axios";
import Spinner from "./spinner";
import {useDate} from '../utils/useDate'

function SearchWeather() {
  const { theme } = useTheme();
  // const [location, setLocation] = useState({});
  // const [condition, setCondition] = useState({});
  // const [current, setCurrent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // const [inputLocation, setInputLocation] = useState("SundarNagar");

  // const fetchWeather = (location) => {
  //   const config = { 
  //     method: "get",
  //     maxBodyLength: Infinity,
  //     url: `http://api.weatherapi.com/v1/current.json?key=4b61e802d0324d04a21123435240305&q=${location}&aqi=no`,
  //   };

  //   axios
  //     .request(config)
  //     .then((response) => {
  //       setLocation(response.data.location);
  //       setCurrent(response.data.current);
  //       setCondition(response.data.current.condition);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setIsLoading(false);
  //       alert(error)
  //     });
  // };

  // useEffect(() => {
  //   fetchWeather(inputLocation);
  // }, []);



 
  const { time } = useDate()
  const [input, setInput] = useState('')
  const [weather, setWeather] = useState({})
  const [values, setValues] = useState([])
  const [place, setPlace] = useState('SundarNagar')
  const [thisLocation, setLocation] = useState('')

  // fetch api
  const fetchWeather = async () => {
      const options = {
          method: 'GET',
          url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
          params: {
              aggregateHours: '24',
              location: place,
              contentType: 'json',
              unitGroup: 'metric',
              shortColumnNames: 0,
          },
          headers: {
              'X-RapidAPI-Key': 'b6cd7db2c9msh810aaeb18837572p19c15fjsn0be8168c3df6',
              'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
          }
      }

      try {
          const response = await axios.request(options);
          console.log(response.data)
          const thisData = Object.values(response.data.locations)[0]
          setLocation(thisData.address)
          setValues(thisData.values)
          setWeather(thisData.values[0])
          setIsLoading(false)
      } catch (e) {
          console.error(e);
          // if the api throws error.
         
      }
  }

  useEffect(() => {
      fetchWeather()
  }, [place])

  useEffect(() => {
      console.log(values)
  }, [values])

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setIsLoading(true);
    setPlace(input)
    setInput('')
  };

  return (
    <>
        {isLoading ? <Spinner />
        : 
        
     
      <section className="bg-[#E9E9E9] dark:bg-[#2A2C38] dark:text-white overflow-x-hidden">
        <div className="xl:mx-44 xl:p-0 p-5 xl:py-10 py-10 w-full flex xl:flex-row flex-col xl:gap-0 gap-5">
          {/* Left Card */}
          <div className="bg-[#FAFAFA] dark:bg-[#1f1f1f] xl:w-[55%] w-full rounded-3xl xl:rounded-s-3xl py-10">
            <div className="font-semibold text-[24px] flex items-center justify-around">
              <h1>{thisLocation}</h1>
              <h1>{time}</h1>
            </div>

            <div className="flex items-center justify-center mt-14">
              <h1 className="font-medium xl:text-[250px] text-[84px] overflow-hidden text-[#696969] dark:text-white text-center leading-none">
                {weather.temp}&#176;
              </h1>
              <div className="xl:mt-14 flex flex-col gap-2">
                <div className="flex items-center justify-center gap-4">
                  <img
                    className="xl:w-7 xl:h-7 w-4 h-3 ml-2"
                    src={theme === "light" ? "/images/windicon.png" : "/images/whitewindicon.png"}
                    alt="Wind Icon"
                  />
                  <h1 className="xl:text-[24px] text-[18px] font-bold text-[#808080] dark:text-white">
                  {weather.wspd} mph
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <img className="xl:w-7 xl:h-7 w-3 h-3" src={theme === "light" ? "/images/watericon.png" : "/images/whitedrop.png"} alt="Water Icon" />
                  <h1 className="xl:text-[24px] text-[18px] font-bold text-[#808080] dark:text-white">{weather.humidity} %</h1>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-[54px] text-center text-[#808080] dark:text-white">{weather.conditions}</h1>
            </div>

            <div className="flex text-[#808080] flex-wrap items-center xl:justify-evenly justify-center  xl:mt-14 mt-5 dark:text-white">
            {
            values?.slice(1, 7).map(curr => { 
              return (
                <div key={curr.datetime} className="xl:w-[10%] w-[15%] p-2 text-center">
                  <h1 className="font-semibold xl:text-[18px] text-[12px]">{new Date(curr.datetime).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}</h1>
                  <h1 className="font-bold xl:text-[24px] text-[20px]">{curr.temp}&#176;</h1>
                  <h1 className="xl:text-[18px] text-[12px]">{curr.conditions}</h1>
                </div>
            )})}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#F6F6F6] dark:bg-[#1f1f1f90] xl:w-[25%] w-full rounded-3xl xl:rounded-e-3xl p-8">
            <div className="flex">
              <input
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  // sumit the form
                  handleSubmit()
                }
              }}
                type="text"
                placeholder="search"
                onChange={handleChange}
                value={input}
                name="input"
                className="rounded-s-xl h-10 w-[90%] text-[20px] p-2 dark:bg-[#1f1f1f]"
              />
              <button onClick={handleSubmit} className="rounded-e-xl bg-[#808090] dark:bg-[#1f1f1f] flex items-center justify-center w-[10%]">
                <img src="/images/search-white.png" alt="Search Icon" />
              </button>
            </div>
            <div className="mt-5">
              <h1 className="text-center text-[34px] font-semibold">Last updated: {time}</h1>
            </div>
            <div className="flex items-center justify-center mt-10">
              <h1 className="font-medium text-[80px] overflow-hidden text-[#696969] dark:text-white text-center leading-none">
              {weather.temp}&#176;
              </h1>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-4">
                  <img
                    className="w-4 h-4 ml-2"
                    src={theme === "light" ? "/images/windicon.png" : "/images/whitewindicon.png"}
                    alt="Wind Icon"
                  />
                  <h1 className="text-[18px] font-bold text-[#808080] dark:text-white">
                  {weather.wspd} mph
                  </h1>
                </div>
                <div className="flex items-center justify-center gap-8">
                  <img className="w-4 h-4" src={theme === "light" ? "/images/watericon.png" : "/images/whitedrop.png"} alt="Water Icon" />
                  <h1 className="text-[18px] font-bold text-[#808080] dark:text-white">{weather.humidity} %</h1>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-center text-[18px] font-medium">Feels like {weather.temp}&#176;</h1>
            </div>
            <div>
              <h1 className="text-center text-[26px] font-medium text-[#808080] dark:text-white">{weather.conditions}</h1>
            </div>
            <div className="mt-5">
              <h1 className="text-center text-[#010101] font-bold text-[24px] dark:text-white">Hourly Forecast</h1>
            </div>
            <div className="flex text-[#808080] flex-wrap items-center justify-center mt-5 dark:text-white">
              {["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"].map((hour) => (
                <div key={hour} className="w-[30%] p-2 text-center">
                  <h1 className="font-semibold text-[18px]">{hour}</h1>
                  <h1 className="font-bold text-[24px]">20&#176;</h1>
                  <h1>Mist</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
}
    </>
  );
}

export default SearchWeather;
