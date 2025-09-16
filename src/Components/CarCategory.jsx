import carctg1 from '../assets/car-ctg-01.png'
import carctg2 from '../assets/car-ctg-02.png'
import carctg3 from '../assets/car-ctg-03.png'
import carctg4 from '../assets/car-ctg-04.png'

const categoriesData = [
  {
    title: 'Luxury Cars',
    subtitle: '40+ Cars Ready',
    image: carctg1,
  },
  {
    title: 'SUVs',
    subtitle: '70+ Cars Ready',
    image: carctg2,
  },
  {
    title: 'Economy Cars',
    subtitle: '100+ Cars Ready',
    image: carctg3,
  },
  {
    title: 'Vans & MPVs',
    subtitle: '34+ Cars Ready',
    image: carctg4,
  },
];

const CategoryItem = ({ title, subtitle, image }) => {
  return (
    <div className='group bg-[#1e1e23] h-auto md:h-[400px] cart-ctg-item relative flex justify-between items-start flex-col overflow-hidden w-full'>
      <div className='car-ctg-info p-4'>
        <h4 className='text-white text-3xl xxl:text-4xl font-semibold font-bricolage pb-1'>
          {title}
        </h4>
        <span className='text-gray-400 text-lg xxl:text-xl font-bricolage'>
          {subtitle}
        </span>
      </div>

      <div className='car-ctg w-full h-full'>
        <img
          src={image}
          alt={`Image of ${title}`}
          className='w-full h-full object-cover translate-x- translate-y-5 lg:translate-x-0 lg:translate-y-0 transition-transform duration-500 ease-in-out lg:group-hover:scale-110'
        />
      </div>
    </div>
  );
};

const CarCategory = () => {
  return (
    <div className='car-categories lg:px-[12%] px-[8%] py-[50px] lg:py-[90px]'>
      <div className='car-categories-content text-center mb-10 lg:mb-14'>
        <p className='uppercase text-sm tracking-[5px] mb-2 text-primary'>
          - Car Categories -
        </p>
        <h2 className='text-4xl md:text-5xl font-bold mb-3 text-white font-bricolage'>
          Choose the Right Car For your Trip
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {categoriesData.map((category) => (
          <CategoryItem
            key={category.title}
            title={category.title}
            subtitle={category.subtitle}
            image={category.image}
          />
        ))}
      </div>
    </div>
  )
}

export default CarCategory