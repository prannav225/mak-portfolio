import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import Header from "../components/Header"
import { IoLogoLinkedin } from "react-icons/io5"

const About = () => {
    return (
        <div>
            <Header />
            <div className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 py-10 md:py-20 bg-gradient-to-r from-[--color-darker] to-[--color-dark]">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* Left Column - Image */}
                    <div className="flex justify-center md:block md:w-1/3">
                        <img
                            src="/aboutpage.jpg"
                            alt="Mansoor Ali Khan"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-md rounded-br-[40px] md:rounded-br-[60px] object-cover shadow-2xl"
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full md:w-2/3 text-white">
                        <h3 className="uppercase text-sm pb-2 tracking-wide font-semibold text-center md:text-left">
                            ABOUT
                        </h3>
                        <h2 className="text-3xl md:text-5xl font-family mb-4 md:mb-6 font-semibold text-center md:text-left">Mansoor Ali Khan</h2>
                        <p className="text-base md:text-xl mb-2 md:mb-4 font-medium font-family text-center md:text-left">
                            Mansoor Ali Khan is a seasoned political leader, educationist, and entrepreneur with nearly three decades of experience in running schools and shaping public policy.
                        </p>
                        <p className="text-base md:text-xl mb-8 md:mb-10 font-medium font-family text-center md:text-left">
                            From pioneering educational reforms to championing inclusive development, his journey embodies a commitment to social impact and transformative leadership.
                        </p>

                        {/* Navigation Links */}
                        <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                            <a href="#early-life" className="block text-[--color-gold] hover:opacity-80 transition duration-300 text-xs font-medium">
                                → <span className="underline underline-offset-4 pl-2">
                                    EARLY LIFE
                                </span>
                            </a>
                            <a href="#professional-life" className="block text-[--color-gold] hover:opacity-80 transition duration-300 text-xs font-medium">
                                → <span className="underline underline-offset-4 pl-2">
                                    PROFESSIONAL LIFE
                                </span>
                            </a>
                            <a href="#personal-life" className="block text-[--color-gold] hover:opacity-80 transition duration-300 text-xs font-medium">
                                → <span className="underline underline-offset-4 pl-2">

                                    PERSONAL LIFE
                                </span>
                            </a>
                            <a href="#philanthropy" className="block text-[--color-gold] hover:opacity-80 transition duration-300 text-xs font-medium">
                                → <span className="underline underline-offset-4 pl-2">
                                    PHILANTHROPY
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Early Life & Personal Background Section */}
            <div id="early-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-96 pt-8 md:pt-12 pb-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-family mb-4 md:mb-8 text-center md:text-left">Early Life & Personal Background
                    </h2>

                    <div className="space-y-4 md:space-y-7 text-base md:text-md font-medium">
                        <p>
                            Mansoor Ali Khan was born on November 6, 1972, into a family deeply involved in public service and education. Raised in an environment that valued community welfare, he developed an early passion for social development and civic engagement. Influenced by his father, K Rahman Khan— former Union Minister, Rajya Sabha MP, Deputy Chairman of Rajya Sabha and a notable figure in Indian politics—Mansoor was introduced to the significance of public policy and grassroots activism from a young age.
                        </p>

                        <p>
                            This formative upbringing laid the foundation for his lifelong dedication to uplifting communities through education and strategic governance. His early experiences in Bangalore instilled in him the drive to address socio-economic challenges head-on—a drive that continues to shape his multifaceted career.
                        </p>
                    </div>

                    {/* Image Section */}
                    {/* <div className="mt-8 md:mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Early Life"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] rounded-md object-cover shadow-lg w-full max-w-[600px] h-auto"
                        />
                    </div> */}
                </div>
            </div>

            {/* Education & Entrepreneurship Section */}
            <div id="professional-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-96 pt-8 md:pt-12 pb-12 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-family mb-4 md:mb-8 text-center md:text-left">Education & Entrepreneurship</h2>

                    <div className="space-y-4 md:space-y-7 text-base md:text-md font-medium">
                        <p>
                            Mansoor Ali Khan holds a Bachelor’s degree in Business Management and a Master of Business Administration from Bangalore University. His academic pursuits laid the groundwork for blending theoretical insights with practical business acumen—a combination that has defined his contributions to the education sector.
                        </p>

                        <p>
                            For nearly three decades, Mansoor has been at the helm of various educational institutions. He has been instrumental in the management and growth of reputed schools such as Delhi Public Schools and the School of India. Additionally, he is actively affiliated with several key organizations, including the Karnataka Federation of Independent Schools Management (KFISM), the Management of Independent CBSE Schools Association – Karnataka (MICSA-K), and FICCI ARISE, where he has contributed to shaping educational policies and corporate partnerships.
                        </p>
                        <p>
                            Further expanding his influence in media and public discourse, Mansoor runs Daily Salar English and serves as the trustee of Daily Salar Publication, one of Karnataka’s leading Urdu dailies. These roles underscore his commitment to fostering informed communities and promoting dialogue on social and political issues.
                        </p>
                    </div>

                    {/* Image Section */}
                    {/* <div className="mt-8 md:mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Professional Life"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] object-cover shadow-lg w-full max-w-[600px] h-auto rounded-md"
                        />
                    </div> */}
                </div>
            </div>

            {/* Political Journey Section */}
            <div id="personal-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-96 pt-8 md:pt-12 pb-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-family mb-4 md:mb-6 text-center md:text-left">Political Journey</h2>
                    <div className="space-y-4 md:space-y-6 text-base md:text-md font-normal">
                        <p>
                            Mansoor Ali Khan’s foray into politics was a natural extension of his commitment to public service. Over the years, he has held pivotal positions within the Indian National Congress, playing a significant role in policy formulation and grassroots mobilization.
                        </p>
                        <p>
                            Currently, he serves as the AICC Secretary for Kerala & Lakshadweep. Previously, he held the post of AICC Secretary for Telangana—a role in which he was instrumental in the Indian National Congress’s successful campaign, contributing to the party’s victory and the formation of the government in the state.
                        </p>

                        <p>
                            In 2024, he further showcased his leadership by contesting as the MP candidate for the Bangalore Central Lok Sabha constituency, where his focus on urban development, civic infrastructure, and inclusive growth resonated with the electorate. His political journey reflects a pragmatic blend of data-driven strategies and empathetic governance, ensuring that both macro-level policies and local issues receive the attention they deserve.
                        </p>
                    </div>

                    {/* Image Section */}
                    {/* <div className="mt-8 md:mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Personal Life"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] rounded-md object-cover shadow-lg w-full max-w-[600px] h-auto"
                        />
                    </div> */}
                </div>
            </div>

            {/* Key Achievements & Contributions Section */}
            <div id="philanthropy" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-96 pt-8 md:pt-12 pb-12 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-family mb-4 md:mb-6 text-center md:text-left">Key Achievements & Contributions</h2>

                    <div className="mb-10">
                        <h3 className="text-xl font-family font-bold md:text-left">Education Sector</h3>
                        <li>
                            <span className="font-semibold pr-2">Institutional Leadership:</span>
                            Managed and expanded educational institutions such as Delhi Public Schools and the School of India, impacting thousands of students and enhancing academic standards.
                        </li>
                        <li>
                            <span className="font-semibold pr-2">Organizational Affiliations:</span>
                            Actively involved with KFISM, MICSA-K, and FICCI ARISE, promoting collaborations between education and industry.
                        </li>
                        <li>
                            <span className="font-semibold pr-2">Media & Publications:</span>
                            Runs Daily Salar English and serves as the trustee of Daily Salar Publication, reinforcing his role in shaping public discourse
                        </li>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-family font-bold md:text-left">Political & Governance Initiatives</h3>
                        <li>
                            <span className="font-semibold pr-2">Strategic Roles in INC:</span>
                            Held influential roles in Karnataka, Telangana, Kerala, and Goa, where his efforts have steered election strategies and policy frameworks.
                        </li>
                        <li>
                            <span className="font-semibold pr-2">Bangalore Central Focus:</span>
                            Advocated for vital urban infrastructure improvements, including transportation, civic services, and economic development, addressing key concerns of the Bangalore Central constituency.
                        </li>
                        <li>
                            <span className="font-semibold pr-2">MSocial Welfare:</span>
                            Supported healthcare initiatives, provided emergency services, and contributed to COVID-19 relief through direct community engagement.
                        </li>
                    </div>

                    <div className="mb-10">
                        <h3 className="text-xl font-family font-bold md:text-left">Community & Social Impact</h3>
                        <li>
                            <span className="font-semibold pr-2">Healthcare and Emergency Services:</span>
                            Donated ambulances, established ICU facilities, and funded medical expenses for underprivileged communities.
                        </li>
                        <li>
                            <span className="font-semibold pr-2">Youth Empowerment:</span>
                            Initiated scholarship programs, extracurricular activities, and sports clubs aimed at fostering holistic development among young people.
                        </li>
                        <li>
                            <span className="font-semibold pr-2">Public Outreach:</span>
                            Through media engagements and grassroots campaigns, he has effectively communicated critical social and political issues to a broad audience.
                        </li>
                    </div>

                    {/* Image Grid Section */}
                    {/* <div className="mt-8 md:mt-12 flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl w-full">
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 1"
                                className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 2"
                                className="rounded-tr-[40px] md:rounded-tr-[60px] rounded-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 3"
                                className="rounded-bl-[40px] md:rounded-bl-[60px] rounded-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 4"
                                className="rounded-br-[40px] md:rounded-br-[60px] rounded-md object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Personal Philosophy & Vision */}
            <div id="professional-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-96 pt-8 md:pt-12 pb-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-family mb-4 md:mb-8 text-center md:text-left">Personal Philosophy & Vision</h2>

                    <div className="space-y-4 md:space-y-7 text-base md:text-md font-medium">
                        <p>
                            Mansoor Ali Khan’s vision is grounded in the belief that education is the cornerstone of societal progress. By equipping individuals with the necessary skills and knowledge, he believes communities can overcome economic disparities and drive sustainable development.
                        </p>

                        <p>
                            He champions inclusive governance, advocating for policies that are both data-driven and compassionate. His approach prioritizes the needs of marginalized communities, ensuring that public policy is responsive and equitable.
                        </p>
                        <p>
                            Looking ahead, Mansoor aims to further integrate technological advancements into education, enhance urban infrastructure in key constituencies like Bangalore Central, and nurture a new generation of socially responsible leaders. His forward-thinking initiatives reflect a commitment to balancing economic growth with social equity, paving the way for a more progressive future.
                        </p>
                    </div>

                    {/* Image Section */}
                    {/* <div className="mt-8 md:mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Professional Life"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] object-cover shadow-lg w-full max-w-[600px] h-auto rounded-md"
                        />
                    </div> */}
                </div>
            </div>

            {/* Contact Section */}
            <div id="professional-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-96 pt-8 md:pt-12 pb-12 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold font-family mb-4 md:mb-8 text-center md:text-left">Contact</h2>

                    <div className="space-y-4 md:space-y-7 text-base md:text-md font-medium">
                        <p>
                            Stakeholders and community members who share Mansoor Ali Khan’s passion for educational reform, urban development, and social welfare are invited to connect and collaborate. Whether through policy dialogues, community initiatives, or educational partnerships, there are numerous ways to engage with his work.
                        </p>

                        <div className="mb-10">
                            <h3 className="text-2xl font-family font-bold text-center md:text-left">Contact Information</h3>
                            <p className="font-semibold pr-2 mb-1 mt-4">Office Address:</p>
                            <a href="https://maps.app.goo.gl/FZ88TN9WJTrHuwoY7" className="hover:underline underline-offset-4 text-[--color-blue]">
                                Al-Ameen Apartments, Pattalamma Temple Rd,
                                Basavanagudi, Bengaluru, Karnataka 560004
                            </a>
                            <p className="font-semibold pr-2 mt-4">Social Media:</p>
                            <div className="flex flex-wrap gap-3 md:gap-4 py-3">
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300  rounded-sm hover:shadow-xl p-4 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://x.com/MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaXTwitter size={18} />
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300  rounded-sm hover:shadow-xl p-4 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.facebook.com/MansoorAliKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaFacebook size={18} />
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300  rounded-sm hover:shadow-xl p-4 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.instagram.com/mansoor1314" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram size={18} />
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300  rounded-sm hover:shadow-xl p-4 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.linkedin.com/in/mansoor-khan-75458430/" target="_blank" rel="noopener noreferrer">
                                        <IoLogoLinkedin size={18} />
                                    </a>
                                </div>
                                <div className="bg-gray-200 hover:bg-gray-300 transition duration-300  rounded-sm hover:shadow-xl p-4 rounded-tl-xl hover:rounded-tl-2xl rounded-br-xl hover:rounded-br-2xl text-zinc-700 hover:text-[--color-blue] cursor-pointer">
                                    <a href="https://www.youtube.com/@MansoorKhanINC" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <p>
                            “Building a better tomorrow starts with collaborative efforts and bold ideas. Mansoor Ali Khan welcomes your support and partnership in shaping a future that is both innovative and inclusive.”
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About