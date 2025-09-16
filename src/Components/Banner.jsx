import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import carctg1 from '../assets/car-ctg-01.png'
import carctg2 from '../assets/car-ctg-02.png'
import carctg3 from '../assets/car-ctg-03.png'
import carctg4 from '../assets/car-ctg-04.png'
import { useRef, useState } from "react";


const Banner = () => {

  const [pickUpDate, setPickUpDate] = useState(null);
  const datePickerRef = useRef(null);

  const openCalendar = () => {
    if(datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  }

  const [returnDate, setReturnDate] = useState(null);
  const returnPickerRef = useRef(null);
  
  const openReturnCalendar = () => {
    if(returnPickerRef.current) {
      returnPickerRef.current.setFocus();
    }
  }


  return (
    <div className="banner lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]">
      <div className="banner-content text-center">
        <p className="uppercase text-sm tracking-[5px] text-white mb-2">
          Rent Now
        </p>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage">
          Book Auto Rental
        </h2>

        <div className="bg-[#1f1f1f] text-white w-[90%] max-w-[1200%] mx-auto mt-[70px] rounded-3xl px-6 py-4 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 shadow-lg z-50"
        >
          {/* cars type */}
          <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
            <button className="flex items-center gap-2 w-full justify-between text-gray-400">
              Choose Car Type <i className="ri-arrow-down-s-line text-primary"></i>
            </button>

            <div 
              className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-primary rounded-sm shadow-md opacity-0 scale-95 invisible 
              group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out z-50"
            >
              <ul className="divide-y divide-gray-700">
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Choose Car Type
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Sport Cars
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Convertible
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Luxury Cars
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Small Cars
                </li>
              </ul>
            </div>
          </div>

          {/* pick location */}
          <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-gray-600">
            <button className="flex items-center gap-2 w-full justify-between text-gray-400">
              Location Car<i className="ri-arrow-down-s-line text-primary"></i>
            </button>

            <div
              className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-primary rounded-sm shadow-md opacity-0 scale-95 invisible 
              group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out z-50"
            >
              <ul className="divide-y divide-gray-700">
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Abu Dhabi
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Alain
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Dubai
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Sharjah
                </li>
              </ul>
            </div>
          </div>

          {/* Pick Date */}
          <div 
            className="relative w-full lg:w-auto px-4 py-3 flex items-center border-r border-gray-600 cursor-pointer"
            onClick={openCalendar}  
          >
            <DatePicker 
              selected={pickUpDate}
              onChange={(date) => setPickUpDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText="Pick Up Date"
              ref={datePickerRef}
              className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${pickUpDate ? "text-gray-400" : ""}`}
              calendarClassName="dark-datepicker"
              popperPlacement="bottom-start"
            />
            <i className="ri-calendar-line text-primary pointer-events-none"></i>
          </div>

          {/* Drop Location */}
          <div className="relative w-full lg:w-auto px-4 py-3 group border-r lg:border-0 border-gray-600">
            <button className="flex items-center gap-2 w-full justify-between text-gray-400">
              Drop Off Location<i className="ri-arrow-down-s-line text-primary"></i>
            </button>

            <div
              className="absolute top-[110%] left-0 w-48 bg-[#1f1f1f] border border-primary rounded-sm shadow-md opacity-0 scale-95 invisible 
              group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 ease-out z-50"
            >
              <ul className="divide-y divide-gray-700">
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Drop Off Location
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Alain
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Dubai
                </li>
                <li className="px-4 py-2 hover:bg-primary transition cursor-pointer">
                  Sharjah
                </li>
              </ul>
            </div>
          </div>

          {/* Return Date */}
          <div
            className="relative w-full lg:w-auto px-4 py-3 flex items-center border-r border-gray-600"
            onClick={openReturnCalendar}
          >
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              dateFormat="dd MMM yyyy"
              placeholderText="Return Date"
              ref={returnPickerRef}
              className={`bg-[#1f1f1f] text-white outline-none cursor-pointer w-full ${returnDate ? "text-gray-400" : ""}`}
              calendarClassName="dark-datepicker"
              popperPlacement="bottom-start"
            />
            <i className="ri-calendar-line text-primary pointer-events-none"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner