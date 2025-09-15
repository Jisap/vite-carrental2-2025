import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'

import heroSlideImg1 from '../assets/hero-slide-1.webp'
import heroSlideImg2 from '../assets/hero-slide-2.webp'
import heroSlideImg3 from '../assets/hero-slide-3.webp'

const heroSlidesData = [
  {
    id: 1,
    image: heroSlideImg1,
    title: "Feel the Speed, Live the Luxury",
    subtitle: "You can Rent any of our Luxurious Cars.",
    description: "ridelux makes car rental simple, fast, and affordable. Choose from a wide range of vehicles to suit your journey."
  },
  {
    id: 2,
    image: heroSlideImg2,
    title: "Drive Your Way, Anytime, Anywhere",
    subtitle: "You can Rent any of our Luxurious Cars.",
    description: "Experience premium car rentals with comfort, style, and affordability-perfect fir roads trips, bussiness travel, or luxury weekend getaways."
  },
  {
    id: 3,
    image: heroSlideImg3,
    title: "Elegance on Wheels, Wherever You Go",
    subtitle: "You can Rent any of our Luxurious Cars.",
    description: "Every car has a unique design, and we offer a wide range of options to suit your needs. Whether you're looking for a luxurious SUV, a sporty sedan, or a compact car, we've got you covered."
  }
];

const Hero = () => {
  return (
    <div className='hero w-[100%] h-screen overflow-hidden'>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1500}
        className='hero-swiper w-full h-full'
      >
        {heroSlidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className='hero-slide w-full h-full flex items-center px-[12%]' 
              style={{ 
                '--hero-bg-image': `url(${slide.image})` // Establece la imagen de fondo mediante CSS que se aplica a la clase hero-slide
              }}
            >
              <div className='hero-content text-white lg:w-[60%]'>
                <span className='font-bricolage text-xs sm:text-sm lg:text-md uppercase tracking-widest bg-[#e8021f] px-2 py-1 rounded-sm'>
                  - Premium
                </span>
                <h1 className='hero-title font-bricolage text-3xl sm:text-5xl md:text-6xl xl:text-7xl xxl:text-8xl font-medium my-3'>
                  {slide.title}
                </h1>
                <p className='hero-subtitle my-2 text-lg lg:text-2xl font-bricolage text-gray-300'>{slide.subtitle}</p>
                <p className='hero-pere my-5 xl:my-7 lg:w-[60%] text-gray-300'>{slide.description}</p>
                <div className='hero-btns flex flex-wrap gap-4 mt-5 lg:mt-8'>
                  <button className='default-btn bg-[#e8021f] transition-all hover:bg-white hover:text-black py-3 px-5 lg:px-7 font-bricolage rounded-full transform hover:-translate-y-1'>View More &nbsp; <i className='bi bi-arrow-up-right'></i></button>
                  <button className='default-btn border py-3 px-5 lg:px-7 font-bricolage rounded-full transition-all hover:bg-[#e8021f] hover:border-transparent transform hover:-translate-y-1'>Rent Now &nbsp; <i className='bi bi-arrow-up-right'></i></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero