import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./spinner";
import { useTheme } from '../utils/ThemeContext';
import '../component-styles/home.css'

function NewsCard({ url }) {
  const { theme } = useTheme();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [RenderData, setRenderData] = useState([]);
  const limit = 12;

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
        setPage(0); // Reset page to 0 when new data is fetched
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  useEffect(() => {
    const maxPage = Math.floor(data.length / limit);
    setRenderData(data.slice(limit * page, limit * page + limit));
  }, [data, page]);

  const MaxPageLimit = Math.floor(data.length / limit);

  return (
    <>
      <div className="flex flex-row align-middle justify-center mb-5 news-card">
        {isLoading && <Spinner />}
      </div>
      <div className="flex flex-wrap gap-10">
        {RenderData.map((dataObj, index) => (
          <div
            key={index}
            className="w-[360px] h-[400px] text-black dark:text-white dark:bg-[#1F1F1F] rounded-xl p-2 shadow-lg my-5"
          >
            {dataObj.urlToImage ? (
              <div className="flex justify-center items-center h-[190px] w-[340px]">
                <a href={dataObj.url} target="_blank" rel="noopener noreferrer">
                  <img
                    className=" h-[190px] w-[340px] ml-1 p-2 rounded-2xl"
                    src={dataObj.urlToImage}
                    alt="image"
                  />
                </a>
              </div>
            ) : (
              <div className="flex justify-center items-center h-[190px] w-[340px]">
                <a href={dataObj.url} target="_blank" rel="noopener noreferrer">
                  <img src="/images/logo-new.png" alt="logo" />
                </a>
              </div>
            )}
            <div className="flex flex-col pt-4 px-2 dark:text-white">
              <a href={dataObj.url} target="_blank" rel="noopener noreferrer">
                <p className="line-clamp-1 font-semibold">{dataObj.title}</p>
              </a>
              <p className="line-clamp-2">{dataObj.description}</p>
              <div
                className={`w-full rounded-xl bg-[#F5F5F5] dark:bg-[#2A2C38] p-2 flex justify-between items-center px-4 ${
                  dataObj.description == null ? 'mt-20 ' : "mt-5"
                }`}
              >
                <div className="h-[54px] flex justify-center flex-col ">
                  <p className="font-semibold line-clamp-1">{dataObj.author}</p>
                  <p>{dataObj.publishedAt}</p>
                </div>
                <div>
                  <img
                    src={theme === "light" ? "./images/save-icon.png" : "./images/save-dark.png"}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row align-middle mt-10 justify-center">
        <nav aria-label="Page navigation">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <button
                disabled={page === 0}
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            <li>
              <button
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {page + 1}
              </button>
            </li>
            <li>
              <button
                disabled={page === MaxPageLimit}
                onClick={() => setPage((prev) => Math.min(prev + 1, MaxPageLimit))}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NewsCard;
