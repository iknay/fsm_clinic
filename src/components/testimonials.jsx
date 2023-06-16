import React from 'react'
import stars from '../assets/stars.png';
import quote from '../assets/quote.png';
import jastine from '../assets/jastine.jpg';
import lalai from '../assets/lalai.jpg';
import carlo from '../assets/carlo.jpg';

const Testimonials = () => {
  return (
    <div className='container max-w-full min-h-screen mb-4 space-y-8 md:space-y-28 md:mb-0'>
        <div className='flex flex-col items-center font-bold md:text-[48px] text-[24px] p-0'>
            <h1 className='text-tertiary'>Testimonials</h1>
            <p className='text-primary'>from our satisfied clients</p>
        </div>
        <div className='flex flex-col items-center justify-center space-x-0 space-y-4 md:space-x-10 md:flex-row md:space-y-0'>
            <div className='flex flex-col items-center p-4 border-2 border-primary rounded-2xl w-full md:w-[500px] h-full md:h-[320px]'>
                <img src={jastine} className='w-14 h-14 md:w-[100px] md:h-[100px]' alt='Jas Tine' />
                <h2 className='font-bold text-[16px] md:text-[24px] text-tertiary'>Jas Tine</h2>
                <img src={stars} className='w-[90px] h-[15px] md:w-[145px] md:h-[25px]' alt='Stars' />
                <img src={quote} alt='Quote' />
                <p className='text-[12px] md:text-[16px]'>Thank you Dra Michelle for taking care of our baby. Napakabait and caring na pedia. Firststep Multispecialty Clinic is Highly recommended.</p>
            </div>
            <div className='flex flex-col items-center p-4 border-2 border-primary rounded-2xl w-full md:w-[500px] md:h-[320px] h-full'>
                <img src={lalai} className='w-14 h-14 md:w-[100px] md:h-[100px]' alt='Lalai' />
                <h2 className='font-bold text-[16px] md:text-[24px] text-tertiary'>Lalai</h2>
                <img src={stars} className='w-[90px] h-[15px] md:w-[145px] md:h-[25px]' alt='Stars' />
                <img src={quote} alt='Quote' />
                <p className='text-[12px] md:text-[16px]'>Very clean and safe ang clinic. We liked it because it is located outside the hospital. Very helpful and considerate also si Dra. Rejano and my 3 kids love her. I would highly recommend this clinic.</p>
            </div>
            <div className='flex flex-col items-center p-4 border-2 border-primary rounded-2xl  w-full md:w-[500px] h-full md:h-[320px]'>
                <img src={carlo} className='w-14 h-14 md:w-[100px] md:h-[100px]' alt='Carlo' />
                <h2 className='font-bold text-[16px] md:text-[24px] text-tertiary'>Carlo</h2>
                <img src={stars} className='w-[90px] h-[15px] md:w-[145px] md:h-[25px]' alt='Stars' />
                <img src={quote} alt='Quote' />
                <p className='text-[12px] md:text-[16px]'>Beautiful Doctor at Mabait and Doctor. All your concerns will be answered. Our trusted pedia.</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;