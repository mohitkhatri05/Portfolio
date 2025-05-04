import React from "react";
import { Link } from "react-router-dom";



const footer = () => {
  return (

      <footer   className="relative text-white py-10 ">
         
  
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-2">Mohit Khatri</h2>
            <p className="text-sm text-gray-400">
              Frontend Developer passionate about crafting clean and interactive
              user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                {" "}
                <Link
                  to="/"
                  onClick={() => {
                    setActive("");
                    window.scrollTo(0, 0);
                  }}
                >
                  <a href="#home" className="hover:text-white transition">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <a href="#tech" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>📞 +91 7023533480</li>
              <li>📧 mohitkhatri86005.com</li>
              <li>📍 Jaipur, Rajasthan</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center  pt-6 text-center text-sm text-gray-200">
          Made with <span className="text-red-500">❤️</span> by Mohit khatri
        </div>
        <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-gray-200">
      
          <p>&copy; 2025 Mohit. All rights reserved.</p>
        
        </div>
        
      </footer>
    
   
  );
};

export default footer;
