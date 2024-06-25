import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./spinner";


function NewsCard({ url }) {

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
  const records =  data.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  function nextPage() {
    if(currentPage !== lastIndex){
      setCurrentPage(currentPage+1)
    }
  }

  function prePage() {
    if(currentPage !== firstIndex){
      setCurrentPage(currentPage-1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  return (
    <>
    <div className="flex flex-row align-middle justify-center mb-5">
      {isLoading && <Spinner/>}
      </div>  
      <div className="flex flex-wrap gap-10">
        {records.map((dataObj, index) => {
          return (
            // <div
            // key={index}
            //   id={index}
            //   className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-5 "
            // >
            //   <a href={dataObj.url}>
            //     <img className="rounded-t-lg" src={dataObj.urlToImage} alt="" />
            //   </a>
            //   <div className="p-5">
            //     <a href={dataObj.url}>
            //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            //         {dataObj.title}
            //       </h5>
            //     </a>
            //     <p className="mb-3 font-normal text-gray-700 ">
            //       {dataObj.description}
            //     </p>
            //     <a
            //       href={dataObj.url}
            //       className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            //     >
            //       Read more
            //       <svg
            //         className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            //         aria-hidden="true"
            //         xmlns="http://www.w3.org/2000/svg"
            //         fill="none"
            //         viewBox="0 0 14 10"
            //       >
            //         <path
            //           stroke="currentColor"
            //           strokeLinecap="round"
            //           strokeLinejoin="round"
            //           strokeWidth="2"
            //           d="M1 5h12m0 0L9 1m4 4L9 9"
            //         />
            //       </svg>
            //     </a>
            //   </div>
            // </div>
            <div
                  key={index}
                  className="w-[360px] h-[400px] text-black rounded-xl p-2 shadow-lg my-5"
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
                    <div className={`w-full rounded-xl bg-[#F5F5F5] p-2 flex justify-between items-center px-4 ${dataObj.description== null ? 'mt-20 ': "mt-5"}`}>
                     <div className="h-[54px] flex justify-center flex-col">
                     <p className="font-semibold line-clamp-1">{dataObj.author}</p>    
                      <p>
                        {dataObj.publishedAt}
                      </p>
                     </div>
                      <div>
                        <img src="./images/save-icon.png" alt="" />
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
