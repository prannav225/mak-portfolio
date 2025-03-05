import Header from '../components/Header'

const Gallery = () => {
  return (
    <div>
      <Header />
      <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white py-20 px-52'>
        <h1 className='font-family font-semibold text-6xl uppercase'>Gallery</h1>
      </div>

      <div className='my-10'>
        <div className='uppercase flex gap-x-6 p-6 justify-center text-[--color-blue]'>
        <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-tl-2xl rounded-bl-2xl rounded-md'>All</p>
        <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-md'>TimeLine</p>
        <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-md'>Organization, Election and other political events</p>
        <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-md'>With Political Leaders</p>
        <p className='border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-br-2xl rounded-tr-2xl rounded-md'>Other Events</p>
        </div>
        <div className='grid grid-cols-3 gap-y-8 px-52 py-10'>
          <img src="https://placehold.co/400x400" alt="" className='rounded-tl-[60px] rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md rounded-tr-[60px]' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md rounded-bl-[60px]' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md' />
          <img src="https://placehold.co/400x400" alt="" className='rounded-md rounded-br-[60px]' />
        </div>
      </div>
    </div>
  )
}

export default Gallery
