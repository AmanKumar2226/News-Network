import React from 'react'
import {useTheme} from '../utils/ThemeContext'
function Horoscope() {

    const {theme} = useTheme()

    const zodiacSigns = [{
        id: 0,
        name: 'Aries',
        icon: './images/AriesBlack.png',
        iconDark: './images/aries.png'
    },
    {
        id: 1,
        name: 'Taurus',
        icon: './images/TarusBlack.png',
        iconDark: './images/taurus.png'
    },
    {
        id: 3,
        name: 'Gemini',
        icon: './images/GeminiBlack.png',
        iconDark: './images/gemini.png'
    },
    {
        id: 4,
        name: 'Cancer',
        icon: './images/CapriconBlack.png',
        iconDark: './images/capricon.png'
    },
    {
        id: 5,
        name: 'Leo',
        icon: './images/LeoBlack.png',
        iconDark: './images/leo.png'
    },
    {
        id: 6,
        name: 'Virgo',
        icon: './images/VirgoBlack.png',
        iconDark: './images/virgo.png'
    },
    {
        id: 7,
        name: 'Libra',
        icon: './images/LibraBlack.png',
        iconDark: './images/libra.png'
    },
    {
        id: 8,
        name: 'Scorpio',
        icon: './images/ScorpioBlack.png',
        iconDark: './images/scorpio.png'
    },
    {
        id: 9,
        name: 'Sagitarius',
        icon: './images/SagittariusBlack.png',
        iconDark: './images/sagittarius.png'
    },
    {
        id: 10,
        name: 'Capricon',
        icon: './images/CapriconBlack.png',
        iconDark: './images/capricon.png'
    },
    {
        id: 11,
        name: 'Aquarius',
        icon: './images/AquariusBlack.png',
        iconDark: './images/aquarius.png'
    },
    {
        id: 12,
        name: 'Pisces',
        icon: './images/PiscesBlack.png',
        iconDark: './images/pisces.png'
    },

]

const groups = [
    zodiacSigns.slice(0, 3),
    zodiacSigns.slice(3, 6),
    zodiacSigns.slice(6, 9),
    zodiacSigns.slice(9, 12),
  ];

const AdditionalImage = () => (
    <div className="w-full text-center my-10">
      <img src={theme === "light"?'/images/BlackArrow.png':'/images/WhiteArrow.png'} alt="Additional Image" className="mx-auto" />
    </div>
  );
  return (
    <>
    <div className='my-20 mx-44 overflow-x-hidden dark:text-white'>
    <section className='border-b-[2px] pb-44'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[100px] font-semibold text-center uppercase'>
                Horoscope
            </h1>
            <p className='text-center font-semibold'>
                Select the zodiac sign for which you want to check the horoscope for today
            </p>
        </div>
    </section>
    <section className='my-10'>
        <div className='mb-20'>
            <p className='text-xl uppercase text-center text-red-600 font-semibold'>horoscope</p>
            <h1 className='text-[84px] font-semibold text-center uppercase'>Understanding Science of Astrology</h1>
        </div>
        <div className='flex text-[54px] font-[700] flex-wrap gap-20'>
            {zodiacSigns.map((signObj,index)=>(<React.Fragment key={signObj.id}>
              <a href="" key={signObj.id} className='flex items-center gap-10'>
                <img
                  src={theme === "light" ? signObj.icon : signObj.iconDark}
                  alt={signObj.name}
                />
                <p>{signObj.name}</p>
              </a>
              {signObj.id === 6 && <AdditionalImage />}
            </React.Fragment>
             ))}
        </div>
    </section>
    </div>
    
    </>
  )
}

export default Horoscope
