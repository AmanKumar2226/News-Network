import React from "react";
import NewsCard from "../components/news-card";
function Health() {

  return (
    <>
      <div className="flex flex-col gap-5  flex-wrap justify-center my-10 min-[769px]:mx-40 max-[769px]:mx-2 dark:text-white">
        <div className="flex gap-2">
          <img className="py-3" src="./images/red-icon.png" alt="" />
          <h1 className="text-3xl font-semibold ">
            Health
          </h1>
        </div>
        <div className="">
          <NewsCard url={"https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"} />
        </div>

      </div>
    </>


  );
}

export default Health;
