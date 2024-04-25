import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Spinner from './spinner';

function Headlines() {
    const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c";
  let [data, setData] = useState([]);
  let [isLoading, setIsLoading] = useState(true)
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
        console.log(JSON.stringify(response.data));
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='ml-14 p-5'>
      <div>
        <h1 className='text-3xl text-center pb-5 font-semibold'>Top Headlines</h1>
        {isLoading && <Spinner/>}
      </div>
      <div className="flex flex-row gap-28 flex-wrap">
        {data.map((dataObj, index) => {
          return (
            <div
            key={index}
              id={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mb-5 "
            >
              <a href={dataObj.url}>
                <img className="rounded-t-lg" src={dataObj.urlToImage} alt="" />
              </a>
              <div className="p-5">
                <a href={dataObj.url}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {dataObj.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  {dataObj.description}
                </p>
                <a
                  href={dataObj.url}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Headlines