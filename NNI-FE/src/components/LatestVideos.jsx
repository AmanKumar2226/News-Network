import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import '../component-styles/home.css'
function LatestVideos() {

    let [data, setData] = useState([])

    useEffect(()=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c',
            headers: { }
          };
          
          axios.request(config)
          .then((response) => {
            setData(response.data.articles)
          })
          .catch((error) => {
            console.log(error);
          });
    },[])


    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      rows: 2,
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
    <div className="py-10 bg-[#F5F5F5] w-full">
        
      <div className="mx-44">
      <div className="flex gap-2 mb-5">
            <img className="py-3" src="./images/red-icon.png" alt="" />
            <h1 className="text-2xl font-semibold">
                Latest Videos
            </h1>
        </div>

        <div className="flex gap-10 "> 
          
        <div
          className="h-[50vh] bg-cover bg-no-repeat w-[60%] flex items-end justify-center rounded-xl"
          style={{ backgroundImage: "url(./images/video.jpg)" }}
        >
            <div className="bg-[rgba(255,255,255,0.75)] w-[95%] p-5 mb-6 rounded-xl">
                <h1 className="text-xl font-semibold text-black">
                How Music Affects Your Brain (Plus 11 Artists To Listen To At Work)
                </h1>
                <p>You’ve read all your free member-only stories, become a member to get unlimited access. Your membership fee supports the voices you want to hear more from.</p>
            </div>
        </div>
        
        <div className="w-[40%]  ">
        <Slider className="w-[670px] h-[50vh] " {...settings}>

        {data.map((dataObj,index)=>{
            return(
            <div className="shadow-xl gap-[10px] rounded-xl h-[210px] mb-7 p-2 video-card">
                <div className="w-[40%] flex items-center ">
                    <img className="rounded-xl h-full" src={dataObj.urlToImage} alt="" />
                </div>
                <div className="w-[60%] flex flex-col gap-3">
                    <h1 className="line-clamp-1 font-semibold text-xl">{dataObj.title}</h1>
                    <p className="line-clamp-6">{dataObj.description}</p>
                </div>
            </div>
            )
        })}   
        </Slider>
        </div>
        
        
        </div>
        
        <div></div>
      </div>
    </div>
  );
}

export default LatestVideos;
