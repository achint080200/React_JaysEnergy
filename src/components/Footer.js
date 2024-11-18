import React from 'react'

const Footer = () => {
  return (
    <div className='static font-roboto sm:bottom-0 mt-[100px] h-[50vh]  w-screen sm:h-[50vh] bg-black text-white'>
        <div className='sm:flex sm:justify-between gap-[100px] mx-[60px] pt-7'>
            <div>
                <p className="text-3xl text-white">Jayz Energy</p>
            </div>
            <div>
                <h3>Working with talented and driven people is our passion ;</h3>
                <h3>We'd love to build something great together.</h3>
                <h1 className='text-3xl w-[200px] font-bold my-[30px]  border-b-2 border-white'>Contact Us</h1>
                <h3>Ontario , CANADA</h3>
                <h3>+1 365 476 2442</h3>
                <h3>info@jayzenergy.com</h3>
                <h4 className='mt-[50px] text-[10px]'>©Jayz Energy. All Rights Reserved.</h4>
            </div>
        </div>
        
    </div>
  )
}

export default Footer