import React from 'react'
import { useState, useEffect } from "react";
import '../component-styles/home.css'
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Spinner from './spinner';

function One() {

  let [news, setNews] = useState([])
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/nni/add-news',
      headers: {},
      data: data
    };

    axios.request(config)
      .then((response) => {
        setNews(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])


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
    <div className='flex gap-2 justify-center items-center min-[769px]:mx-44 max-[769px]:mx-2'>
      <div className='flex w-1/2 gap-2 mb-4 max-[769px]:hidden  '>
      <div className='w-1/2 h-[456px] rounded-xl '>
        {/* {news.map((newsObj,index)=>{
          return( */}
            <div className='relative'>
              <div className=' '>
              <img className='h-[456px] w-[40vh] rounded-xl' src="./images/car4.png" alt="" />
              </div>
              <div className='p-4 rounded-xl absolute bg-[rgba(255,255,255,0.75)] border-[2px]  w-[80%] right-[45px] bottom-5 flex flex-col gap-3'>
              <h1 className='line-clamp-1 text-xl font-semibold'>efef</h1>
              <p className='line-clamp-2'>fefe</p>
              </div>
            </div>
          {/* )
        })} */}
      </div>
      <div className='w-1/2  h-[456px] rounded-xl'>
        {/* {news.map((newsObj,index)=>{
          return( */}
            <div className='relative'>
              <div className=' '>
              <img className='h-[456px] w-[40vh] rounded-xl' src="./images/music-girl.jpg" alt="" />
              </div>
              <div className='p-4 rounded-xl absolute bg-[rgba(255,255,255,0.75)] border-[2px] w-[80%] right-[45px] bottom-5 flex flex-col gap-3'>
              <h1 className='line-clamp-1 text-xl font-semibold'>fg</h1>
              <p className='line-clamp-2'>fgd</p>
              </div>
            </div>
          {/* )
        })} */}
      </div>
      </div>
     
      {isLoading && <Spinner />}
      <div className="min-[769px]:w-1/2 mb-10 mt-5 ">
        <div className="">
          <Slider  {...settings}>
            {data.map((dataObj, index) => {
              return (
                <div className="w-[50%] h-full bg-white text-black rounded-xl">
                  <div className="rounded-xl h-[50vh] flex justify-center items-end bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${dataObj.urlToImage})` }}>
                    {/* <img className="h-[500px] w-full" src={dataObj.urlToImage} alt="image"/> */}
                    <div className="flex flex-col bg-[rgba(255,255,255,0.75)] gap-4  w-[95%] p-5 rounded-xl mb-6">
                      <a href={dataObj.url}><p className="line-clamp-1 text-xl font-semibold">{dataObj.title}</p></a>
                      <p className='line-clamp-2'>{dataObj.description}</p>

                    </div>
                  </div>

                </div>

              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default One
