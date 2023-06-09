import React from 'react'
import { motion } from "framer-motion"
import Logo from '../assets/Logo.png'

const Menu = () => (
    <>
    <p className='headerlinks'><a href='#home'>Home</a></p>
    <p className='headerlinks'><a href='#services'>Services</a></p>
    <p className='headerlinks'><a href='#about'>About</a></p>
    <p className='headerlinks'><a href='#contact'>Contact</a></p>
    </>
)

const Navbar = () => {
  return (
    <div className='container flex items-center justify-between h-16 max-w-full mb-16'>
        <motion.div className='flex items-center justify-start w-96 n-left'
        initial={{x: -500, opacity: 0, scale: 0.6}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}>
          <img src={Logo} alt='logo' width={60} height={60} className='items-center justify-center cursor-pointer'/>
            <div className='flex flex-col font-bold '>
                <text className='text-primary text-[48px]'>Firststep</text>
                <text className='text-tertiary text-[24px] -mt-5'>multispecialty clinic</text>
            </div>
        </motion.div>

        <motion.div className='hidden p-0 n-right md:flex'
        initial={{x: 500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5,}}>
            <Menu/>
        </motion.div>
    </div>
  )
}

export default Navbar