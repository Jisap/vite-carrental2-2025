import { motion } from 'framer-motion';

const ContactCard = ({ iconClass, title, text, variants, whileHover }) => {
  return (
    <motion.div
      className='contact-item w-full group overflow-hidden relative bg-[#222222] p-12 text-white rounded-xl'
      variants={variants}
      whileHover={whileHover}
    >
      <i className={`${iconClass} text-red-600 text-5xl group-hover:text-white transition-colors duration-300`}></i>
      <h4 className='font-bricolage text-2xl lg:text-4xl font-semibold mt-8 mb-2 group-hover:text-white'>
        {title}
      </h4>
      <p className='text-[#999] text-base xl:text-xl group-hover:text-white'>
        {text}
      </p>
      <i className={`${iconClass} contact-item-icon`}></i>
    </motion.div>
  );
};

export default ContactCard;