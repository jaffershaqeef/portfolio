import React from 'react';
import { motion } from 'framer-motion'


function Resume() {
 
  return (
    <>
      <div id='resume' className='mb-[60px] md:mb-0 md:flex justify-around mt-5 md:mt-0  md:py-28 px-5 md:px-20 w-full h-full bg-[#404040]'>
        <div className='md:w-1/2 md:mt-5 lg:mt-0'>
          <motion.img whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.2 }} className='mx-auto w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] ' src="images/avatar.png" alt="" />
        </div>
       
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.2 }} className='md:w-1/2 lg:mt-16 '>
          <a href="https://drive.google.com/file/d/1JR2kayR8qfSz01tKv3ywik7VYEcP7U7H/view?usp=drivesdk"><h1 className='mt-5 md:mt-0 md:text-[20px] font-bold text-[#f7f7f7] hover:text-[#b8b6b6]'>Resume link </h1></a>
          <div id='address'>
          <p className='mt-3 md:text-[20px] font-bold text-white'>Address : </p>
          <p className='md:text-[17px] font-bold text-[#c7bfbf]'>No.31 Mahalakshmi nagar Nellithope Mangadu chennai-69</p>
          </div>

          <div id='number'>
            <p className='mt-3 md:text-[20px] font-bold text-white'>contact </p>
            <div className='flex'>
              <svg xmlns="/http://www.w3.org/2000/svg" className='w-[24px] h-[24px] ' fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>

              <p className='md:text-[17px] font-bold text-[#c7bfbf] ml-2' > : 8778540448</p>
            </div>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-[24px] h-[24px] ' fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>

              <p className='md:text-[17px] font-bold text-[#c7bfbf] ml-2' > : jaffershaqeef1808@gmail.com </p>

            </div>

            <p className='mt-3 md:text-[20px] font-bold text-white'>My profiles</p>
            <a className='inline-block mr-5' href="https://www.instagram.com/ohh_itz.jaff_27?igsh=aXB2MTZhdjlhdThh&utm_source=qr"><svg xmlns="http://www.w3.org/2000/svg" className='w-[50px] h-[50px]' fill='#f7f7f7' viewBox="0 0 50 50"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/></svg></a>
            <a className='inline-block' href="https://www.linkedin.com/in/jaffer-shaqeef-50bb3230a/"><svg xmlns="http://www.w3.org/2000/svg"  fill='#f7f7f7'  viewBox="0 0 50 50" width="50px" height="50px">    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/></svg></a>

          </div>
       
        </motion.div>
      </div>

  
    </>
  );
}

export default Resume;