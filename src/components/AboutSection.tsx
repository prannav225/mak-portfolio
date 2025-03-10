import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";

const AboutSection = () => {
    return (
        <section className="px-4 md:px-20 lg:px-52">
            <div className="flex flex-col">
                <div className='flex flex-col md:flex-row py-16 md:py-32'>
                    {/* Header Section */}
                    <div className="flex-1 basis-1/2 mt-3 mb-6 md:mb-0">
                        <h3 className="text-[--color-blue] uppercase tracking-wide font-semibold">
                            <span className="text-[--color-blue] font-semibold">— </span>
                            ABOUT
                        </h3>
                    </div>
                    {/* Introduction Text */}
                    <div className="px-0 md:px-4">
                        <h2 className="text-xl md:text-3xl lg:text-4xl font-family mb-0 md:mb-6 font-semibold">
                            Mansoor Ali Khan is a seasoned political leader, educationist, and entrepreneur who brings nearly three decades of expertise in running schools and holding leadership positions in the education sector.
                        </h2>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-x-16">
                    {/* Left Column - Main Image */}
                    <div className='w-full md:w-[45%]'>
                        <div className="mb-8">
                            <img
                                src="/mak-about.jpg"
                                alt="Mansoor Ali Khan"
                                className="w-full h-auto rounded-tl-[60px] shadow-lg object-cover"
                            />
                        </div>

                        {/* Bottom Image */}
                        <div className="flex justify-end">
                            <img
                                src="/mak-about2.jpg"
                                alt="Mansoor Ali Khan with supporters"
                                className="w-full md:w-[60%] h-auto rounded-bl-[60px] shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column - Text Content */}
                    <div className="w-full md:w-[55%] flex flex-col gap-6 md:gap-8">
                        <p className="text-base md:text-lg leading-relaxed">
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed">
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>

                        <p className="text-base md:text-lg leading-relaxed">
                            Mansoor Ali Khan's forward-thinking vision bridges politics and business. He has not only elevated academic standards and empowered youth but also championed initiatives in urban infrastructure, economic development, and community engagement. His approach is characterized by pragmatic solutions and innovative strategies that cater to diverse stakeholder needs, making him a respected leader in both the public and corporate spheres.
                        </p>

                        {/* Read More Link */}
                        <a href="/about" className="text-[--color-blue] hover:opacity-80 transition duration-300 flex items-center gap-2 mt-4 underline underline-offset-4 font-semibold">
                            READ THE FULL STORY →
                        </a>

                        <div className="mt-8 md:mt-10">
                            <h1 className="font-semibold text-lg md:text-xl">Connect with me on social media</h1>
                            <div className="flex flex-wrap gap-3 md:gap-4 py-3">
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300 p-4 md:p-5 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter size={18} />
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300 p-5 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={20}/>
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300 p-5 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={20}/>
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300 p-5 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                                        <IoLogoLinkedin size={20}/>
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300 p-5 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutSection;