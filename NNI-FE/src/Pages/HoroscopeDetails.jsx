import React from 'react'
import {useTheme} from '../utils/ThemeContext'
function HoroscopeDetails() {

    const {theme} = useTheme()
  return (
    <>
    <div className='my-20 mx-44 overflow-x-hidden dark:text-white'>
    <section className='pb-44 border-b-4 flex justify-center items-center'>
        <div className='flex flex-col gap-2'>
            <h1 className='text-[100px] font-semibold text-center uppercase'>
                Horoscope Detail
            </h1>
            <p className='text-center font-semibold'>
                Horoscope for selected zodiac sign
            </p>
        </div>
    </section>
    <section className='my-32'>
        <div className='flex text-[54px] font-[700] gap-20 items-center justify-center'>
        <img className='w-[412px] h-[515px]' src="./images/aries.png" alt="" />
        <div className='w-1/2'>
            <h1 className='text-[84px]'>Aries <span className='text-[44px]'>March21</span></h1>
            <p className='text-[20px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, veritatis dolorem! Eos amet culpa pariatur obcaecati ab vel eveniet consequatur, officiis optio facere adipisci et consequuntur quidem tenetur minus ut!</p>
        </div>
        </div>
    </section>
    </div>
    
    </>
  )
}

export default HoroscopeDetails
