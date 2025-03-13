import Works from '../components/Works';
import AboutSection from '../components/AboutSection';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { IoLogoLinkedin } from 'react-icons/io5';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <HeroSection />
      <AboutSection />
      <Works />

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        id="professional-life" 
        className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 pt-8 md:pt-16 pb-16 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-family mb-4 text-center md:text-left"
          >
            Contact
          </motion.h2>

          <div className="space-y-4 md:space-y-7 text-base md:text-md font-normal">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stakeholders and community members who share Mansoor Ali Khan's passion for educational reform, urban development, and social welfare are invited to connect and collaborate. Whether through policy dialogues, community initiatives, or educational partnerships, there are numerous ways to engage with his work.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-family font-bold text-center md:text-left"
              >
                Contact Information
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="font-semibold pr-2 mb-1 mt-2">Office Address:</p>
                <a href="https://maps.app.goo.gl/FZ88TN9WJTrHuwoY7" className="underline underline-offset-4 hover:text-[--color-blue]">
                  Al-Ameen Apartments, Pattalamma Temple Rd,
                  <br />
                  Basavanagudi, Bengaluru, Karnataka 560004
                </a>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="font-semibold pr-2 mt-4"
              >
                Social Media:
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
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              "Building a better tomorrow starts with collaborative efforts and bold ideas. Mansoor Ali Khan welcomes your support and partnership in shaping a future that is both innovative and inclusive."
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Home;