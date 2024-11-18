
import React from 'react'
import Picture1 from '../assets/Picture1.png'
import Picture6 from '../assets/Picture6.png'
import Picture5 from '../assets/Picture5.png'
import Picture4 from '../assets/Picture4.png'
import Picture3 from '../assets/Picture3.png'
import Picture2 from '../assets/Picture2.png'
import picture11 from "../assets/picture11.jpeg"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
//require("/Home.js")

const Projects = () => {
  const ref1 = useRef(null);

  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  
  // Track when elements come into view
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  const isInView3 = useInView(ref3, { once: true, amount: 0.3 });
  const isInView4 = useInView(ref4, { once: true, amount: 0.3 });
  const isInView5 = useInView(ref5, { once: true, amount: 0.3 });
  const isInView6 = useInView(ref6, { once: true, amount: 0.3 });
  const isInView7 = useInView(ref7, { once: true, amount: 0.3 });

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <div className='sm:mt-[70px] font-roboto mt-[200px]'>
      <div className='flex flex-wrap sm:grid  w-screen sm:h-full   grid-cols-2 grid-rows-6 mt-[150px]'>
        <div className='hidden sm:block sm:h-full '>
          <img className=' w-full sm:h-full object-cover' src={picture11} alt='no redner'/>
        </div>
        <div className=' h-auto border-t-2 border-gray-200'>
        <motion.div
            ref={ref1}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
            variants={staggerContainer}
            className='m-[10vw] font-[icomoon] h-auto'
          >
            <motion.h1 variants={textVariants} className='capitalize text-3xl font-bold'>
            CANADIAN HOSPITAL UTILITY OPERATIONS SUPPORT

            </motion.h1>
            <motion.p variants={textVariants} className='my-[30px]'>
            Boosted efficiency and safety for a Canadian hospital’s utility systems, covering steam boilers, hot water boilers, deaerators, and pumps.

            </motion.p>
            <motion.p variants={textVariants} className='my-[30px]'>
            Developed easy-to-follow Standard Operating Procedures (SOPs) and detailed layup procedures with integrated safety instructions.

            </motion.p>
            <motion.p variants={textVariants}>
            Enhanced equipment reliability, streamlined operations, and provided robust guidelines for staff training and compliance.
            </motion.p>
          </motion.div>
          
        </div>
        <div className='h-auto   border-l-2 border-gray-200'>
        <motion.div
            ref={ref2}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
            variants={staggerContainer}
            className='m-[10vw] font-[icomoon]'
          >
            <motion.h1 variants={textVariants} className='capitalize text-3xl font-bold'>
              GAS DEHYDRATION UNIT
            </motion.h1>
            <motion.p variants={textVariants} className='my-[30px]'>
              Provided detailed engineering scope & procurement support for a gas dehydration unit. The purpose of a glycol dehydration unit is to remove water from natural gas and natural gas liquids when produced from a reservoir.
            </motion.p>
            <motion.p variants={textVariants} className='my-[30px]'>
              Involved in designing process & design data with equipment datasheets, communicated with vendors based in the USA for procurement, and actively participated in the equipment purchase with the client.
            </motion.p>
            <motion.p variants={textVariants}>
              Prepared engineering drawings & documents for all disciplines, including Process, Mechanical, Piping, and CSA.
            </motion.p>
          </motion.div>

        </div>
        <div className='hidden sm:block h-full '>
          <img className=' w-full h-full object-cover' src={Picture6} alt='no redner'/>
        </div>
        <div className='hidden sm:block h-full '>
         <img className=' w-full h-full object-cover' src={Picture5} alt='no redner'/>
        </div>
        <div className=' h-auto  border-r-2 border-gray-200'>
        <motion.div
            ref={ref3}
            initial="hidden"
            animate={isInView3 ? "visible" : "hidden"}
            variants={staggerContainer}
            className='m-[10vw] font-[icomoon]'
          >
            <motion.h1 variants={textVariants} className='capitalize text-3xl font-bold'>
              YIBAL LASER SCAN MODELING
            </motion.h1>
            <motion.p variants={textVariants} className='my-[30px]'>
              Handled large-scale laser scan data and incorporated all discipline’s existing laser scan details into the 3D Model. Referred to existing deliverables and documents to update the 3D model and transform it into an Intelligent model.
            </motion.p>
            <motion.p variants={textVariants}>
              The approximate laser scan area is 500′ x 500′, which was then converted to a 3D Model. Prepared all 3D Model reports from software without any manual intervention.
            </motion.p>
          </motion.div>

        </div>
        <div className=' h-auto  border-l-2 border-gray-200'>
        <motion.div
            ref={ref4}
            initial="hidden"
            animate={isInView4 ? "visible" : "hidden"}
            variants={staggerContainer}
            className='m-[10vw] font-[icomoon]'
          >
            <motion.h1 variants={textVariants} className='capitalize text-3xl font-bold'>
              INCINERATOR PACKAGE
            </motion.h1>
            <motion.p variants={textVariants} className='my-[30px]'>
              Detailed design & engineering of Incineration packages and utility area. Designing high end structure and arranged all equipment in critical existing area.
            </motion.p>
            <motion.p variants={textVariants}>
              Prepared for all disciplines including Process, Mechanical, Piping and CSA drawings and documents. All Equipment designed in area 130’ X 50’.
            </motion.p>
          </motion.div>

        </div>
        <div className=' h-full hidden sm:block '>
         <img className=' w-full h-full object-cover' src={Picture4} alt='no redner'/>
        </div>
        <div className=' h-full hidden sm:block '>
         <img className=' w-full h-full object-cover' src={Picture3} alt='no redner'/>
        </div>
        <div className=' h-auto  border-r-2 border-gray-200'>
        <motion.div
            ref={ref5}
            initial="hidden"
            animate={isInView5 ? "visible" : "hidden"}
            variants={staggerContainer}
            className='m-[10vw] font-[icomoon] '
          >
            <motion.h1 variants={textVariants} className='capitalize text-3xl font-bold'>
              GAS DE-HYDRATION UNIT EXPANSION
            </motion.h1>
            <motion.p variants={textVariants} className='my-[30px]'>
              Provided detailed engineering expansion scope and procurement support for gas dehydration. The purpose of a glycol dehydration unit is to remove water from natural gas and natural gas liquids when produced from a reservoir.
            </motion.p>
            <motion.p variants={textVariants} className='my-[30px]'>
              We were involved in designing process and design data with equipment datasheets. We also communicated with a vendor based in the USA for procurement of equipment and actively participated in the purchase of available equipment along with the client.
            </motion.p>
            <motion.p variants={textVariants} className='my-[30px]'>
              Additionally, we were responsible for the preparation of process, plant, and mechanical drawings & documents, as well as the generation of a 3D model.
            </motion.p>
          </motion.div>

        </div>
        <div className=' h-auto  border-2 border-gray-200'>
            <motion.div 
            ref={ref6}
            initial="hidden"
            animate={isInView6 ? "visible" : "hidden"}
            variants={staggerContainer}
            className='m-[10vw] font-[icomoon]'>
                <motion.h1 variants={textVariants} className='capitalise text-3xl font-bold '>OIL & WATER CONSOLE
                </motion.h1>
                <motion.h1 variants={textVariants} className='my-[30px]'>Standardize Utility consoles by preparing detailed design solution for multiple project capacity. The purpose of standardizing console is to minimize engineering timeline by preparing ‘ready to execute engineering solution.’</motion.h1>
                
                
              </motion.div>

        </div>
        <div className=' h-full hidden sm:block '>
         <img className=' w-full h-full object-cover' src={Picture2} alt='no redner'/>
        </div>
        
        <div className=' h-full hidden sm:block '>
         <img className=' w-full h-full object-cover' src={Picture1} alt='no redner'/>
        </div>
        <div className=' h-auto border-t-2 border-gray-200'>
        <motion.div
            ref={ref7}
            initial="hidden"
            animate={isInView7 ? "visible" : "hidden"}
            variants={staggerContainer}
            className='m-[10vw] font-[icomoon] h-auto'
          >
            <motion.h1 variants={textVariants} className='capitalize text-3xl font-bold'>
              GAS COMPRESSOR UNIT
            </motion.h1>
            <motion.p variants={textVariants} className='my-[30px]'>
              Detailed design and engineering of a Gas Compressor unit, skid package with a positive displacement compressor, and separators to compress natural gas.
            </motion.p>
            <motion.p variants={textVariants} className='my-[30px]'>
              Designing the skid package with limited space on-site, we performed stress analysis and dynamic analysis for all process lines. The skid package area measures nearly 50′ X 42′.
            </motion.p>
            <motion.p variants={textVariants}>
              We also prepared engineering drawings and documents for all disciplines, including Process, Mechanical, Piping, and CSA.
            </motion.p>
          </motion.div>
          
        </div>
        

      </div>
      
    </div>
  )
}
//module.exports={...}

export default Projects
