import React from 'react';
import frontend from '../assets/frontend.webp';
import backend from '../assets/backend.webp';
import fullstack from '../assets/fullstack.webp';


const FrontendCard = () => {
  return (
    <div className="group max-w-sm mx-auto bg-[#2C2C2C] rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Frontend Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110 group-hover:blur-sm"
          src={frontend}
          alt="Frontend Developer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
          <p className="text-white text-lg font-[400]">Our Frontend Services</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-white">Frontend Solutions</h2>
        <p className="text-white mb-4">Transforming Designs Into Beautiful Experiences</p>

        <div className="mt-4 hidden group-hover:block transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-white mb-2">Our Frontend Services</h3>
          <ul className="list-disc list-inside text-white space-y-2">
            <ol><span className="font-semibold">Responsive Web Design:</span><br /> Create mobile-friendly, visually appealing websites that adapt to any screen size.</ol>
            <ol><span className="font-semibold">Interactive User Interfaces:</span><br /> Build seamless, interactive websites using React.js for fast and engaging experiences.</ol>
            <ol><span className="font-semibold">UI/UX Design:</span><br /> Focus on creating user-centric designs for an intuitive and enjoyable browsing experience.</ol>
            <ol><span className="font-semibold">Landing Page Development:</span><br /> Design and develop high-conversion landing pages tailored to your business goals.</ol>
            <ol><span className="font-semibold">Performance Optimization:</span><br /> Enhance the speed and efficiency of your frontend for smoother navigation.</ol>
          </ul>
        </div>
      </div>

      <a href="#contact" className="block text-2xl bg-[#27E0B3] text-black font-semibold py-4 text-center cursor-pointer hover:bg-[#1FA887]">
        Contact Us
      </a>
    </div>
  );
};

const BackendCard = () => {
  return (
    <div className="group max-w-sm mx-auto bg-[#2C2C2C] rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Backend Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110 group-hover:blur-sm"
          src={backend}
          alt="Backend Developer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
          <p className="text-white text-lg font-bold">Explore Backend Services</p>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-white">Backend Development</h2>
        <p className="text-white mb-4">
          Powerful Backends for Robust Performance
        </p>
        <div className="mt-4 hidden group-hover:block transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-white mb-2">Our Backend Skills</h3>
          <ul className="list_content list-disc list-inside text-white">
            <ol><span>API Development:</span> <br />Create RESTful APIs using Node.js and Express for smooth data
              exchange.</ol>
            <ol><span>Database Integration:</span> <br />Implement secure, scalable database systems with PostgreSQL to
              manage your data efficiently.
            </ol>
            <ol><span>Authentication Systems:
            </span> <br />Set up secure user authentication and management with JWT or
              OAuth.
            </ol>
            <ol><span>Data Storage & File Uploads:</span> <br />Enable file uploads with secure storage for media, documents, and
              more</ol>
            <ol><span>Backend Performance Optimization:</span> <br />Improve backend efficiency and ensure fast response times for a
              seamless experience</ol>

          </ul>
        </div>
      </div>
      <a href='#contact' className="block text-2xl bg-[#27E0B3] text-black font-semibold py-4 text-center cursor-pointer hover:bg-[#1FA887]">
        Contect Us
      </a>
    </div>
  );
};

const FullStackCard = () => {
  return (
    <div className="group max-w-sm mx-auto bg-[#2C2C2C] rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      {/* Full-Stack Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110 group-hover:blur-sm"
          src={fullstack}
          alt="Full-Stack Developer"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700">
          <p className="text-white text-lg font-bold">Explore Full-Stack Services</p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2 text-white">Full-Stack <br /> Solutions</h2>
        <p className="text-white mb-4">
          End-to-End Development for Complete Solutions
        </p>

        <div className="mt-4 hidden group-hover:block transition-opacity duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-white mb-2">Our Full-Stack Skills</h3>
          <ul className="list_content list-disc list-inside text-white">
            <ol><span className='font-[600] text-gray-50'>Custom Web Development:</span> <br /> Build both frontend and backend for a complete, fully integrated
              web solution.
            </ol>
            <ol><span className='font-[600] text-gray-50'>Complete Application Development:</span> <br />Develop end-to-end solutions, from user interface to server-side
              functionality</ol>
            <ol><span className='font-[600] text-gray-50'>Seamless Data Flow:</span><br /> Ensure smooth integration between frontend and backend for a
              unified user experience.
            </ol>
            <ol><span className='font-[600] text-gray-50'>Dynamic CRUD Applications:</span><br /> Create fully functional CRUD (Create, Read, Update, Delete)
              applications with real-time data updates.
            </ol>
            <ol><span className='font-[600] text-gray-50'>End-to-End Optimization:</span> <br />Optimize the entire application, ensuring both frontend and backend
              work together seamlessly for maximum performance.</ol>
          </ul>
        </div>
      </div>

      <a href='#contact' className="block text-2xl bg-[#27E0B3] text-black font-semibold py-4  text-center cursor-pointer hover:bg-[#1FA887]">
        Contect Us
      </a>
    </div>
  );
};



const SolutionsCard = () => {
  return (
    <>
      <h1 id='services' className='text-3xl text-white font-[400] py-8 px-12 text-left '>How Our Services Will Grow
        <span className="text-[#1FA887]"> Your Business</span>
      </h1>
      <div className=" flex flex-wrap justify-start items-start space-y-4 space-x-0 sm:space-y-0  p-4">

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


