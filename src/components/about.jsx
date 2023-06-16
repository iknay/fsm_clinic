import React from 'react';
import ellipse from '../assets/ellipse.png';
import Logo from '../assets/Logo.png';
import Aboutusimg from '../assets/aboutus.png';

const About = () => {
  return (
    <div className='min-h-screen mb-4 md:mb-0'>
      
      <div className='hidden md:flex'>
        <div className='absolute -mt-60'>
          <img src={ellipse}/>
        </div>
        <div className='absolute ml-20 -mt-28'>
        <img src={Logo}/>
        </div>
      </div>

      <div className='container flex flex-col items-center justify-center max-w-full' id='about'>
        <h1 className='font-bold text-tertiary md:text-[48px] text-[24px] mb-4 pt-0 md:pt-8'>About us</h1>
        <div className='items-center justify-between pt-4 space-y-10 md:space-y-0 md:flex'>
          <div className='pr-0 md:pr-[90px]'>
            <p className='text-[#88C582] text-[12px] md:text-[16px] font-bold'>WELCOME TO FIRSTSTEP MULTISPECIALTY CLINIC</p>
            <h1 className='text-primary text-[32px] md:text-[48px] font-bold'>Your Gateway to Health and Vitality</h1>
            <p className='text-[12px] md:text-[16px] pt-10 font-normal'>At Firststep Multispecialty Clinic, we provide a wide range of services, from routine check-ups to specialized treatments, all aimed at guiding you towards optimal health. Our skilled doctors and support staff listen attentively to your concerns and create personalized treatment plans that address your unique health needs. We prioritize a holistic approach, considering not only your physical symptoms but also your mental and emotional well-being.</p>
          </div>

          <div className='flex-shrink-0 object-cover flex items-center justify-center 
      h-80 w-72  md:w-96 md:h-96 xl:w-[530px] xl:h-[500px]'>
            <img src={Aboutusimg}/>
          </div>

        </div> 
      </div>      
      
    </div>
  )
}

export default About