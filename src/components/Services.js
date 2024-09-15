import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Picture7 from '../assets/Picture7.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'


const Services = () => {
  
  return (
    <div className='h-auto'>
      <div className='grid grid-cols-2 w-[100vw] h-[50vh]'>
        <div className='ml-[50px] leading-[18vh]'>
          <motion.div initial={{x:-100}}
          animate={{x:20}}
          transition={{duration:1}}
          className='font-[Mona Sans]  mt-10 mb-3 '>
            <div>
              <p className='text-[11vh] '>OurCompany</p>
            </div>
            <p className='text-[15vh] -mt-[50px]'>Services!</p>
          </motion.div>
          <motion.div 
          
          className=' w-[40vw] ml-[30px]  '>
              <p className='font-[Neue Montreal] mb-[20px]  text-[2.2vh] leading-6 font-semibold '>Welcome to JaysEnergy! We are your trusted partners in Design, Engineering, and Project Management. From Basic Engineering Packages to Front-End Engineering Design, from 2D and 3D Modeling Services to Plant Layout Engineering, and from Project Cost Estimation to Vendor Identification, we have got you covered.&nbsp;</p>    

            </motion.div>
            
          </div>
          <div className='relative h-auto'>
             <img className=' h-[40vh] w-[50vw] my-[6.5vw] pr-[2vw] rounded-[100px] object-cover' src={Picture7} alt='no render'/>
        
        
           </div>

        </div>
        <div className='grid grid-cols-3  mt-[100px] pl-[70px]'>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          
          initial={{scale:0}}
          animate={{scale: 1}}
          transition={{duration:1}}
          className='border border-green-400 bg-green-100 rounded-[100px] w-[25vw] h-[50vh] '>
            <div className='m-[1vw]'>
              <img className='w-[3vw] ml-[2vw]' src={icon1} alt='no render'/>
              <h1 className='text-xl font-semibold mt-[1vw] '>Plant Engineering </h1>
              <h4 className=' text-[1vw] mt-[1vw]'>Our core area of expertise is in the development of Basic Engineering Packages (BEP) and Front-End Engineering Design (FEED)</h4>
              <ul className='list-disc text-[1vw] ml-[2vw] mt-[1vw] font-bold'>
                {
                  ["Concept Design",
                    "Front End Engineering Design",
                    "HAZOP Study & SIL Analysis",
                    "Detail Design",
                    "3D Modeling",
                    "Cost Engineering",
                    "Procurement Support",
                    "Piping Stress Analysis"].map((item)=>{
                      return <li>{item}</li>
                    })
                }
              </ul>
            </div>
            
          </motion.div>
          <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:1}} 
          
          className='border border-green-400 bg-green-100 rounded-[100px] w-[25vw] h-[40vh]'>
            <div className='m-[1vw]'>
              <img className='w-[3vw] ml-[2vw] ' src={icon2} alt='no render'/>
              <h1 className='text-xl font-semibold mt-[1vw] '>Drafting Services </h1>
              <h4 className=' text-[1vw] mt-[1vw]'>2D & 3D Modeling Services related to Plant Layout Engineering</h4>
              <ul className='list-disc text-[1vw] ml-[2vw] mt-[1vw] font-bold'>
                {
                  ["Manufactuirng Drawings",
                    "As-Built Drawings",
                    "All types of 2D Drawings Conversion"].map((item)=>{
                      return <li>{item}</li>
                    })
                }
              </ul>

            </div>
          
          </motion.div>
          <motion.div 
          whileHover={{ scale: 1.1 }}
          initial={{scale:0}}
          animate={{scale:1}}
          transition={{duration:1}}
          
          className='border border-green-400 bg-green-100  rounded-[100px] w-[25vw] h-[40vh]'>
            <div className='m-[1vw]'>
              <img className='w-[3vw] ml-[2vw] ' src={icon3} alt='no render'/>
              <h1 className='text-xl font-semibold mt-[1vw] '>Project Engineering & Management Services </h1>
              <h4 className=' text-[1vw] mt-[1vw]'>Our experinced professionals offer project management services ranging from bid documents, vender sourcing, quality management, inspection, and many more.</h4>
              <ul className='list-disc text-[1vw] ml-[2vw] mt-[1vw] font-bold'>
                {
                  ["Project Management",
                    "Document Management"].map((item)=>{
                      return <li>{item}</li>
                    })
                }
              </ul>

            </div>
          
          </motion.div>
          
        </div>
        
      
     
    </div>
  )
}

export default Services