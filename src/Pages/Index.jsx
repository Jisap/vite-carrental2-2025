import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import { Autoplay, Pagination } from 'swiper/modules'

const Index = () => {
  return (
    <>
      {/* Hero */}
      <div className='hero w-[100%] h-screen overflow-hidden'>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          speed={1500}
          className='hero-swiper w-full h-full'
        >
          <SwiperSlide>
            <div className='hero-slide hero-slide1 w-full h-full flex items-center px-[12%]'>
              <div className='hero-content text-white lg:w-[60%]'>
                <span className='font-bricolage text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm'>
                  - Premium
                </span>
                <h1 className='hero-title font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl xxl:text-8xl font-medium my-3'>
                  Feel the Speed, Live the Luxury
                </h1>
                <p className='hero-subtitle my-2 text-lg lg:text-2xl font-bricolage text-gray-300'>
                  You can Rent any of our Luxurious Cars.
                </p>
                <p className='hero-pere my-5 xl:my-7 lg:w-[60%] text-gray-300'>
                  ridelux makes car rental simple, fast, and affordable. Choose from a wide range of vehicles to suit your journey.
                </p>
                <div className='hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8'>
                  <button className='default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 font-bricolage rounded-full transform hover:-translate-y-1'>
                    View More &nbsp; <i className='bi bi-arrow-up-right'></i>
                  </button>
                  <button className='default-btn border py-3 px-5 lg:px-7 font-bricolage rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1'>
                    View More &nbsp; <i className='bi bi-arrow-up-right'></i>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Index