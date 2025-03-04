import { FaXTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-[--color-darker] text-white mt-20">
            <div className="container mx-auto px-52 py-16">
                <div className="grid grid-cols-3 gap-8">
                    {/* Column 1 - Brand */}
                    <div>
                        <h2 className="text-xl font-semibold mb-6">MANSOOR ALI KHAN</h2>
                        <div className="mb-6">
                            <h3 className="mb-4">Connect With Me:</h3>
                            <div className="flex gap-2">
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 p-3 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer" className="">
                                        <FaXTwitter size={18} />
                                    </a>
                                </div>
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 p-3 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={18} />
                                    </a>
                                </div>
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 p-3 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={18} />
                                    </a>
                                </div>
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 p-3 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                                        <IoLogoLinkedin size={18} />
                                    </a>
                                </div>
                                <div className="bg-[--color-dark] hover:bg-gray-400 transition duration-300 p-3 rounded-tl-md hover:rounded-tl-lg rounded-br-md hover:rounded-br-lg text-zinc-300 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 - Navigation */}
                    <div>
                        <h2 className="text-base font-semibold mb-6">NAVIGATION</h2>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-[--color-gold] transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-[--color-gold] transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-[--color-gold] transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-[--color-gold] transition-colors">Gallery</a></li>
                            <li><a href="#" className="hover:text-[--color-gold] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div>
                        <h2 className="text-base font-semibold mb-6">CONTACT US</h2>
                        <ul className="space-y-3">
                            <li>Lumbung Hidup East Java</li>
                            <li>Hello@Homco.com</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-gray-700">
                    <div className="flex justify-center items-center text-sm text-gray-400">
                        <p>© 2025 MANSOOR ALI KHAN. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="mt-8 flex justify-center items-center gap-8 text-sm text-gray-400">
                    <a href="#" className="hover:text-[--color-gold] transition-colors">DISCLAIMER</a>
                    <a href="#" className="hover:text-[--color-gold] transition-colors">PRIVACY POLICY</a>
                    <a href="#" className="hover:text-[--color-gold] transition-colors">TERM OF USE</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
