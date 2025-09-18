import blogData from '../../Blog.json';

const Blog = () => {
  return (
    <div className='blog lg:px-[12%] px-[8%] py-[50px] lg:py-[90px] overflow-hidden'>
      <div className='blog-content mb-20 text-center text-white'>
        <p className='uppercase text-sm tracking-[5px] text-primary mb-2'>
          - Our Blog -
        </p>

        <h2 className='text-4xl md:text-5xl font-bold mb-3 font-bricolage'>
          Latest <span className='text-primary font-bricolage'>News.</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {blogData.slice(0,3).map((blog) => (
          <div key={blog.id} className='blog-item bg-[#1r1f22] group'>
            <div className='blog-image overflow-hidden'>
              <img src={blog.image} alt={blog.name} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-300' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog