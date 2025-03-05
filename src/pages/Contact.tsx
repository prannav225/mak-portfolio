import Header from '../components/Header'

const Contact = () => {
    return (
        <div>
            <Header />
            <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white py-20 px-60'>
                <h1 className='font-family font-semibold text-6xl'>Contact</h1>
            </div>

            <div className='py-20 px-60'>
                <div className='grid grid-cols-2 gap-16'>
                    {/* Contact Form */}
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    placeholder="Rachel Joe"
                                    className='w-full p-4 rounded-md outline-none border border-[--color-blue]'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    placeholder="Rachel@domain.com"
                                   className='w-full p-4 rounded-md outline-none border border-[--color-blue]'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea 
                                    id="message"
                                    rows={6}
                                    placeholder="Type your message here..."
                                    className='w-full p-4 rounded-md outline-none border border-[--color-blue]'
                                />
                            </div>
                            <button 
                                type="submit"
                                className='bg-[--color-blue] text-white px-8 py-4 rounded-md hover:bg-[--color-dark] transition duration-300'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className='h-[700px] w-[450px] absolute top-56 right-52'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className='rounded-lg shadow-2xl'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact