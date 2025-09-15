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
      </div>
    </div>
  )
}

export default About