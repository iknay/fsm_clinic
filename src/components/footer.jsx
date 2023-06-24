import React from 'react';
import Logo from '../assets/Logo.png';
import footerimg from '../assets/footerimg.png';
import arrow from '../assets/arrows.png';
import gmail from '../assets/gmail.png';
import facebook from '../assets/facebook.png';
import web from '../assets/website.png';
import contact from '../assets/contact.png';
import {motion, spring} from 'framer-motion';
import './bg.css';

const Menu = () => (
  <>
  <ul className='items-center hidden max-w-full mt-8 text-center md:flex'>
    <li className='headerlinks text-[16px]'><a href='#home'>Home</a></li>
    <li className='headerlinks text-[16px]'><a href='#services'>Services</a></li>
    <li className='headerlinks text-[16px]'><a href='#about'>About</a></li>
    <li className='headerlinks text-[16px]'><a href='#testimonials'>Testimonials</a></li>
    <li className='headerlinks text-[16px]'><a href='#contact'>Contact</a></li>
  </ul>
    
  </>
)

const Footer = () => {

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='w-full h-fit'>
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
        <Menu/>
        <div className='flex mt-8 mb-4'>
            <button><img src={gmail} alt='gmail'/></button>
            <button><img src={facebook} alt='facebook'/></button>
            <button><img src={web} alt='website'/></button>
            <button><img src={contact} alt='contact'/></button>
        </div>
        <motion.button
        animate={{ y: -20 }}
        transition={{ 
          ease: "linear", 
          duration: 2, 
          repeat: Infinity, 
          type: "spring",
          damping: 10,
          repeatType: "reverse"
        }}
        className='mt-4 md:hidden'><a href='#home'><img src={arrow}/></a></motion.button>
      </div>
      <img src={footerimg} className='absolute flex items-end justify-end w-full'/>
    </motion.div>
    
  )
}

export default Footer