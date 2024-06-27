
import NewsCard from '../components/news-card';

function Headlines() {

  return (
    <div className='flex flex-col gap-2 min-[769px]:mx-40 max-[769px]:mx-2 my-10 dark:text-white'>
      <div className='flex gap-2'>
        <img className='py-3' src="./images/red-icon.png" alt="" />
        <h1 className='text-3xl font-semibold'>Top Headlines</h1>

      </div>
      <div className="">
        <NewsCard url={"https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"} />
      </div>
    </div>
  )
}

export default Headlines