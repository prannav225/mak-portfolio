import { useState, useEffect } from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import '../styles/colors.css';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    // Function to check if link is active
    const isActive = (path: string) => {
        if (path === '/' && location.pathname === '/') {
            return true;
        }
        return path !== '/' && location.pathname.startsWith(path);
    };

    return (
        <div>
            <header className="py-6 md:py-8 xl:py-10 px-4 sm:px-8 md:px-12 xl:px-20 border-b-[0.5px] border-gray-400/25 bg-gradient-to-r from-[--color-darker] to-[--color-dark]">
                {/* Desktop & Large Tablet Navigation */}
                <nav className="hidden md:flex justify-between items-center md:px-4 lg:px-20 xl:px-40">
                    <div className="flex items-center gap-3">
                        <img src="/INC_Logo.png" alt="INC Logo" className="h-6 w-auto" />
                        <h1 className="text-md font-medium text-white cursor-pointer">
                            <Link to="/">MANSOOR <span className='font-thin'>ALI KHAN</span></Link>
                        </h1>
                    </div>

                    <ul className="flex space-x-4 md:space-x-6 xl:space-x-8 capitalize text-white text-xs">
                        <li><Link to="/" className={`hover:underline-[0.5px] underline-offset-8 transition duration-300 text-grey-400 ${isActive('/') ? 'underline' : ''}`}>Home</Link></li>
                        <li><Link to="/about" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/about') ? 'underline' : ''}`}>About</Link></li>
                        <li><Link to="/blog" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/blog') ? 'underline' : ''}`}>Blog</Link></li>
                        <li><Link to="/gallery" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/gallery') ? 'underline' : ''}`}>Gallery</Link></li>
                        <li><Link to="/contact" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/contact') ? 'underline' : ''}`}>Contact</Link></li>
                    </ul>

                    <div className="flex space-x-3 md:space-x-4 xl:space-x-5 social-media">
                        <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={12} />
                        </a>
                        <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={12} />
                        </a>
                        <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={12} />
                        </a>
                        <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={12} />
                        </a>
                        <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-gray-400 hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={12} />
                        </a>
                    </div>
                </nav>
                
                {/* Mobile Navigation */}
                <nav className="flex md:hidden justify-between items-center">
                    <h1 className="text-lg sm:text-xl font-semibold text-white cursor-pointer z-20">
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

                    {/* Mobile/Tablet Menu */}
                    <div className={`
                        fixed top-0 left-0 pt-24 w-full h-screen
                        bg-[--color-darker]
                        flex flex-col justify-start items-center
                        transition-transform duration-300 ease-in-out z-10
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}>
                        <ul className="flex flex-col space-y-6 md:space-y-8 capitalize text-white font-medium items-center mb-8">
                            <li><Link to="/" className={`text-base sm:text-lg hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/') ? 'underline' : ''}`}>Home</Link></li>
                            <li><Link to="/about" className={`text-base sm:text-lg hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/about') ? 'underline' : ''}`}>About</Link></li>
                            <li><Link to="/blog" className={`text-base sm:text-lg hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/blog') ? 'underline' : ''}`}>Blog</Link></li>
                            <li><Link to="/gallery" className={`text-base sm:text-lg hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/gallery') ? 'underline' : ''}`}>Gallery</Link></li>
                            <li><Link to="/contact" className={`text-base sm:text-lg hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/contact') ? 'underline' : ''}`}>Contact</Link></li>
                        </ul>
                        <div className="flex space-x-6 md:space-x-8 social-media">
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