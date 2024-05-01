import React from "react";
import {useState, useEffect} from "react";
import '../component-styles/home.css'
import axios from "axios";
import Spinner from "./spinner";

function CardHome() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c";
 
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: { }
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

  return (
    <>
    <div className="my-20">
        <h1 className="text-3xl font-semibold text-center underline decoration-double">Grab More Here</h1>
    </div>    
    {isLoading && <Spinner/>}
    <div className="flex flex-row flex-wrap gap-10 justify-center">
    {data.map((dataObj, index)=>{
        return(
            <div className="w-45 bg-white" key={index} id={index}>
      <a
        href={dataObj.url}
        class="flex flex-col items-center h-[300px] w-[600px] bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
      >
        <img
          class="w-full h-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={dataObj.urlToImage}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {dataObj.title}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {dataObj.description}
          </p>
        </div>
      </a>
    </div>
        )
    })}
    </div>
    </>
    
  );
}

export default CardHome;
