import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="w-screen h-auto text-white font-[Sans]">
      {/* Hero Section */}
      <div className="relative h-screen bg-[url('https://mppesp.com/wp-content/uploads/2023/11/pexels-loic-manegarium-3855962-scaled.jpg')] bg-cover bg-center flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-7xl font-bold text-white"
          >
            Precision, Performance, Perfection
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl mt-4"
          >
            Our Design Philosophy
          </motion.p>
        </motion.div>
      </div>

      {/* Why MPP Section */}
      <div className="flex justify-center items-center py-20 bg-[#101010]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center w-[60%]"
        >
          <h2 className="text-4xl font-bold border-b-2 pb-2 border-green-400 mb-6">
            Why JayzEnergy?
          </h2>
          <p className="text-lg">
            Because we Manage Projects Professionally
          </p>
          <p className="text-lg mt-4">
            We are value-driven professionals who believe in collaboration. We work closely with our clients, listening to their ideas and goals, to ensure that our designs align perfectly with their vision.
          </p>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col items-center bg-[#1f1f1f] py-20 text-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-[60%] mb-12"
        >
          <h2 className="text-5xl font-bold border-b-2 pb-2 border-green-400 mb-6">
            Our Services
          </h2>
          <p className="text-lg">
            We provide design solutions for a wide range of industries, including but not limited to oil and gas, petrochemical, manufacturing, chemical, water, and wastewater management.
          </p>
        </motion.div>

        {/* Example Service Cards */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-8 flex flex-col gap-5 w-[80%]">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-white text-black rounded-lg p-6"
            >{
              item === 1 && <><img
              src={`https://media.istockphoto.com/id/1185246554/photo/electricity-engineer-and-his-supervisor-at-industrial-facility.jpg?s=612x612&w=0&k=20&c=MkcXS-aSok4AHJbppJJn8tJwMfyEc-dCN51g06HvmUs=`}
              alt="Service"
              className="rounded-t-lg w-full h-[200px] object-cover"
            /></>
            }
            {
              item === 2 && <><img
              src={`https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Service"
              className="rounded-t-lg w-full h-[200px] object-cover"
            /></>
            }
            {
              item === 3 && <><img
              src={`https://plus.unsplash.com/premium_photo-1664301210337-decaba308a41?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt="Service"
              className="rounded-t-lg w-full h-[200px] object-cover"
            /></>
            }
              
              <h3 className="text-2xl font-bold mt-4">Service {item}</h3>{
                item === 1 &&  <><h1 className='text-xl font-semibold mt-[1vw] '>Plant Engineering </h1>
                <h4 className=' sm:text-[1vw] mt-[1vw]'>Optimizing plant layouts and designs to ensure smooth process flow, safety, and reliability. Our designs improve productivity, minimize downtime, and support long-term operational goals.</h4></>
                
              }
              {
                item === 2 && <><h1 className='text-xl font-semibold mt-[1vw] '>Operational Excellence </h1>
              <h4 className=' sm:text-[1vw] mt-[1vw]'>We help our clients streamline operations with lean manufacturing principles, ensuring efficient processes, minimized waste, and timely project execution.
              </h4></>
              }
              {
                item === 3 && <>
                <h1 className='text-xl font-semibold mt-[1vw] '>Regulatory Compliance </h1>
                <h4 className=' sm:text-[1vw] mt-[1vw]'>We ensure full adherence to Canadian regulatory standards across industries, from environmental regulations to safety protocols, giving you peace of mind throughout the project lifecycle.</h4></>
              }
              
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold">Our Promise</h1>
          <p className="text-xl mt-4">
            We deliver innovative and efficient engineering design solutions tailored to the unique needs of each project.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;