import React, { useState, useRef } from 'react'
import cardata from '../../Cars.json'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const CarDetails = () => {

  // --- Variantes de Framer Motion para animaciones ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { id } = useParams();
  const car = cardata.find(car => car.id === Number(id));

  const [openIndex, setOpenIndex] = useState(null);
  const [ShowModal, setShowModal] = useState(false);
  const [showSucessModal, setShowSucessModal] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Si el index sobre el que pulsamos = openIndex (ya esta abierto ) no se hace nada ,  pero sino es asi seteamos openIndex con ese index
  };

  const rentalConditions = [
    {
      title: 'Contract and Annexes',
      description: ' In addition to the car rental contract to be signed at the time of delivery, a credit card is required from our individual customers. We request our commercial customers to submit their company documents (tax plate, signature slip, ID photocopy).'
    },
    {
      title: 'Driving License and Age',
      description: "The tenant must be 25 years of age and have a 5-years local or valid international driving license for group A, B, C, D vehicles at the time of the rental agreement."
    },
    {
      title: 'Prices',
      description: 'Prices include maintenance and insurance guarantee against third parties (within legal policy limits). 18% VAT (Value Added Tax) is not included. Fuel belongs to the renter. Chauffeur driven service and translator guide are available upon request.'
    },
    {
      title: 'Payments',
      description: 'The total rental fee is collected at the time of rental. The shortest rental period is 72 hours. A delay beyond 3 hours is counted as a full day. Deposit required from valid credit card.'
    },
    {
      title: 'Delivery',
      description: 'Delivery is free where our company is located. For others cities, delivery fees apply at $0.2km. Prior notice needed for hotel, port, or workplace delivery.'
    },
    {
      title: 'Traffic Fines',
      description: 'Traffic fines are the customers responsability. Detainment time is counted in the rental period. Terms may change without notice.'
    }
  ];

  // --- REFACORIZACIÓN (DRY): Lista de detalles del coche ---
  // Creamos un array para no repetir el código de cada <li>
  const carDetailsList = [
    { icon: 'ri-door-line', label: 'Doors', value: car?.seats },
    { icon: 'ri-user-line', label: 'Passengers', value: car?.seats },
    { icon: 'ri-settings-2-line', label: 'Transmission', value: car?.transmission },
    { icon: 'ri-suitcase-line', label: 'Luggage', value: car?.type },
    { icon: 'ri-snowflake-line', label: 'Air Condition', value: 'Yes' },
    { icon: 'ri-user-star-line', label: 'Age', value: '25' },
  ];

  // --- REFACORIZACIÓN (DRY): Lista de información general ---
  const generalInfoItems = [
    '24/7 Roadside Assistance',
    'Free Cancellation & Return',
    'Pay at arrival'
  ];

  // --- REFACORIZACIÓN (DRY): Campos del formulario ---
  // Definimos los campos en un array para generar el formulario dinámicamente
  const formFields = [
    { name: 'fullName', type: 'text', placeholder: 'Full Name' },
    { name: 'email', type: 'email', placeholder: 'Enter your Email' },
    { name: 'phone', type: 'text', placeholder: 'Enter your Number', required: true },
    { name: 'carType', type: 'select', placeholder: 'Choose Your Car Type', options: ['Lamborghini', 'Roll Royce', 'Bentley'], required: true },
    { name: 'pickupLocation', type: 'select', placeholder: 'Pick-Up Location', options: ['Dubai', 'AbuDhabi', 'Qatar'], required: true },
  ];

  // --- REFACORIZACIÓN (DRY): Lógica del DatePicker ---
  // Unificamos la lógica para abrir los calendarios
  const openDatePicker = (ref) => {
    ref.current?.setFocus();
  };

  if (!car) {
    return (
      <div className='text-white justify-center text-center mt-20'>
        Car Not Found
      </div>
    )
  }

  const [pickUpDate, setPickUpDate] = useState(null); // Fecha de recogida
  const [dropOffDate, setDropOffDate] = useState(null); // Fecha de devolución
  const pickUpPickerRef = useRef(null);
  const dropOffPickerRef = useRef(null);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className='bg-[#121212] text-white font-sans'
      >
        {/* Car Image & Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative h-[70vh] bg-cover bg-center flex items-end px-[12%] py-20'
          style={{ backgroundImage: `url(${car.image})` }}
        >
          {/* Overlay para mejorar la legibilidad del texto */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent'></div>
          <div className='relative z-10'>
            <motion.h6 
              variants={itemVariants} 
              className='uppercase text-xl tracking-widest text-red-500 font-bricolage'
            >
              {car.type}
            </motion.h6>
            <motion.h1 
              variants={itemVariants} 
              className='text-4xl lg:text-6xl font-bold font-bricolage'>
              {car.name}
            </motion.h1>
          </div>
        </motion.div>

        {/* --- Contenido principal --- */}
        {/* Se mueve el contenido dentro del div con fondo para consistencia */}
        <div className='flex flex-col lg:flex-row gap-10 px-[12%] py-14 lg:items-start'>
        {/* General Information */}
          {/* Columna izquierda */}
          <div className='flex-1 space-y-12'>
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
              <h2 className='text-2xl font-bold text-white mb-4 font-bricolage'>
                General Information
              </h2>
              
              <p className='text-gray-400 text-sm mb-4'>
                Enjoy a premiun car rental with experience with top-notch services and flexible conditions.
              </p>

              <motion.ul 
                variants={containerVariants} 
                className='space-y-2 text-sm text-gray-300'
              >
                {generalInfoItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    variants={itemVariants} 
                    className='flex items-center hover:text-white transition'
                  >
                    <i className='ri-check-line text-red-600 mr-2'></i>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>

            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              <h2 className='text-2xl text-white font-bold mb-4 font-bricolage'>
                Rental Conditions
              </h2>

              <div className='space-y-4'>
                {rentalConditions.map((item, index) => (
                  <motion.div 
                    variants={itemVariants} 
                    key={index} 
                    className='bg-[#1a1a1a] text-white rounded-lg overflow-hidden'
                  >
                    <div 
                      onClick={() => toggleAccordion(index)} 
                      className='cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-[#2a2a2a] transition duration-300'
                    >
                      <span className='font-medium text-sm'>
                        {index + 1}. {item.title}
                      </span>
                      <motion.i
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`ri-arrow-down-s-line text-red-600`}
                      ></motion.i>
                    </div>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { opacity: 1, height: 'auto' },
                            collapsed: { opacity: 0, height: 0 }
                          }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          className='px-6 text-sm text-gray-400 overflow-hidden'
                        >
                          <div className='py-4'>{item.description}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Columna derecha */}
          <motion.div
            variants={itemVariants}
            className='w-full lg:w-[320px] space-y-6 bg-[#1a1a1a] rounded-2xl p-6 shadow-md h-fit sticky top-28'>
            <div className='text-center'>
              <p className='text-5xl font-bold text-white font-bricolage'>
                ${car.price} <span className='text-sm font-medium font-bricolage text-white'>/Rent Per Day</span>
              </p>
            </div>

            <motion.ul 
              variants={containerVariants} 
              className='space-y-3 text-sm text-gray-300'
            >
              {carDetailsList.map((detail, index) => (
                <motion.li 
                  key={index} 
                  variants={itemVariants} 
                  className='flex justify-between'
                >
                  <span>
                    <i className={`${detail.icon} text-red-600 mr-2`}></i>
                    {detail.label}
                  </span>
                  <span>{detail.value}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className='flex gap-3'>
              <button onClick={() => setShowModal(true)} className='flex-1 bg-red-600 text-white text-[20px] rounded-xl hover:bg-red-700 transition font-bricolage py-3'>
                Rent Now
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {ShowModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4'
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className='bg-[#0d0d0d] border border-red-600/30 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden'
              onClick={(e) => e.stopPropagation()}
            >
              <div className='bg-red-600 px-6 py-4 flex items-center justify-between'>
                <h2 className='text-xl font-bold text-white font-bricolage'>
                  Book Your Dream CAr
                </h2>

                <button
                  onClick={() => setShowModal(false)}
                  className='text-white text-2xl hover:scale-110 transition'
                >
                  <i className='fa-solid fa-xmark'></i>
                </button>
              </div>

              <form
                className='p-6 space-y-6 my-2 popup-form'
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowSucessModal(true);
                  setShowModal(false);
                }}
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                  {formFields.map((field) => (
                    <div key={field.name} className='relative'>
                      {field.type === 'select' ? (
                        <select
                          name={field.name}
                          required={field.required}
                          className='w-full h-[50px] appearance-none ps-3 bg-[#121212] text-white rounded-md border border-gray-700 focus:border-red-600 outline-none'
                        >
                          <option hidden>{field.placeholder}</option>
                          {field.options.map((option) => (
                            <option key={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          className='w-full h-[50px] ps-3 bg-[#121212] text-white rounded-md border border-gray-700 focus:border-red-600 outline-none'
                        />
                      )}
                    </div>
                  ))}

                  {/* Pick Up Date */}
                  <div
                    className="relative w-full h-[50px] px-3 flex items-center justify-between bg-[#121212] border border-gray-700 rounded-md cursor-pointer"
                    onClick={() => openDatePicker(pickUpPickerRef)}
                  >
                    <DatePicker
                      selected={pickUpDate}
                      onChange={(date) => setPickUpDate(date)}
                      dateFormat="dd MMM yyyy"
                      placeholderText="Pick Up Date"
                      ref={pickUpPickerRef}
                      className="bg-transparent text-white outline-none cursor-pointer w-full"
                      calendarClassName="dark-datepicker"
                      popperPlacement="bottom-start"
                    />
                    <i className="ri-calendar-line text-red-600 pointer-events-none"></i>
                  </div>

                  {/* Drop Off Date */}
                  <div
                    className="relative w-full h-[50px] px-3 flex items-center justify-between bg-[#121212] border border-gray-700 rounded-md cursor-pointer"
                    onClick={() => openDatePicker(dropOffPickerRef)}
                  >
                    <DatePicker
                      selected={dropOffDate}
                      onChange={(date) => setDropOffDate(date)}
                      dateFormat="dd MMM yyyy"
                      placeholderText="Drop Off Date"
                      ref={dropOffPickerRef}
                      className="bg-transparent text-white outline-none cursor-pointer w-full"
                      calendarClassName="dark-datepicker"
                      popperPlacement="bottom-start"
                    />
                    <i className="ri-calendar-line text-red-600 pointer-events-none"></i>
                  </div>

                  <div className='relative md:col-span-2'>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder='Send Message'
                      className='w-full p-3 bg-[#121212] text-white rounded-md border border-gray-700 focus:border-red-600 outline-none resize-none appearance-none'
                    ></textarea>
                  </div>
                </div>

                <div className='pt-4'>
                  <button type='submit' className='w-full bg-red-600 text-white text-lg font-bold py-3 rounded-md hover:bg-red-700 transition'>
                    Confirm Booking
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSucessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4'
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className='bg-[#0d0d0d] border border-green-500/30 rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center'
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                className='mx-auto mb-4 w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center'
              >
                <i className='ri-check-line text-4xl text-green-500'></i>
              </motion.div>

              <h2 className='text-2xl font-bold text-white font-bricolage mb-2'>
                Booking Successful!
              </h2>

              <p className='text-gray-400 mb-6'>
                Your car has been booked. We've sent a confirmation to your email.
              </p>

              <button
                onClick={() => setShowSucessModal(false)}
                className='bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition'
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default CarDetails