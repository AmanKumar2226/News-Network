import React, { useState, useEffect } from "react";
import '../component-styles/home.css'
import axios from "axios";
import Spinner from "./spinner";
import { Link } from "react-router-dom";
import { useTheme } from '../utils/ThemeContext';
function CardHome() {
  const url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c";
  const {theme} = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setData(response.data.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  const displayedData = showAll ? data : data.slice(0, 4);

  return (
    <>
      <section className="my-10  min-[769px]:mx-20 dark:bg-[#2A2C38] max-[769px]:hidden">
        <div className="mb-10 flex gap-2 items-center min-[769px]:mx-24 justify-between">
          <div className="flex gap-2 items-center mt-6">
          <img src="./images/red-icon.png" className="py-2" alt="" />
          <h1 className="text-2xl font-semibold">Grab More Here</h1>
          </div>
          
          <div className="flex justify-center mt-5">
          <button onClick={handleToggleShow} className="flex items-center gap-2 px-4 py-2 bg-[#F5F5F5] dark:bg-[#1F1F1F] dark:text-white text-[#3E3232BF] rounded-2xl">
          {showAll ? (
              <>
                Show Less <img src={theme === "light" ? "./images/forward-chevron.png": "./images/forward-chevron-white.svg"} alt="" className="-rotate-90"/>
              </>
            ) : (
              <>
                Show All <img src={theme === "light" ? "./images/forward-chevron.png": "./images/forward-chevron-white.svg"} alt="" className="rotate-90" /> 
              </>
            )}

            
          </button>
        </div>
        </div>
        {isLoading && <Spinner />}
        <div className="flex flex-wrap gap-5 justify-center">
          {displayedData.map((dataObj, index) => {
            return (
              <div className="w-[744px] bg-white hover:bg-gray-100 border dark:bg-[#1F1F1F] dark:text-[white] dark:border-none border-gray-200 shadow rounded-lg flex" key={index} id={index}>
                <div className="w-[40%] flex items-center pl-2">
                  <Link to={dataObj.url} target="_blank" className="flex h-[209px] bg-white md:flex-row md:max-w-xl ">
                    <img
                      className="rounded-xl md:h-auto md:w-48 md:rounded-none md:rounded-s-lg object-cover"
                      src={dataObj.urlToImage}
                      alt=""
                      style={{ width: '100%' }}
                    />
                  </Link>
                </div>
                <div className="flex flex-col p-4 w-[60%] leading-normal">
                  <div>
                    <h5 className="text-lg font-semibold line-clamp-1 tracking-tight dark:text-white text-gray-900">
                      {dataObj.title}
                    </h5>
                    <p className={`mb-3 line-clamp-3 font-normal text-gray-700 dark:text-white ${dataObj.description== null ? 'mt-20': "mt-2"}`}>
                      {dataObj.description}
                    </p>
                  </div>
                  <div className="flex justify-between rounded-xl bg-[#F5F5F5] dark:bg-[rgba(42,44,56,0.75)] items-center p-4 h-[80px]">
                    <div>
                      <h1 className="font-semibold">{dataObj.author}</h1>
                      <p>{dataObj.publishedAt}</p>
                    </div>
                    <div>
                    <img src={theme === "light" ? "./images/save-icon.png" : "./images/save-dark.png"} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </section>
    </>
  );
}

export default CardHome;
