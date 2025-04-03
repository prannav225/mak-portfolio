import Header from '../components/Header'

const Gallery = () => {
  const categories = [
    { id: 'all', name: 'All', className: 'rounded-tl-2xl rounded-bl-2xl' },
    { id: 'timeline', name: 'TimeLine' },
    { id: 'events', name: 'Events' },
    { id: 'political', name: 'With Political Leaders' },
    { id: 'others', name: 'Others', className: 'rounded-br-2xl rounded-tr-2xl' }
  ]

  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
    className: i === 0 ? 'rounded-tl-[40px] md:rounded-tl-[60px]' :
               i === 2 ? 'rounded-tr-[40px] md:rounded-tr-[60px]' :
               i === 9 ? 'rounded-bl-[40px] md:rounded-bl-[60px]' :
               i === 11 ? 'rounded-br-[40px] md:rounded-br-[60px]' : ''
  }))

  return (
    <div>
      <Header />
      <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
        <h1 className='font-family font-semibold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>Gallery</h1>
      </div>

      <div className='my-6 md:my-10 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
        <div className='uppercase flex flex-wrap gap-2 md:gap-x-6 p-3 justify-center text-[--color-blue] text-xs md:text-sm'>
          {categories.map((category) => (
            <p
              key={category.id}
              className={`border border-[--color-blue] cursor-pointer hover:bg-[--color-blue] hover:text-white transition duration-300 p-2 rounded-md ${category.className || ''}`}
            >
              {category.name}
            </p>
          ))}
        </div>

        <div className='grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 py-6 md:py-10'>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`rounded-md shadow-md hover:shadow-2xl transition delay-100 w-full h-full object-cover aspect-square ${image.className}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery