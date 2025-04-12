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
    transition={{ duration: 1.9, ease: "easeOut" }}
    className=" text-white py-16 px-4 md:px-16"
  >
     
   
    <section className=" text-white py-16 px-4 md:px-16 mt-[-15px]" >
      <div><p className="sm:text-9xl text-xl font-bold text-gray-200 text-center
       font-stretch-ultra-expanded bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
          ABOUT ME
        </p></div>
      <div className="max-w-7xl  grid md:grid-cols-2 gap-10 items-center">

        <div className="space-y-6 mt-[-40px]">
        
          <h2 className="text-5xl font-bold text-blue-100">
            <span className="block text-blue-200">SOMETHING</span>
            ABOUT ME
          </h2>
      
          <p className="text-xl font-bold text-blue-50">MY NAME IS MOHIT.</p>

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
            className="rounded-4xl w-80 ml-48  h-full object-cover shadow-lg"
          />
        
        </div>
      </div>
    </section>
  
    </motion.section>
    </div>
  )
}

export default about
