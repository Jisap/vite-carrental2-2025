import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { test1 } from '../assets'

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

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1440: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className='rounded-[30px] bg-[#222] text-left p-8 shadow-md flex flex-col justify-between'>
            <div className='flex items-start justify-between mb-6'>
              <span className='text-4xl text-white mr-4 fa-solid fa-quote-left'></span>
              <div className='flex space-x-1'>
                {Array(5).fill().map((_, index) => (
                  <span key={index} className='text-white text-xl fa-solid fa-star'></span>
                ))}
              </div>
            </div>

            <div className='text-white text-lg mb-6 font-bricolage'>
              The driver service option made our bussines trip stress-free. Highly recommended the premium rides.
            </div>

            <div className='flex items-center mt-6'>
              <div className='curv'>
                <div className='w-[70px] h-[70px] flex justify-center items-center relative text-[1.2rem] border-2 border-transparent 
                rounded-full bg-primary transition-all duration-300 group-hover:border-[#222222] group-hover:bg-transparent'>
                  <img src={test1} alt="" className='rounded-full' />
                </div>
              </div>

              <div className='ps-[110px]'>
                <p className='font-bricolage text-xl text-primary'>
                  Aaron P
                </p>
                <p className='text-[#999] text-sm font-bricolage'>
                  Corporate Client
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonials