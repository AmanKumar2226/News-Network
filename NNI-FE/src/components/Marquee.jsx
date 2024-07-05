import React, {useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Marquee() {

const [news, setNews] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setNews(response.data.articles)
    })
    .catch((error) => {
      console.log(error);
    });
    
  })


  return (
    <div className="w-full bg-[#004D43] h-[50px] sticky top-0 z-[999]">
      <div className="w-[15%] bg-[yellow] h-[50px] absolute z-[999] flex overflow-hidden">
        <h1
          className='text-[34px] leading-none flex items-center justify-center ml-16 mt-3  text-nowrap font-["Founders_Grotesk_X"] font-semibold'
        >
          Breaking News
        </h1>
      </div>
      <div className="text-white flex overflow-hidden whitespace-nowrap items-center pt-1 gap-20">
        {news.map((newsObj,index)=>{
          return (
        
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration:20}}
          className='text-[34px] font-["Founders_Grotesk_X"] font-semibold capitalize'
        ><a href={newsObj.url} target="_blank">
          {newsObj.title}
          </a>
        </motion.h1>
        
          )
        })}
        
        {/* <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[34px]  font-["Founders_Grotesk_X"] font-semibold uppercase '
        >We are ochi hufhiw ishigu
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[34px]  font-["Founders_Grotesk_X"] font-semibold uppercase '
        >
          We are ochi hufhiw ishigu
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
          className='text-[34px]  font-["Founders_Grotesk_X"] font-semibold uppercase '
        >
          We are ochi hufhiw ishigu kjhie ehfiwhffhe ifhe98h3 
        </motion.h1> */}
      </div>
    </div>
  );
}

export default Marquee;
