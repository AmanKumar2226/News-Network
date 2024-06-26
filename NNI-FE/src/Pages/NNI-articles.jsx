import NewsCard from '../components/news-card';

function NNIArticles() {
    

  return (
    <>
    <div className="flex flex-col gap-5  flex-wrap justify-center mt-5 mb-5">
      <div className="ml-20">
        <h1 className="text-3xl font-semibold text-black">
          Our Articles
        </h1>
        
      </div>
      <div className="flex flex-row gap-28 flex-wrap justify-center mt-5 mb-5">
      <NewsCard url={"http://localhost:8080/api/nni/add-news"}/>
      </div>
        
      </div>
      </>
)}

export default NNIArticles
