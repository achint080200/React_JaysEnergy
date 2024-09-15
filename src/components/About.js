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
      <div ref={section1Ref} className='w-full mt-[100px] py-[10vh] my-[20px] h-[80vh] bg-[#1f1f1f] rounded-br-[10vw] flex flex-col'>
        <motion.div 
          className='mx-[30vw] font-[Mona Sans] w-[40vw]'
          variants={staggerContainer}
          initial="hidden"
          animate={section1InView ? "visible" : "hidden"}
        >
          <motion.h1 className='text-5xl capitalize text-white font-bold border-b-2 pb-3 border-green-400 w-[50vw] block'
            variants={leftToRightVariant}
          >
            Welcome to JaysEnergy
          </motion.h1>
          <motion.p className='my-4 text-white text-[18px]' variants={leftToRightVariant}>
            where innovation meets precision in the world of mechanical design engineering. Founded by three dynamic professionals with a shared passion for mechanical excellence and project management expertise.
          </motion.p>
          <motion.p className='my-4 text-white text-[18px]' variants={leftToRightVariant}>
            We believe in the power of collaboration and the transformative impact of well-engineered solutions. Our founders bring a collective wealth of experience in mechanical engineering and project management. United by a common goal, we set out to establish a business that not only meets but exceeds the expectations of our clients.
          </motion.p>
          <motion.p className='text-white text-[18px]' variants={leftToRightVariant}>
            We understand that every project is distinct, and our approach reflects the diversity of challenges that the industry presents. Whether it’s optimizing existing systems or designing from the ground up, MPP is dedicated to delivering results that stand the test of time.
          </motion.p>
        </motion.div>
      </div>

      {/* Section 2: Image and List */}
      <div className='flex flex-row items-center gap-[200px]'>
        <div ref={section2Ref} className='mt-[0px] w-6/12 h-[60vh]'>
          <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            animate={section2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className='object-cover rounded-br-[200px]'
            src='https://mppesp.com/wp-content/uploads/2023/11/pexels-magda-ehlers-2569842-scaled.jpg' 
            alt='no render'
          />
        </div>

        {/* List with staggered animations */}
        <motion.div 
          className='grid grid-cols-2 -space-x-[250px] items-center'
          initial="hidden"
          animate={section2InView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={leftToRightVariant}>
            <ul>
              <motion.li className='mb-[30px]' variants={leftToRightVariant}>
                <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
              </motion.li>
              <motion.li className='mb-[30px]' variants={leftToRightVariant}>
                <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
              </motion.li>
              <motion.li className='mb-[30px]' variants={leftToRightVariant}>
                <div className='w-[40px] h-[40px] bg-black rounded-full'></div>
              </motion.li>
            </ul>
          </motion.div>

          <div className='pl-[2vw]'>
            <motion.h1 className='mt-[25px]' variants={leftToRightVariant}>Plant Engineering</motion.h1>
            <motion.h3 className='text-[15px]' variants={leftToRightVariant}>Basic Engineering Packages (BEP) and Front-End Engineering Design (FEED)</motion.h3>
            <motion.h1 className='mt-[25px]' variants={leftToRightVariant}>Drafting services</motion.h1>
            <motion.h3 className='text-[15px]' variants={leftToRightVariant}>Basic Engineering Packages (BEP) and Front-End Engineering Design (FEED)</motion.h3>
            <motion.h1 className='mt-[25px]' variants={leftToRightVariant}>Project Engineering and management services</motion.h1>
            <motion.h3 className='text-[15px]' variants={leftToRightVariant}>Basic Engineering Packages (BEP) and Front-End Engineering Design (FEED)</motion.h3>
          </div>
        </motion.div>
      </div>

      {/* Final Section */}
      <div className='w-[70vw] mx-[15vw] h-[25vh] bg-black mt-[30px] rounded-tl-[10vw] rounded-br-[10vw]'>
        <h1 className='pl-[40px] py-[40px] text-white text-4xl capitalize font-[Sans]'>Our Promise is to Deliver Innovative and Efficient Engineering Design Solutions Tailored to the Unique Needs</h1>
      </div>
    </div>
  )
}

export default About