
import Breadcrumb from '../components/breadcrumb';
import Category from '../components/category-navbar';
import NewsCard from '../components/news-card';
import { KEY } from '../Config/config';


function Apple() {

  return (
    <div className='p-5 dark:text-white'>
      <Category/>
      <Breadcrumb/>
      <div className="flex flex-wrap my-10 xl:pl-10 pl-0 min-[769px]:mx-40 max-[769px]:mx-2 dark:text-white">
        <div className="flex gap-2 my-10">
          <img className="py-3" src="./images/red-icon.png" alt="" />
          <h1 className="text-3xl font-semibold ">
          Apple Articles from Yesterday
          </h1>
        </div>
        <div className="">
          <NewsCard url={`https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=${KEY}`} />
        </div>

      </div>
    </div>
  );
}


export default Apple
