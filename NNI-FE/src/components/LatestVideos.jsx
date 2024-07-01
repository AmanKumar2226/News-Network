import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../component-styles/home.css';

function LatestVideos() {

  let [data, setData] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c',
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        setData(response.data.articles)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,  // Reduce rows to 1 for mobile view
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
          rows: 1,  // Set rows to 1 for mobile
          arrows: false,  // Optionally hide arrows for mobile
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,  // Set rows to 1 for mobile
          arrows: false,  // Optionally hide arrows for mobile
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="py-10 bg-[#F5F5F5] dark:bg-[#1F1F1F] dark:text-white w-full">
      <div className="min-[769px]:mx-44 max-[769px]:mx-2">
        <div className="flex gap-2 mb-5">
          <img className="py-3" src="./images/red-icon.png" alt="" />
          <h1 className="text-2xl font-semibold">Latest Videos</h1>
        </div>

        <div className="flex gap-10 flex-col md:flex-row">
          <div
            className="h-[50vh] max-[769px]:hidden bg-cover bg-no-repeat w-[60%] dark:bg-[#2A2C38] flex items-end justify-center rounded-xl"
            style={{ backgroundImage: "url(./images/video.jpg)" }}
          >
            <div className="bg-[rgba(255,255,255,0.75)] dark:bg-[rgba(42,44,56,0.75)] w-[95%] p-5 mb-6 rounded-xl">
              <h1 className="text-xl font-semibold text-black dark:text-white">
                How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)
              </h1>
              <p className="dark:text-white">You’ve read all your free member-only stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.</p>
            </div>
          </div>

          <div className="min-[769px]:w-[40%] max-[769px]:w-full">
            <Slider className="min-[769px]:w-[670px] min-[769px]:h-[50vh] w-full" {...settings}>
              {data.map((dataObj, index) => {
                return (
                  <div key={index} className="shadow-xl gap-[10px] rounded-xl dark:bg-[#2A2C38] dark:text-white min-[769px]:h-[210px] max-[769px]:h-full min-[769px]:mb-7 p-2 video-card">
                    <div className="min-[769px]:w-[40%] flex items-center">
                      <a href={dataObj.url} target="_blank" rel="noopener noreferrer">
                        <img className="rounded-xl h-full w-full object-cover" src={dataObj.urlToImage} alt="" />
                      </a>
                    </div>
                    <div className="xl:w-[60%] w-full flex flex-col gap-3 max-[769px]:py-5">
                      <h1 className="line-clamp-1 font-semibold text-xl">{dataObj.title}</h1>
                      <p className="line-clamp-6 max-[769px]:hidden">{dataObj.description}</p>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestVideos;
