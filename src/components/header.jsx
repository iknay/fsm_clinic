import React from 'react';
import {motion} from 'framer-motion';
import Heroimg from '../assets/Heroimg.png';
import heroimgmobile from '../assets/heroimgmobile.png';
import Navbar from './navbar';

const Header = () => {
  return (
    <div className='min-h-screen mt-4 md:min-h-screen' id='home'>
      <Navbar/>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:2}}
        className='container flex flex-col items-center max-w-full pt-10 space-x-0 space-y-4 justify-evenly md:space-x-20 md:pt-20 md:space-y-0 md:flex-row'>
          <div>
              <h1 className='font-bold lg:text-[56px] text-[32px] text-tertiary pb-2'>Your first step towards a healthier you.</h1>
              <p className='text-primary md:text-[16px] text-[12px] font-medium'>Choose our clinic for exceptional care and support on your journey to a healthier and happier life.</p>
              <button className='md:p-4 p-3 md:text-[16px] items-center justify-center text-[12px] font-bold rounded-xl shadow-xl bg-primary text-secondary md:mt-[54px]
              mt-8 hover:bg-darkgreen hover:duration-500'><a href='#appointment'>Make an appointment</a></button>
          </div>
          <div className='flex-shrink-0 object-cover flex items-center justify-center pl-4
      h-80 w-72  md:w-96 md:h-96 xl:w-[640px] xl:h-[500px]'>
              <img src={Heroimg} alt='heroimg'/>
          </div>
        </motion.div>
    </div>
  )
}

export default Header