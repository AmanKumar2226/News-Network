import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./spinner";
import { useTheme } from '../utils/ThemeContext';
import '../component-styles/home.css'


function NewsCard({ url }) {
  const { theme } = useTheme();

  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
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

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1)
    }
  }

  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  return (
    <>
      <div className="flex flex-row align-middle justify-center mb-5 news-card">
        {isLoading && <Spinner />}
      </div>
      <div className="flex flex-wrap gap-10">
        {records.map((dataObj, index) => {
          return (
            <div
              key={index}
              className="w-[360px] h-[400px] text-black dark:text-white dark:bg-[#1F1F1F] rounded-xl p-2 shadow-lg my-5"
            >
              <div className="flex justify-center items-center h-[190px] w-[340px]">
                <a href={dataObj.url} target="_blank">
                  <img
                    className=" h-[190px] w-[340px] ml-1 p-2 rounded-2xl"
                    src={dataObj.urlToImage}
                    alt="image"
                  />
                </a>
              </div>
              <div className="flex flex-col pt-4 px-2 dark:text-white">
                <a href={dataObj.url}><p className="line-clamp-1 font-semibold">{dataObj.title}</p></a>
                <p className="line-clamp-2">{dataObj.description}</p>
                <div className={`w-full rounded-xl bg-[#F5F5F5] dark:bg-[#2A2C38] p-2 flex justify-between items-center px-4 ${dataObj.description == null ? 'mt-20 ' : "mt-5"}`}>
                  <div className="h-[54px] flex justify-center flex-col ">
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
      </div>
      <div className="flex flex-row align-middle mt-10 justify-center">
        <nav aria-label="Page navigation">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a
                onClick={prePage}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            {numbers.map((n, i) => {
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  onClick={() => changeCPage(n)}
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  {n}
                </a>
              </li>;
            })}
            <li>
              <a
                onClick={nextPage}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NewsCard;
