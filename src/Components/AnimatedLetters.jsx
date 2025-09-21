import { motion } from 'framer-motion';

const AnimatedLetters = ({ text, variants, baseKey }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${baseKey}-${index}`}
          variants={variants}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedLetters;