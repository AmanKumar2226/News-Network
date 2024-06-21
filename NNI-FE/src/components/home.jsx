import CardHome from "./cardhome";
import One from "./carousel-with-one-card";
import Four from "./carousel-with-four-cards";
import Weather from "./weather";
import LatestVideos from "./LatestVideos";

export default function Home() {
  return (
    <>
      <div className="my-10 mx-44 flex gap-2">
        <img src="./images/red-icon.png" className="py-3" alt="" />
        <h1 className="text-2xl font-semibold">Latest Updates</h1>
      </div>
      <One />
      <div>
        <Four
          url="
https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"
          title="Popular Posts"
        />
      </div>
      <div className="my-10 p-5">
        <CardHome />
      </div>
      <div>
        <LatestVideos/>
      </div>
      <div className="mt-10">
        <Four
          url="https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"
          title="Trendy posts"
        />
      </div>
      <div className="bg-[#F5F5F5]">
        <div className="mx-44 py-10">
        <div className="flex gap-2">
          <img src="./images/red-icon.png" className="py-3" alt="" />
          <h1 className="text-2xl font-semibold">Weather Today</h1>
        </div>
        <div>
          <div></div>
          <div className="flex flex-wrap gap-1 w-1/2">
            <Weather url="http://api.weatherapi.com/v1/current.json?key=4b61e802d0324d04a21123435240305&q=SundarNagar&aqi=no" />
            <Weather url="http://api.weatherapi.com/v1/current.json?key=4b61e802d0324d04a21123435240305&q=Mohali&aqi=no" />
          </div>
        </div>
        </div>
        
      </div>
      <div className="my-10 p-5">
        <Four
          url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=01ef4ed41f254070bcf6f7ba22ad5d3c"
          title="More Articles"
        />
      </div>
    </>
  );
}
