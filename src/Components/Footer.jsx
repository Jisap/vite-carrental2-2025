import { Link } from "react-router-dom"




const Footer = () => {
  return (
    <>
      <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center flex-col">
        <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
            <div className="flex-1">
              <Link to="/" className="text-4xl font-bold logo font-bricolage">
                Ride<span className="text-primary">Lux.</span>
              </Link>

              <p className="text-[#999] mb-6 md:w-[90%] w-full mt-2">
                Rent a car for your next trip. We offer a wide range of vehicles to suit your needs.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer