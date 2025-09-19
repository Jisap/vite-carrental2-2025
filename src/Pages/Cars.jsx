import React, { useState } from 'react';
import carddata from '../../Cars.json';



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
            Select <span>Luxury Cars</span>
          </h1>
        </div>
      </div>

      
    </>
  )
}

export default Cars