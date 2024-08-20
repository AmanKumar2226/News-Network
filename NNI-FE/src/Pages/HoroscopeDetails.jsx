import React, { useEffect, useState } from 'react';
import { useTheme } from '../utils/ThemeContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function HoroscopeDetails() {
  const { sign } = useParams();
  const { theme } = useTheme();
  const [data, setData] = useState({});

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/nni/get-horoscope?sign=${sign}`,
      headers: {}
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data.data));
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sign]);

  return (
    <div className='my-20 min-[769px]:mx-44 mx-2 overflow-x-hidden dark:text-white'>
      <section className='xl:pb-44 pb-20 border-b-4 flex justify-center items-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='min-[769px]:text-[100px] text-[50px] font-semibold text-center uppercase'>Horoscope Detail</h1>
          <p className='text-center font-semibold'>Horoscope for {sign} sign</p>
        </div>
      </section>
      <section className='xl:my-32 my-20'>
        <div className='flex text-[54px] font-[700] gap-20 items-center max-[769px]:flex-col justify-center'>
          <img className='min-[769px]:w-[450px] min-[769px]:h-[513px]' src={theme === 'light' ? `/images/${sign.toLowerCase()}black.png` : `/images/${sign.toLowerCase()}.png`} alt={sign} />
          <div className='min-[769px]:w-1/2'>
            <h1 className='min-[769px]:text-[84px] text-[50px]'>{sign} <span className='min-[769px]:text-[44px] text-[18px]'>({data.date})</span></h1>
            <p className='text-[20px] max-[769px]:font-normal text-justify'>{data.horoscope_data}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HoroscopeDetails;
