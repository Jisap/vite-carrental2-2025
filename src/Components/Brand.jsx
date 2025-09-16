import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Importa el módulo Autoplay
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
} from '../assets';

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
];

const Brand = () => {
  return (
    <div className="bg-transparent w-full lg:px-[12%] px-[8%] py-[50px]">
      <div className="relative">
        <Swiper
          modules={[Autoplay]} // Añade el módulo Autoplay aquí
          slidesPerView={6}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false }} // Configura autoplay para un bucle continuo
          speed={3000} // Controla la velocidad del desplazamiento continuo (en ms)
          allowTouchMove={false} // Deshabilita la interacción táctil para asegurar el bucle continuo
          className="brands-swiper flex justify-center items-center"
          breakpoints={{
            1399: {
              slidesPerView: 6,
            },
            767: {
              slidesPerView: 4,
            },
            575: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            }
          }}
        >
          {brands.map((brand , idx) => (
          
            <SwiperSlide key={idx}>
              <div className='brand-image h-[120px] w-full md:w-[120px] flex justify-center items-center'>
                <img 
                  src={brand} alt="brand-image" className='w-full h-full object-contain md:object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Máscara de degradado izquierda */}
        <div className="hidden md:block absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />

        {/* Máscara de degradado derecha */}
        <div className="hidden md:block absolute top-0 bottom-0 right-0 z-10 w-24 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
      </div>
    </div>
  )
}

export default Brand