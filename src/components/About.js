import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  // Use intersection observer for the different sections
  const { ref: section1Ref, inView: section1InView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const { ref: section2Ref, inView: section2InView } = useInView({ triggerOnce: true, threshold: 0.1 })

  // Animation variants for moving elements from left to right
  const leftToRightVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  // Animation for staggering elements one by one
  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
  }

  return (
    <div className='text-black text-3xl font-[Sans]'>
      {/* Section 1 */}
      <div ref={section1Ref} className='w-full mt-[100px] sm:py-[10vh] my-[20px] h-auto bg-[#1f1f1f] rounded-br-[10vw] flex flex-col'>
        <motion.div 
          className='sm:mx-[30vw] font-[Mona Sans] w-screen sm:w-[40vw]'
          variants={staggerContainer}
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
        >
          <motion.h1 className='text-5xl capitalize text-white font-bold border-b-2 pb-3 border-green-400 w-screen sm:w-[50vw] block'
            variants={leftToRightVariant}
          >
            Welcome to JaysEnergy
          </motion.h1>
          <motion.p className='my-4 text-white text-[18px]' variants={leftToRightVariant}>
          Where innovation meets precision in engineering design.
          </motion.p>
          <motion.p className='my-4 text-white text-[18px]' variants={leftToRightVariant}>
          Located in Sarnia, we are committed to supporting the local industry with fit-to-purpose engineering solutions. Founded by highly qualified professionals in mechanical, electrical, and process engineering with Canadian education, Jayz Energy delivers efficient, tailored solutions designed to meet your specific needs.
          </motion.p>
          <motion.p className='text-white text-[18px]' variants={leftToRightVariant}>
          We believe in collaboration and the transformative power of well-engineered systems. Our team combines expertise to exceed client expectations, providing reliable, lasting results.
          </motion.p>
          <motion.p className='text-white text-[18px]' variants={leftToRightVariant}>
          Whether optimizing existing systems or designing new ones, Jayz Energy delivers solutions that are built to last and fit for purpose, meeting the unique challenges of your projects.
          </motion.p>
        </motion.div>
      </div>

      {/* Section 2: Image and List */}
      <div className='sm:flex flex-row items-center gap-[200px]'>
        <div ref={section2Ref} className='mt-[0px] w-screen sm:w-10/12 h-[60vh]'>
          <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            animate={section2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className='object-cover rounded-br-[200px] h-full w-full'
            src='https://mppesp.com/wp-content/uploads/2023/11/pexels-magda-ehlers-2569842-scaled.jpg' 
            alt='no render'
          />
        </div>

        {/* List with staggered animations */}
        <motion.div 
          className=' flex  sm:grid grid-cols-2 sm:-space-x-[320px] sm:items-center '
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={leftToRightVariant} className='flex '>
            <ul className='hidden sm:block -mt-[4vh]'>
              <motion.li className='mb-[150px]' variants={leftToRightVariant}>
                <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
              </motion.li>
              <motion.li className='mb-[100px] -mt-[8vh]' variants={leftToRightVariant}>
                <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
              </motion.li>
              <motion.li className='mt-[30px] ' variants={leftToRightVariant}>
                <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
              </motion.li>
              <motion.li className='mt-[10vh] ' variants={leftToRightVariant}>
                <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
              </motion.li>
            </ul>
          </motion.div>

          <div className='pl-[2vw] pr-[3vw] -mt-[200px] sm:mt-0 '>
            <motion.h1 className='mt-[25px]' variants={leftToRightVariant}>Plant Engineering</motion.h1>
            <motion.h3 className='text-[15px]' variants={leftToRightVariant}>Optimizing plant layouts and designs to ensure smooth process flow, safety, and reliability. Our designs improve productivity, minimize downtime, and support long-term operational goals.</motion.h3>
            <motion.h1 className='mt-[25px]' variants={leftToRightVariant}>Operational Excellence</motion.h1>
            <motion.h3 className='text-[15px]' variants={leftToRightVariant}>We help our clients streamline operations with lean manufacturing principles, ensuring efficient processes, minimized waste, and timely project execution.</motion.h3>
            <motion.h1 className='mt-[25px]' variants={leftToRightVariant}>Regulatory Compliance</motion.h1>
            <motion.h3 className='text-[15px]' variants={leftToRightVariant}>We ensure full adherence to Canadian regulatory standards across industries, from environmental regulations to safety protocols, giving you peace of mind throughout the project lifecycle.</motion.h3>
            <motion.h1 className='mt-[25px]' variants={leftToRightVariant}>Process System Engineering & Control</motion.h1>
            <motion.h3 className='text-[15px]' variants={leftToRightVariant}>Our team designs advanced process systems that enhance plant performance. From automation to precise control systems, we ensure efficient, safe, and reliable operations.</motion.h3>
          </div>
        </motion.div>
      </div>

      {/* Final Section */}
      <div className='w-[70vw] mx-[15vw] h-auto bg-black mt-[30px] rounded-tl-[10vw] rounded-br-[10vw]'>
        <h1 className='pl-[40px] py-[40px] text-white text-4xl capitalize font-[Sans]'>Our Promise is to Deliver Innovative and Efficient Engineering Design Solutions Tailored to the Unique Needs</h1>
      </div>
    </div>
  )
}

export default About