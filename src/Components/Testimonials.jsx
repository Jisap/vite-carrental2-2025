import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { test1, test2, test3 } from '../assets'
import { motion } from 'framer-motion'

// --- REFACTORIZACIÓN (DRY): Datos de los testimonios ---
// Se mueven los datos a un array de objetos para generar los slides dinámicamente.
const testimonialsData = [
  {
    id: 1,
    quote: "The driver service option made our business trip stress-free. Highly recommended the premium rides.",
    author: "Aaron P",
    title: "Corporate Client",
    image: test1,
    rating: 5,
  },
  {
    id: 2,
    quote: "Renting a luxury car was a breeze. The vehicle was immaculate and the customer service was top-notch.",
    author: "Jessica M",
    title: "Vacationer",
    image: test2,
    rating: 4,
  },
  {
    id: 3,
    quote: "An unforgettable experience for our special occasion. The selection of cars is incredible. Will definitely be back!",
    author: "David L",
    title: "Event Planner",
    image: test3,
    rating: 5,
  },
];

// --- CORRECCIÓN DE LOOP EN SWIPER ---
// Swiper necesita suficientes slides para que el loop funcione correctamente,
// específicamente al menos el doble de `slidesPerView`. Con 3 slides y `slidesPerView: 3`,
// el loop no se activa. Duplicamos los datos para tener 6 slides.
const loopedTestimonials = [
  ...testimonialsData,
  ...testimonialsData.map(t => ({ ...t, id: t.id + testimonialsData.length }))
];

const Testimonials = () => {
  // --- Variantes de Framer Motion para animaciones ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='testimonials lg:px-[12%] px-[8%] py-[50px] lg:py-[90px] overflow-hidden'>
      <motion.div
        className='our-service-content mb-20 text-center text-white'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.p variants={itemVariants} className='uppercase text-sm tracking-[5px] text-primary mb-2'>
          - Testimonials -
        </motion.p>

        <motion.h2 variants={itemVariants} className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Trusted by Thousands <span className='text-primary font-bricolage'>of Ridelux.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // --- MEJORA: Se añade una velocidad de transición más lenta para un movimiento más suave ---
          speed={1000}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
        >
          {loopedTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {/* --- Se añade h-full y mt-auto para alinear tarjetas de diferente altura --- */}
              <div className='rounded-[30px] bg-[#222] text-left p-8 shadow-md flex flex-col justify-between h-full'>
                <div className='flex items-start justify-between mb-6'>
                  <span className='text-4xl text-white mr-4 fa-solid fa-quote-left'></span>
                  <div className='flex space-x-1'>
                    {/* --- Renderiza las estrellas llenas --- */}
                    {Array(testimonial.rating).fill().map((_, index) => (
                      <span key={index} className='text-white text-xl fa-solid fa-star'></span>
                    ))}
                    {/* --- Renderiza las estrellas vacías --- */} 
                    {Array(5 - testimonial.rating).fill().map((_, index) => (
                      <span key={index + testimonial.rating} className='text-gray-600 text-xl fa-regular fa-star'></span>
                    ))}
                  </div>
                </div>

                <div className='text-white text-lg mb-6 font-bricolage'>
                  {testimonial.quote}
                </div>

                <div className='flex items-center mt-auto'>
                  <div className='curv'>
                    <div className='w-[70px] h-[70px] flex justify-center items-center relative text-[1.2rem] border-2 border-transparent 
                    rounded-full bg-primary transition-all duration-300 group-hover:border-[#222222] group-hover:bg-transparent'>
                      <img src={testimonial.image} alt={testimonial.author} className='rounded-full' />
                    </div>
                  </div>

                  <div className='ps-[110px]'>
                    <p className='font-bricolage text-xl text-primary'>
                      {testimonial.author}
                    </p>
                    <p className='text-[#999] text-sm font-bricolage'>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  )
}

export default Testimonials