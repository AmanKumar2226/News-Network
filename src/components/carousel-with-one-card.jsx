import React from 'react'
import {useState, useEffect} from "react";
import '../component-styles/home.css'
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Spinner from './spinner';

function One() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c";
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
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
        setData(response.data.articles);
        console.log(JSON.stringify(response.data));
        setIsLoading(false);  
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
        {isLoading && <Spinner/>}
      <div className="w-3/4 mb-10 mt-5 mx-auto">
          <div className="">
          <Slider {...settings}>
 {data.map((dataObj, index) => {
          return (
            <div className="h-full bg-white text-black rounded-xl">
              <div className="h-1/2 flex justify-center items-center">
                <img className="h-[500px] w-full" src={dataObj.urlToImage} alt="image"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-10">
                <p className="text-xl font-semibold">{dataObj.title}</p>
                <p>{dataObj.description}</p>
                <a href={dataObj.url} className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</a>
              </div>
            </div>

          )})}
          </Slider>
          </div>
          </div>
    </div>
  )
}

export default One
