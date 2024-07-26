import React from "react";
import { useTheme } from "../utils/ThemeContext";

function SearchWeather() {
  const { theme } = useTheme();

  return (
    <section className="bg-[#E9E9E9] dark:bg-[#2A2C38] dark:text-white overflow-x-hidden">
      <div className="xl:mx-44 xl:p-0 p-5 xl:py-10 py-10 w-full flex xl:flex-row flex-col xl:gap-0 gap-5">
        {/* Left Card */}
        <div className="bg-[#FAFAFA] dark:bg-[#1f1f1f] xl:w-[55%] w-full rounded-3xl xl:rounded-s-3xl py-10">
          <div className="font-semibold text-[24px] flex items-center justify-around">
            <h1>Multan</h1>
            <h1>26-07-24</h1>
          </div>

          <div className="flex items-center justify-center mt-14">
            <h1 className="font-medium xl:text-[250px] text-[84px] overflow-hidden text-[#696969] dark:text-white text-center leading-none">
              20&#176;
            </h1>
            <div className="xl:mt-14 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-4">
                <img
                  className="xl:w-7 xl:h-7 w-4 h-3 ml-2"
                  src={theme === "light" ? "/images/windicon.png" :"/images/whitewindicon.png"}
                  alt="Wind Icon"
                />
                <h1 className="xl:text-[24px] text-[18px] font-bold text-[#808080] dark:text-white">
                  6.1 mph
                </h1>
              </div>
              <div className="flex items-center justify-center gap-8">
                <img className="xl:w-7 xl:h-7 w-3 h-3" src={theme === "light" ? "/images/watericon.png" :"/images/whitedrop.png"} alt="Water Icon" />
                <h1 className="xl:text-[24px] text-[18px] font-bold text-[#808080] dark:text-white">90 %</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[54px] text-center text-[#808080] dark:text-white">Cloudy</h1>
          </div>

          <div className="flex text-[#808080] flex-wrap items-center justify-center xl:gap-0 gap-7 xl:mt-14 mt-5 dark:text-white">
            {["Today", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="xl:w-[10%] w-[15%] p-2 text-center">
                <h1 className="font-semibold xl:text-[18px] text-[12px]">{day}</h1>
                <h1 className="font-bold xl:text-[24px] text-[20px]">20&#176;</h1>
                <h1 className="xl:text-[18px] text-[12px]">Mist</h1>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#F6F6F6] dark:bg-[#1f1f1f90] xl:w-[25%] w-full rounded-3xl xl:rounded-e-3xl p-8">
          <div className="flex">
            <input
              type="text"
              placeholder="search"
              className="rounded-s-xl h-10 w-[90%] text-[20px] p-2 dark:bg-[#1f1f1f]"
            />
            <div className="rounded-e-xl bg-[#808090] dark:bg-[#1f1f1f] flex items-center justify-center w-[10%]">
              <img src="/images/search-white.png" alt="Search Icon" />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-center text-[34px] font-semibold">12:27 PM</h1>
          </div>
          <div className="flex items-center justify-center mt-10">
            <h1 className="font-medium text-[80px] overflow-hidden text-[#696969] dark:text-white text-center leading-none">
              20&#176;
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-4">
                <img
                  className="w-4 h-4 ml-2"
                  src={theme === "light" ? "/images/windicon.png" :"/images/whitewindicon.png"}
                  alt="Wind Icon"
                />
                <h1 className="text-[18px] font-bold text-[#808080] dark:text-white">
                  6.1 mph
                </h1>
              </div>
              <div className="flex items-center justify-center gap-8">
                <img className="w-4 h-4" src={theme === "light" ? "/images/watericon.png" :"/images/whitedrop.png"} alt="Water Icon" />
                <h1 className="text-[18px] font-bold text-[#808080] dark:text-white">90 %</h1>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-center text-[18px] font-medium">Feels like 19&#176;</h1>
          </div>
          <div>
            <h1 className="text-center text-[26px] font-medium text-[#808080] dark:text-white">Cloudy</h1>
          </div>
          <div className="mt-5">
            <h1 className="text-center text-[#010101] font-bold text-[24px] dark:text-white">Hourly Forecast</h1>
          </div>
          <div className="flex text-[#808080] flex-wrap items-center justify-center mt-5 dark:text-white">
            {["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"].map((hour) => (
              <div key={hour} className="w-[30%] p-2 text-center">
                <h1 className="font-semibold text-[18px]">{hour}</h1>
                <h1 className="font-bold text-[24px]">20&#176;</h1>
                <h1>Mist</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchWeather;
