import React from 'react';
import {motion} from 'framer-motion';
import Heroimg from '../assets/Heroimg.png';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className='mt-4' id='home'>
      <Navbar/>
        <div className='container relative flex flex-col items-center justify-between max-w-full top-6 space-y-14 mb-14 md:mb-32 md:space-x-10 md:space-y-0 md:flex-row'>
          <div>
              <h1 className='font-bold md:text-[48px] text-[32px] text-tertiary pb-2'>Your first step towards a healthier you.</h1>
              <p className='text-primary md:text-[16px] text-[12px] font-medium'>Choose our clinic for exceptional care and support on your journey to a healthier and happier life.</p>
              <button className='md:p-4 p-3 md:text-[16px] items-center justify-center text-[12px] font-bold rounded-xl shadow-xl bg-primary text-secondary md:mt-[54px]
              mt-8 hover:bg-darkgreen hover:duration-500'>Make an appointment</button>
          </div>
          <div>
              <img src={Heroimg} alt='heroimg' width={650} height={540}/>
          </div>
        </div>
    </div>
  )
}

export default Header