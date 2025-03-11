import { useState, useEffect } from 'react';
import '../styles/colors.css';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';

const HeroSection = () => {
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
        <main className='hero'>
            <header className="py-6 md:py-10 px-4 md:px-20 border-b-[0.5px] border-gray-400/25">
                <nav className="hidden md:flex justify-between items-center md:px-40">
                    <h1 className="text-xl font-semibold text-white cursor-pointer">
                        <Link to="/">MANSOOR ALI KHAN</Link>
                    </h1>
                    
                    <ul className="flex space-x-8 capitalize text-white font-medium">
                        <li><Link to="/" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/') ? 'underline' : ''}`}>Home</Link></li>
                        <li><Link to="/about" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/about') ? 'underline' : ''}`}>About</Link></li>
                        <li><Link to="/blog" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/blog') ? 'underline' : ''}`}>Blog</Link></li>
                        <li><Link to="/gallery" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/gallery') ? 'underline' : ''}`}>Gallery</Link></li>
                        <li><Link to="/contact" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/contact') ? 'underline' : ''}`}>Contact</Link></li>
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
                <nav className="flex md:hidden justify-between">
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
                        fixed top-0 left-0 pt-24 w-full h-screen
                        bg-[--color-darker]
                        flex flex-col justify-start items-center
                        transition-transform duration-300 ease-in-out z-10
                        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                    `}>
                        <ul className="flex flex-col space-y-6 capitalize text-white font-medium items-center mb-8">
                            <li><Link to="/" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/') ? 'underline' : ''}`}>Home</Link></li>
                            <li><Link to="/about" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/about') ? 'underline' : ''}`}>About</Link></li>
                            <li><Link to="/blog" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/blog') ? 'underline' : ''}`}>Blog</Link></li>
                            <li><Link to="/gallery" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/gallery') ? 'underline' : ''}`}>Gallery</Link></li>
                            <li><Link to="/contact" className={`hover:underline underline-offset-8 transition duration-300 text-grey-400 ${isActive('/contact') ? 'underline' : ''}`}>Contact</Link></li>
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
            <div className="hero-section flex items-center justify-left px-4 md:px-20 lg:pl-60 text-white py-20 md:py-48 bg-[-color-dark]">
                <div className="text-left max-w-3xl relative flex flex-col space-y-4">
                    <h2 className="text-xl md:text-5xl font-semibold tracking-wide font-family">COMMITTED TO PROGRESS.<br />DEDICATED TO PEOPLE.</h2>
                    <p className="text-base md:text-lg pr-0 md:pr-5 opacity-90">Bridging politics, education, and social service, Mansoor Ali Khan has spent decades working to empower communities, shape policy, and drive meaningful change especially in Bengaluru Central and beyond.</p>
                    <p className='pt-8 md:pt-12'>
                        <a href="/about" className="text-[--color-gold] hover:opacity-80 transition duration-300 underline underline-offset-4">LEARN MORE ABOUT MANSOOR →</a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;