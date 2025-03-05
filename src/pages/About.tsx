import Header from "../components/Header"

const About = () => {
    return (
        <div>
            <Header />
            <div className="px-60 py-20 bg-gradient-to-r from-[--color-darker] to-[--color-dark]">
                <div className="flex gap-16">
                    {/* Left Column - Image */}
                    <div className="">
                        <img
                            src="https://placehold.co/400x550"
                            alt="Mansoor Ali Khan"
                            className="rounded-tl-[60px] rounded-md rounded-br-[60px] object-cover shadow-2xl"
                        />
                    </div>

                    {/* Right Column - Content */}
                    <div className="w-2/3 text-white">
                        <h3 className="uppercase tracking-wide font-semibold">
                            ABOUT
                        </h3>
                        <h2 className="text-5xl font-family mb-6 font-semibold tracking-wider">MANSOOR ALI KHAN</h2>
                        <p className="text-lg mb-12 font-light">
                            Bridging politics, education, and social service,{' '}
                            <span className="text-white font-semibold">Mansoor Ali Khan</span> has spent decades working to
                            empower communities, shape policy, and drive meaningful change especially in{' '}
                            <span className="text-white font-semibold">Bengaluru Central</span> and beyond.
                        </p>

                        {/* Navigation Links */}
                        <div className="space-y-4">
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
            <div className="px-60 pt-12 pb-24 bg-white">
                <div className="max-w-6xl">
                    <h2 className="text-6xl font-semibold font-family mb-1">EARLY LIFE</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-2xl font-family">Education & Youth Empowerment</h3>
                        <p className="text-xl font-family font-semibold">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-6 text-lg font-normal">
                        <p>
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p>
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Early Life"
                            className="rounded-tl-[60px] rounded-br-[60px] rounded-md object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Professional Life Section */}
            <div className="px-60 pt-12 pb-24 bg-gray-100">
                <div className="max-w-6xl">
                    <h2 className="text-6xl font-semibold font-family mb-12">PROFESSIONAL LIFE</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-2xl font-family">Education & Youth Empowerment</h3>
                        <p className="text-xl font-family font-semibold">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-6 text-lg font-normal">
                        <p>
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p>
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Professional Life"
                            className="rounded-tl-[60px] rounded-br-[60px] object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Personal Life Section */}
            <div className="px-60 pt-12 pb-24 bg-white">
                <div className="max-w-6xl">
                    <h2 className="text-6xl font-semibold font-family mb-12">PERSONAL LIFE</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-2xl font-family">Education & Youth Empowerment</h3>
                        <p className="text-xl font-family font-semibold">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-6 text-lg font-normal">
                        <p>
                            As the 2024 MP candidate for Bangalore Central Lok Sabha constituency representing the Indian National Congress, he has consistently demonstrated a commitment to addressing urban challenges and fostering sustainable growth.
                        </p>

                        <p>
                            His extensive career spans key roles in public service and strategic governance. Serving as AICC Secretary for Kerala & Lakshadweep, Mansoor has significantly influenced policy-making and development strategies across Karnataka, Telangana, and beyond. His robust background in education, exemplified by leadership roles in renowned institutions such as Delhi Public Schools and the School of India—reflects his ability to blend academic excellence with corporate-friendly governance.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="mt-12 flex justify-center">
                        <img
                            src="https://placehold.co/600x350"
                            alt="Personal Life"
                            className="rounded-tl-[60px] rounded-br-[60px] rounded-md object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Philanthropy Section */}
            <div className="px-60 pt-12 pb-24 bg-gray-100">
                <div className="max-w-6xl">
                    <h2 className="text-6xl font-semibold font-family mb-12">PHILANTHROPY</h2>

                    <div className="mb-6 font-semibold">
                        <h3 className="text-2xl font-family">Education & Youth Empowerment</h3>
                        <p className="text-xl font-family font-semibold">
                            Championing Education Reform In Karnataka, Supporting CBSE And Independent Schools, And Providing Scholarships For Underprivileged Students.
                        </p>
                    </div>

                    <div className="space-y-6 text-lg font-normal">
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
                    <div className="mt-12 flex justify-center">
                        <div className="grid grid-cols-2 gap-8 max-w-4xl">
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 1"
                                className="rounded-tl-[60px] object-cover w-full h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 2"
                                className="rounded-tr-[60px] object-cover w-full h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 3"
                                className="rounded-bl-[60px] object-cover w-full h-[300px] shadow-lg"
                            />
                            <img
                                src="https://placehold.co/400x300"
                                alt="Philanthropy 4"
                                className="rounded-br-[60px] object-cover w-full h-[300px] shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About