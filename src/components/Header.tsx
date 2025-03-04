import React from 'react';
import '../styles/colors.css'; 
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";


const Header = () => {
    return (
        <main className='hero'>
            <header className="py-10 px-20 border-b-[0.5px] border-gray-400/25">
                <nav className="flex justify-between items-center px-40">
                    <h1 className="text-xl font-semibold text-[--color-white]">MANSOOR ALI KHAN</h1>
                    <ul className="flex space-x-8 uppercase text-[--color-white] font-medium">
                        <li><a href="#home" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Home</a></li>
                        <li><a href="#about" className="hover:text-[--color-gold] transition duration-300 text-grey-400">About</a></li>
                        <li><a href="#blog" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Blog</a></li>
                        <li><a href="#gallery" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Gallery</a></li>
                        <li><a href="#contact" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Contact</a></li>
                    </ul>
                    <div className="flex space-x-5 social-media">
                        <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className='text-[--color-white] hover:text-[--color-white] transition duration-300 text-gray-400/60 cursor-pointer' size={18}/>
                        </a>
                        <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-[--color-white] hover:text-[--color-white] transition duration-300 text-gray-400/60 cursor-pointer' size={18}/>
                        </a>
                        <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-[--color-white] hover:text-[--color-white] transition duration-300 text-gray-400/60 cursor-pointer' size={18}/>
                        </a>
                        <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin className='text-[--color-white] hover:text-[--color-white] transition duration-300 text-gray-400/60 cursor-pointer' size={18}/>
                        </a>
                        <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-[--color-white] hover:text-[--color-white] transition duration-300 text-gray-400/60 cursor-pointer' size={18}/>
                        </a>
                    </div>
                </nav>
            </header>
            <div className="hero-section flex items-center justify-left pl-60 text-[--color-white] py-48 bg-[-color-dark]">
                <div className="text-left max-w-3xl relative flex flex-col space-y-4">
                    <h2 className="text-[54px] font-semibold tracking-wide font-family">COMMITTED TO PROGRESS.<br />DEDICATED TO PEOPLE.</h2>
                    <p className="text-lg pr-5 opacity-90">Bridging politics, education, and social service, Mansoor Ali Khan has spent decades working to empower communities, shape policy, and drive meaningful change especially in Bengaluru Central and beyond.</p>
                    <p className='pt-12'>
                    <a href="#about" className="text-[--color-gold] hover:opacity-80 transition duration-300 underline underline-offset-4">LEARN MORE ABOUT MANSOOR →</a>
                    </p>
                </div>
            </div>
        </main>
    );
};

export default Header;
