import React from 'react'
import { Link } from 'react-router-dom'


const footer = () => {
    
  return (
    <div>
      <footer className="bg-zinc-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Dad</h2>
          <p className="text-sm text-gray-400">
            Frontend Developer passionate about crafting clean and interactive user experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li> <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
           
          ><a href="#home" className="hover:text-white transition">Home</a></Link></li>
            <li><a href="#tech" className="hover:text-white transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📞 +91 1234567890</li>
            <li>📧 dev@dadportfolio.com</li>
            <li>📍 Jamnagar, Gujarat</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-zinc-700 pt-6 text-center text-sm text-gray-500">
        Made with <span className="text-red-500">❤️</span> by Dad
      </div>
    </footer>
    </div>
  )
}

export default footer
