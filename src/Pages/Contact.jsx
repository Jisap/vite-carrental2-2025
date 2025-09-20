import { motion } from 'framer-motion';

const Contact = () => {

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

  // Variantes para la animación del banner y su contenido
  const bannerSectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Inicia 50px abajo y oculto
    visible: {
      opacity: 1,
      y: 0, // Se desliza a su posición original
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delayChildren: 0.4, // Espera a que el banner entre para animar el texto
        staggerChildren: 0.2,
      },
    },
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: {}, // Necesario para que la orquestación funcione desde el padre
    visible: { transition: { staggerChildren: 0.05 } }, // Orquesta la animación de cada letra
  };

  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 12, stiffness: 200 } },
  };

  return (
    <>
      <motion.div
        className='banner-section flex justify-center items-center h-[350px] lg:h-[550px]'
        variants={bannerSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className='banner-section-content text-center z-10'>
          <motion.h6 className='uppercase text-sm lg:text-xl text-white font-bricolage' variants={subtitleVariants}>
            - GET IN TOUCH -
          </motion.h6>
          <motion.h1 className='text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600' variants={titleVariants}>
            <span className='text-white font-bricolage'>
              {'Contact'.split('').map((char, index) => (<motion.span key={`char-luxury-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>{char}</motion.span>))}
            </span>
            {' '}
            {'Us'.split('').map((char, index) => (<motion.span key={`char-car-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>{char}</motion.span>))}
          </motion.h1>
        </div>
      </motion.div>

      <div className='contact-wrapper lg:px-[12%] px-[8%] pb-[150px] mt-30'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-12'>
          
          <div className='contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl'>
            <i className='fa-solid fa-envelope text-red-600 text-5xl group-hover:text-white transition-colors duration-300'></i>
            <h4 className='font-bricolage text-2xl lg:text-4xl font-semibold mt-8 mb-2 group-hover:text-white'> 
              Email Us
            </h4>
            <p className='text-[#999] text-base xl:text-xl group-hover:text-white'>
              redilux@example.com
            </p>
            <i className='fa-solid fa-envelope contact-item-icon'></i>
          </div>

          <div className='contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl'>
            <i className='fa-solid fa-envelope text-red-600 text-5xl group-hover:text-white transition-colors duration-300'></i>
            <h4 className='font-bricolage text-2xl lg:text-4xl font-semibold mt-8 mb-2 group-hover:text-white'> 
              Our address
            </h4>
            <p className='text-[#999] text-base xl:text-xl group-hover:text-white'>
              Vadodara, Water Tower, Office 123
            </p>
            <i className='fa-solid fa-location-dot contact-item-icon'></i>
          </div>

          <div className='contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl'>
            <i className='fa-solid fa-clock text-red-600 text-5xl group-hover:text-white transition-colors duration-300'></i>
            <h4 className='font-bricolage text-2xl lg:text-4xl font-semibold mt-8 mb-2 group-hover:text-white'> 
              Opening Hours
            </h4>
            <p className='text-[#999] text-base xl:text-xl group-hover:text-white'>
              Monday to Friday: 9:00 AM to 5:00 PM
            </p>
            <i className='fa-solid fa-clock contact-item-icon'></i>
          </div>

          <div className='contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl'>
            <i className='fa-solid fa-phone text-red-600 text-5xl group-hover:text-white transition-colors duration-300'></i>
            <h4 className='font-bricolage text-2xl lg:text-4xl font-semibold mt-8 mb-2 group-hover:text-white'>
              Call Us
            </h4>
            <p className='text-[#999] text-base xl:text-xl group-hover:text-white'>
              +91-1234567890
            </p>
            <i className='fa-solid fa-phone contact-item-icon'></i>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact