import React from 'react';
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed';
import Info from '../Info.json'


function Skills(delay) {
  return (
    <>
      <section id='skills' className=' md:flex md:h-screen '>
  <div className='hidden md:block w-[30%] bg-gradient-to-r from-violet-600 to-indigo-600'>
    <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 , delay:1.8}} className=' font-bold gochi text-white text-[20px] md:px-16 lg:px-20 lg:text-[30px] md:mt-[250px]  lg:mt-[260px]'><ReactTyped strings={["skills"]} typeSpeed={500} cursorChar='>' loop /></motion.h1>
  </div>
  <div className='min-[320px]:px-16 min-[375px]:px-24 min-[425px]:px-28 md:p-7 lg:px-10 lg:py-6 xl:py-7 xl:px-28 md:w-[70%] w-full bg-white'>
    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.2,delay:1.8}} className='grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-5'>
      <h1 className='md:hidden mt-2 text-[20px] text-center text-[#404040] gochi'>skills</h1>
      {
        Info.map((data) => {
          return (
            <>
            
            <div className='md:rounded-md md:shadow-xl lg:rounded-lg lg:shadow-2xl hover:shadow-none group relative w-[180px] h-[160px] md:w-[200px] md:h-[180px] lg:w-[300px] lg:h-[200px] xl:w-[340px] xl:h-[240px] overflow-hidden '>
              <div className='absolute  inset-0 bg-gradient-to-r from-violet-600 to-indigo-600  translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500'></div>
              <img src={data.icon} className='xl:mt-6 lg:mt-3 md:mt-6 mt-9 absolute left-9 md:left-6  lg:left-[65px] w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px]' alt="" />
              <h1 className='absolute  md:top-1 left-2 top-2 text-center text-[20px] text-[#404040]'>{data.name}</h1>
            </div>
            </>
          )
        })
      }
    </motion.div>
  </div>
</section>
    </>
  );
}

export default Skills;