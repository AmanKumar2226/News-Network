import React, { useState } from "react";
import "../component-styles/new-news.css";
import axios from 'axios'
import "../component-styles/styles.css"
function AddNews() {
  const [image, setImage] = useState(false);
  const [news, setNews] = useState({
    url:"",
    source: "",
    author: "",
    title: "",
    description: "",
    content: "",
  });
  
  const formData = new FormData();
  formData.append('url',news.url);
  formData.append("source", news.source);
  formData.append("author", news.author);
  formData.append("title", news.title);
  formData.append("description", news.description);
  formData.append("content", news.content);
  formData.append("image", image);

  const onChangeNews = (evt) => {
    setNews({ ...news, [evt.target.name]: evt.target.value });
  };


  const saveNews = async() =>{
    const response = await axios.post("/api/add-news", formData);
    console.log(response) 
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    saveNews();
  }

  return (
   <div className="container">
    <div className="flex justify-center">
      <div className="add-news-form flex flex-col gap-5 my-10 w-2/4 outline p-8">
        <form action="/api/add-news" encType="multipart/formdata">
          <div className="flex justify-center text-center items-center flex-col">
            <img
              src="./images/logo.jpg"
              alt=""
              className="mix-blend-mode-multiply h-20 w-20"
              style={{ mixBlendMode: "multiply" }}
            />
            <h1 className="font-semibold text-3xl my-2">Add New News</h1>
          </div>
          <div className="mb-5 flex flex-row gap-5 items-center">
            <label className="font-semibold text-lg" htmlFor="source">
              Add url
            </label>
            <input
              onChange={onChangeNews}
              className="p-3 rounded-lg w-full"
              name="url"
              type="text"
              id="url"
              placeholder="enter redirect url"
            />
          </div>
          <div className="mb-5 flex flex-row gap-5 items-center">
            <label className="font-semibold text-lg" htmlFor="source">
              News Source
            </label>
            <input
              onChange={onChangeNews}
              className="p-3 rounded-lg w-full"
              name="source"
              type="text"
              id="source"
              placeholder="enter news source"
            />
          </div>
          <div className="mb-5 flex flex-row gap-5 items-center">
            <label className="font-semibold text-lg" htmlFor="author">
              Author
            </label>
            <input
              onChange={onChangeNews}
              name="author"
              className="p-3 rounded-lg w-full"
              id="author"
              type="text"
              placeholder="Enter author name"
            />
          </div>
          <div className="mb-5 flex flex-row gap-5 items-center">
            <label className="font-semibold text-lg" htmlFor="title">
              Title
            </label>
            <input
              onChange={onChangeNews}
              name="title"
              className="p-3 rounded-lg w-full"
              id="title"
              type="text"
              placeholder="enter title"
            ></input>
          </div>
          <div className="mb-5 flex flex-row gap-5 items-center">
            <label className="font-semibold text-lg" htmlFor="description">
              Description
            </label>
            <input
              onChange={onChangeNews}
              name="description"
              className="p-3 w-full rounded-lg"
              id="description"
              placeholder="Enter news description"
            ></input>
          </div>
          <div className="mb-5 flex flex-row gap-5 items-center">
            <label className="font-semibold text-lg" htmlFor="content">
              Content
            </label>
            <textarea
              onChange={onChangeNews}
              className="p-2 rounded-lg w-full"
              id="content"
              name="content"
              cols="30"
              rows="10"
              placeholder="Enter the content of news here"
            ></textarea>
          </div>
          <div className="mb-5 flex flex-row gap-5 items-center">
            <p className="font-semibold text-lg">Upload Image</p>
            {/* <label htmlFor="image" >
              <img src={!image? assets.upload_area : URL.createObjectURL(image)} alt="" />
            </label> */}
            <input
              onChange={(e)=>{ setImage(e.target.files[0])}}
              name="image"
              id="image"
              className="p-2 rounded-lg w-full"
              type="file"
            />
          </div>
          <div className="flex justify-center">
            <button
            onClick={onSubmit}
              type="submit"
              className="p-3 rounded-xl text-lg text-white   bg-slate-950"
            >
              Add to database
            </button>
          </div>
        </form>
      </div>
    </div>
   </div>
    
  );
}

export default AddNews;
