import about from '../assets/about.jpg'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambiado a 'false' para que la animación se repita
    threshold: 0.2,    // Activar cuando el 20% del elemento esté visible
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden'); // Vuelve al estado inicial cuando no está visible
    }
  }, [controls, inView]);

  // Variantes para el contenedor principal para escalonar las animaciones de los hijos
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Variante para la imagen (lado izquierdo)
  const imageVariants = {
    hidden: { opacity: 0, x: -100 }, // imagen sale por la izquierda
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Variante para los elementos de texto (lado derecho)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, //textos salen desde abajo hacia arriba
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className='about text-white lg:px-[10%] px-[8%] py-[50px] lg:py-[90px] overflow-hidden'>
      <motion.div 
        ref={ref} 
        initial="hidden" 
        animate={controls} 
        variants={containerVariants} 
        className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'
      >
        {/* Imagen (lado izquierdo) */}
        <motion.div 
          variants={imageVariants} 
          className='relative w-auto sm:h-[450px] lg:h-[600px]'
        >
          <img 
            src={about} 
            alt='About' 
            className='w-full h-full rounded-3xl object-contain md:object-cover' 
          />
          <div className='curv'>
            <div className='about-item-curv section-item-curv'>
              <i className='ri-play-line text-xl'></i>
            </div>
          </div>
        </motion.div>

        {/* Texto (lado derecho) */}
        <motion.div variants={containerVariants}>
          <motion.p 
            variants={itemVariants} 
            className='uppercase text-xs md:text-sm tracking-widest text-[#e8021f] mb-2'
          >
            - Rentax
          </motion.p>
          <motion.h2 
            variants={itemVariants} 
            className='text-3xl md:text-5xl font-bold mb-3 font-bricolage'
          >
            We Are More Than <br/> <span className='text-[#e8021f] font-bricolage'>A Car Rental Company</span> 
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className='text-gray-400 leading-relaxed my-6 text-sm lg:text-base'
          >
            Our goal is to provide you with the best car rental experience. We offer a wide range of vehicles to suit your needs, whether you're looking for a luxurious SUV, a sporty sedan, or a compact car. We're committed to providing you with the best possible service and experience.
          </motion.p>

          <motion.div 
            variants={containerVariants} 
            className='space-y-4 mb-10'
          >
            <motion.div 
              variants={itemVariants} 
              className='flex items-center gap-4'
            >
              <div className='w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]'>
                <i className='ri-check-double-line'></i>
              </div>
              <span className='text-white'>
                Sports and Luxury Cars
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className='flex items-center gap-4'>
              <div className='w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]'>
                <i className='ri-check-double-line'></i>
              </div>
              <span className='text-white'>
                Economy Cars
              </span>
            </motion.div>
          </motion.div>

          <motion.button variants={itemVariants} className='bg-[#e8021f] text-white py-4 px-8 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-colors duration-300'>
            Read More <i className='ri-arrow-right-line'></i>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About