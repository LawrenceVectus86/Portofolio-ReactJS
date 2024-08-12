// import React from 'react'
import { PROFILE } from '../constants'
import profilePic from "../assets/heroSection2.jpg"
import {motion} from 'framer-motion'

const HeroSection = () => {
  return (
    <>
    <div className='relative flex min-h-screen items-end justify-center' id='hero'>
        <motion.img className='absolute inset-0 z-10 h-full w-full object-cover' src={profilePic} alt={PROFILE.name}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}/>
        <motion.div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}></motion.div>
        <motion.div className='z-20 mx-4 max-w-3xl pb-20' initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, delay: 1}}>
            <h1 className='text-center text-5xl font-semibold uppercase tracking-wide md:text-7xl'>{PROFILE.name}</h1>
            <p className='pt-2 font-semibold text-center'>{PROFILE.info}</p>
        </motion.div>
    </div>
    
    </>
  )
}

export default HeroSection
