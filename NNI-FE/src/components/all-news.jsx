import Breadcrumb from "./breadcrumb";
import NewsCard from "./news-card";

export default function AllNews(){
    return(
        <>
        
            <div className="min-w[769px]:px-10 max-[769px]:mx-2 py-10 flex-col min-[769px]:mx-32 flex justify-center"> 
                
                <div className="flex gap-2 items-center">
                <img className="py-3" src="./images/red-icon.png" alt="" />
                <h1 className="text-2xl font-semibold">All News</h1>
                </div>
                <div className="card-container  my-10">
                    {/* <Breadcrumb/>    */}
                <NewsCard url={"https://saurav.tech/NewsAPI/everything/cnn.json"}/>
                </div>
            </div>
        </>
    );
}