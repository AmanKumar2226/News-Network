// src/components/NNIArticles.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { useTheme } from '../utils/ThemeContext';
import Category from '../components/category-navbar';
import Breadcrumb from '../components/breadcrumb';
import { useParams } from 'react-router-dom';
import { FavoritesContext } from '../utils/FavoriteContext'; // Import the context

function NNIArticles() {
  const { id } = useParams();
  const { theme } = useTheme();
  const [data, setData] = useState([]);
  const { favoriteIds, addFavorite } = useContext(FavoritesContext); // Consume the context

  const userid = localStorage.getItem('id') ? localStorage.getItem('id').replace(/"/g, '') : '';

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/nni/get-news')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleAddFavorite = (newsId) => {
    axios
      .post('http://localhost:8080/api/nni/add-favorite', {
        userId: userid,
        newsId: newsId,
      })
      .then((response) => {
        console.log(JSON.stringify(response.data));
        toast.success("Article added to favorites");
        addFavorite(newsId); // Update the context
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response?.data?.message || 'Error adding favorite');
      });
  };

  return (
    <>
      <Category />
      <Breadcrumb />
      
      <div className="flex flex-col min-[769px]:gap-5 min-[769px]:mx-24 max-[769px]:mx-2 flex-wrap my-10 dark:text-white">
        <ToastContainer />
        <div className="flex gap-2 items-center">
          <img className='py-3' src="./images/red-icon.png" alt="" />
          <h1 className="text-3xl font-semibold ">
            Our Articles
          </h1>
        </div>
        {data.length === 0 ? (
          <div className="text-center my-20 text-xl font-semibold text-gray-500 dark:text-gray-300">
            No articles have been published yet.
          </div>
        ) : (
          <div className="flex flex-row min-[769px]:gap-20 flex-wrap mt-5 mb-5">
            {data.map((dataObj) => {
              const isFavorited = favoriteIds.includes(dataObj._id);
              return (
                <div
                  key={dataObj._id}
                  className="w-[360px] h-[400px] text-black dark:text-white dark:bg-[#1F1F1F] rounded-xl p-2 shadow-lg my-5"
                >
                  <div className="flex justify-center items-center h-[190px] w-[340px]">
                    <a href={`/news-description/${dataObj._id}`} target='_blank' rel='noopener noreferrer'>
                      <img
                        className="h-[190px] w-[340px] ml-1 p-2 rounded-2xl"
                        src={`http://localhost:8080/${dataObj.image}`}
                        alt="Article"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col pt-4 px-2 dark:text-white">
                    <a href={`/news-description/${dataObj._id}`}><p className="line-clamp-1 font-semibold">{dataObj.title}</p></a>
                    <p className="line-clamp-2">{dataObj.description}</p>
                    <div className={`w-full rounded-xl bg-[#F5F5F5] dark:bg-[#2A2C38] p-2 flex justify-between items-center px-4 ${dataObj.description == null ? 'mt-20 ' : "mt-5"}`}>
                      <div className='flex w-full gap-2'>
                        <div className="h-[54px] flex justify-center flex-col w-[80%]">
                          <p className="font-semibold line-clamp-1">{dataObj.author}</p>
                          <p className='line-clamp-1'>
                            {dataObj.publishedAt}
                          </p>
                        </div>
                        <div className='flex justify-end items-center w-[20%]'>
                          <button onClick={() => handleAddFavorite(dataObj._id)}>
                            <img
                              src={isFavorited ? "./images/saved-icon.png"  : (theme === "light" ? "./images/save-icon.png" : "./images/save-dark.png")}
                              alt={isFavorited ? "Saved" : "Save"}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default NNIArticles;
