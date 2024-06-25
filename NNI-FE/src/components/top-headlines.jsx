import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Spinner from './spinner';
import NewsCard from './news-card';

function Headlines() {
    
  return (
    <div className='flex flex-col gap-2 mx-32 my-10'>
      <div className='flex gap-2'>
        <img className='py-3' src="./images/red-icon.png" alt="" />
        <h1 className='text-3xl font-semibold'>Top Headlines</h1>
        
      </div>
      <div className="">
       <NewsCard url={"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"}/>
      </div>
    </div>
  )
}

export default Headlines