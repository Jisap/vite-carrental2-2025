import React, { useState } from 'react';
import carddata from '../data/Cars.json';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Cars = () => {


  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPickup, setSelectedPickup] = useState([]);
  const [selectedDropoff, setSelectedDropoff] = useState([]);

  const categories =  [...new Set(carddata.map(car => car.type))];
  const pickupLocations =  ["Abu Dhabi", "Dubai", "Sharjah", "Alain"];
  const dropoffLocations =  ["Abu Dhabi", "Dubai", "Sharjah", "Alain"];

  const handleCheckboxChange = (value, state, setState) => { // Función para manejar el checkbox
    if(state.includes(value)){                               // Si el checkbox está marcado
      setState(state.filter(item => item !== value));        // Eliminar el valor del array
    }else{                                                   // Si el checkbox no está marcado
      setState([...state, value]);                           // Agregar el valor al array
    }
  };

  // `filteredCars` es un nuevo array que se crea a partir de `carddata`
  // utilizando el método `filter`. Solo los coches que devuelvan `true`
  // en la función de callback serán incluidos.
  const filteredCars = carddata.filter(car => {
    // Condición 1: Coincidencia con el término de búsqueda.
    // Un coche pasa este filtro si su nombre O su tipo (ambos en minúsculas)
    // incluyen el `searchTerm` (también en minúsculas para que la búsqueda no distinga mayúsculas/minúsculas).
    const matchesSearch =
      car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.type.toLowerCase().includes(searchTerm.toLowerCase());

    // Condición 2: Coincidencia con las categorías seleccionadas.
    // Un coche pasa este filtro si:
    // a) No se ha seleccionado ninguna categoría (`selectedCategories.length === 0`), en cuyo caso se muestran todos.
    // b) El `type` del coche está incluido en el array `selectedCategories`.
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(car.type);

    // Condición 3: Coincidencia con las ubicaciones de recogida.
    // Un coche pasa este filtro si:
    // a) No se ha seleccionado ninguna ubicación.
    // b) Alguna de las ubicaciones seleccionadas por el usuario (`selectedPickup`) está incluida
    //    en el array de ubicaciones de recogida del coche (`car.pickup`).
    const matchesPickup =
      selectedPickup.length === 0 ||
      selectedPickup.some(loc => car.pickup.includes(loc));

    // Condición 4: Coincidencia con las ubicaciones de entrega.
    // Funciona igual que el filtro de recogida, pero para la propiedad `car.dropoff`.
    const matchesDropoff =
      selectedDropoff.length === 0 ||
      selectedDropoff.some(loc => car.dropoff.includes(loc));

    // El coche solo se incluirá en `filteredCars` si TODAS las condiciones anteriores son verdaderas.
    return matchesSearch && matchesCategory && matchesPickup && matchesDropoff;
  })

  // Variantes para la animación de cada tarjeta de coche
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.3,
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
        animate="visible"
      >
        <div className='banner-section-content text-center z-10'>
          <motion.h6 className='uppercase text-sm lg:text-xl text-white font-bricolage' variants={subtitleVariants}>
            - RENT NOW -
          </motion.h6>
          <motion.h1 className='text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600' variants={titleVariants}>
            <span className='text-white font-bricolage'>
              {'Select'.split('').map((char, index) => (<motion.span key={`char-select-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>{char}</motion.span>))}
            </span>
            {' '}
            {'Luxury'.split('').map((char, index) => (<motion.span key={`char-luxury-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>{char}</motion.span>))}
            {' '}
            {'Car'.split('').map((char, index) => (<motion.span key={`char-car-${index}`} variants={letterVariants} style={{ display: 'inline-block' }}>{char}</motion.span>))}
          </motion.h1>
        </div>
      </motion.div>

      <div className='flex flex-col-reverse md:flex-row gap-8 lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
          className='w-full sticky top-0 md:w-[300px] bg-[#1e1f22] rounded-2xl p-6 shadow-lg h-full'
        >
          <div className='mb-6'>
            <input 
              type='text' 
              placeholder='Search cars...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full px-4 py-2 rounded-lg bg-[#121212] text-white border border-gray-600 outline-none' 
            />
          </div>

          <div className='mb-6'>
            <h4 className='font-semibold font-bricolage text-white text-2xl mb-3'>
              Categories
            </h4>

            <ul className='text-md space-y-2 text-gray-400'>
              {categories.map((cat) => (
                <li key={cat} className='flex items-center gap-2'>
                  <input 
                    type='checkbox' 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCheckboxChange(cat, selectedCategories, setSelectedCategories)}
                  />
                  <span className='hover:text-white transition-colors duration-300'>{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-6'>
            <h4 className='font-semibold font-bricolage text-white text-2xl mb-3'>
              Pickup Locations
            </h4>

            <ul className='text-md space-y-2 text-gray-400'>
              {pickupLocations.map((loc) => (
                <li key={loc} className='flex items-center gap-2'>
                  <input 
                    type='checkbox' 
                    checked={selectedPickup.includes(loc)}
                    onChange={() => handleCheckboxChange(loc, selectedPickup, setSelectedPickup)}
                  />
                  <span className='hover:text-white transition-colors duration-300'>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className='mb-6'>
            <h4 className='font-semibold font-bricolage text-white text-2xl mb-3'>
              Dropoff Locations
            </h4>

            <ul className='text-md space-y-2 text-gray-400'>
              {dropoffLocations.map((drop) => (
                <li key={drop} className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked={selectedDropoff.includes(drop)}
                    onChange={() => handleCheckboxChange(drop, selectedDropoff, setSelectedDropoff)}
                  />
                  <span className='hover:text-white transition-colors duration-300'>{drop}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div layout className='flex-1'>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-6'>
            <AnimatePresence>
              {filteredCars.length > 0 ? (
                filteredCars.map((car, index) => (
                  <motion.div
                    layout
                    key={car.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    exit="exit"
                    className="car-item group bg-[#1e1f22] relative w-full overflow-hidden rounded-lg"
                  >
                    <div className="car-image w-full relative h-[250px] overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-transparent after:to-[#1E1F22]">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                      />
                      <div className="car-info absolute bottom-0 p-5 left-0 z-10">
                        <h4 className="text-2xl md:text-3xl font-bricolage text-white font-semibold">
                          {car.name}
                        </h4>
                        <span className="text-red-100 font-bricolage text-xl">
                          {car.type}
                        </span>
                      </div>
                    </div>
                    <div className="car-content p-5 py-10 relative">
                      <ul className="flex gap-3 justify-between items-center flex-wrap">
                        <li className="text-gray-300 text-lg md:text-xl">
                          <i className="fa-regular fa-user text-primary pe-2"></i>
                          {car.seats} Seats
                        </li>
                        <li className="text-gray-300 text-lg md:text-xl">
                          <i className="fa-regular fa-user text-primary pe-2"></i>
                          {car.transmission}
                        </li>
                        <li className="text-gray-300 text-lg md:text-xl">
                          <i className="fa-regular fa-user text-primary pe-2"></i>
                          {car.speed}
                        </li>
                      </ul>
                      <div className="flex justify-between items-center mt-12">
                        <h4 className="text-2xl md:text-4xl font-bold font-bricolage text-white">
                          $ {car.price}/day
                        </h4>
                        <Link to={`/car/${car.id}`}>
                          <button className=" text-white bg-red-600 px-5 py-3 text-lg md:text-xl rounded-full cursor-pointer">
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className='text-white text-xl col-span-full text-center'
                >
                  No cars found
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default Cars