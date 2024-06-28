import { useState, useEffect } from "react";
import "../component-styles/home.css";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Spinner from "./spinner";
import { useTheme } from '../utils/ThemeContext';
function Four({ url, title }) {
    let [isLoading, setIsLoading] = useState(true);
 const {theme} = useTheme();
    // const url = "https://saurav.tech/NewsAPI/everything/cnn.json";
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
      <div className="min-[769px]:mx-44 max-[769px]:mx-2 flex gap-2 dark:bg-[#2A2C38]">
        <img src="./images/red-icon.png" alt="" className="py-3" />
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      {isLoading && <Spinner/>}
      <div className="w-[82%] mb-10 mt-2 mx-auto dark:bg-[#2A2C38]">
        <div className="">
          <Slider className="text-black dark:text-white" {...settings}>
            {data.map((dataObj, index) => {
              return (
                <div
                  key={index}
                  className="w-[360px] h-[400px] text-black dark:text-white dark:bg-[#1F1F1F] rounded-xl p-2 shadow-lg my-5"
                >
                  <div className="flex justify-center items-center h-[190px] w-[340px]">
                    <a href={dataObj.url}>
                    <img
                      className=" h-[190px] w-[340px] ml-1 p-2 rounded-2xl"
                      src={dataObj.urlToImage}
                      alt="image"
                    />
                    </a>
                  </div>
                  <div className="flex flex-col pt-4 px-2">
                    <a href={dataObj.url}><p className="line-clamp-1 font-semibold">{dataObj.title}</p></a>
                    <p className="line-clamp-2">{dataObj.description}</p>
                    <div className={`w-full rounded-xl bg-[#F5F5F5] dark:bg-[rgba(42,44,56,0.75)] dark:text-white p-2 flex justify-between items-center px-4 ${dataObj.description== null ? 'mt-20 ': "mt-5"}`}>
                     <div className="h-[54px] flex justify-center flex-col">
                     <p className="font-semibold line-clamp-1">{dataObj.author}</p>    
                      <p>
                        {dataObj.publishedAt}
                      </p>
                     </div>
                      <div>
                      <img src={theme === "light" ? "./images/save-icon.png" : "./images/save-dark.png"} alt="" />
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
