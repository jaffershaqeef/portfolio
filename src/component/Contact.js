import { useRef } from 'react';
import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion'
import emailjs, { send } from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6zgyx8v', 'template_rboa21l', form.current, {
        publicKey: 'rYpD8syLtDSV1Am3J',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('message sent')
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
    <section id='contact' className='md:flex md:h-screen !overflow-hidden' >
      <div className="hidden md:block w-[30%] bg-[#967E76]">
        <motion.h1 whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className=' font-bold gochi text-[#f7f7f7] text-[20px] md:px-16 lg:px-20 lg:text-[30px] md:mt-[250px]  lg:mt-[260px]'><ReactTyped strings={["contact"]} typeSpeed={500} cursorChar='>' loop /></motion.h1>
      </div>

    <div className='px-3   md:px-5 md:py-2 lg:py-4 xl:py-12 md:w-[70%] w-[100%] bg-white  !overflow-x-hidden'>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1.2 }} className=" mx-auto lg:w-[70%]  bg-[#967E76] rounded-[14px] px-5  pb-2 lg:pb-0 md:px-7 lg:px-10  mt-5 lg:mt-0 ">
          <p className="md:text-[22px] font-bold pt-5 px- text-white">
            Engage with us!
          </p>
          <form ref={form} onSubmit={sendEmail} className=''>
            <p className="text-[16px] md:py-2 text-white">Name</p>
            <input
              type="text"
              placeholder="Type Your name"
              name="user_name"
              className="   text-black w-full  md:h-8 pl-3 bg-white rounded-[7px]"
              required
            />

            <p className="text-[16px] md:py-2 text-white">E-mail</p>
            <input
              type="mail"
              name="user_email"
              placeholder="Type Your mail"
              className= " text-black w-full md:h-8 pl-3 bg-white rounded-[7px]"
              required
            />
            <p className="text-[16px] md:py-2 text-white">Phone</p>
            <input
              type="tel"
              name="user_number"
              placeholder="Type Your Number"
              className= " text-black w-full md:h-8 pl-3 bg-white rounded-[7px]"
              required
            />

            <p className="text-[16px] md:py-2 text-white">Message</p>
            <textarea
              name="message"
              id=""
              placeholder="Message"
              className="bg-white   text-black w-full p-3 rounded-[7px]"
              required
              rows="3"
            ></textarea>

            <div className="w-full grid md:py-2 lg:py-4">
              <button
                className=" relative justify-self-end bg-[#967E76] md:px-16 px-12 py-2 rounded-[7px] text-white hover:bg-[#5c4c46] transition-all duration-500"
                type="submit" value="Send">
                Submit
              </button>
            </div>
          </form >
        </motion.div>
    </div>

    </section>
    </>
  );
}

export default Contact;