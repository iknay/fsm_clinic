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
    <div className='container flex items-center justify-between h-16 max-w-full'>
        <motion.div className='flex items-center justify-start cursor-pointer w-96 n-left'
        initial={{x: -500, opacity: 0, scale: 0.6}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}>
          <img src={Logo} alt='logo' width={50} height={50}/>
            <div className='flex flex-col font-bold '>
                <text className='text-primary md:text-[48px] text-[32px]'>Firststep</text>
                <text className='text-tertiary md:text-[24px] text-[16px] md:-mt-5 -mt-3'>multispecialty clinic</text>
            </div>
        </motion.div>

        <motion.div className='hidden md:flex'
        initial={{x: 500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5,}}>
            <Menu/>
        </motion.div>
    </div>
  )
}

export default Navbar