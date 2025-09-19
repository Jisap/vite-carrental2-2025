import blogData from '../../Blog.json';
import { motion } from 'framer-motion';

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

  return (
    <div className='blog lg:px-[12%] px-[8%] py-[50px] lg:py-[90px] overflow-hidden'>
      <motion.div
        className='blog-content mb-20 text-center text-white'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.p variants={itemVariants} className='uppercase text-sm tracking-[5px] text-primary mb-2'>
          - Our Blog -
        </motion.p>

        <motion.h2 variants={itemVariants} className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Latest <span className='text-primary font-bricolage'>News.</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {blogData.slice(0,3).map((blog) => (
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
    </div>
  )
}

export default Blog