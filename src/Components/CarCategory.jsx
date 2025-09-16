import { motion } from 'framer-motion'
import { carctg1, carctg2, carctg3, carctg4 } from '../assets';

const categoriesData = [
  {
    title: 'Luxury Cars',
    subtitle: '40+ Cars Ready',
    image: carctg1,
  },
  {
    title: 'SUVs',
    subtitle: '70+ Cars Ready',
    image: carctg2,
  },
  {
    title: 'Economy Cars',
    subtitle: '100+ Cars Ready',
    image: carctg3,
  },
  {
    title: 'Vans & MPVs',
    subtitle: '34+ Cars Ready',
    image: carctg4,
  },
];

const CategoryItem = ({ title, subtitle, image }) => {
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // easeOutExpo
      },
    },
  };
  return (
    <motion.div 
      variants={itemVariants} 
      className='group bg-[#1e1e23] h-auto md:h-[400px] cart-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full'
    >
      <div className='car-ctg-info p-4'>
        <h4 className='text-white text-3xl xxl:text-4xl font-semibold font-bricolage pb-1'>
          {title}
        </h4>
        <span className='text-gray-400 text-lg xxl:text-xl font-bricolage'>
          {subtitle}
        </span>
      </div>

      <div className='car-ctg w-full h-full'>
        <img
          src={image}
          alt={`Image of ${title}`}
          className='w-full h-full object-cover translate-x-10 translate-y-5 lg:translate-x-0 lg:translate-y-0 transition-transform duration-500 ease-in-out lg:group-hover:scale-110'
        />
      </div>
    </motion.div>
  );
};

const CarCategory = () => {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <div className='car-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='car-categories-content text-center mb-10 lg:mb-14'
      >
        <p className='uppercase text-sm tracking-[5px] mb-2 text-primary'>
          - Car Categories -
        </p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage'>
          Choose the Right Car For your Trip
        </h2>
      </motion.div>

      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {categoriesData.map((category) => (
          <CategoryItem
            key={category.title}
            title={category.title}
            subtitle={category.subtitle}
            image={category.image}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default CarCategory