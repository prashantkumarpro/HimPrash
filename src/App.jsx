import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import Amazon from './assets/Amazon clone.png'
import logo from './assets/logo.webp'
import togood from './assets/togood.png'
import siliSalon from './assets/silisalon.png'
import ProfileStore from './assets/ProfileStore.jpg'
import landingPage from './assets/LandingPage.png'
import movies4u from './assets/movies4u.png'
import { TfiLinkedin } from "react-icons/tfi";
import { FaArrowUp, FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { RiFacebookCircleFill } from "react-icons/ri";
import SolutionsCard from "./components/SolutionsCard";
import './App.css'


const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <SolutionsCard />
      <AboutUsCard />
      <Testimonials />
      <Portfolio />
      <WebSolutionsPricing />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleLinkClick = () => {
      setMenuOpen(false);
    };

    const links = document.querySelectorAll('.link-container a');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick)
    });

    // Cleanup function to remove event listeners
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };

  }, [])// Run this effect only on mount


  return (
    <nav className="nav_section bg-[#0D1413] py-2 px-8 text-white sticky flex items-center justify-between top-0 z-10  shadow-xl">
      <div className="flex justify-between items-center">
        <div className="size-20 flex items-center">
          <a href="#"> <img
            className="logo"
            src={logo} alt="logo" /></a>

        </div>
      </div>
      <div className="flex gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="cursor-pointer -mt-[1px]">
          <TfiLinkedin
            className="text-xl hover:text-[#1FA887]" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mt-[1.5px]">
          <FaXTwitter
            className="text-xl hover:text-[#1FA887]" />
        </a>
        <span className="menu-toggle cursor-pointer text-3xl md:hidden -mt-[7px]" onClick={toggleMenu}>
          &#9776;
        </span>
        <ul
          className={`link-container  ${menuOpen ? "nav_opened" : ""
            } md:flex flex-column gap-4 mt-4 md:mt-0`}
        >
          <span className={`close ${menuOpen ? "block" : "hidden"} cursor-pointer`}
            onClick={toggleMenu}>✕</span>
          <li>
            <a href="#" className="font-bold">
              Home
            </a>
          </li>
          <li>
            <a href="#team" className="font-bold">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="font-bold">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="font-bold">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#testimonials" className="font-bold">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#price" className="font-bold">
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" className="font-bold">
              Contact
            </a>
          </li>
          <li>
            <a href="" className="font-bold">
              FAQ
            </a>
          </li>
          <div className={`social_links ${menuOpen ? 'block' : 'hidden'} flex justify-end items-center mr-5 gap-5`}>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="cursor-pointer mt-[1.5px]">
              <TfiLinkedin
                className="text-xl hover:text-[#1FA887]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mt-[1.5px]">
              <FaXTwitter
                className="text-xl hover:text-[#1FA887]" />
            </a>
          </div>
        </ul>
      </div>


    </nav>
  );
};

const Hero = () => (
  <section className="hero_section bg-[#0D1413] text-white text-center  py-20 px-4 ">
    <div className="w-full  flex flex-col justify-center items-center gap-8">

      <div className="hero_intro text-left px-8 py-6">
        <h1 className="hero_intro_text text-[3rem] leading-[2.8rem]"><span className="text-[10vw] tracking-tighter">In</span> a world that's going digital, <br />your business should too.</h1>
      </div>
      <div className="hero_intro text-right px-8 py-6">
        <h1 className="hero_intro_text text-[3rem] leading-[2.8rem]">Invest once, and enjoy the benefits of our comprehensive digital solutions.</h1>
      </div>
    </div>
  </section>
);


const AboutUsCard = () => {
  return (
    <div className="about_section flex items-center justify-center min-h-[100vh] bg-transparent p-6">
      <div className="about_card w-[98%] rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-[#1FA887] mb-12 text-left">About Us</h2>

        <div className="flex items-center justify-center space-x-3 mb-12">
          <FaReact className="text-blue-500 text-3xl" />
          <FaNodeJs className="text-green-500 text-3xl" />
          <FaDatabase className="text-indigo-500 text-3xl" />
        </div>

        <p className="text-white opacity-90 text-lg leading-relaxed mb-12">
          We're <span className="font-bold text-[#1FA887]">Himansu</span> & <span className="font-bold text-[#1FA887]">Prashant</span>, two developers dedicated to bringing your ideas to life.
          <span className="font-semibold text-[#1FA887]"> Prashant</span> focuses on building beautiful, user-friendly websites with <span className="font-extrabold">React</span> and <span className="font-extrabold">Tailwind CSS</span>.
          <span className="font-semibold text-[#1FA887]"> Himansu</span> handles the backend using <span className="font-extrabold">Node.js</span> and <span className="font-extrabold">PostgreSQL</span> to ensure smooth performance.
        </p>

        <p className="text-white text-lg opacity-90 leading-relaxed mb-12">
          Together, we create websites and apps that are easy to use, impactful, and scalable. From clean designs to powerful backends, we combine our skills to help your business grow.
        </p>

      </div>
    </div>
  );
}

