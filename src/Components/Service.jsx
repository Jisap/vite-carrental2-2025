import React from 'react'

const Service = () => {
  return (
    <div className='our-service lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
      <div className='our-service-content mb-20 text-center text-white'>
        <p className='uppercase text-sm tracking-[5px] text-primary mb-2'>
          - What We Do
        </p>
        
        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Other Services
        </h2>

        <div className='our-service-wrapper'>
          <div className='grid w-full gap-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3'>
            <div className='service-item relative text-white rounded-[30px] bg-[#222222] w-full'>
              <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                Daily Car Rental
              </h5>

              <p className='text-[#999] text-lg'>
                The best way to rent a car is to book it daily. You can choose
                the car you want and the date you want to rent it.
              </p>

              <div className='curv'>
                <div className='service-item-curv section-item-curv'>
                  1.
                </div>
              </div>
            </div>

            <div className='service-item relative text-white rounded-[30px] bg-[#222222] w-full'>
              <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                Monthly Car Rental
              </h5>

              <p className='text-[#999] text-lg'>
                If you want to rent a car for a longer period of time, you can
                choose to rent it monthly. 
              </p>

              <div className='curv'>
                <div className='service-item-curv section-item-curv'>
                  2.
                </div>
              </div>
            </div>

            <div className='service-item relative text-white rounded-[30px] bg-[#222222] w-full'>
              <h5 className='font-semibold text-3xl mb-3 font-bricolage'>
                Annual Car Rental
              </h5>

              <p className='text-[#999] text-lg'>
                Annual car rental is the best way to rent a car for a long time.
                You can choose the car you want and the date you want to rent it.
              </p>

              <div className='curv'>
                <div className='service-item-curv section-item-curv'>
                  3.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service