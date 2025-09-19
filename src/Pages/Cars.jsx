import React, { useState } from 'react';
import carddata from '../../Cars.json';
import { Link } from 'react-router-dom';

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
    // La lógica es similar a la de categorías. Pasa el filtro si no hay ninguna ubicación seleccionada
    // o si la ubicación de recogida (`car.pickup`) del coche es alguna (`some`) de las seleccionadas.
    const matchesPickup =
      selectedPickup.length === 0 ||
      selectedPickup.some((loc) => car.pickup === loc);

    // Condición 4: Coincidencia con las ubicaciones de entrega.
    // Funciona igual que el filtro de recogida, pero para la propiedad `car.dropoff`.
    const matchesDropoff =
      selectedDropoff.length === 0 ||
      selectedDropoff.some((loc) => car.dropoff === loc);

    // El coche solo se incluirá en `filteredCars` si TODAS las condiciones anteriores son verdaderas.
    return matchesSearch && matchesCategory && matchesPickup && matchesDropoff;
  })

  return (
    <>
      <div className='banner-section flex justify-center items-center h-[350px] lg:h-[550px]'>
        <div className='banner-section-content text-center z-10'>
          <h6 className='uppercase text-sm lg:text-xl text-white font-bricolage'> 
            - RENT NOW -
          </h6>

          <h1 className='text-4xl lg:text-5xl xl:text-8xl font-semibold font-bricolage text-red-600'>
            <span className='text-white font-bricolage'>Select</span> Luxury Car
          </h1>
        </div>
      </div>

      <div className='flex flex-col-reverse md:flex-row gap-8 lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
        <div className='w-full sticky top-0 md:w-[300px] bg-[#1e1f22] rounded-2xl p-6 shadow-lg animate-side-left h-full'>
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
        </div>

        <div className='flex-1 animate-fade-in'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {filteredCars.length > 0 ? (
              filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="car-item group bg-[#1e1f22] relative w-full"
                >
                  <div className="car-image w-full relative h-[250px] overflow-hidden after:content-[''] after:absolute after:inset-0 after:z-0 after:bg-gradient-to-b after:from-transparent after:to-[#1E1F22]">
                    <img
                      src={car.image}
                      alt={car.title}
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
                        <button
                          className=" text-white bg-red-600 px-5 py-3 text-lg md:text-xl rounded-full cursor-pointer"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ):( 
              <p className='text-white text-xl'>No cars found</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cars