const Testimonials = () => (
  <section id="testimonials" className=" text-center py-16">
    <h2 className="text-4xl font-bold mb-10 text-white">What Our Clients Are Saying</h2>
    <div className="max-w-2xl mx-auto">
      <Testimonial
        quote="Prashant and Himanshu built our website with incredible attention to detail. Highly recommended!"
        name="John Doe, CEO of TechCo"
      />
      <Testimonial
        quote="Their professionalism and expertise made the process seamless. We love our new site!"
        name="Jane Smith, Founder of Startup Inc."
      />
    </div>
  </section>
);

const Testimonial = ({ quote, name }) => (
  <div className="text-white bg-[#0D1413] p-6 rounded-lg shadow-lg mb-6">
    <p>{quote}</p>
    <h4 className="font-bold mt-4">{name}</h4>
  </div>
);

const Portfolio = () => (
  <section id="portfolio" className="text-center py-16 px-5">
    <h2 className="text-4xl font-bold mb-10 text-[#27E0B3]">See Our Results</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <ProjectCard
        title="Sili Salon"
        imageUrl={siliSalon}
        description="A salon website designed to boost sales and improve user experience."
        link={"https://silisalon.vercel.app/"}
      />

      <ProjectCard
        title="Landing Page"
        imageUrl={landingPage}
        description="A landing page"
        link={"https://landing-page-coral-mu.vercel.app/"}
      />

      <ProjectCard title="Two Good.Co"
        imageUrl={togood}
        description="An e-commerce platform designed to boost sales and improve user experience.
        "
        link={"https://two-good-co-sigma.vercel.app/"}
      />

      <ProjectCard
        title="Amazon Clone"
        imageUrl={Amazon}
        description="An e-commerce platform designed to boost sales and improve user experience."
        link={"https://amazon-five-amber.vercel.app/"}
      />

      <ProjectCard title="Movies4U"
        imageUrl={movies4u}
        description="A  video streaming web app."
        link={"https://movies4-u-sage.vercel.app/"}
      />

      <ProjectCard title="Profile store"
        imageUrl={ProfileStore}
        description="A profile stroe website.
        "
        link={"https://profile-store-mini-social-media.onrender.com/profiles"}
      />


    </div>
  </section>
);

const ProjectCard = ({ title, imageUrl, description, link }) => (
  <div className="bg-[#2C2C2C] rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 max-w-sm mx-auto my-4">
    {imageUrl && (
      <a href={link} target="_blank" rel="noreferrer"
        className="w-full h-96"
      >
        <img
          src={imageUrl}
          alt={title}
          className="object-center rounded-t-lg"
        />
      </a>
    )}
    <div className="p-4  text-left">
      <h3 className="text-xl font-bold mb-2 text-white ">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    <div className="flex justify-between items-center p-4 border-t border-gray-700">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="text-[#1FA887] font-medium hover:underline"
      >
        View Project
      </a>
      <span className="text-gray-400 text-xs">🔗</span>
    </div>
  </div>
);


const Team = () => (
  <section id="team" className="text-white text-center py-16">
    <h2 className="text-4xl font-bold mb-10">Meet Our Team</h2>
    <div className="flex flex-wrap justify-center gap-8 cursor-pointer">
      <a href="https://myportfolio-swart-ten.vercel.app/" target="_blank"
        rel="noopener noreferrer">
        <TeamCard
          name="Prashant Kumar"
          role="Frontend Developer"
          description="Specializing in creating interactive and responsive user interfaces."
          imageUrl={"https://avatars.githubusercontent.com/u/133010547?s=96&v=4"}
        />
      </a>
      <a href="https://himansuwebportfolio.netlify.app/" target="_blank"
        rel="noopener noreferrer">
        <TeamCard
          name="Himansu Naik"
          role="Backend Developer"
          description="Expert in building robust server-side applications using Node.js."
          imageUrl="https://avatars.githubusercontent.com/u/123152485?s=400&u=df7b011f6d5310b465a77c5ad867d5c742df8c0d&v=4"
        />
      </a>
    </div>
  </section>
);

const TeamCard = ({ name, role, description, imageUrl }) => (
  <div className="team_card bg-white text-black  rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105  w-[420px] p-6 h-54 flex justify-between items-center gap-5">
    <div className="w-1/3 rounded-full overflow-hidden bg-black">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover " />
    </div>
    <div className="text-left">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="font-semibold mb-2">{role}</p>
      <p>{description}</p>
    </div>
  </div>
);



