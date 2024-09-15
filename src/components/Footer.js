import React from 'react'

const Footer = () => {
  return (
    <div className='static bottom-0 mt-[100px] w-screen h-[50vh] bg-black text-white'>
        <div className='flex justify-between gap-[100px] mx-[60px] pt-7'>
            <div>
                <p className="text-3xl text-white">JaysEnergy</p>
            </div>
            <div>
                <h3>Working with talented and driven peaople is our passion ;</h3>
                <h3>We'd love to build something great together.</h3>
                <h1 className='text-3xl w-[200px] font-bold my-[30px]  border-b-2 border-white'>Contact Us</h1>
                <h3>Ontario , CANADA</h3>
                <h3>+1 564 564 7367</h3>
                <h4 className='mt-[80px] text-[10px]'>©JaysEnergy. All Rights Reserved.</h4>
            </div>
        </div>
        
    </div>
  )
}

export default Footer