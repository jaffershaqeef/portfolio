import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';
import { useEffect } from 'react';


import {
  Carousel,
  initTWE,
} from "tw-elements";


function Projects() {
  useEffect(() => {
    initTWE({ Carousel });
  }, [])
  return (
    <>
      <section id='Projects' className=' flex  md:h-screen'>
        <div className='hidden md:block w-[30%] bg-[#f7f7f7]'>
          <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.2 }} className='  font-bold gochi text-[#fdae81] text-[20px] md:px-16 lg:px-20 lg:text-[30px] md:mt-[250px]  lg:mt-[260px]'><ReactTyped strings={["Projects"]} typeSpeed={500} cursorChar='>' loop /></motion.h1>
        </div>
        <div className='md:w-[70%] w-[100%] px-10 py-6 min-[375px]:px-16 min-[425px]:px-20 md:px-16 md:py-20 lg:py-14 xl:py-20  xl:px-18 bg-[#fdae81]'>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.2 }}
            id="carouselExampleIndicators"
            class="relative"
            data-twe-carousel-init
            data-twe-ride="carousel">
            {/* <!--Carousel indicators--> */}
            <div
              class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
              data-twe-carousel-indicators>
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="0"
                data-twe-carousel-active
                class="mx-[3px]  h-[10px] w-[10px] rounded-full flex-initial cursor-pointer  bg-[#404040] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true"
                aria-label="Slide 1"></button>
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="1"
                class="mx-[3px]  h-[10px] w-[10px] rounded-full flex-initial cursor-pointer  bg-[#404040] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"></button>
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="2"
                class="mx-[3px]  h-[10px] w-[10px] rounded-full flex-initial cursor-pointer  bg-[#404040] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"></button>
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="3"
                class="mx-[3px]  h-[10px] w-[10px] rounded-full flex-initial cursor-pointer  bg-[#404040] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 4"></button>
              <button
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide-to="4"
                class="mx-[3px]  h-[10px] w-[10px] rounded-full flex-initial cursor-pointer  bg-[#404040] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 5"></button>
            </div>

            {/* <!--Carousel items--> */}
            <div
              class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              {/* <!--First item--> */}
              <div
                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item
                data-twe-carousel-active>
              <div>
                <img
                    src="images/al-wakeel.png"
                    className="block w-[250px] min-[425px]:w-[270px] h-[150px] md:w-full md:h-[300px] lg:h-[350px]"
                    alt="" />
                </div>
                <div
                  className="text-center text-black ">
                  <h5 className="text-sm md:text-base md:font-semibold lg:text-[23px] lg:font-bold xl:text-xl">Al-wakeel</h5>
                  <p className='mb-10 text-xs md:text-sm lg:text-base  xl:text-lg'>
                    This is a educational website
                  </p>
                </div>
              </div>
              {/* <!--Second item--> */}
              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item>
                <div>
                  <img
                    src="images/annadevatha.jpg"
                    className="block w-[250px] min-[425px]:w-[270px] h-[150px] md:w-full md:h-[300px] lg:h-[350px] "
                    alt="" />
                </div>
                <div
                  className="text-center text-black ">
                  <h5 className="text-sm md:text-base md:font-semibold lg:text-[23px] lg:font-bold xl:text-xl">Annadevatha</h5>
                  <p className='mb-10 text-xs md:text-sm lg:text-base  xl:text-lg'>
                    It is a catering website to view a menu
                  </p>
                </div>
              </div>
              {/* <!--Third item--> */}
              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item>
                <div>
                  <img
                    src="images/meet.png"
                    className="block w-[250px] min-[425px]:w-[270px] h-[150px] md:w-full md:h-[300px] lg:h-[350px]"
                    alt="" />
                </div>
                <div
                  className="text-center text-black ">
                  <h5 className="text-sm md:text-base md:font-semibold lg:text-[23px] lg:font-bold xl:text-xl">Meeturdream</h5>
                  <p className='mb-10 text-xs md:text-sm  xl:text-lg'>
                    It is a web-app as well as mobile app
                  </p>
                </div>
              </div>

              {/* <!--fourth item--> */}
              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item>
                <div>
                  <img
                    src="images/emem.png"
                    className="block w-[250px] min-[425px]:w-[270px] h-[150px] md:w-full md:h-[300px] lg:h-[350px] "
                    alt="" />
                </div>
                <div
                  className="text-center text-black ">
                  <h5 className="text-sm md:text-base md:font-semibold lg:text-[23px] lg:font-bold xl:text-xl">emem</h5>
                  <p className='mb-10 text-xs md:text-sm  xl:text-lg'>
                    It is a single page static website
                  </p>
                </div>
              </div>

              {/* <!--fifth item--> */}
              <div
                class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-twe-carousel-item>
                <div>
                  <img
                    src="images/neonax.png"
                    className="block w-[250px] min-[425px]:w-[270px] h-[150px] md:w-full md:h-[300px] lg:h-[350px]"
                    alt="" />
                </div>
                <div
                  className="text-center text-black ">
                  <h5 className="text-sm md:text-base md:font-semibold lg:text-[23px] lg:font-bold xl:text-xl">Neonax</h5>
                  <p className='mb-10 text-xs md:text-sm  xl:text-lg'>
                    It is a website for embedded technology
                  </p>
                </div>
              </div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
              class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-twe-target="#carouselExampleIndicators"
              data-twe-slide="prev">
              <span class="inline-block h-8 w-8">
               <div className='bg-[#404040] hover:bg-black rounded-full'>
               <svg
                  className='text-white h-7 w-7'
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
               </div>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Previous</span>
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
              class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-twe-target="#carouselExampleIndicators"
              data-twe-slide="next">
              <span class="inline-block h-8 w-8">
                <div className='bg-[#404040] hover:bg-black rounded-full'>
                <svg
                  className='text-white'
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-7 w-7">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                </div>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Next</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Projects;