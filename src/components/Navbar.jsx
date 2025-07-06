
import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { id: "about", title: "About" },
  { id: "tech", title: "Tech" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="relative w-full">
        <div className="flex justify-between items-center backdrop-blur-md bg-black/30  
          text-white min-h-12 max-w-4xl mx-auto px-4 py-2 border border-white/40 
          rounded-full mt-2 z-50">

          {/* Logo Section */}
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center"
          >
            <img
              src="/portfolio_assets/logo.png"
              alt="logo"
              className="w-8 h-8"
            />
            <span className="ml-2 text-white font-semibold text-base sm:text-lg">
              Mohit Khatri
            </span>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden sm:flex gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-gray-400"
                } hover:text-white font-semibold cursor-pointer transition duration-200`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Desktop Resume Button */}
          <div className="hidden sm:block">
            <a
              href="/portfolio_assets/Mohit_Khatri_MERN_stack_Resume.pdf"
              target="_blank"
            className="bg-black flex justify-center align-middle  rounded-full py-1 px-4.5 text-lg 
             text-gray-400 font hover:bg-white
             hover:text-black transition duration-200 ease-in-out"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setToggle(!toggle)}
              className="focus:outline-none"
            >
              <img
                src={
                  toggle
                    ? "/portfolio_assets/close.svg"
                    : "/portfolio_assets/menu.svg"
                }
                className="w-6 h-6 sm:w-7 sm:h-7"
                alt="menu"
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-black bg-opacity-95 
          p-6 z-40 rounded-b-xl shadow-md">
            <ul className="flex flex-col items-center gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-400"
                  } hover:text-white font-semibold cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false); // Close menu after click
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="/portfolio_assets/Mohit_Khatri_frontend_developer_CV (1).pdf"
                  className="bg-white text-black rounded-full py-2 px-6 text-sm font-semibold"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
