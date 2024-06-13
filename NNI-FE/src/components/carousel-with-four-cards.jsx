import { useState, useEffect } from "react";
import "../component-styles/home.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "./spinner";

function Four() {
    let [isLoading, setIsLoading] = useState(true);

    const url = "https://saurav.tech/NewsAPI/everything/cnn.json";
  // const url =
  //   "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c";
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
      {isLoading && <Spinner/>}
      <div className="w-3/4 mb-10 mt-5 mx-auto">
        <div className="">
          <Slider className="text-black" {...settings}>
            {data.map((dataObj, index) => {
              return (
                <div
                  key={index}
                  className="w-[360px] h-[400px] text-black rounded-xl p-2 shadow-lg my-5"
                >
                  <div className="flex justify-center items-center h-[190px] w-[340px]">
                    <img
                      className=" h-[190px] w-[320px] mr-6 p-2 rounded-2xl"
                      src={dataObj.urlToImage}
                      alt="image"
                    />
                  </div>
                  <div className="flex flex-col pt-4 px-2">
                    <p className="line-clamp-1 font-semibold">{dataObj.title}</p>
                    <p className="line-clamp-3">{dataObj.description}</p>
                    <div className={`w-full rounded-xl bg-[#F5F5F5] p-2 flex justify-between items-center px-4 ${dataObj.description== null ? 'mt-20 ': "mt-2"}`}>
                     <div className="h-[54px] flex justify-center flex-col">
                     <p className="font-semibold line-clamp-1">{dataObj.author}</p>    
                      <p>
                        {dataObj.publishedAt}
                      </p>
                     </div>
                      <div>
                        <img src="./images/save-icon.png" alt="" />
                      </div>
                    </div>
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
