import {useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '../utils/ThemeContext';

function NNIArticles() {
  const {theme} = useTheme();
let [data, setData] = useState([])

useEffect(()=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/nni/add-news',
    headers: { },
  };
  
  axios.request(config)
  .then((response) => {
    setData(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
},[])


  return (
    <>
      <div className="flex flex-col gap-5 mx-44  flex-wrap my-10 dark:text-white">
        <div className="flex gap-2 items-center">
          <img className='py-3' src="./images/red-icon.png" alt="" />
          <h1 className="text-3xl font-semibold ">
            Our Articles
          </h1>

        </div>
        <div className="flex flex-row gap-28 flex-wrap mt-5 mb-5">
        {data.map((dataObj, index) => {
          return (
            <div
              key={index}
              className="w-[360px] h-[400px] text-black dark:text-white dark:bg-[#1F1F1F] rounded-xl p-2 shadow-lg my-5"
            >
              <div className="flex justify-center items-center h-[190px] w-[340px]">
                <a href={dataObj.url} target='_blank'>
                  <img
                    className=" h-[190px] w-[340px] ml-1 p-2 rounded-2xl"
                    src={`http://localhost:8080/${dataObj.image}`}
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

      </div>
    </>
  )
}

export default NNIArticles
