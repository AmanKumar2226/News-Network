import React from "react";
import { useState, useEffect } from "react";
import "../component-styles/home.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Four() {
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c";
  let [data, setData] = useState([]);
  // let [isLoading, setIsLoading] = useState(true);
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
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-3xl font-semibold text-center underline decoration-double">More Articles</h1>
      </div>
      <div className="w-3/4 mb-10 mt-5 mx-auto">
        <div className="">
          <Slider {...settings}>
            {data.map((dataObj, index) => {
              return (
                <div
                  key={index}
                  className="h-[500px] bg-white text-black rounded-xl"
                >
                  <div className="flex justify-center items-center h-1/4">
                    <img
                      className="w-full"
                      src={dataObj.urlToImage}
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4 p-10">
                    <p className="text-xl font-semibold">{dataObj.title}</p>
                    <a
                      href={dataObj.url}
                      className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Four;
