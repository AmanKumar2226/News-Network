import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../component-styles/new-news.css";
import axios from 'axios';
import "../component-styles/styles.css";

function EditNews() {
  const { id } = useParams();  // Extract the id from the URL
  const [news, setNews] = useState({
    url: "",
    source: "",
    author: "",
    title: "",
    description: "",
    content: "",
    publishedAt: ""
  });

  useEffect(() => {
    // Fetch the current news data to edit
    axios.get(`http://localhost:8080/api/nni/get-news/${id}`)
      .then(response => {
        setNews(response.data);
      })
      .catch(error => {
        console.error("Error fetching the news data: ", error);
      });
  }, [id]);

  const onChangeNews = (evt) => {
    setNews({ ...news, [evt.target.name]: evt.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };

  const handleUpdate = () => {
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/nni/update-news/${id}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: news
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        alert("News has been updated")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="flex justify-center">
        <div className="add-news-form flex flex-col gap-5 my-10 w-2/4 outline p-8">
          <form onSubmit={onSubmit}>
            <div className="flex justify-center text-center items-center flex-col">
              <img
                src="./images/logo.jpg"
                alt=""
                className="mix-blend-mode-multiply h-20 w-20"
                style={{ mixBlendMode: "multiply" }}
              />
              <h1 className="font-semibold text-3xl my-2">Edit News</h1>
            </div>
            <div className="mb-5 flex flex-row gap-5 items-center">
              <label className="font-semibold text-lg" htmlFor="url">URL</label>
              <input
                onChange={onChangeNews}
                className="p-3 rounded-lg w-full"
                name="url"
                type="text"
                id="url"
                placeholder="Enter redirect URL"
                value={news.url}
              />
            </div>
            <div className="mb-5 flex flex-row gap-5 items-center">
              <label className="font-semibold text-lg" htmlFor="source">News Source</label>
              <input
                onChange={onChangeNews}
                className="p-3 rounded-lg w-full"
                name="source"
                type="text"
                id="source"
                placeholder="Enter news source"
                value={news.source}
              />
            </div>
            <div className="mb-5 flex flex-row gap-5 items-center">
              <label className="font-semibold text-lg" htmlFor="author">Author</label>
              <input
                onChange={onChangeNews}
                name="author"
                className="p-3 rounded-lg w-full"
                id="author"
                type="text"
                placeholder="Enter author name"
                value={news.author}
              />
            </div>
            <div className="mb-5 flex flex-row gap-5 items-center">
              <label className="font-semibold text-lg" htmlFor="title">Title</label>
              <input
                onChange={onChangeNews}
                name="title"
                className="p-3 rounded-lg w-full"
                id="title"
                type="text"
                placeholder="Enter title"
                value={news.title}
              />
            </div>
            <div className="mb-5 flex flex-row gap-5 items-center">
              <label className="font-semibold text-lg" htmlFor="description">Description</label>
              <input
                onChange={onChangeNews}
                name="description"
                className="p-3 w-full rounded-lg"
                id="description"
                placeholder="Enter news description"
                value={news.description}
              />
            </div>
            <div className="mb-5 flex flex-row gap-5 items-center">
              <label className="font-semibold text-lg" htmlFor="content">Content</label>
              <textarea
                onChange={onChangeNews}
                className="p-2 rounded-lg w-full"
                id="content"
                name="content"
                cols="30"
                rows="10"
                placeholder="Enter the content of news here"
                value={news.content}
              ></textarea>
            </div>
            <div className="mb-5 flex flex-row gap-5 items-center">
              <label className="font-semibold text-lg" htmlFor="publishedAt">Date of Publish</label>
              <input
                type="text"
                onChange={onChangeNews}
                name="publishedAt"
                id="publishedAt"
                className="p-3 w-full rounded-lg"
                value={news.publishedAt}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="p-3 rounded-xl text-lg text-white bg-slate-950"
              >
                Edit News
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditNews;
