import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='about text-white lg:px-[10%] px-[8%] py-[50px] lg:py-[90px]'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
        <div className='relative w-auto sm:h-[450px] lg:h-[600px]'>
          <img 
            src={about} 
            alt='About' 
            className='w-full h-full rounded-3xl object-contain md:object-cover' 
          />
          <div className='curv'>
            <div className='about-item-curv section-item-curv'>
              <i className='ri-play-line text-xl'></i>
            </div>
          </div>
        </div>

        <div>
          <p className='uppercase text-xs md:text-sm tracking-widest text-[#e8021f] mb-2'>
            - Rentax
          </p>
          <h2 className='text-3xl md:text-5xl font-bold mb-3 font-bricolage'>
            We Are More Than <br/> <span className='text-[#e8021f] font-bricolage'>A Car Rental Company</span> 
          </h2>
          <p className='text-gray-400 leading-relaxed my-6 text-sm lg:text-base'>
            Our goal is to provide you with the best car rental experience. We offer a wide range of vehicles to suit your needs, whether you're looking for a luxurious SUV, a sporty sedan, or a compact car. We're committed to providing you with the best possible service and experience.
          </p>

          <div className='space-y-4 mb-10'>
            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]'>
                <i className='ri-check-double-line'></i>
              </div>
              <span className='text-white'>
                Sports and Luxury Cars
              </span>
            </div>

            <div className='flex items-center gap-4'>
              <div className='w-10 h-10 rounded-full bg-[#222] flex items-center justify-center text-[#e8021f]'>
                <i className='ri-check-double-line'></i>
              </div>
              <span className='text-white'>
                Economy Cars
              </span>
            </div>
          </div>

          <button className='bg-[#e8021f] text-white py-4 px-8 rounded-full font-medium flex items-center gap-2 hover:bg-black transition-colors duration-300'>
            Read More <i className='ri-arrow-right-line'></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About