import { useState } from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import '../styles/colors.css';
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
           <header className="py-6 md:py-10 px-4 md:px-20 border-b-[0.5px] border-gray-400/25 bg-gradient-to-r from-[--color-darker] to-[--color-dark]">
                <nav className="hidden md:flex justify-between items-center md:px-40">
                    <h1 className="text-xl font-semibold text-white cursor-pointer">
                        <Link to="/">MANSOOR ALI KHAN</Link>
                    </h1>
                    
                    <ul className="flex space-x-8 capitalize text-white font-medium">
                        <li><Link to="/" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Home</Link></li>
                        <li><Link to="/about" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">About</Link></li>
                        <li><Link to="/blog" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Blog</Link></li>
                        <li><Link to="/gallery" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Gallery</Link></li>
                        <li><Link to="/contact" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Contact</Link></li>
                    </ul>
                    
                    <div className="flex space-x-5 social-media">
                        <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                    </div>
                </nav>
                
                {/* Mobile Navigation */}
                <nav className="flex md:hidden justify-between items-center">
                    <h1 className="text-xl font-semibold text-white cursor-pointer z-20">
                        <Link to="/">MANSOOR ALI KHAN</Link>
                    </h1>
                    
                    {/* Hamburger Menu Button */}
                    <button 
                        className="text-white z-20" 
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
                    </button>

                    {/* Mobile Menu */}
                    <div className={`
                        fixed top-0 left-0 w-full h-screen pt-24
                        bg-[--color-darker]
                        flex flex-col justify-start items-center
                        transition-transform duration-300 ease-in-out z-10
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}>
                        <ul className="flex flex-col space-y-6 capitalize text-white font-medium items-center mb-8">
                            <li><Link to="/" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Home</Link></li>
                            <li><Link to="/about" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">About</Link></li>
                            <li><Link to="/blog" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Blog</Link></li>
                            <li><Link to="/gallery" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Gallery</Link></li>
                            <li><Link to="/contact" className="hover:underline underline-offset-8 transition duration-300 text-grey-400">Contact</Link></li>
                        </ul>
                        <div className="flex space-x-5 social-media">
                            <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                            </a>
                            <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                            </a>
                            <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                                <IoLogoLinkedin className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                            </a>
                            <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;