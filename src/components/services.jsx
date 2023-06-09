import React from 'react';
import Servicesbg from '../assets/Servicesbg.png';
import './servicesbg.css';
import Pediatrics from '../cards/pediatrics';
import InternalMed from '../cards/internalmed';
import Gyne from '../cards/gyne';
import Ent from '../cards/ent';
import Maxillofacial from '../cards/maxillofacial';
import Infectious from '../cards/infectious';

const Services = () => {
  return (
    <div className='container flex flex-col h-screen max-w-full bg-image' id='services'>
        <div className='flex items-center justify-center pt-8 text-secondary'>
            <h1 className='font-bold md:text-[48px] text-[32px]'>Our services</h1>
        </div>
        <div className='flex items-center justify-center md:pt-4 xl:pt-8'>
            <div className='grid grid-rows md:grid-cols-3 gap-x-4 gap-y-0'>
                <Pediatrics/>
                <InternalMed/>
                <Gyne/>
                <Ent/>
                <Maxillofacial/>
                <Infectious/>
            </div>
        </div>
    </div>
  )
}

export default Services;