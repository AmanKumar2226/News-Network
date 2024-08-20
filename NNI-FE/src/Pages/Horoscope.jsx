import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useNavigate } from 'react-router-dom';

function Horoscope() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const zodiacSigns = [
    {id: 0, name: 'Aries', icon: './images/ariesblack.png', iconDark: './images/aries.png' },
    { id: 1, name: 'Taurus', icon: './images/taurusblack.png', iconDark: './images/taurus.png' },
    { id: 2, name: 'Gemini', icon: './images/geminiblack.png', iconDark: './images/gemini.png' },
    { id: 3, name: 'Cancer', icon: './images/cancerblack.png', iconDark: './images/cancer.png' },
    { id: 4, name: 'Leo', icon: './images/leoblack.png', iconDark: './images/leo.png' },
    { id: 5, name: 'Virgo', icon: './images/virgoblack.png', iconDark: './images/virgo.png' },
    { id: 6, name: 'Libra', icon: './images/librablack.png', iconDark: './images/libra.png' },
    { id: 7, name: 'Scorpio', icon: './images/scorpioblack.png', iconDark: './images/scorpio.png' },
    { id: 8, name: 'Sagittarius', icon: './images/sagittariusblack.png', iconDark: './images/sagittarius.png' },
    { id: 9, name: 'Capricorn', icon: './images/capricornblack.png', iconDark: './images/capricorn.png' },
    { id: 10, name: 'Aquarius', icon: './images/aquariusblack.png', iconDark: './images/aquarius.png' },
    { id: 11, name: 'Pisces', icon: './images/piscesblack.png', iconDark: './images/pisces.png' }
  ];

  const handleSignClick = (sign) => {
    navigate(`/horoscope-details/${sign}`);
  };

  const AdditionalImage = () => (
    <div className="w-full text-center my-10 hidden xl:block">
      <img src={theme === "light" ? '/images/BlackArrow.png' : '/images/WhiteArrow.png'} alt="Additional Image" className="mx-auto" />
    </div>
  );

  return (
    <div className='my-20 min-[769px]:mx-44 mx-2 overflow-x-hidden dark:text-white'>
      <section className='py-28 rounded-xl bg-[url("./images/HoroscopeBg.png")] bg-no-repeat bg-cover flex justify-center items-center'>
        <div className='flex flex-col gap-2 text-white'>
          <h1 className='min-[769px]:text-[100px] text-[50px] font-semibold text-center uppercase'>Horoscope</h1>
          <p className='text-center font-semibold'>Select the zodiac sign for which you want to check the horoscope for today</p>
        </div>
      </section>
      <section className='my-10'>
        <div className='mb-20'>
          <p className='min-[769px]:text-xl uppercase text-center text-red-600 font-semibold'>Horoscope</p>
          <h1 className='min-[769px]:text-[84px] text-[30px] font-semibold text-center uppercase'>Understanding Science of Astrology</h1>
        </div>
        <div className='flex min-[769px]:text-[54px] text-[30px] font-[700] flex-wrap gap-20'>
          {zodiacSigns.map((signObj, index) => (
            <React.Fragment key={signObj.id}>
              <div
                className={`flex items-center gap-10 cursor-pointer ${index === 3 && "min-[769px]:ml-32"} ${index === 9 && "min-[769px]:ml-[85px]"}`}
                onClick={() => handleSignClick(signObj.name)}
              >
                <img className='min-[769px]:w-[160px] min-[769px]:h-[170px] h-[100px] w-[100px]' src={theme === "light" ? signObj.icon : signObj.iconDark} alt={signObj.name} />
                <div className='flex-col'>
                  <p>{signObj.name}</p>
                  <p className='text-[16px]'>See today's horoscope for <br />{signObj.name} sign</p>
                </div>
              </div>
              {index===5 && <AdditionalImage />}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Horoscope;
