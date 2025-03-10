import Header from "../components/Header"

const About = () => {
    return (
        <div>
            <Header />
            <div className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 py-10 md:py-20 bg-gradient-to-r from-[--color-darker] to-[--color-dark]">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    {/* Left Column - Image */}
                    <div className="flex justify-center md:block">
                        <img
                            src="https://placehold.co/400x550"
                            alt="Mansoor Ali Khan"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-md rounded-br-[40px] md:rounded-br-[60px] object-cover shadow-2xl w-full max-w-[350px] md:max-w-none h-auto"
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-full md:w-2/3 text-white">
                        <h3 className="uppercase tracking-wide font-semibold text-center md:text-left">
                            ABOUT
                        </h3>
                        <h2 className="text-3xl md:text-5xl font-family mb-4 md:mb-6 font-semibold tracking-wider text-center md:text-left">MANSOOR ALI KHAN</h2>
                        <p className="text-base md:text-lg mb-8 md:mb-12 font-light text-center md:text-left">
                            Bridging politics, education, and social service,{' '}
                            <span className="text-white font-semibold">Mansoor Ali Khan</span> has spent decades working to
                            empower communities, shape policy, and drive meaningful change especially in{' '}
                            <span className="text-white font-semibold">Bengaluru Central</span> and beyond.
                        </p>

                        {/* Navigation Links */}
                        <div className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                            <a href="#early-life" className="block text-[--color-gold] hover:opacity-80 transition duration-300">
                                → EARLY LIFE
                            </a>
                            <a href="#professional-life" className="block text-[--color-gold] hover:opacity-80 transition duration-300">
                                → PROFESSIONAL LIFE
                            </a>
                            <a href="#personal-life" className="block text-[--color-gold] hover:opacity-80 transition duration-300">
                                → PERSONAL LIFE
                            </a>
                            <a href="#philanthropy" className="block text-[--color-gold] hover:opacity-80 transition duration-300">
                                → PHILANTHROPY
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Early Life Section */}
            <div id="early-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 pt-8 md:pt-12 pb-12 md:pb-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-family mb-1 text-center md:text-left">EARLY LIFE</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-xl md:text-2xl font-family text-center md:text-left">Education & Youth Empowerment</h3>
                        <p className="text-lg md:text-xl font-family font-semibold text-center md:text-left">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-base md:text-lg font-normal">
                        <p>
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p>
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-8 md:mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Early Life"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] rounded-md object-cover shadow-lg w-full max-w-[600px] h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Professional Life Section */}
            <div id="professional-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 pt-8 md:pt-12 pb-12 md:pb-24 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-family mb-6 md:mb-12 text-center md:text-left">PROFESSIONAL LIFE</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-xl md:text-2xl font-family text-center md:text-left">Education & Youth Empowerment</h3>
                        <p className="text-lg md:text-xl font-family font-semibold text-center md:text-left">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-base md:text-lg font-normal">
                        <p>
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p>
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-8 md:mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Professional Life"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] object-cover shadow-lg w-full max-w-[600px] h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Personal Life Section */}
            <div id="personal-life" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 pt-8 md:pt-12 pb-12 md:pb-24 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-family mb-6 md:mb-12 text-center md:text-left">PERSONAL LIFE</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-xl md:text-2xl font-family text-center md:text-left">Education & Youth Empowerment</h3>
                        <p className="text-lg md:text-xl font-family font-semibold text-center md:text-left">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-base md:text-lg font-normal">
                        <p>
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p>
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-8 md:mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Personal Life"
                            className="rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[40px] md:rounded-br-[60px] rounded-md object-cover shadow-lg w-full max-w-[600px] h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Philanthropy Section */}
            <div id="philanthropy" className="px-4 sm:px-8 md:px-16 lg:px-40 xl:px-60 pt-8 md:pt-12 pb-12 md:pb-24 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold font-family mb-6 md:mb-12 text-center md:text-left">PHILANTHROPY</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-xl md:text-2xl font-family text-center md:text-left">Education & Youth Empowerment</h3>
                        <p className="text-lg md:text-xl font-family font-semibold text-center md:text-left">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-base md:text-lg font-normal">
                        <p>
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p>
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>

                        <p>
                            Mansoor Ali Khan's forward-thinking vision bridges politics and business. He has not only elevated academic standards and empowered youth but also championed initiatives in urban infrastructure, economic development, and community engagement. His approach is characterized by pragmatic solutions and innovative strategies that cater to diverse stakeholder needs, making him a respected leader in both the public and corporate spheres.
                        </p>
                    </div>

                    {/* Image Grid Section */}
                    <div className="mt-8 md:mt-12 flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-4xl w-full">
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 1"
                                className="rounded-tl-[40px] md:rounded-tl-[60px] object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 2"
                                className="rounded-tr-[40px] md:rounded-tr-[60px] object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 3"
                                className="rounded-bl-[40px] md:rounded-bl-[60px] object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 4"
                                className="rounded-br-[40px] md:rounded-br-[60px] object-cover w-full h-[200px] sm:h-[250px] md:h-[300px] shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About