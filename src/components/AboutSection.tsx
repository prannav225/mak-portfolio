import { motion } from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";

const AboutSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="px-4 md:px-20 lg:px-60"
        >
            <div className="flex flex-col">
                <div className='flex flex-col md:flex-row py-16 md:py-32'>
                    {/* Header Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 basis-1/2 mt-3 mb-6 md:mb-0"
                    >
                        <p className="text-[--color-blue] uppercase tracking-wide font-semibold text-sm">
                            <span className="text-[--color-blue] font-semibold">— </span>
                            ABOUT
                        </p>
                    </motion.div>
                    {/* Introduction Text */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="px-0 md:px-4"
                    >
                        <h2 className="text-xl md:text-2xl lg:text-2xl font-family mb-0 md:mb-6 font-semibold">
                            Mansoor Ali Khan is a seasoned political leader, educationist, and entrepreneur who brings nearly three decades of expertise in running schools and holding leadership positions in the education sector.
                        </h2>
                    </motion.div>
                </div>

                {/* Main Content Grid */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 justify-center items-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-3/4 justify-self-end"
                        >
                            <img src="/mak-about.jpg" alt="" className="w-full h-auto rounded-sm rounded-tl-[60px] shadow-xl" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="w-full text-sm font-normal space-y-6"
                        >
                            <p>As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.</p>

                            <p>His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.</p>

                            <p>Mansoor Ali Khan's forward-thinking vision bridges politics and business. He has not only elevated academic standards and empowered youth but also championed initiatives in urban infrastructure, economic development, and community engagement.</p>

                            <a href="/about" className="text-[--color-blue] uppercase underline underline-offset-4 text-sm font-medium inline-block pt-2">Read Full Story →</a>
                        </motion.div>
                    </motion.div>

                    {/* Social Media Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 justify-center items-center mt-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-3/5 justify-self-end"
                        >
                            <img src="/mak-about2.jpg" alt="" className="w-full h-auto rounded-sm rounded-bl-[60px] shadow-xl" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-sm font-medium"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="mb-1 text-base"
                            >
                                Connect with me on Social Media:
                            </motion.p>
                            <div className="flex flex-wrap gap-3 md:gap-4 py-3">
                                {[
                                    { Icon: FaXTwitter, link: "https://x.com/MansoorKhanINC" },
                                    { Icon: FaFacebook, link: "https://www.facebook.com/MansoorAliKhanINC" },
                                    { Icon: FaInstagram, link: "https://www.instagram.com/mansoor1314" },
                                    { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/mansoor-khan-75458430/" },
                                    { Icon: FaYoutube, link: "https://www.youtube.com/@MansoorKhanINC" }
                                ].map((social, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                                        viewport={{ once: true }}
                                        className="bg-gray-200 hover:bg-gray-300 transition duration-300 rounded-sm hover:shadow-xl p-4 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer"
                                    >
                                        <a href={social.link} target="_blank" rel="noopener noreferrer">
                                            <social.Icon size={18} />
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </section>
            </div>
        </motion.section>
    );
};

export default AboutSection;