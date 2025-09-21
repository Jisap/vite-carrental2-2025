import { motion } from 'framer-motion';
import AnimatedLetters from '../Components/AnimatedLetters';
import ContactCard from '../Components/ContactCard';
import FormField from '../Components/FormField';

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

  // Variantes para las tarjetas de contacto
  const contactCardVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: -70,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contactInfo = [
    {
      iconClass: 'fa-solid fa-envelope',
      title: 'Email Us',
      text: 'redilux@example.com',
    },
    {
      iconClass: 'fa-solid fa-location-dot',
      title: 'Our address',
      text: 'Vadodara, Water Tower, Office 123',
    },
    {
      iconClass: 'fa-solid fa-clock',
      title: 'Opening Hours',
      text: 'Monday to Friday: 9:00 AM to 5:00 PM',
    },
    {
      iconClass: 'fa-solid fa-phone',
      title: 'Call Us',
      text: '+91-1234567890',
    },
  ];

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
              <AnimatedLetters text="Contact" variants={letterVariants} baseKey="char-contact" />
            </span>
            <AnimatedLetters text=" Us" variants={letterVariants} baseKey="char-us" />
          </motion.h1>
        </div>
      </motion.div>

      <motion.div
        className='contact-wrapper lg:px-[12%] px-[8%] pb-[150px]'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-12'>
          {contactInfo.map((item, index) => (
            <ContactCard
              key={index}
              iconClass={item.iconClass}
              title={item.title}
              text={item.text}
              variants={contactCardVariants}
              whileHover={{ y: -90, transition: { duration: 0.3 } }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className='lg:px-[12%] px-[8%] pb-[150px]'
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <motion.div variants={itemVariants}>
            <h2 className='text-white text-3xl font-semibold mb-8 text-center'>
              Get In Touch
            </h2>
            <form className='space-y-5 contact-inputs'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <FormField type="text" placeholder="Name" />
                <FormField type="email" placeholder="Email" />
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <FormField type="number" placeholder="Phone" />
                <FormField type="text" placeholder="Subject" />
              </div>

              <FormField
                as="textarea"
                rows="5"
                placeholder="Message"
              />

              <button type="submit" className='bg-primary hover:bg-white hover:text-black text-white font-bricolage px-14 py-4 text-xl rounded-full font-normal transition duration-300'>
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className='w-full h-[400px] rounded-2xl overflow-hidden'
            variants={itemVariants}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.47827013533!2d-3.8443434641882797!3d40.43809861029714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1758390468603!5m2!1ses!2ses" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Contact