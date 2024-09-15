import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className='mt-[200px] '>
      <div className='w-[100vw] h-[60vh]  font-[Test_Founders_Grotesk_X-Condensed]'>
        {["Let's Start", "A project together"].map((item, index) => (
          <motion.h1
            key={index} // Adding a unique key for each item
            initial={{ x: -100 }} 
            animate={{ x: 50 }}
            transition={{s:2000}}
            className='uppercase text-8xl leading-[7vw] tracking-tight font-semibold'
          >
            {item}
          </motion.h1>
        ))}
      </div>
      <div className='  flex gap-[300px] mx-[60px]'>
        <div>
          <h1 className='text-3xl font-semibold mb-[100px]'>Inquiries:</h1>
          <h3 className='w-[150px]'>Please fill out the form on the right or email us directly.</h3>

        </div>
        <div >
          <form className='flex flex-col gap-y-2'>
            <label className='-mb-2'>Name: *</label>
            <input className=" border border-red-400 w-[600px] py-0.5  px-2"type='text' placeholder=''></input>
            <label className='-mb-2'>Email Address: *</label>
            <input className="border border-red-400 w-[600px] py-0.5  px-2"type='email' placeholder=''></input>
            <label className='-mb-2'>Subject: *</label>
            <input className="border border-red-400 w-[600px] py-0.5  px-2"type='text' placeholder=''></input>
            <label className='-mb-2'>Company: *</label>
            <input className="border border-red-400 w-[600px] py-0.5  px-2"type='text' placeholder=''></input>
            <label className='-mb-2'>Project Summary: *</label>
            
            <input className="border border-red-400 placeholder-top w-[600px] h-[15vh] pt-2 leading-tight  px-2"type='text' placeholder=''></input>

          </form>
          <button className='px-4 py-2 border border-black rounded-lg mt-3 text-white bg-black'>
            <div className='flex justify-between gap-2 '>
              <h1>submit</h1>
              <div className='rounded-full bg-white '></div>

            </div>
            
            
          </button>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;