import React from 'react';
import { useState, useEffect } from "react";
import '../component-styles/home.css';
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from './spinner';
import { KEY } from '../Config/config';

function One() {
  let [news, setNews] = useState([]);
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/nni/get-news',
      headers: {},
    };

    axios.request(config)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(news);

  const url =`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${KEY}`;
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
          initialSlide: 1,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  };

  const isCompleteUrl = (url) => {
    const regex = /^(http|https):\/\//;
    return regex.test(url);
  };

  const sanitizeUrl = (url) => {
    const cleanedUrl = url.replace(/[^\w-./:]/g, '');
    if (cleanedUrl.includes('uploads') && !cleanedUrl.includes('uploads/')) {
      return cleanedUrl.replace('uploads', 'uploads/');
    }
    return cleanedUrl;
  };

  return (
    <div className='flex gap-10 justify-center items-center min-[769px]:mx-44 max-[769px]:mx-2'>
      <div className='flex w-1/2 gap-2 mb-4 max-[769px]:hidden'>
        <div className='h-[456px] rounded-xl flex gap-5 justify-center items-center w-full'>
          {news.slice(-2).map((newsObj, index) => {
            const imageUrl = newsObj.image
              ? isCompleteUrl(newsObj.image)
                ? sanitizeUrl(newsObj.image)
                : `http://localhost:8080/${sanitizeUrl(newsObj.image)}`
              : '';
            return (
              <a href={`/news-description/${newsObj._id}`} target="_blank" className='w-1/2'>
                <div className='relative rounded-xl ' key={index} >
                <img className='h-[50vh] rounded-xl object-cover' src={imageUrl} alt="" />
                  <div className='p-4 rounded-xl absolute bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(42,44,56,0.75)] dark:border-none border-[2px] w-[80%] right-[45px] bottom-5 flex flex-col gap-3'>
                    <h1 className='line-clamp-1 text-xl font-semibold'>{newsObj.title}</h1>
                    <p className='line-clamp-2'>{newsObj.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {isLoading && <Spinner />}
      <div className="min-[769px]:w-1/2 mb-10 mt-5">
        <div>
          <Slider {...settings}>
            {data.map((dataObj, index) => (
              <div className="w-[50%] h-full bg-white dark:bg-[#2A2C38] dark:text-white text-black rounded-xl" key={index}>
                {dataObj.urlToImage ? (
                  <div className="rounded-xl h-[50vh] flex justify-center items-end bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${dataObj.urlToImage})` }}>
                    <div className="flex flex-col bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(42,44,56,0.75)] dark:border-none gap-4 w-[95%] p-5 rounded-xl mb-6">
                      <a href={dataObj.url} target='_blank'>
                        <p className="line-clamp-1 text-xl font-semibold">{dataObj.title}</p>
                      </a>
                      <p className='line-clamp-2'>{dataObj.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl h-[50vh] flex justify-center items-end bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(/images/logo-new.png)`, backgroundSize:"contain" }}>
                  <div className="flex flex-col bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(42,44,56,0.75)] dark:border-none gap-4 w-[95%] p-5 rounded-xl mb-6">
                    <a href={dataObj.url} target='_blank'>
                      <p className="line-clamp-1 text-xl font-semibold">{dataObj.title}</p>
                    </a>
                    <p className='line-clamp-2'>{dataObj.description}</p>
                  </div>
                </div>
                )}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default One;
