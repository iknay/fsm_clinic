import React from 'react'
import { useState, useEffect } from 'react'
import { motion, useAnimate, stagger } from "framer-motion"
import { MenuToggle } from './menutoggle'
import './style.css'
import Logo from '../assets/Logo.png'

const Menu = () => (
    <>
    <ul className='flex flex-col text-lg md:flex-row text-tertiary'>
      <li className='headerlinks'><a href='#home'>Home</a></li>
      <li className='headerlinks'><a href='#services'>Services</a></li>
      <li className='headerlinks'><a href='#about'>About</a></li>
      <li className='headerlinks'><a href='#contact'>Contact</a></li>
    </ul> 
    </>
)

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "ul",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.1 }
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
          ]
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
          ],
          ["ul", { transform: "translateX(-100%)" }, { at: "-0.1" }]
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations
    ]);
  }, [isOpen]);

  return scope;
}

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);

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

        <motion.div className='flex mt-8 md:hidden'
        initial={{x: 500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5,}}
        ref={scope}>
          <Menu/>
          <MenuToggle toggle={() => setIsOpen(!isOpen)}/>
          
        </motion.div>
    </div>
  )
}

export default Navbar