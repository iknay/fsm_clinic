import React from 'react'
import location from '../assets/location.png';

const Contact = () => {
  return (
    <div className='container max-w-full min-h-screen mt-8 space-y-8 md:space-y-10' id='contact'>
        <div className='flex flex-col items-center font-bold md:text-[48px] text-[24px]'>
            <h1 className='text-tertiary'>Get in touch</h1>
        </div>
        <div className='flex flex-col items-center justify-between space-x-0 space-y-8 md:space-x-16 md:space-y-0 md:flex-row'>
          
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.7579858844233!2d121.00500531057818!3d14.61285788581601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c6bb02adcf%3A0xa0c1183926fffde3!2sFIRSTSTEP%20MULTISPECIALTY%20CLINIC!5e0!3m2!1sen!2sph!4v1686927749979!5m2!1sen!2sph"  
        className='shadow-md rounded-2xl md:w-[920px] md:h-[600px] w-[420px] h-[500px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-[16px] md:text-[24px] text-primary'>CONTACT</h2>
                <p className='text-[12px] md:text-[16px] items-center text-tertiary justify-center flex p-4 border-2 border-primary rounded-2xl w-[315px] md:w-[415px] h-full md:h-[130px]'>+63907 572 6212</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-[16px] md:text-[24px] text-primary'>ADDRESS</h2>
                <p className='text-[12px] md:text-[16px] items-center text-tertiary justify-center flex p-4 border-2 border-primary rounded-2xl w-[315px] md:w-[415px] h-full md:h-[130px]'>8 Unang Hakbang St. Brgy. San Isidro, Galas 113 Quezon City, Philippines</p>
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-[16px] md:text-[24px] text-primary'>EMAIL ADDRESS</h2>
                <p className='text-[12px] md:text-[16px] items-center text-tertiary justify-center flex p-4 border-2 border-primary rounded-2xl w-[315px] md:w-[415px] h-full md:h-[130px]'>fsmsclinic@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact;