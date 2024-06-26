import React from "react";
import NewsCard from "../components/news-card";
function General() {
    
  return (
    <>
    <div className="min-w[769px]:px-10 max-[769px]:mx-2 min-[769px]-gap-5  min-[769px]-flex-wrap justify-center py-10 flex-col min-[769px]:mx-40 flex justify-center">
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
