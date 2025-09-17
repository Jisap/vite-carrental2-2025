import { Link } from "react-router-dom"
import  cardata from "../../Cars.json"

const Car = () => {
  return (
    <div className='car lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
      <div className='car-categories-content text-center mb-10 lg:mb-14'>
        <p className='uppercase text-sm tracking-[5px] mb-2 text-primary'>
          - Car Categories -
        </p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage'>
          Choose the Right Car Find your Trip
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {cardata.map((car) => (
          <div key={car.id} className="car-item group bg-[#1e1f22] relative w-full">
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
                  <button className=" text-white bg-red-600 px-5 py-3 text-lg md:text-xl rounded-full cursor-pointer">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Car