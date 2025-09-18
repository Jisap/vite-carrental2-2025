import React from 'react'
import { Swiper } from 'swiper/react'

const Testimonials = () => {
  return (
    <div className='testimonials lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
      <div className='our-service-content mb-20 text-center text-white'>
        <p className='uppercase text-sm tracking-[5px] text-primary mb-2'>
          - Testimonials -
        </p>

        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Trusted by Thousands <span className='text-primary font-bricolage'>of Ridelux.</span>
        </h2>
      </div>

      <Swiper>
        
      </Swiper>
    </div>
  )
}

export default Testimonials