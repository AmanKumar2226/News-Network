// src/components/SavedNews.jsx
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Category from '../components/category-navbar';
import Breadcrumb from '../components/breadcrumb';
import { useTheme } from "../utils/ThemeContext";
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import { FavoritesContext } from '../utils/FavoriteContext'; // Import the context

function SavedNews() {
  const { theme } = useTheme();
  const [articles, setArticles] = useState([]);
  const { favoriteIds, removeFavorite } = useContext(FavoritesContext); // Consume the context

  const userid = localStorage.getItem('id') ? localStorage.getItem('id').replace(/"/g, '') : '';

  useEffect(() => {
    if (!userid) {
      console.error('ID is missing');
      return;
    }

    axios
      .get(`http://localhost:8080/api/nni/get-favorite/${userid}`)
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userid]);

  const handleDelete = (articleId, newsId) => {
    axios
      .delete(`http://localhost:8080/api/nni/remove-favorite/${articleId}`)
      .then((response) => {
        console.log(`Deleted article with ID: ${articleId}`);
        console.log(JSON.stringify(response.data));

        // Update local state
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article._id !== articleId)
        );

        // Update global favorites context
        removeFavorite(newsId);

        toast.success("Article removed successfully");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response?.data?.message || 'Error removing favorite');
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
            Saved In Favorites
          </h1>
        </div>
        {articles.length === 0 ? (
          <div className="text-center my-20 text-xl font-semibold text-gray-500 dark:text-gray-300">
            No articles have been favorited yet.
          </div>
        ) : (
          <div className="flex flex-row min-[769px]:gap-20 flex-wrap mt-5 mb-5">
            {articles.map((articleData) => {
              const news = articleData.newsId;
              return (
                <div key={news._id} className="w-[360px] h-[400px] text-black dark:text-white dark:bg-[#1F1F1F] rounded-xl p-2 shadow-lg my-5">
                  <div className="flex justify-center items-center h-[190px] w-[340px]">
                    <a href={`/news-description/${news._id}`} target='_blank' rel='noopener noreferrer'>
                      <img
                        className="h-[190px] w-[340px] ml-1 p-2 rounded-2xl"
                        src={`http://localhost:8080/${news.image}`}
                        alt="Article"
                      />
                    </a>
                  </div>
                  <div className="flex flex-col pt-4 px-2 dark:text-white">
                    <a href={`/news-description/${news._id}`}><p className="line-clamp-1 font-semibold">{news.title}</p></a>
                    <p className="line-clamp-2">{news.description}</p>
                    <div className={`w-full rounded-xl bg-[#F5F5F5] dark:bg-[#2A2C38] p-2 flex justify-between items-center px-4 ${news.description == null ? 'mt-20 ' : "mt-5"}`}>
                      <div className='flex w-full gap-2 items-center'>
                        <div className="h-[54px] flex justify-center flex-col w-[80%]">
                          <p className="font-semibold line-clamp-1">{news.author}</p>
                          <p className='line-clamp-1'>{news.publishedAt}</p>
                        </div>
                        <div className='w-[20%] justify-end flex items-center'>
                          <button onClick={() => handleDelete(articleData._id, news._id)}>
                            <img className='w-[50px] h-[50px]' src="./images/delete-1.png" alt="Delete" />
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

export default SavedNews;
