import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import '../styles/colors.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="py-10 px-20 border-b-[0.5px] border-gray-400/25 bg-gradient-to-r from-[--color-darker] to-[--color-dark]">
                <nav className="flex justify-between items-center px-40">
                    <h1 className="text-xl font-semibold text-white">
                        <Link to="/">MANSOOR ALI KHAN</Link></h1>
                    <ul className="flex space-x-8 uppercase text-white font-medium">
                        <li><a href="/" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Home</a></li>
                        <li><a href="/about" className="hover:text-[--color-gold] transition duration-300 text-grey-400">About</a></li>
                        <li><a href="/blog" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Blog</a></li>
                        <li><a href="/gallery" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Gallery</a></li>
                        <li><a href="/contact" className="hover:text-[--color-gold] transition duration-300 text-grey-400">Contact</a></li>
                    </ul>
                    <div className="flex space-x-5 social-media">
                        <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className='text-white hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-white hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-white hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                            <IoLogoLinkedin className='text-white hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                        <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-white hover:text-white transition duration-300 text-gray-400/60 cursor-pointer' size={18} />
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
