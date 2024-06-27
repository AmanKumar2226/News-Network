
import NewsCard from '../components/news-card';


function Apple() {

  return (
    <div className='ml-14 p-5 dark:text-white'>
      <div>

      </div>
      <h1 className='text-3xl font-semibold pb-10 text-center'>Apple Articles from Yesterday</h1>


      <div className="">
        <NewsCard url={"https://newsapi.org/v2/everything?q=apple&from=2024-04-26&to=2024-04-26&sortBy=popularity&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"} />



      </div>
    </div>
  );
}


export default Apple
