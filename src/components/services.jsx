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
    <div className='flex flex-col max-w-full h-[120vh] -space-y-4 md:h-[125vh] lg:space-y-10 bg-image' id='services'>
        <div className='flex items-center justify-center pt-8 text-secondary'>
            <h1 className='font-bold md:text-[48px] text-[24px]'>Our services</h1>
        </div>
        <div className='flex items-center justify-center flex-shrink'>
            <div className='grid grid-rows md:grid-cols-3 md:gap-x-4 gap-x-0'>
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