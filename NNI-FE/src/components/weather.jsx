import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./spinner";
import { getRandomGradient } from "../utils/Gradients";

function Weather({ url, image }) {
  const [location, setLocation] = useState({});
  const [current, setCurrent] = useState({});
  const [condition, setCondition] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: url,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setLocation(response.data.location);
        setCurrent(response.data.current);
        setCondition(response.data.current.condition);
        setIsLoading(false);
        setGradient(getRandomGradient());
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);
  return (
    <div className="dark:bg-[#2A2C38]">
      
      {isLoading && <Spinner />}

      <div className="w-[360px] relative flex flex-col justify-between h-[245px] overflow-hidden bg-no-repeat bg-cover rounded-xl p-5"
      style={{
        backgroundImage: `${image}`
      }}>
        <div className={`absolute inset-0 w-full h-full opacity-75  ${gradient}`}></div>
        <div className="flex justify-between w-[90%] absolute">
        <div  className="text-white">
          <p>Precipitation: {current.precip_in}%</p>
          <p>Humidity: {current.humidity}%</p>
          <p>Wind: {current.wind_kph}km/H</p>
        </div>
        <div className="text-white flex flex-col text-right">
          <p className="text-xl font-semibold ">{location.name}</p>
          <p>{location.localtime}</p>
          <p className="text-white mb-2">{condition.text}</p>
        </div>
        </div>
        <div className="flex items-center  justify-center absolute bottom-5 right-20">
          <img className="h-[80px] w-[80px]" src={condition.icon} alt="" />
          <p className="text-5xl text-white">{current.temp_c}<span className="text-sm align-top">°C</span></p>
        </div>
        <div>
          
        </div>
        
      </div>

      {/* <div className="flex justify-center my-10">
        <div className="min-w-sm max-w-sm border border-gray-100  transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
          <h2 className="text-md mb-2 px-4 pt-4">
            <div className="flex justify-between">
              <div className="badge relative top-0">
                <span className="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">
                  {location.name}
                </span>
              </div>
              <span className="text-lg font-bold ">{location.localtime}</span>
            </div>
          </h2>

          <div className="flex items-center p-4">
            <div className="flex justify-center items-center w-96">
              <img
                src={condition.icon}
                alt=""
                style={{ height: "200px", width: "200px" }}
              />
            </div>
          </div>
          <div className="text-md pt-4 pb-4 px-4">
            <div className="flex justify-between items-center">
              <div className="space-y-2">
                <span className="flex space-x-2 items-center">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 32 32"
                    className="fill-current"
                  >
                    <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path>
                    <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path>
                  </svg>{" "}
                  <span>{current.wind_kph}km/h</span>
                </span>
                <span className="flex space-x-2 items-center">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 32 32"
                    className="fill-current"
                  >
                    <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path>
                    <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path>
                  </svg>{" "}
                  <span>{current.feelslike_c}%</span>
                </span>
              </div>
              <div>
                <h1 className="text-6xl"> {current.temp_c}° </h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Weather;
