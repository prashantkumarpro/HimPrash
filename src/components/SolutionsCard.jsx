import React from 'react';
import frontend from '../assets/frontend.webp';
import backend from '../assets/backend.webp';
import fullstack from '../assets/fullstack.webp';


const FrontendCard = () => {
  return (
    <div className="group max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Frontend Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110 group-hover:blur-sm"
          src={frontend}
          alt="Frontend Developer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
          <p className="text-white text-lg font-[400]">Explore Frontend Skills</p>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Frontend Development</h2>
        <p className="text-gray-700 mb-4">
          We create stunning user interfaces using React.js to give your users the best experience.
        </p>
        <div className="mt-4 hidden group-hover:block transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Frontend Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>HTML5, CSS3, JavaScript</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
      <a href='#contact' className="block text-2xl bg-[#27E0B3] text-black font-semibold p-4 text-center cursor-pointer hover:bg-[#1FA887]">
        Contact Us
      </a>
    </div>
  );
};

const BackendCard = () => {
  return (
    <div className="group max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Backend Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110 group-hover:blur-sm"
          src={backend}
          alt="Backend Developer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
          <p className="text-white text-lg font-bold">Explore Backend Skills</p>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Backend Development</h2>
        <p className="text-gray-700 mb-4">
          With Node.js, we ensure your web applications are secure, fast, and scalable.
        </p>
        <div className="mt-4 hidden group-hover:block transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Backend Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Database Management (MongoDB, SQL)</li>
            <li>RESTful APIs</li>
            <li>Authentication & Authorization</li>
            <li>Web Security & Performance Optimization</li>
          </ul>
        </div>
      </div>
      <a href='#contact' className="block text-2xl bg-[#27E0B3] text-black font-semibold p-4 text-center cursor-pointer hover:bg-[#1FA887]">
        Contact Us
      </a>
    </div>
  );
};

const FullStackCard = () => {
  return (
    <div className="group max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Full-Stack Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110 group-hover:blur-sm"
          src={fullstack}
          alt="Full-Stack Developer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
          <p className="text-white text-lg font-bold">Explore Full-Stack Skills</p>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Full-Stack <br /> Solutions</h2>
        <p className="text-gray-700 mb-4">
          From UI/UX design to the backend, we deliver complete solutions for your business needs.
        </p>
        <div className="mt-4 hidden group-hover:block transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Full-Stack Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>React.js (Frontend)</li>
            <li>Node.js (Backend)</li>
            <li>Express.js</li>
            <li>MongoDB & SQL (Databases)</li>
            <li>RESTful APIs & GraphQL</li>
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
      <a href='#contact' className="block text-2xl bg-[#27E0B3] text-black font-semibold p-4 text-center cursor-pointer hover:bg-[#1FA887]">
        Contact Us
      </a>
    </div>
  );
};



const SolutionsCard = () => {
  return (
    <>
      <h1 id='services' className='text-4xl text-white font-[400] py-8 px-12 text-left '>Services Offered.</h1>
      <div className=" flex flex-wrap justify-start space-y-4 space-x-0 sm:space-y-0  p-4">

        {/* Frontend Development Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <FrontendCard />
        </div>

        {/* Backend Development Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-2">
          <BackendCard />
        </div>

        {/* Full-Stack Solutions Card */}
        <div className="w-full md:w-1/3 p-2">
          <FullStackCard />
        </div>
      </div>
    </>
  );
};

export default SolutionsCard;


