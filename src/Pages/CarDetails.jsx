import React, { useState, useRef } from 'react'
import cardata from '../../Cars.json'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from 'react-router-dom';


const CarDetails = () => {

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

  if (!car) {
    return (
      <div className='text-white justify-center text-center mt-20'>
        Car Not Found
      </div>
    )
  }

  const [pickUpDate, setPickUpDate] = useState(null);
  const [DropOffDate, setDropOffDate] = useState(null);
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


  return (
    <>
      <div className='bg-[#121212] text-white font-sans'>
        <div
          className='relative h-[70vh] bg-cover bg-center flex items-end px-[12%] py-20'
          style={{ backgroundImage: `url(${car.image})` }}
        >
          {/* Overlay para mejorar la legibilidad del texto */}
          <div className='absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent'></div>
          <div className='relative z-10'>
            <h6 className='uppercase text-xl tracking-widest text-red-500 font-bricolage'>
              {car.type}
            </h6>
            <h1 className='text-4xl lg:text-6xl font-bold font-bricolage'>
              {car.name}
            </h1>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-row gap-10 px-[12%] py-14'>
        <div className='flex-1 space-y-12'>
          <section>
            <h2 className='text-2xl font-bold text-white mb-4 font-bricolage'>
              General Information
            </h2>
            <p className='text-gray-400 text-sm mb-4'>
              Enjoy a premiun car rental with experience with top-notch services and flexible conditions.
            </p>
            <ul className='space-y-2 text-sm text-gray-300'>
              <li className='flex items-center hover:text-white transition'>
                <i className='ri-check-line text-red-600 mr-2'></i>
                24/7 Roadside Assistance
              </li>
              <li className='flex items-center hover:text-white transition'>
                <i className='ri-check-line text-red-600 mr-2'></i>
                Free Cancellation & Return
              </li>
              <li className='flex items-center hover:text-white transition'>
                <i className='ri-check-line text-red-600 mr-2'></i>
                Pay at arrival
              </li>
            </ul>
          </section>

          <section>
            <h2 className='text-2xl text-white font-bold mb-4 font-bricolage'>
              Rental Conditions
            </h2>

            <div className='space-y-4'>
              {rentalConditions.map((item, index) => (
                <div key={index} className='bg-[#1a1a1a] text-white rounded-lg overflow-hidden'>
                  <div onClick={() => toggleAccordion(index)} className='cursor-pointer px-6 py-4 flex justify-between items-center hover:bg-[#2a2a2a] transition duration-300'>
                    <span className='font-medium text-sm'>
                      {index + 1}. {item.title}
                    </span>
                    <i className={`ri-arrow-${openIndex === index ? "up" : "down"}-s-line text-red-600`}></i>
                  </div>

                  <div className={`
                  px-6 text-sm text-gray-400 overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? "max-h-[300px] pt-5 pb-4" : "max-h-0 pt-0"}
                `}>
                    {openIndex === index && <div>{item.description}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className='w-full lg:w-[320px] space-y-6 bg-[#1a1a1a] rounded-2xl p-6 shadow-md h-fit sticky top-28'>
          <div className='text-center'>
            <p className='text-5xl font-bold text-white font-bricolage'>
              ${car.price} <span className='text-sm font-medium font-bricolage text-white'>/Rent Per Day</span>
            </p>
          </div>

          <ul className='space-y-3 text-sm text-gray-300'>
            <li className='flex justify-between'>
              <span>
                <span>
                  <i className='ri-door-line text-red-600 mr-2'></i>
                  Doors
                </span>
              </span>
              <span>{car.seats}</span>
            </li>

            <li className='flex justify-between'>
              <span>
                <span>
                  <i className='ri-user-line text-red-600 mr-2'></i>
                  Passengers
                </span>
              </span>
              <span>{car.seats}</span>
            </li>

            <li className='flex justify-between'>
              <span>
                <span>
                  <i className='ri-settings-2-line text-red-600 mr-2'></i>
                  Transmission
                </span>
              </span>
              <span>{car.transmission}</span>
            </li>

            <li className='flex justify-between'>
              <span>
                <span>
                  <i className='ri-suitcase-line text-red-600 mr-2'></i>
                  Luggage
                </span>
              </span>
              <span>{car.type}</span>
            </li>

            <li className='flex justify-between'>
              <span>
                <span>
                  <i className='ri-snowflake-line text-red-600 mr-2'></i>
                  Air Condition
                </span>
              </span>
              <span>Yes</span>
            </li>

            <li className='flex justify-between'>
              <span>
                <span>
                  <i className='ri-user-star-line text-red-600 mr-2'></i>
                  Age
                </span>
              </span>
              <span>25</span>
            </li>
          </ul>

          <div className='flex gap-3'>
            <button onClick={() => setShowModal(true)} className='flex-1 bg-red-600 text-white text-[20px] rounded-xl hover:bg-red-600 transition font-bricolage'>
              Rent Now
            </button>
          </div>
        </div>
      </div>

      {ShowModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4'>
          <div className='bg-[#0d0d0d] border border-red-600/30 rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden'>
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
                <div className='relative'>
                  <input 
                    type='text'
                    placeholder='Full Name'
                    className='w-full h-[50px] ps-3 bg-[#121212] text-white rounded-sm border'
                  />
                </div>

                <div className='relative'>
                  <input 
                    type='email'
                    placeholder='Enter your Email'
                    className='w-full h-[50px] ps-3 bg-[#121212] text-white rounded-sm border'
                  />
                </div>

                <div className='relative'>
                  <input 
                    type='text'
                    placeholder='Enter your Number'
                    className='w-full h-[50px] ps-3 bg-[#121212] text-white rounded-sm border'
                    required
                  />
                </div>

                <div className='relative'>
                  <select required className='w-full h-[50px] appearance-none ps-3 bg-[#121212] text-white rounded-md border'>
                    <option hidden>Choose Your Car Type</option>
                    <option>Lamborghini</option>
                    <option>Roll Royce</option>
                    <option>Bentley</option>
                  </select>
                </div>

                <div className='relative'>
                  <select required className='w-full h-[50px] appearance-none ps-3 bg-[#121212] text-white rounded-md border'>
                    <option hidden>Pick-Up Location</option>
                    <option>Dubai</option>
                    <option>AbuDhabi</option>
                    <option>Qatar</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default CarDetails