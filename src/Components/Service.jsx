import React from 'react'
import { motion } from 'framer-motion'

const servicesData = [
  {
    number: '1.',
    title: 'Daily Car Rental',
    description: 'The best way to rent a car is to book it daily. You can choose the car you want and the date you want to rent it.',
  },
  {
    number: '2.',
    title: 'Monthly Car Rental',
    description: 'If you want to rent a car for a longer period of time, you can choose to rent it monthly.',
  },
  {
    number: '3.',
    title: 'Annual Car Rental',
    description: 'Annual car rental is the best way to rent a car for a long time. You can choose the car you want and the date you want to rent it.',
  },
];

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

const cardVariants = {
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

const ServiceCard = ({ number, title, description }) => (
  <motion.div 
    layout
    variants={cardVariants} 
    className='group relative text-white rounded-[30px] bg-[#222222] w-full px-[40px] pt-[60px] pb-[120px] transition-all duration-300'
  >
    <h5 className='font-semibold text-3xl mb-3 font-bricolage'>{title}</h5>
    <p className='text-[#999] text-lg'>{description}</p>
    <div className='curv bg-[#111111]'>
      <div className='w-[70px] h-[70px] flex justify-center items-center relative text-[1.2rem] border-2 border-transparent 
      rounded-full bg-primary transition-all duration-300 group-hover:border-[#222222] group-hover:bg-transparent'
      >
        {number}
      </div>
    </div>
  </motion.div>
);

const Service = () => {
  return (
    <div className='our-service lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
      <motion.div 
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='our-service-content mb-20 text-center text-white'
      >
        <p className='uppercase text-sm tracking-[5px] text-primary mb-2'>
          - What We Do
        </p>
        
        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Other Services
        </h2>
      </motion.div>

      <div className='our-service-wrapper'>
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className='grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>
      </div> 
    </div>
  )
}

export default Service