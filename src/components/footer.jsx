import React from 'react';
import Logo from '../assets/Logo.png';
import footerimg from '../assets/footerimg.png';
import arrow from '../assets/arrows.png';
import gmail from '../assets/gmail.png';
import facebook from '../assets/facebook.png';
import web from '../assets/website.png';
import contact from '../assets/contact.png';

import './bg.css';

const Footer = () => {
  return (
    <div className='w-full h-fit'>
      <div className='flex flex-col items-center justify-center'>
        <div className='flex'>
          <img src={Logo} alt='logo' className='w-10 h-10 mt-3 md:w-20 md:h-20'/>
          <div className='flex flex-col font-bold '>
              <text className='text-primary md:text-[48px] text-[32px]'>Firststep</text>
              <text className='text-tertiary md:text-[24px] text-[16px] md:-mt-5 -mt-3'>multispecialty clinic</text>
          </div>
        </div>
        <p className='text-[14px] mt-8 text-center'>Our commitment to excellence, compassionate care, and patient-centered approach sets us apart as a trusted healthcare provider.</p>
        <button className='md:p-4 p-3 md:text-[16px] items-center justify-center text-[12px] font-bold rounded-xl shadow-xl bg-primary text-secondary md:mt-[54px]
              mt-8 hover:bg-darkgreen hover:duration-500'><a href='#appointment'>Make an appointment</a></button>
        <div className='flex mt-8 mb-4'>
            <button><img src={gmail} alt='gmail'/></button>
            <button><img src={facebook} alt='facebook'/></button>
            <button><img src={web} alt='website'/></button>
            <button><img src={contact} alt='contact'/></button>
        </div>
      </div>
      <div className='flex items-end justify-between w-full'>
          <p className='text-secondary md:text-[12px] text-[10px]'>© 2023 All Rights Reserved</p>
          <button><a href='#home'><img src={arrow} alt='arrow' className='md:w-[40px] md:h-[40px] w-5 h-5'/></a></button>
      </div>
      <img src={footerimg} className='absolute flex items-end justify-end w-full'/>
    </div>
    
  )
}

export default Footer