import React from 'react';
import schedule from '../assets/schedule.png';

const Appointment = () => {
  return (
    <div className='container flex flex-col items-center max-w-full min-h-screen space-y-10 md:space-x-10 md:flex-row md:space-y-0' id='appointment'>
        <div className='flex flex-col'>
            <h1 className='text-tertiary font-bold lg:text-[48px] md:text-[32px] text-[24px] text-center'>Make appointment</h1>
            <p className='text-primary lg:text-[24px] md:text-[18px] text-[16px] text-center'>Leave your contacts and we will message or call you back for confirmation</p>
            
            <div className='md:text-[16px] text-[12px] space-y-2 text-tertiary'>
                
                <div>
                    <label className='font-medium tracking-wider '>NAME</label>
                    <input className='w-full h-10 p-4 bg-transparent border-2 rounded-xl md:rounded-2xl hover:border-darkgreen md:h-14 border-primary' type='text' placeholder=' Enter your name'/>
                </div>
                
                <div className='flex flex-col space-x-0 md:space-x-2 md:flex-row'>
                    <div className='w-full pb-1'>
                    <label className='font-medium tracking-wider'>EMAIL ADDRESS</label>
                    <input className='w-full h-10 p-4 bg-transparent border-2 rounded-xl md:rounded-2xl hover:border-darkgreen md:h-14 border-primary' type='email' placeholder=' Enter your email address'/>
                    </div>
                    <div className='w-full'>
                    <label className='font-medium tracking-wider '>CONTACT NUMBER</label>
                    <input className='w-full h-10 p-4 bg-transparent border-2 rounded-xl md:rounded-2xl hover:border-darkgreen md:h-14 border-primary' placeholder=' Enter your contact number' type='tel'/>
                    </div>
                </div>
                
                <div className='flex flex-col space-x-0 md:space-x-2 md:flex-row'>
                    <div className='w-full pb-1'>
                    <label className='font-medium tracking-wider '>DOCTOR</label>
                    <select className='w-full h-10 pl-4 bg-transparent border-2 rounded-xl md:rounded-2xl md:h-14 border-primary '>
                        <option value="rejano">Michelle R. Rejano-Octavio, M.D., DPPS</option>
                        <option value="bancoro">Maria Fatima A. Bancoro, M.D., FPOGS</option>
                        <option value="fandino">Anthony Bernard G. Fandino, M.D., FPCP</option>
                        <option value="dizon">Karina Vel E. Dizon, M.D., DPBO-HNS</option>
                    </select>
                    </div>
                    <div className='w-full'>
                    <label className='font-medium tracking-wider '>DATE</label>
                    <input className='w-full h-10 p-4 bg-transparent border-2 rounded-xl md:rounded-2xl hover:border-darkgreen md:h-14 border-primary' placeholder=' Enter your contact number' type='date'/>
                    </div>
                </div>

                <div className='pb-4'>
                    <label className='font-medium tracking-wider '>MESSAGE</label>
                    <textarea className='w-full h-[150px] p-4 border-2 bg-transparent hover:border-darkgreen md:rounded-2xl rounded-xl border-primary' type='text' placeholder=' Enter your name'/>
                </div>     
            </div>

            <button className='h-12 font-bold tracking-wide rounded-xl bg-primary md:rounded-2xl text-secondary md:h-14'>Send</button>

        </div>
        <div>
            <img src={schedule}/>
        </div>
    </div>
  )
}

export default Appointment