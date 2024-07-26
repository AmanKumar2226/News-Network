import React, { useState } from "react";

function SearchWeather() {
  return (
    <section className="bg-[#E9E9E9] overflow-x-hidden">
      <div className="mx-44 py-10 w-full flex">
        <div className="bg-[#FAFAFA] w-[55%] rounded-s-3xl py-10">
          <div className="font-semibold text-[24px] flex items-center justify-around">
            <h1>Multan</h1>
            <h1>26-07-24</h1>
          </div>

          <div className="flex items-center justify-center mt-14">
            <h1 className="font-medium text-[250px] text-[#696969] text-center leading-none">
              20&#176;
            </h1>
            <div className="mt-14 flex flex-col gap-2">
              <div className="flex items-center justify-center gap-4">
                <img
                  className="w-7 h-7 ml-2"
                  src="/images/windicon.png"
                  alt=""
                />
                <h1 className="text-[24px] font-bold text-[#808080] ">
                  6.1 mph
                </h1>
              </div>
              <div className="flex items-center justify-center gap-8">
                <img className="w-7 h-7" src="/images/watericon.png" alt="" />
                <h1 className="text-[24px] font-bold text-[#808080]">90 %</h1>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[54px] text-center text-[#808080]">Cloudy</h1>
          </div>

          <div className="flex flex-wrap items-center justify-center mt-14">
            <div className="text-[#808080] w-[10%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">Today</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[10%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">Mon</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[10%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">Tue</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[10%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">Wed</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[10%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">Thu</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[10%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">Fri</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[10%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">Sat</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
          </div>
        </div>

        <div className="bg-[#F6F6F6] w-[25%] rounded-e-3xl p-8">
          <div className="flex">
            <input
              type="text"
              placeholder="search"
              className="rounded-s-xl h-10 w-[100%] text-[20px] p-2"
            />
            <div className="rounded-e-xl bg-[#808090] flex items-center justify-center w-[10%]">
              <img src="/images/search-white.png" alt="" />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-center text-[34px] font-semibold">12:27 PM</h1>
          </div>
          <div className="flex items-center justify-center mt-10">
            <h1 className="font-medium text-[80px] text-[#696969] text-center leading-none">
              20&#176;
            </h1>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-center gap-4">
                <img
                  className="w-4 h-4 ml-2"
                  src="/images/windicon.png"
                  alt=""
                />
                <h1 className="text-[18px] font-bold text-[#808080] ">
                  6.1 mph
                </h1>
              </div>
              <div className="flex items-center justify-center gap-8">
                <img className="w-4 h-4" src="/images/watericon.png" alt="" />
                <h1 className="text-[18px] font-bold text-[#808080]">90 %</h1>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="text-center text-[18px] font-medium">Feels like 19&#176;</h1>
          </div>
          <div >
            <h1 className="text-center text-[26px] font-medium text-[#808080]">Cloudy</h1>
          </div>
          <div className="mt-5">
          <h1 className="text-center text-[#010101] font-bold text-[24px]">Hourly Forcast</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center mt-5">
            <div className="text-[#808080] w-[30%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">1 PM</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[30%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">2 PM</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[30%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">3 PM</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[30%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">4 PM</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[30%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">5 PM</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
            <div className="text-[#808080] w-[30%] p-2 text-center">
              <h1 className="font-semibold text-[18px]">6 PM</h1>
              <h1 className="font-bold text-[24px]">20&#176;</h1>
              <h1 className="">Mist</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchWeather;
