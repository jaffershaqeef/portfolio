import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion'
import { useState } from 'react';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';
// Initialization for ES Users




function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, delay: delay }
    }
  })


  return (
        
      <div className='overflow-x-hidden bg-white'>

        {/* {mobile view } */}

        <div id='about' className={`px-3  md:hidden flex w-full h-[80px] items-center ${isChecked ? 'bg-[#353434]' : 'bg-[#f7f7f7]'}`}>
          <h1 className=' hover:cursor-pointer w-[90px] font-bold gochi text-[30px] text-[#6fdcbf]'>
            <ReactTyped strings={["Jaffer"]} typeSpeed={500} cursorChar='>' loop /> 
          </h1>
          <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} className="ml-auto text-yellow-300 my-2 toggle-warning toggle checked:bg-white " />
        </div>
        <div className={`min-[375px]:py-3   w-full md:hidden  ${isChecked ? 'bg-[#353434]' : 'bg-[#f7f7f7]'}`}  >
            <div className=' inline-block transform -rotate-12'>
              <div className='px-5 mt-5 flex items-center'>
                <svg className='w-[20px] h-[20px] mr-2' viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1667 22.7895C14.5194 21.1451 18.066 21.4605 20.1785 23.205L17.7557 19.6834C15.8059 16.9027 16.5042 13.8942 19.2875 11.9419C22.0707 9.99712 29.9574 15.2257 29.9574 15.2257C27.9901 12.4174 28.358 8.85829 31.1663 6.8885C33.9746 4.92621 37.8491 5.6045 39.8164 8.41778L65.8968 45.2608L62.573 77.4859L34.8331 67.3691L10.6374 31.4947C8.65256 28.6689 9.33836 24.7719 12.1667 22.7895Z" fill="#EF9645" />
                  <path d="M6.74524 43.2857C6.74524 43.2857 3.91193 39.1559 8.04425 36.3251C12.1716 33.4943 15.0024 37.6216 15.0024 37.6216L28.1452 56.789C28.5982 56.0331 29.0938 55.2872 29.647 54.5514L11.4057 27.9528C11.4057 27.9528 8.57487 23.8255 12.7047 20.9947C16.832 18.1639 19.6628 22.2912 19.6628 22.2912L36.8203 47.3129C37.4586 46.7923 38.1118 46.2692 38.7851 45.7561L18.8944 16.7448C18.8944 16.7448 16.0636 12.6175 20.1934 9.78665C24.3207 6.95585 27.1515 11.0832 27.1515 11.0832L47.0423 40.0895C47.7731 39.6415 48.4964 39.2535 49.2223 38.843L30.6306 11.7314C30.6306 11.7314 27.7998 7.60411 31.9271 4.7733C36.0544 1.9425 38.8852 6.06982 38.8852 6.06982L58.5432 34.7383L61.5317 39.0983C49.1472 47.5933 47.9683 63.5744 55.0441 73.8939C56.4582 75.9588 58.5231 74.5447 58.5231 74.5447C50.0307 62.1577 52.6238 48.239 65.0107 39.7466L61.359 21.4703C61.359 21.4703 59.9949 16.6547 64.808 15.2881C69.6236 13.924 70.9902 18.7396 70.9902 18.7396L75.2076 31.2642C76.8796 36.23 78.6591 41.1783 81.0144 45.8587C87.6646 59.0742 83.6925 75.4983 71.1529 84.1009C57.4744 93.4793 38.7751 89.9927 29.3942 76.3168L6.74524 43.2857Z" fill="#FFDC5D" />
                  <path d="M30.0351 80.0934C20.0234 80.0934 9.9066 69.9766 9.9066 59.9649C9.9066 58.5808 8.89291 57.462 7.5088 57.462C6.12469 57.462 4.90076 58.5808 4.90076 59.9649C4.90076 74.9824 15.0176 85.0992 30.0351 85.0992C31.4192 85.0992 32.538 83.8753 32.538 82.4912C32.538 81.1071 31.4192 80.0934 30.0351 80.0934Z" fill="#5DADEC" />
                  <path d="M17.5204 84.9942C10.0117 84.9942 5.00584 79.9884 5.00584 72.4796C5.00584 71.0955 3.88703 69.9767 2.50292 69.9767C1.11881 69.9767 0 71.0955 0 72.4796C0 82.4913 7.50876 90.0001 17.5204 90.0001C18.9046 90.0001 20.0234 88.8813 20.0234 87.4972C20.0234 86.113 18.9046 84.9942 17.5204 84.9942ZM60.0701 4.90079C58.6885 4.90079 57.5672 6.0221 57.5672 7.40371C57.5672 8.78532 58.6885 9.90663 60.0701 9.90663C70.0818 9.90663 80.0934 18.8896 80.0934 29.93C80.0934 31.3116 81.2148 32.4329 82.5964 32.4329C83.978 32.4329 85.0993 31.3116 85.0993 29.93C85.0993 16.1289 75.0876 4.90079 60.0701 4.90079Z" fill="#5DADEC" />
                  <path d="M72.5847 0C71.2031 0 70.0818 1.01619 70.0818 2.3978C70.0818 3.77941 71.2031 5.00584 72.5847 5.00584C80.0935 5.00584 84.9942 10.5748 84.9942 17.4153C84.9942 18.7969 86.2181 19.9182 87.6022 19.9182C88.9863 19.9182 90 18.7969 90 17.4153C90 7.81161 82.5964 0 72.5847 0Z" fill="#5DADEC" />
                </svg>

                <span className={`gochi text-[20px] ${isChecked ? 'text-white' : 'text-[#404040]'}`}>Hi , I'm Jaffer</span>
              </div>

            </div>
            <motion.h1 initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className={`px-5 md:px-10 mt-5 text-[18px] md:text-[24px] mb-5 font-extrabold ${isChecked ? 'text-white' : 'text-[#404040]'} `}>Frontend-developer</motion.h1>
            <motion.h1 initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className={`px-5 md:px-10  text-[18px] md:text-[24px] mb-5   font-extrabold ${isChecked ? 'text-white' : 'text-[#404040]'} `}>I like making <strong className='cursor-pointer hover:text-blue-400'>fun</strong>, interactive things with code.I'm passionate about <strong> cutting-edge</strong>, pixel-perfect, beautiful interfaces and intuitively implemented UX. </motion.h1>

            <div className='mt-5 mb-3 flex justify-center'>
              <button className='mt-5 mx-auto block cursor-pointer'><svg className='animate-bounce' height="40" width="40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490.4 490.4" >
                <g>
                  <g>
                    <path d="M490.4,245.2C490.4,110,380.4,0,245.2,0S0,110,0,245.2s110,245.2,245.2,245.2S490.4,380.4,490.4,245.2z M24.5,245.2
                    c0-121.7,99-220.7,220.7-220.7s220.7,99,220.7,220.7s-99,220.7-220.7,220.7S24.5,366.9,24.5,245.2z"/>
                    <path d="M253.9,360.4l68.9-68.9c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-48,48V138.7c0-6.8-5.5-12.3-12.3-12.3
                    s-12.3,5.5-12.3,12.3v183.4l-48-48c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l68.9,68.9c2.4,2.4,5.5,3.6,8.7,3.6
                    S251.5,362.8,253.9,360.4z"/>
                  </g>
                </g>
              </svg>
              </button>
              
              <nav className=" md:hidden text-[#404040] flex items-center w-full h-[60px] fixed z-50 bottom-0 border border-black justify-center bg-white ">
                <li className=' list-none hover:underline hover:cursor-pointer decoration-wavy  px-2 py-2'> <a href='#about'>About </a> </li>
                <li className=' list-none hover:underline hover:cursor-pointer decoration-wavy  px-2 py-2'><a href='#skills'>Skills</a></li>
                <li className=' list-none hover:underline hover:cursor-pointer decoration-wavy  px-2 py-2'><a href='#Projects'> Projects</a></li>
                <li className=' list-none hover:underline hover:cursor-pointer decoration-wavy  px-2 py-2'><a href='#contact'>Contact</a></li>
                <li className='list-none hover:underline hover:cursor-pointer decoration-wavy  px-2 py-2'><a href='#resume'>Resume</a></li>
              </nav> 
              
              
            </div>
          </div>
 
        {/* {screen-view} */}
        <div  className='hidden md:flex  h-screen'>
          <div className={`md:w-[30%] lg:w-[30%]  ${isChecked ? 'bg-[#353434]' : 'bg-[#f7f7f7]'}`}></div>
          <div className={`md:w-[70%] lg:w-[70%]  ${isChecked ? 'bg-[#7a3a53]' : 'bg-[#6fdcbf]'}`}></div>
        </div>

        <nav className='px-16 lg:px-20 xl:px-28 md:flex hidden w-full absolute top-0 '>
          <div className='flex h-[80px] items-center md:w-[30%]'>
            <h1 className=' hover:cursor-pointer w-[90px] font-bold gochi text-[30px] text-[#6fdcbf]'>
              <ReactTyped strings={["Jaffer"]} typeSpeed={500} cursorChar='0' />
            </h1>
            <div className='md:w-[20px] lg:w-[100px] h-[80px] md:border-r-[2px]  lg:border-r-[3px] border-purple-400 ' ></div>
          </div>
          <div className=' md:w-[70%]  h-[80px] flex  items-center '>
            <ul className={`md:flex   ml-auto ${isChecked ? 'text-[#F7F7F7]' : 'text-[#404040]'}  `}>
              <li className='list-none hover:underline hover:cursor-pointer decoration-wavy font-bold  px-3 py-2'><a href='#about'>About Me</a> </li>
              <li className='list-none hover:underline hover:cursor-pointer decoration-wavy font-bold  px-3 py-2'><a href='#skills'>Skills</a></li>
              <li className='list-none hover:underline hover:cursor-pointer decoration-wavy font-bold  px-3 py-2'><a href='#Projects'> Projects</a></li>
              <li className='list-none hover:underline hover:cursor-pointer decoration-wavy font-bold  px-3 py-2'><a href='#contact'>Contact</a></li>
              <li className='list-none hover:underline hover:cursor-pointer decoration-wavy font-bold  px-3 py-2'><a href='#resume'>Resume</a></li>
              <div>
                <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} className="text-yellow-300 my-2 toggle-warning toggle checked:bg-white " />
              </div>
            </ul>
          </div>
        </nav>

        <section id='about' className='md:flex hidden xl:px-28 lg:px-24 md:px-16  absolute top-10 '>
          <div className=' w-[30%] '>
            <button onClick={handleCheckboxChange} className='mt-10 md:w-[65px] md:h-[70px] lg:w-[103px] lg:h-[120px]  md:ml-[77px] lg:ml-[122px] xl:ml-[138px]'><img src="images/lamp1.png" alt="" /></button>
            <motion.img variants={container(0)} initial='hidden' animate='visible' className='hidden md:w-[250px] md:h-[150px] lg:w-[350px] lg:h-[190px] xl:w-[460px] xl:h-[255px] md:block absolute left-16' src="images/flowerc.png" alt="" />
          </div>

          <div className=' py-10 w-[70%] '>
            <div className=' inline-block transform -rotate-12'>
              <div className='px-10 flex items-center'>
                <svg className='w-[20px] h-[20px] mr-2' viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.1667 22.7895C14.5194 21.1451 18.066 21.4605 20.1785 23.205L17.7557 19.6834C15.8059 16.9027 16.5042 13.8942 19.2875 11.9419C22.0707 9.99712 29.9574 15.2257 29.9574 15.2257C27.9901 12.4174 28.358 8.85829 31.1663 6.8885C33.9746 4.92621 37.8491 5.6045 39.8164 8.41778L65.8968 45.2608L62.573 77.4859L34.8331 67.3691L10.6374 31.4947C8.65256 28.6689 9.33836 24.7719 12.1667 22.7895Z" fill="#EF9645" />
                  <path d="M6.74524 43.2857C6.74524 43.2857 3.91193 39.1559 8.04425 36.3251C12.1716 33.4943 15.0024 37.6216 15.0024 37.6216L28.1452 56.789C28.5982 56.0331 29.0938 55.2872 29.647 54.5514L11.4057 27.9528C11.4057 27.9528 8.57487 23.8255 12.7047 20.9947C16.832 18.1639 19.6628 22.2912 19.6628 22.2912L36.8203 47.3129C37.4586 46.7923 38.1118 46.2692 38.7851 45.7561L18.8944 16.7448C18.8944 16.7448 16.0636 12.6175 20.1934 9.78665C24.3207 6.95585 27.1515 11.0832 27.1515 11.0832L47.0423 40.0895C47.7731 39.6415 48.4964 39.2535 49.2223 38.843L30.6306 11.7314C30.6306 11.7314 27.7998 7.60411 31.9271 4.7733C36.0544 1.9425 38.8852 6.06982 38.8852 6.06982L58.5432 34.7383L61.5317 39.0983C49.1472 47.5933 47.9683 63.5744 55.0441 73.8939C56.4582 75.9588 58.5231 74.5447 58.5231 74.5447C50.0307 62.1577 52.6238 48.239 65.0107 39.7466L61.359 21.4703C61.359 21.4703 59.9949 16.6547 64.808 15.2881C69.6236 13.924 70.9902 18.7396 70.9902 18.7396L75.2076 31.2642C76.8796 36.23 78.6591 41.1783 81.0144 45.8587C87.6646 59.0742 83.6925 75.4983 71.1529 84.1009C57.4744 93.4793 38.7751 89.9927 29.3942 76.3168L6.74524 43.2857Z" fill="#FFDC5D" />
                  <path d="M30.0351 80.0934C20.0234 80.0934 9.9066 69.9766 9.9066 59.9649C9.9066 58.5808 8.89291 57.462 7.5088 57.462C6.12469 57.462 4.90076 58.5808 4.90076 59.9649C4.90076 74.9824 15.0176 85.0992 30.0351 85.0992C31.4192 85.0992 32.538 83.8753 32.538 82.4912C32.538 81.1071 31.4192 80.0934 30.0351 80.0934Z" fill="#5DADEC" />
                  <path d="M17.5204 84.9942C10.0117 84.9942 5.00584 79.9884 5.00584 72.4796C5.00584 71.0955 3.88703 69.9767 2.50292 69.9767C1.11881 69.9767 0 71.0955 0 72.4796C0 82.4913 7.50876 90.0001 17.5204 90.0001C18.9046 90.0001 20.0234 88.8813 20.0234 87.4972C20.0234 86.113 18.9046 84.9942 17.5204 84.9942ZM60.0701 4.90079C58.6885 4.90079 57.5672 6.0221 57.5672 7.40371C57.5672 8.78532 58.6885 9.90663 60.0701 9.90663C70.0818 9.90663 80.0934 18.8896 80.0934 29.93C80.0934 31.3116 81.2148 32.4329 82.5964 32.4329C83.978 32.4329 85.0993 31.3116 85.0993 29.93C85.0993 16.1289 75.0876 4.90079 60.0701 4.90079Z" fill="#5DADEC" />
                  <path d="M72.5847 0C71.2031 0 70.0818 1.01619 70.0818 2.3978C70.0818 3.77941 71.2031 5.00584 72.5847 5.00584C80.0935 5.00584 84.9942 10.5748 84.9942 17.4153C84.9942 18.7969 86.2181 19.9182 87.6022 19.9182C88.9863 19.9182 90 18.7969 90 17.4153C90 7.81161 82.5964 0 72.5847 0Z" fill="#5DADEC" />
                </svg>

                <span className={`gochi md:text-[17px] lg:text-[20px] xl:text-[22px] ${isChecked ? 'text-white' : 'text-[#404040]'}`}>Hi , I'm Jaffer</span>
              </div>

            </div>
            <motion.h1 initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className={` xl:px-24 lg:px-20 md:px-16  md:text-[25px] lg:text-[30px] xl:text-[35px]  text-justify font-bold mt-5 ${isChecked ? 'text-white' : 'text-[#404040]'} `}>Frontend-developer</motion.h1>
            <motion.h1 initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} className={` xl:px-24 lg:px-20 md:px-16 md:text-[25px] lg:text-[30px] xl:text-[35px] lg:mt-5 text-justify font-bold leading-8 lg:leading-14 xl:leading-[60px] ${isChecked ? 'text-white' : 'text-[#404040]'} `}>I like making <strong className='cursor-pointer hover:text-blue-400'>fun</strong>, interactive things with code.I'm passionate about <strong> cutting-edge</strong>, pixel-perfect, beautiful interfaces and intuitively implemented UX. </motion.h1>

            <div className='mt-5 flex justify-center'>
              <button className='cursor-pointer'><svg className='animate-bounce' height="40" width="40" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 490.4 490.4" >
                <g>
                  <g>
                    <path d="M490.4,245.2C490.4,110,380.4,0,245.2,0S0,110,0,245.2s110,245.2,245.2,245.2S490.4,380.4,490.4,245.2z M24.5,245.2
                    c0-121.7,99-220.7,220.7-220.7s220.7,99,220.7,220.7s-99,220.7-220.7,220.7S24.5,366.9,24.5,245.2z"/>
                    <path d="M253.9,360.4l68.9-68.9c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-48,48V138.7c0-6.8-5.5-12.3-12.3-12.3
                    s-12.3,5.5-12.3,12.3v183.4l-48-48c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l68.9,68.9c2.4,2.4,5.5,3.6,8.7,3.6
                    S251.5,362.8,253.9,360.4z"/>
                  </g>
                </g>
              </svg></button>
            </div>

          </div>
        </section> 

        <Skills/>
        <Projects/>
        <Contact/>
        <Resume/>
      </div>

  );
}

export default Home;

