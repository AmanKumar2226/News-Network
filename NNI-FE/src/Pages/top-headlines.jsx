
import Breadcrumb from '../components/breadcrumb';
import Category from '../components/category-navbar';
import NewsCard from '../components/news-card';
import { KEY } from '../Config/config';

function Headlines() {

  return (
    <>
    <Category/>
<Breadcrumb/>
<div className='flex flex-col gap-2 min-[769px]:mx-40 max-[769px]:mx-2 my-10 dark:text-white'>
  <div className='flex gap-2'>
    <img className='py-3' src="./images/red-icon.png" alt="" />
    <h1 className='text-3xl font-semibold'>Top Headlines</h1>

  </div>
  <div className="">
    <NewsCard url={`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${KEY}`} />
  </div>
</div></>
    
  )
}

export default Headlines