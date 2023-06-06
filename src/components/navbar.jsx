import React from 'react'
import { motion } from "framer-motion"
import Logo from '../assets/Logo.png'

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#services'>Services</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#contact'>Contact</a></p>
    </>
)

const Navbar = () => {
  return (
    <div className='h-16 flex flex-row w-full items-center justify-between'>
        <motion.div className='n-left'
        initial={{x: -500, opacity: 0, scale: 0.6}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}>
            <img src={Logo}/>
        </motion.div>

        <motion.div className='n-right flex flex-row'
        initial={{x: 500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5,}}>
            <Menu/>
        </motion.div>
    </div>
  )
}

export default Navbar