import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

    // const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   setIsSubmitting(true);
    //   setSubmitStatus({ success: false, message: '' });
  
    //   if (form.current) {
    //     emailjs
    //       .sendForm('service_whbu41x', 'template_5xghiic', form.current, {
    //         publicKey: 'FQum9PTHvXCdcSIHv',
    //       })
    //       .then(
    //         (result) => {
    //           console.log('SUCCESS!', result.text);
    //           setSubmitStatus({ 
    //             success: true, 
    //             message: 'Your message has been sent successfully! We will get back to you soon.' 
    //           });
    //           // Reset form
    //           form.current?.reset();
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //           setSubmitStatus({ 
    //             success: false, 
    //             message: 'Failed to send message. Please try again later or contact us directly.' 
    //           });
    //         },
    //       )
    //       .finally(() => {
    //         setIsSubmitting(false);
    //         // Scroll to the status message
    //         window.scrollTo({ top: 0, behavior: 'smooth' });
    //       });
    //   }
    // };

    return (
        <div>
            <Header />
            <div className='bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
                <h1 className='font-family font-semibold text-3xl md:text-4xl lg:text-5xl text-center md:text-left'>Contact</h1>
            </div>

            <div className='py-10 md:py-20 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 relative'>
                    {/* Contact Form */}
                    <div>
                        {submitStatus.message && (
                            <div className={`p-4 mb-6 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {submitStatus.message}
                            </div>
                        )}
                        <form className='space-y-4 md:space-y-6 text-sm'>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="user_name"
                                    placeholder="Rachel Joe"
                                    required
                                    className='w-full p-3 md:p-4 rounded-md outline-none border border-[--color-blue]'
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    placeholder="Rachel@domain.com"
                                    required
                                    className='w-full p-3 md:p-4 rounded-md outline-none border border-[--color-blue]'
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Message</label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    name="message"
                                    placeholder="Type your message here..."
                                    required
                                    className='w-full p-3 md:p-4 rounded-md outline-none border border-[--color-blue]'
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`bg-[--color-blue] text-white px-6 md:px-8 py-3 md:py-4 rounded-md hover:bg-[--color-dark] transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[700px] w-full lg:w-[450px] static lg:absolute lg:top-[-200px] lg:right-0 mt-8 lg:mt-0'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124432.021170122!2d77.578006!3d12.939783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1593946f9db7%3A0x315774e67ca32921!2sal-ameen%20apartments!5e0!3m2!1sen!2sus!4v1741601787405!5m2!1sen!2sus"
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

export default Contact;