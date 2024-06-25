import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./spinner";
import NewsCard from "./news-card";
function Technology() {
    
  return (
    <>
    <div className="flex flex-col gap-5 flex-wrap justify-center mx-32 my-10">
      <div className="flex gap-2">
        <img className="py-3" src="./images/red-icon.png" alt="" />
        <h1 className="text-3xl font-semibold text-black">
          Technology
        </h1>
       
      </div>
      <div className="">
      <NewsCard url={"https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"}/>
      </div>
        
      </div>
      </>
    
      
  );
}

export default Technology;
