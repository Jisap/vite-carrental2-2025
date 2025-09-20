import blogdata from '../data/Blog.json';
import { motion } from 'framer-motion';
import BlogComponent from '../Components/Blog';


const Blog = () => {

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
            - BLOG & NEWS -
          </motion.h6>
          <motion.h1 className='text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600' variants={titleVariants}>
            <span className='text-white font-bricolage'>
              {'Latest'.split('').map((char, index) => (<motion.span key={`char-luxury-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>{char}</motion.span>))}
            </span>
            {' '}
            {'News'.split('').map((char, index) => (<motion.span key={`char-car-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>{char}</motion.span>))}
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {blogdata.map((blog) => (
          <motion.div key={blog.id} className='blog-item bg-[#1e1f22] group' variants={itemVariants}>
            <div className='blog-image overflow-hidden'>
              <img
                src={blog.image}
                alt={blog.name}
                className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300'
              />
            </div>
            <div className='blog-content p-5 py-8'>
              <div className='ate bg-red-600 w-fit px-4 py-0.5 text-md text-white font-bricolage rounded-md mb-3'>
                {blog.date}
              </div>
              <h4 className='text-lg lg:text-2xl font-bricolage text-white font-semibold uppercase'>
                {blog.name}
              </h4>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Blog