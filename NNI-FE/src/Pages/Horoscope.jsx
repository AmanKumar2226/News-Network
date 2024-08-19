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
    <div className="w-full text-center my-10">
      <img src={theme === "light" ? '/images/BlackArrow.png' : '/images/WhiteArrow.png'} alt="Additional Image" className="mx-auto" />
    </div>
  );

  return (
    <div className='my-20 mx-44 overflow-x-hidden dark:text-white'>
      <section className='py-28 rounded-xl bg-[url("./images/HoroscopeBg.png")] bg-no-repeat bg-cover flex justify-center items-center'>
        <div className='flex flex-col gap-2 text-white'>
          <h1 className='text-[100px] font-semibold text-center uppercase'>Horoscope</h1>
          <p className='text-center font-semibold'>Select the zodiac sign for which you want to check the horoscope for today</p>
        </div>
      </section>
      <section className='my-10'>
        <div className='mb-20'>
          <p className='text-xl uppercase text-center text-red-600 font-semibold'>Horoscope</p>
          <h1 className='text-[84px] font-semibold text-center uppercase'>Understanding Science of Astrology</h1>
        </div>
        <div className='flex text-[54px] font-[700] flex-wrap gap-20'>
          {zodiacSigns.map((signObj, index) => (
            <React.Fragment key={signObj.id}>
              <div
                className={`flex items-center gap-10 cursor-pointer ${index === 3 && "ml-32"} ${index === 9 && "ml-[85px]"}`}
                onClick={() => handleSignClick(signObj.name)}
              >
                <img className='w-[160px] h-[170px]' src={theme === "light" ? signObj.icon : signObj.iconDark} alt={signObj.name} />
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
