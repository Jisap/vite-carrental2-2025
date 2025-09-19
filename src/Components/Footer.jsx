import { Link } from "react-router-dom"




const Footer = () => {
  return (
    <>
      <footer className="text-white lg:px-[12%] px-[8%] pt-16 flex justify-center flex-col">
        <div className="border-b border-[#222] pb-8 w-full text-white px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
            {/* Lado izquierdo */}
            <div className="flex-1">
              <Link to="/" className="text-4xl font-bold logo font-bricolage">
                Ride<span className="text-primary">Lux.</span>
              </Link>

              <p className="text-[#999] mb-6 md:w-[90%] w-full mt-2">
                Rent a car for your next trip. We offer a wide range of vehicles to suit your needs.
              </p>

              <div className="flex gap-4">
                <a href="#" className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#" className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300">
                  <i className="fa-brands fa-tiktok"></i>
                </a>
                <a href="#" className="border border-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 hover:text-black transition-colors duration-300">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>


            </div>

            {/* Centro */}
            <div className="flex-1">
              <h4 className="text-2xl font-semibold font-bricolage mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2 text-[#999] footer-menu relative">
                <li>
                  <Link to="/About" className="hover:text-red-600 relative transitio duration-300 font-bricolage">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Cars" className="hover:text-red-600 relative transitio duration-300 font-bricolage">
                    Cars
                  </Link>
                </li>
                <li>
                  <Link to="/Blog" className="hover:text-red-600 relative transitio duration-300 font-bricolage">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="hover:text-red-600 relative transitio duration-300 font-bricolage">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Derecho */}
            <div className="flex-1">
              <h4 className="text-2xl font-semibold font-bricolage mb-4">
                Subscribe
              </h4>

              <p className="text-[#999] mb-4 text-sm">
                Want to be notified about our services ? Just sign up and we'll send you a notification by email.
              </p>

              <div className="flex items-center border border-red-600 rounded-full px-4 py-2">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  required 
                  className="bg-transparent outline-none text-white placeholder:text-[#aaa] flex-1" 
                />
                <button type="submit" className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#999] text-center text-base relative py-6">
          <p className="font-bricolage">
            © 2025 RideLux. All rights reserved. <a href="#" className="text-white font-bricolage">UIcode</a>
          </p>  
        </div>
      </footer>
    </>
  )
}

export default Footer