const WebSolutionsPricing = () => {
  const plans = [
    {
      name: "Basic Website",
      price: "₹5,000 / $60",
      priceIn$: "$60",
      description: "-Perfect for personal websites, small businesses, or portfolio sites.",
      features: [
        "1-page design",
        "Custom layout and branding",
        "Basic SEO setup",
        "Contact form integration",
        "Mobile responsive",
        "Delivery time: 5-7 days",
      ],
      popular: false,
    },

    {
      name: "Standard Website",
      price: "₹22,000 / $249",
      description: "For businesses wanting a more established online presence",
      features: [
        "Up to 5 pages",
        "Responsive web design",
        "Basic SEO & analytics setup",
        "Contact form + Social media integration",
        "Image gallery or product catalog",
        "Blog setup (optional)",
        "Delivery time: 10-14 days",
      ],
      popular: false,
    },
    {
      name: "Premium Website",
      price: "  ₹50,000 / $600",
      description: "For businesses needing advanced functionality and a polished online",
      features: [
        "Up to 10 pages",
        "Custom frontend development (React.js)",
        "Backend API integration (Node.js)",
        "User authentication system (login, signup)",
        "Custom forms, file upload capabilities",
        "Enhanced SEO, analytics, and performance optimization",
        "E-commerce functionality (optional)",
        "Delivery time: 20-30 days",
      ],
      popular: true,
    },
    {
      name: "Add-Ons",
      price: "₹5,000 / $60",
      description: "Domain & Hosting",
      features: [
        "Get a custom domain and reliable hosting to make your website live",
        "Domain registration (1-year)",
        "Hosting setup with SSL certificate",
        "1 year of hosting included",
        "Delivery time: 1-2 days",
      ],
      popular: false,
    }

  ];

  return (
    <section id="price" className="bg-[#0D1413]">
      <h1 className="text-center py-20 px-8 text-3xl text-white font-semibold ">Services that work for you, prices that make sense. <br /> <span className="text-[#1FA887]">See our packages today </span></h1>
      <div className="pricing_card flex flex-col md:flex-row justify-center items-start gap-8 p-8 bg-[#0D1413]">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={`price_card relative max-w-sm w-full rounded-lg shadow-lg p-6 text-center transition-transform  duration-300 hover:scale-105 ${plan.popular ? "bg-[#1FA887] text-[white]" : "bg-white text-gray-800"
              }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-sm font-semibold px-3 py-1 rounded-bl-lg">
                Most Popular
              </span>
            )}
            <h2 className="text-2xl font-semibold mt-4">{plan.name}</h2>
            <p className="text-lg italic mb-4">{plan.description}</p>
            <p className="amount text-3xl font-bold my-4">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-sm">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg font-semibold ${plan.popular
                ? "bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
                : "bg-[#1FA887] text-slate-600 hover:bg-[#58cfb3]"
                }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const Contact = () => (
  <section id="contact" className="w-full py-12 px-8">
    <div className="contact-container">
      <div className="contact-heading text-gray-300">
        <h1 className="font-bold text-2xl  uppercase">
          <span className="text-[#1FA887]"> Get in Touch with Us</span>
        </h1>
        <p className="lowercase pt-4">
          We’re here to help you bring your ideas to life, Whether you
          have a question, want to discuss a project,
          or need assistance, don’t<br /> hesitate to reach out. We’d love to hear from you and
          help you build something amazing!
        </p>
      </div>
    </div>
    <div className="links flex flex-col justify-center items-center w-full py-4">
      <div className="part-one w-full">
        <form className="max-w-xl w-full mx-auto py-12 text-white">
          <div className="form-group mb-4">
            <label htmlFor="number" className="block mb-1 font-bold text-lg">
              Phone:
            </label>
            <input type="text" id="phone" name="phone" placeholder="Enter mobile number" className="w-full p-2 outline-none border border-[#1FA887] text-[#333]" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block mb-1 font-bold text-lg">
              Email:
            </label>
            <input type="email" id="email" name="email" placeholder="Enter Email" required className="w-full p-2 outline-none border border-[#1FA887]  text-[#333]" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="socialLink" className="block mb-1 font-bold text-lg">
              Social Media:
            </label>
            <input type="text" id="socialLink" name="socialLink" placeholder="Enter Social Link" required className="w-full p-2 outline-none border border-[#1FA887]  text-[#333]" />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="w-full p-2 rounded-md font-bold text-black uppercase cursor-pointer bg-[#1FA887] transition duration-300 ease-in-out hover:bg-gray-300 hover:text-[#333]" />
          </div>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="text-white bg-[#0D1413] text-center ">


    <div className="discover w-full h-auto bg-[#1FA887] mt-40 flex flex-col sm:flex-row items-start justify-between">
      <div className="left w-full sm:w-1/2 px-5 sm:px-10 py-10">
        <h1 className="text-5xl sm:text-7xl leading-tight font-normal text-left">
          <span className="inline-block tracking-normal">Discover</span>{" "}
          <span className="inline-block tracking-wider">HimPrash.</span>
        </h1>
        <div className="Let_go bg-black w-fit py-2 px-4 sm:py-3 sm:px-6 mt-6 sm:mt-10 border-[1px] border-solid border-black">
          <a href="#contact">
            <h1 className="text-sm sm:text-[0.99rem] text-[#1FA887] font-medium flex flex-row items-center gap-5 ">
              <span className="inline-block">LET'S GO</span>
              <span className="inline-block text-xl sm:text-[1.2rem] font-extrabold hover:rotate-[45deg]">
                <MdArrowOutward />
              </span>
            </h1>
          </a>
        </div>
      </div>
      <div className="right w-full sm:w-1/2 flex flex-col sm:flex-row items-start justify-between px-10 sm:px-20 py-10 sm:py-20">
        <p className="mt-4 sm:mt-10 sm:ml-20 w-full sm:w-2/3 leading-7 sm:leading-[1.8] tracking-tight font-medium text-sm sm:text-[1rem] text-left">
          Find out how HimPrash's people-centered designs can make web solutions more empowering.
        </p>
        <a href="#services" className="circle w-14 h-14 sm:w-[8rem] sm:h-[8rem] border-black border-[1.5px] rounded-full flex items-center justify-center mt-6 sm:mt-0">
          <span className="inline-block text-3xl sm:text-5xl">
            <FaArrowUp />
          </span>
        </a>
      </div>
    </div>

    <div className="footer w-full h-auto bg-black text-white overflow-hidden relative">
      <div className="footer_content w-full sm:w-[94%] m-auto h-full flex flex-col gap-6 sm:gap-8 relative">
        <div className="footer_part1 h-auto sm:h-1/2 flex flex-row sm:flex-row items-start justify-between pt-20 pb-10 z-[1] px-5">
          <div className="left_part text-left mb-6 sm:mb-0 ">
            <a href="#"><h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium">Home</h1></a>
            <a href="#services"><h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium">Services</h1></a>
            <a href="#portfolio"> <h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium">About</h1></a>
            <a href="#team"><h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium">Team</h1></a>
            <a href="#contact"><h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium">Contact</h1></a>
          </div>
          <div className="middle_part text-left mb-6 sm:mb-0">

          </div>
          <div className="right_part text-left">
            <a href="#testimonials">
              <h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium cursor-pointer">
                Testimonials
              </h1></a>
            <a href="#portfolio"> <h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium cursor-pointer">
              Portfolio
            </h1></a>
            <a href="#portfolio"> <h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium cursor-pointer">
              Resources
            </h1></a>
            <a href="#contact"> <h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium cursor-pointer">
              Contact
            </h1></a>
            <a href="#price">  <h1 className="text-lg sm:text-[1.4rem] leading-6 sm:leading-[1.8] font-medium cursor-pointer">
              Price
            </h1></a>
          </div>
        </div>
        <div className="footer_part2 py-5 h-auto sm:h-[20%] bg-black sticky top-[120%] z-[2] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 border-t-[1.5px]  ">
          <div className="left_part flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            <span className="inline-block text-sm sm:text-[0.78rem] border-b-[1.5px]">Privacy Policy</span>
            <span className="inline-block text-sm sm:text-[0.78rem] border-b-[1.5px]">Terms of Use</span>
          </div>
          <div className="middle_part">
            <span className="inline-block text-sm sm:text-[0.78rem]">&copy;2024 HimPrash. All rights reserved.</span>
          </div>

          <div className="right_part flex gap-4 sm:gap-2">
            <a href="https://www.instagram.com/prashant"
              target="_blank"
              rel="noopener noreferrer">
              <span className="inline-block text-lg sm:text-[1.4rem] hover:text-[#1FA887] cursor-pointer">
                <FaInstagram />
              </span>   </a>
            <a href="https://www.linkedin.com/in/prashant-web-developer/" target="_blank" rel="noopener noreferrer">
              <span className="inline-block text-lg sm:text-[1.4rem] hover:text-[#1FA887] cursor-pointer">
                <FaLinkedin />
              </span> </a>
            <a href="">
              <span className="inline-block text-lg sm:text-[1.4rem] hover:text-[#1FA887] cursor-pointer">
                <FaGithub />
              </span>   </a>
            <a href=""> <span className="inline-block text-lg sm:text-[1.4rem] hover:text-[#1FA887] cursor-pointer">
              <RiFacebookCircleFill />
            </span> </a>
            <a href=""><span className="inline-block text-lg sm:text-[1.4rem] hover:text-[#1FA887] cursor-pointer">
              <FaXTwitter />
            </span> </a>
          </div>
        </div>


      </div>
    </div>
  </footer >
);

export default App;
