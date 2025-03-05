import React from 'react';

const Works = () => {
  return (
    <section className="px-52 py-20 my-24">
        <h1 className="text-4xl font-semibold text-center mb-20 text-[--color-blue] uppercase">Heading Lorem Ipsum</h1>
      <div className="space-y-40">
        {/* Item 1 */}
        <div className="grid grid-cols-2 gap-x-10">
          <div className="relative shadow-2xl w-fit">
            <img src="https://placehold.co/500x400" alt="Public Service" className="object-cover" />
            <div className="absolute -bottom-10 left-0 right-0 h-42 w-fit bg-[--color-blue] p-8 rounded-bl-3xl">
              <p className="text-white font-family text-xl leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-white/80 mt-4 text-sm uppercase">— LOREM IPSUM, DOLOR SIT amet</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Public Service & Political Leadership</h3>
            <p className="text-gray-700 mb-4">
              Strategizing progressive governance, addressing key concerns in Karnataka with a specific focus on Bengaluru Central and beyond, and strengthening Congress' grassroots presence in every state that the Indian National Congress has assigned him to.
            </p>
            <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Item 2 */}
        <div className="grid grid-cols-2 gap-x-10">
        <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Education & Youth Empowerment</h3>
            <p className="text-gray-700 mb-4">
            Championing education reform in Karnataka, supporting CBSE and independent schools, and providing scholarships for underprivileged students.
            </p>
            <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a>
          </div>
          <div className="relative shadow-2xl w-fit">
            <img src="https://placehold.co/500x400" alt="Public Service" className="w-full h-[400px] object-cover" />
            <div className="absolute -bottom-10 left-0 right-0 h-48 bg-[--color-blue] p-8 rounded-br-3xl">
              <p className="text-white font-family text-xl leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-white/80 mt-4 text-sm uppercase">— LOREM IPSUM, DOLOR SIT amet</p>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="grid grid-cols-2 gap-x-10">
          <div className="relative shadow-2xl w-fit">
            <img src="https://placehold.co/500x400" alt="Public Service" className="w-full h-[400px] object-cover" />
            <div className="absolute -bottom-10 left-0 right-0 h-48 bg-[--color-blue] p-8 rounded-bl-3xl">
              <p className="text-white font-family text-xl leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-white/80 mt-4 text-sm uppercase">— LOREM IPSUM, DOLOR SIT amet</p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Civic Development & Infrastructure</h3>
            <p className="text-gray-700 mb-4">
            Pushing for better roads, traffic management, suburban rail, and public services in Bengaluru Central. Advocating for Outer Ring Road completion and a more efficient urban transit system.
            </p>
            <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a>
          </div>
        </div>

        {/* Item 4 */}
        <div className="grid grid-cols-2 gap-x-10">
        <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Economic Growth & Employment Opportunities</h3>
            <p className="text-gray-700 mb-4">
            Promoting job creation and startup support in Bengaluru’s growing tech and business hubs while ensuring economic policies favor young professionals and small businesses.
            </p>
            <a href="#" className="text-[--color-blue] hover:opacity-80 transition duration-300 font-medium flex items-center">
              LEARN MORE <span className="ml-2">→</span>
            </a>
          </div>
          <div className="relative shadow-2xl w-fit">
            <img src="https://placehold.co/500x400" alt="Public Service" className="w-full h-[400px] object-cover" />
            <div className="absolute -bottom-10 left-0 right-0 h-48 bg-[--color-blue] p-8 rounded-br-3xl">
              <p className="text-white font-family text-xl leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="text-white/80 mt-4 text-sm uppercase">— LOREM IPSUM, DOLOR SIT amet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;