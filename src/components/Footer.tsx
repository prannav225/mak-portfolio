import { FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[--color-darker] to-[--color-dark] text-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-20 lg:px-40 xl:px-60 py-8 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
                    {/* Column 1 - Brand */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left">
                            <Link to="/">MANSOOR ALI KHAN</Link>
                        </h2>
                        <div className="mb-6">
                            <h3 className="mb-4 mt-5 text-base md:text-lg text-center md:text-left">Connect With Me:</h3>
                            <div className="grid grid-cols-3 grid-rows-2 gap-3 md:gap-4 w-fit">
                                {/* Social media icons - same structure, adjusted sizes */}
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer p-3 md:p-5 flex justify-center items-center w-12 md:w-14 h-10 md:h-12">
                                    <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter size={18} />
                                    </a>
                                </div>
                                {/* Apply the same styling to other social media icons */}
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer p-5 h-12 w-14 flex justify-center items-center">
                                    <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={18} />
                                    </a>
                                </div>
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer p-5 h-12 w-14 flex justify-center items-center">
                                    <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={18} />
                                    </a>
                                </div>
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer p-5 h-12 w-14 flex justify-center items-center">
                                    <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                                        <IoLogoLinkedin size={18} />
                                    </a>
                                </div>
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer p-5 h-12 w-14 flex justify-center items-center">
                                    <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Navigation */}
                    <div className="flex flex-col items-center md:items-center text-center md:text-left">
                        <h2 className="text-sm font-semibold mb-4 md:mb-6 mt-2">NAVIGATION</h2>
                        <ul className="space-y-2 md:space-y-3 font-light text-gray-400 text-sm">
                            <li><a href="/" className="hover:text-white underline underline-offset-2 hover:no-underline transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-white underline underline-offset-2 hover:no-underline transition-colors">About</a></li>
                            <li><a href="/blog" className="hover:text-white underline underline-offset-2 hover:no-underline transition-colors">Blog</a></li>
                            <li><a href="/gallery" className="hover:text-white underline underline-offset-2 hover:no-underline transition-colors">Gallery</a></li>
                            <li><a href="/contact" className="hover:text-white underline underline-offset-2 hover:no-underline transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className="text-sm font-semibold mb-4 md:mb-6 mt-2 text-center md:text-left">CONTACT US</h2>
                        <div className="font-light text-sm text-gray-400 mb-3">
                            <div className="flex my-auto gap-x-2">
                                <MdLocationOn size={18} className="text-gray-400" />
                                <p>Lumbung Hidup East Java</p>
                            </div>
                        </div>
                        <div className="flex gap-x-2 font-light text-sm text-gray-400">
                            <IoMail size={18} className="text-gray-400" />
                            <p>Hello@Homco.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 md:mt-16 pt-6 md:pt-8 border-t border-gray-700">
                <div className="flex justify-center items-center text-xs md:text-sm text-gray-400 text-center px-4">
                    <p>© 2025 MANSOOR ALI KHAN. ALL RIGHTS RESERVED.</p>
                </div>
            </div>

            {/* Legal Links */}
            <div className="my-6 md:mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400">
                <a href="#" className="hover:text-[--color-gold] font-semibold delay-150 transition-colors">DISCLAIMER</a>
                <a href="#" className="hover:text-[--color-gold] font-semibold delay-150 transition-colors">PRIVACY POLICY</a>
                <a href="#" className="hover:text-[--color-gold] font-semibold delay-150 transition-colors">TERM OF USE</a>
            </div>
        </footer >
    );
};

export default Footer;
