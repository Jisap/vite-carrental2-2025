import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import { Autoplay, Pagination } from "swiper/modules"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import { 
  about, 
  carctg1, 
  carctg2, 
  carctg3, 
  carctg4, 
  test1, 
  test2, 
  test3, 
  test4, 
  test5 
} from "../assets"
import AboutComponent from "../Components/About"
import Car from "../Components/Cars"
import CarCategory from "../Components/CarCategory"
import Banner from "../Components/Banner"



const About = () => {

  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null);

  const openCalendar = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  }

  const [returnDate, setReturnDate] = useState(null);
  const returnPickerRef = useRef(null);

  const openReturnCalendar = () => {
    if (returnPickerRef.current) {
      returnPickerRef.current.setFocus();
    }
  }

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
        animate="visible"
      >
        <div className='banner-section-content text-center z-10'>
          <motion.h6 className='uppercase text-sm lg:text-xl text-white font-bricolage' variants={subtitleVariants}>
            - RIDELUX -
          </motion.h6>
          <motion.h1 className='text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600' variants={titleVariants}>
            <span className='text-white font-bricolage'>
              {"About".split("").map((char, index) => (
                <motion.span key={`char-about-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>
                  {char}
                </motion.span>
              ))}
            </span>
            {' '}
            {"Us".split("").map((char, index) => (
              <motion.span key={`char-us-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </motion.div>

      <div>
        <AboutComponent />
        <Banner />
        <CarCategory />
      </div>
    </>
  )
}

export default About