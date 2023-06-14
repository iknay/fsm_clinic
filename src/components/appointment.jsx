import React from 'react';
import schedule from '../assets/schedule.png';

const Appointment = () => {
  return (
    <div className='container flex flex-col items-center h-screen max-w-full space-y-10 md:space-x-10 md:flex-row md:min-h-screen md:space-y-0'>
        <div className='flex flex-col text-center'>
            <h1 className='text-tertiary font-bold md:text-[48px] text-[24px]'>Make appointment</h1>
            <p className='text-primary md:text-[24px] text-[16px]'>Leave your contacts and we will message or call you back for confirmation</p>
        </div>
        <div>
            <img src={schedule}/>
        </div>
    </div>
  )
}

export default Appointment