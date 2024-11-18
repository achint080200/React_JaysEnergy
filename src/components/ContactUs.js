import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  // Formik for form handling
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      company: '',
      summary: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      company: Yup.string().required('Company name is required'),
      summary: Yup.string().required('Project summary is required')
    }),
    onSubmit: (values) => {
      setIsSubmitted(true); // Set the submitted state to true
      // Simulate form submission or send data to Firebase, etc.
      console.log(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className='mt-[200px] font-roboto'>
      <div className='w-[100vw] h-auto mb-[100px] sm:h-[60vh]  font-[Test_Founders_Grotesk_X-Condensed] '>
        {["Let's Start", "A project together"].map((item, index) => (
          <motion.h1
            key={index}
            initial={{ x: -100 }}
            animate={{ x: 50 }}
            transition={{ s: 2000 }}
            className='uppercase text-3xl sm:text-8xl sm:leading-[7vw] tracking-tight font-semibold'
          >
            {item}
          </motion.h1>
        ))}
      </div>
      <div className='sm:flex gap-[300px] mx-[60px]'>
        <div>
          <h1 className='text-3xl font-semibold mb-1 sm:mb-[100px]'>Inquiries:</h1>
          <h3 className='sm:w-[150px] mb-1'>Please fill out the form on the right or email us directly.</h3>
        </div>
        <div>
          {isSubmitted ? (
            <div className='text-green-600 text-xl'>
              Thank you! Your form has been successfully submitted.
            </div>
          ) : (
            <form onSubmit={formik.handleSubmit} className='sm:flex flex-col gap-y-2 '>
              <label className='-mb-2'>Name: *</label>
              <input
                className={`border ${formik.errors.name && formik.touched.name ? 'border-red-400' : 'border-green-400'}  w-[70vw] sm:w-[600px] py-0.5 px-2`}
                type='text'
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder='Enter your name'
              />

              <label className='-mb-2'>Email Address: *</label>
              <input
                className={`border ${formik.errors.email && formik.touched.email ? 'border-red-400' : 'border-green-400'} w-[70vw] sm:w-[600px] py-0.5 px-2`}
                type='email'
                name='email'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder='Enter your email'
              />

              <label className='-mb-2'>Subject: *</label>
              <input
                className={`border ${formik.errors.subject && formik.touched.subject ? 'border-red-400' : 'border-green-400'} w-[70vw] sm:w-[600px] py-0.5 px-2`}
                type='text'
                name='subject'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
                placeholder='Enter the subject'
              />

              <label className='-mb-2'>Company: *</label>
              <input
                className={`border ${formik.errors.company && formik.touched.company ? 'border-red-400' : 'border-green-400'} w-[70vw] sm:w-[600px] py-0.5 px-2`}
                type='text'
                name='company'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.company}
                placeholder='Enter company name'
              />

              <label className='-mb-2'>Project Summary: *</label>
              <textarea
                className={`border ${formik.errors.summary && formik.touched.summary ? 'border-red-400' : 'border-green-400'} w-[70vw] sm:w-[600px] h-[15vh] py-0.5 px-2`}
                name='summary'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.summary}
                placeholder='Provide a summary of the project'
              />

              <button
                type='submit'
                className='px-4 py-2 border border-black rounded-lg mt-3 text-white bg-black'
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;