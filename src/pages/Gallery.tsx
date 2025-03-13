import Header from '../components/Header'
const Gallery = () => {
  return (
    <div>
      <Header />
      <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
        <h1 className='font-family font-semibold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>Gallery</h1>
      </div>

      <div className='my-6 md:my-10 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
        <div className='uppercase flex flex-wrap gap-2 md:gap-x-6 p-3 justify-center text-[--color-blue] text-xs md:text-sm'>
          <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-tl-2xl rounded-bl-2xl rounded-md'>All</p>
          <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-md'>TimeLine</p>
          <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-md'>Events</p>
          <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-md'>With Political Leaders</p>
          <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-br-2xl rounded-tr-2xl rounded-md'>Others</p>
        </div>
        <div className='grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 py-6 md:py-10'>
          <img src="https://placehold.co/400x400" alt="" className='rounded-tl-[40px] md:rounded-tl-[60px] rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-auto object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 rounded-tr-[40px] md:rounded-tr-[60px] w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 rounded-bl-[40px] md:rounded-bl-[60px] w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md shadow-md hover:shadow-2xl transition delay-100 rounded-br-[40px] md:rounded-br-[60px] w-full h-full object-cover aspect-square' />
        </div>
      </div>
    </div>
  )
}

export default Gallery