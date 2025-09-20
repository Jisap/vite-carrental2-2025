import React from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { test1, test2, test3, test4, test5 } from '../assets'
import CurvedCornerIcon from '../../CurvedCornerIcon';

const teamMembers = [
  {
    id: 1,
    name: 'Schuang Li',
    title: 'Sales Department',
    image: test1,
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Lead Mechanic',
    image: test2,
  },
  {
    id: 3,
    name: 'Robert Vance',
    title: 'Customer Relations',
    image: test3,
  },
  {
    id: 4,
    name: 'Maria Gomez',
    title: 'Fleet Manager',
    image: test4,
  },
  {
    id: 5,
    name: 'Kevin Davis',
    title: 'Marketing Specialist',
    image: test5,
  },
];

const Teams = () => {
  return (
    <div className='lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
      <div className='text-center'>
        <p className='uppercase text-sm tracking-[5px] mb-2 text-primary'>
          - Certified Team -
        </p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage'>
          Other Experts<span className='text-red-600'> Teams</span>
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        slidesPerView={3}
        spaceBetween={40}
        autoplay={{
          delay: 3000,
        }}
        pagination={true}
        breakpoints={{
          1400: { slidesPerView: 3 },
          1199: { slidesPerView: 2 },
          767: { slidesPerView: 1.5 },
          0: { slidesPerView: 1 },
        }}
        className='mt-[70px]'
      >
        {teamMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className='our-team relative rounded-2xl overflow-hidden group shadow-md cursor-pointer'>
              <img src={member.image} alt={member.name} className='w-full h-72 object-cover z-[5]' />
              
              <div className='absolute z-[5]'>
                {/* <div className='curv'>
                  <div className='section-item-curv our-team-curv'>
                    <i className='fa-solid fa-info'></i>
                  </div>
                </div> */}
                <CurvedCornerIcon 
                  iconClassName='fa-solid fa-info'
                  iconContainerClassName='section-item-curv'
                  containerClassName='our-team-curv'
                />
              </div>

              <div className='team-info'>
                <h4 className='text-xl lg:text-2xl mb-1 font-semibold font-bricolage'> 
                  {member.name}
                </h4>
                <h6 className='text-[#f2f2f2] xl:text-lg text-sm'>
                  {member.title}
                </h6>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Teams