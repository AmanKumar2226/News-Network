import React from 'react'
import {useState, useEffect} from "react";
import '../component-styles/home.css'
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Spinner from './spinner';

function One() {
    const url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c";
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
      <div className="w-1/2 mb-10 mt-5 mx-auto">
          <div className="">
          <Slider {...settings}>
 {data.map((dataObj, index) => {
          return (
            <div className="w-[50%] h-full bg-white text-black rounded-xl">
              <div className="h-[50vh] flex justify-center items-end bg-no-repeat bg-contain bg-center" style={{backgroundImage: `url(${dataObj.urlToImage})`}}>
                {/* <img className="h-[500px] w-full" src={dataObj.urlToImage} alt="image"/> */}
                <div className="flex flex-col bg-[rgba(255,255,255,0.75)] gap-4  w-[58%] p-5 rounded-xl mb-3">
                <p className="line-clamp-1 text-xl font-semibold">{dataObj.title}</p>
                <p className='line-clamp-2'>{dataObj.description}</p>
                
              </div>
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
