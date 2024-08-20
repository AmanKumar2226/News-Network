import React from "react";
import NewsCard from '../components/news-card';
import Breadcrumb from "../components/breadcrumb";
import Category from "../components/category-navbar";
import { KEY } from "../Config/config";
function Technology() {

  return (
    <>
    <Category/>
    <Breadcrumb/>
      <div className="flex flex-col gap-5 flex-wrap justify-center min-[769px]:mx-40 max-[769px]:mx-2 my-10 dark:text-white" >
        <div className="flex gap-2">
          <img className="py-3" src="./images/red-icon.png" alt="" />
          <h1 className="text-3xl font-semibold ">
            Technology
          </h1>

        </div>
        <div className="">
          <NewsCard url={`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${KEY}`} />
        </div>

      </div>
    </>


  );
}

export default Technology;
