import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./spinner";
import NewsCard from "./news-card";
function General() {
    
  return (
    <>
    <div className="flex flex-col gap-5  flex-wrap justify-center my-10 mx-40">
      <div className="flex gap-2">
        <img className="py-3" src="./images/red-icon.png" alt="" />
        <h1 className="text-3xl font-semibold text-black">
          General
        </h1>
        
      </div>
      <div className="">
      <NewsCard url={"https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"}/>
      </div>
        
      </div>
      </>
    
      
  );
}

export default General;
