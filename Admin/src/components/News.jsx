import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function News() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/api/nni/get-news',
      headers: {},
    };

    axios.request(config)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:8080/api/nni/delete-news/${id}`)
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting the news: ", error);
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col min-[769px]:gap-5 min-[769px]:mx-44 max-[769px]:mx-2 flex-wrap my-10 dark:text-white">
        <div className="flex gap-2 items-center">
          <img className='py-3' src="./images/red-icon.png" alt="" />
          <h1 className="text-3xl font-semibold">
            Our Articles
          </h1>
        </div>
        <div className="flex flex-row min-[769px]:gap-28 flex-wrap mt-5 mb-5">
          {data.map((dataObj) => {
            return (
              <div
                key={dataObj._id}
                className="w-[360px] h-[400px] text-black rounded-xl p-2 shadow-lg my-5"
              >
                <div className="flex justify-center items-center h-[190px] w-[340px]">
                  <a href={dataObj.url} target='_blank'>
                    <img
                      className="h-[190px] w-[340px] ml-1 p-2 rounded-2xl"
                      src={`http://localhost:8080/${dataObj.image}`}
                      alt="image"
                    />
                  </a>
                </div>
                <div className="flex flex-col pt-4 px-2">
                  <a href={dataObj.url}><p className="line-clamp-1 font-semibold">{dataObj.title}</p></a>
                  <p className="line-clamp-2">{dataObj.description}</p>
                  <div className={`w-full rounded-xl bg-[#F5F5F5] p-2 flex justify-between gap-8 items-center px-4 ${dataObj.description == null ? 'mt-20 ' : "mt-5"}`}>
                    <div className="h-[54px] flex justify-center w-1/2 flex-col text-black">
                      <p className="font-semibold line-clamp-1">{dataObj.author}</p>
                      <p>
                        {dataObj.publishedAt}
                      </p>
                    </div>
                    <div className='flex items-center justify-between w-1/2 h-full'>
                      <button className='w-[50px] h-[50px]' onClick={() => handleDelete(dataObj._id)}>
                        <img src="./images/delete-1.png" alt="" />
                      </button>
                      <button className='w-[50px] h-[50px]' onClick={() => navigate(`/edit-news/${dataObj._id}`)}>
                        <img src="./images/edit.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default News;
