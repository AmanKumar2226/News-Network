import CardHome from "../components/cardhome";
import One from "../components/carousel-with-one-card";
import Four from "../components/carousel-with-four-cards";
import Weather from "../components/weather";
import LatestVideos from "../components/LatestVideos";
import Marquee from "../components/Marquee";
import Category from "../components/category-navbar";
import Breadcrumb from "../components/breadcrumb";
import { useTheme } from "../utils/ThemeContext";
import { KEY } from "../Config/config";

export default function Home() {
  const {theme} = useTheme()
  return (
    <div>
      <Marquee/>
      <Category/> 
      <Breadcrumb/>
      <div className="dark:text-white">
      <div className="my-10 min-[769px]:mx-44  max-[769px]:mx-2  flex gap-2">
        <img src="./images/red-icon.png" className="py-3" alt="" />
        <h1 className="text-2xl font-semibold">Latest Updates</h1>
      </div>
      <One />
      <div>
        <Four
          url={`
https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=${KEY}`}
          title="Popular Posts"
        />
      </div>

         
      <div className="bg-[url('./images/Astrology-bg.jpg')] h-[600px] bg-no-repeat bg-cover flex justify-start items-center ">
      <div className="min-[769px]:ml-10 flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2">
        <h1 className="text-white font-semibold max-[769px]:text-3xl  text-6xl text-center"> GET TODAY'S HOROSCOPE </h1>
        <p className="text-white text-xl max-[769px]:text-lg max-[769px]:text-center">Unlock the Secrets of the Stars with our Personalized Astrology Readings</p>
        </div>
        <a href="/horoscope" target='_blank' className="p-4 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 w-[150px] rounded-xl text-white text-center font-semibold text-xl">Read More</a>
      </div>
      
      </div>
      <div className="">
        <CardHome />
      </div>
      <div>
        <LatestVideos />
      </div>
      <div className="mt-10">
        <Four
          url={`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${KEY}`}
          title="Trendy posts"
        />
      </div>
      <div className="bg-[#F5F5F5] dark:bg-[#1F1F1F] dark:text-white">
        <div className="min-[769px]:mx-44 max-[769px]:mx-2 py-10">
        <div className="flex justify-between">
          <div className="flex gap-2">
          <img src="./images/red-icon.png" className="py-3" alt="" />
          <h1 className="text-2xl font-semibold">Weather Today</h1>
          </div>
          
          <a href="/search-weather" target="_blank" className="font-semibold text-xl text-[#9F9999] dark:text-white flex items-center gap-1 justify-center mr-7">Search your own places forecast
          <img className="h-[30px] w-[30px] mt-[3px]" src={theme==="light"? "/images/forward-chevron.png":"/images/forward-chevron-white.svg"} alt="" />
          </a>    
        </div>
        <div className="flex my-10">
          <div className="w-1/2 max-[769px]:hidden">
            <div className="w-[744px] h-[514px] rounded-xl shadow-2xl py-[39px] px-[24px] bg-white dark:bg-[#2A2C38]">
              <div className="flex items-center justify-between">
                <div className="flex gap-5">
                  <div className="flex">
                  <img src="./images/sunny.svg" alt="" />
                  <p className="text-5xl">29<span className="text-sm align-top">°C</span></p>
                  </div>
                
                <div className="ml-5">
                  <p>Precipitation: 2%</p>
                  <p>Humidity: 70%</p>
                  <p>Wind: 3 km/h</p>
                </div>
                
                </div>
                <div className="">
                  <p className="text-xl font-semibold text-right">New York, NY</p>
                  <p>Wednesday 04:00</p>
                </div>
              </div>
              <div className="mt-16">
                <img src="./images/Vector.png" alt="" />
              </div>
              <div className="flex mt-16 justify-between">
              
                <div className="p-2 flex items-center flex-col w-[81px] h-[118px] rounded-lg bg-[#F5F5F5] dark:bg-[#1F1F1F]">
                  <p className="font-semibold">
                    Tue
                  </p>
                  <div>
                  <img src="./images/sunny.svg" alt="" />
                  </div>
                  <div className="flex justify-between gap-4 text-xs mt-2">
                    <p>29°C</p>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="p-2 flex items-center flex-col w-[81px] h-[118px] rounded-lg bg-[#F5F5F5] dark:bg-[#2A2C38]">
                  <p className="font-semibold">
                    Wed
                  </p>
                  <div>
                  <img src="./images/sunny.svg" alt="" />
                  </div>
                  <div className="flex justify-between gap-4 text-xs mt-2">
                    <p>29°C</p>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="p-2 flex items-center flex-col w-[81px] h-[118px] rounded-lg bg-[#F5F5F5] dark:bg-[#2A2C38]">
                  <p className="font-semibold">
                    Thu
                  </p>
                  <div>
                  <img src="./images/sunny.svg" alt="" />
                  </div>
                  <div className="flex justify-between gap-4 text-xs mt-2">
                    <p>29°C</p>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="p-2 flex items-center flex-col w-[81px] h-[118px] rounded-lg bg-[#F5F5F5] dark:bg-[#2A2C38]">
                  <p className="font-semibold">
                    Fri
                  </p>
                  <div>
                  <img src="./images/sunny.svg" alt="" />
                  </div>
                  <div className="flex justify-between gap-4 text-xs mt-2">
                    <p>29°C</p>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="p-2 flex items-center flex-col w-[81px] h-[118px] rounded-lg bg-[#F5F5F5] dark:bg-[#2A2C38]">
                  <p className="font-semibold">
                    Sat
                  </p>
                  <div>
                  <img src="./images/sunny.svg" alt="" />
                  </div>
                  <div className="flex justify-between gap-4 text-xs mt-2">
                    <p>29°C</p>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="p-2 flex items-center flex-col w-[81px] h-[118px] rounded-lg bg-[#F5F5F5] dark:bg-[#2A2C38]">
                  <p className="font-semibold">
                    Sun
                  </p>
                  <div>
                  <img src="./images/sunny.svg" alt="" />
                  </div>
                  <div className="flex justify-between gap-4 text-xs mt-2">
                    <p>29°C</p>
                    <p>20°C</p>
                  </div>
                </div>
                <div className="p-2 flex items-center flex-col w-[81px] h-[118px] rounded-lg bg-[#F5F5F5] dark:bg-[#2A2C38]">
                  <p className="font-semibold">
                    Mon
                  </p>
                  <div>
                  <img src="./images/sunny.svg" alt="" />
                  </div>
                  <div className="flex justify-between gap-4 text-xs mt-2">
                    <p>29°C</p>
                    <p>20°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 min-[769px]:w-1/2">
            <Weather url="http://api.weatherapi.com/v1/current.json?key=4b61e802d0324d04a21123435240305&q=SundarNagar&aqi=no" image={"url('./images/sundernagar.jpeg')"}/>
            <Weather url="http://api.weatherapi.com/v1/current.json?key=4b61e802d0324d04a21123435240305&q=Mohali&aqi=no" image={"url('./images/mohali.jpeg')"}/>
            <Weather url="http://api.weatherapi.com/v1/current.json?key=4b61e802d0324d04a21123435240305&q=Kedarnath&aqi=no" image={"url('./images/kedaarnath.jpg')"}/>
            <Weather url="http://api.weatherapi.com/v1/current.json?key=4b61e802d0324d04a21123435240305&q=Berlin&aqi=no" image={"url('./images/Berlin.jpg')"}/>
          </div>
        </div>
        </div>
        
      </div>
      <div className="mt-10">
        <Four
          url={`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=${KEY}`}
          title="Top posts"
        />
      </div> 
       
      
    </div>
    </div>
    
  );
}
