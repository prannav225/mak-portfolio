const Works = () => {
  return (
    <section className="px-4 md:px-20 lg:px-52 py-10 md:py-20 my-12 md:my-24">
        {/* <h1 className="text-2xl md:text-4xl font-semibold text-center mb-12 md:mb-20 text-[--color-blue] uppercase">Heading Lorem Ipsum</h1> */}
      <div className="space-y-20 md:space-y-40">
        {/* Item 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-16 gap-x-10">
          <div className="relative shadow-2xl">
            <img src="/mak-works2.jpg" alt="Public Service" className="w-full h-[300px] object-cover rounded-sm" />
            <div className="absolute -bottom-20 left-0 right-0 bg-[--color-blue] p-4 md:p-8 rounded-bl-3xl rounded-sm">
              <p className="text-white font-family text-lg leading-relaxed">
                "I try my best to make sure that the local constituents have a real say in government decisions. By listening to everyday people, we can create policies that truly benefit all Indians."
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-16 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Public Service & Political Leadership</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Strategizing progressive governance, addressing key concerns in Karnataka with a specific focus on Bengaluru Central and beyond, and strengthening Congress' grassroots presence in every state that the Indian National Congress has assigned him to.
            </p>
            {/* <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a> */}
          </div>
        </div>

        {/* Item 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-16 md:gap-x-10">
          <div className="flex flex-col justify-center order-2 md:order-1 mt-16 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Education & Youth Empowerment</h3>
            <p className="text-gray-700 mb-4 text-sm">
              Championing education reform in Karnataka, supporting CBSE and independent schools, and providing scholarships for underprivileged students.
            </p>
            {/* <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a> */}
          </div>
          <div className="relative shadow-2xl w-full order-1 md:order-2">
            <img src="mak-works1.jpg" alt="Public Service" className="w-full h-[350px] object-cover rounded-sm" />
            <div className="absolute -bottom-20 left-0 right-0 bg-[--color-blue] p-4 md:p-8 rounded-br-3xl rounded-sm">
              <p className="text-white font-family text-base md:text-lg leading-relaxed">
                "Quality education is the key to a better future for our country. I support our schools and work to give every student the chance to succeed."
              </p>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-16 md:gap-x-10">
          <div className="relative shadow-2xl w-full">
            <img src="mak-works3.jpg" alt="Public Service" className="w-full h-[350px] object-cover rounded-sm" />
            <div className="absolute -bottom-20 left-0 right-0 bg-[--color-blue] p-4 md:p-8 rounded-bl-3xl rounded-sm">
              <p className="text-white font-family text-base md:text-lg leading-relaxed">
                "Better roads, efficient transport, and improved public services are essential for Bengaluru and all our cities. I push for practical solutions that make daily life easier for everyone."
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-16 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Civic Development & Infrastructure</h3>
            <p className="text-gray-700 mb-4 text-sm">
            Pushing for better roads, traffic management, suburban rail, and public services in Bengaluru Central. Advocating for Outer Ring Road completion and a more efficient urban transit system.
            </p>
            {/* <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a> */}
          </div>
        </div>

        {/* Item 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-16 md:gap-x-10">
          <div className="flex flex-col justify-center order-2 md:order-1 mt-16 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Economic Growth & Employment Opportunities</h3>
            <p className="text-gray-700 mb-4 text-sm">
            Promoting job creation and startup support in Bengaluru’s growing tech and business hubs while ensuring economic policies favor young professionals and small businesses.
            </p>
            {/* <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a> */}
          </div>
          <div className="relative shadow-2xl w-full order-1 md:order-2">
            <img src="mak-works4.png" alt="Economic Growth & Employment Opportunities" className="w-full h-[300px] object-cover rounded-sm" />
            <div className="absolute -bottom-20 left-0 right-0 bg-[--color-blue] p-4 md:p-8 rounded-br-3xl rounded-sm">
              <p className="text-white font-family text-base md:text-lg leading-relaxed">
                "Growing our economy means creating jobs and supporting small businesses. I am committed to nudging the administration to foster an environment where new ideas can flourish and work opportunities are available to all."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;