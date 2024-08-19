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
    <div className='my-20 mx-44 overflow-x-hidden dark:text-white'>
      <section className='pb-44 border-b-4 flex justify-center items-center'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[100px] font-semibold text-center uppercase'>Horoscope Detail</h1>
          <p className='text-center font-semibold'>Horoscope for {sign} sign</p>
        </div>
      </section>
      <section className='my-32'>
        <div className='flex text-[54px] font-[700] gap-20 items-center justify-center'>
          <img className='w-[450px] h-[513px]' src={theme === 'light' ? `/images/${sign.toLowerCase()}black.png` : `/images/${sign.toLowerCase()}.png`} alt={sign} />
          <div className='w-1/2'>
            <h1 className='text-[84px]'>{sign} <span className='text-[44px]'>{data.date}</span></h1>
            <p className='text-[20px]'>{data.horoscope_data}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HoroscopeDetails;
