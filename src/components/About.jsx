import React , {useRef} from 'react'
import {motion , useInView } from "framer-motion"
import { Link } from "react-router-dom";

const about = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  return (
    <div  style={{ backgroundImage: "url('/portfolio_assets/Deep Space.jpg')"}}>
    <motion.section
    id="about"
    ref={ref}
    initial={{ opacity: 0, y: 50 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 1, ease: "easeOut" }}
    className=" text-white py-16 px-4 md:px-16"
  >
     
   
    <section className=" text-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
        
          <h2 className="text-5xl font-bold text-lime-400">
            <span className="block text-purple-400">SOMETHING</span>
            ABOUT ME
          </h2>
      
          <p className="text-xl font-bold text-lime-400">MY NAME IS YASEN.</p>

          <div className="flex space-x-12 text-center">
            <div>
              <p className="text-4xl text-purple-400 font-bold">15</p>
              <p className="text-white text-sm uppercase">Years</p>
            </div>
            <div>
              <p className="text-4xl text-purple-400 font-bold">1000</p>
              <p className="text-white text-sm uppercase">Websites</p>
            </div>
          </div>

          <p className="text-gray-300">
            For the past 15 years, I’ve developed over 1,000 websites and landing
            pages for businesses and entrepreneurs worldwide.
          </p>

          <p className="text-3xl text-purple-400 font-bold">$1M</p>
          <p className="text-white text-sm uppercase">Max. Budget</p>
        </div>

        <div className="relative">
          <img
            src="/portfolio_assets/myghibli.png" // your image URL goes here
            alt="Profile"
            className="rounded-xl w-full h-auto object-cover shadow-lg"
          />
          <div className="mt-6 bg-gray-900/70 rounded-xl p-6">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum vestibulum. 
              <span className="font-bold"> Web Team Leader </span>
              at Accenture LLC (Fortune 500).
            </p>
            <p className="mt-4 text-gray-300">
              From 2016 - 2018, I led a team of 10 web designers and developers. We worked on big projects with a budget of $500k - $1M.
            </p>
            <div className="mt-4">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </motion.section>
    </div>
  )
}

export default about
