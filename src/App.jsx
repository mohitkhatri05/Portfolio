import { useState, useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Tech from "./components/Tech.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import LampDemo from "./components/lamp-demo";
import LampDemoFooter from "./components/LampDemoFooter";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black text-white">
      {/* <LampDemo /> */}
        <Navbar />
     <LampDemo>
      <Hero />
     </LampDemo>
        <About />
        <Tech />
        <Project />
        <Contact />
     <LampDemoFooter>
        <Footer />
      </LampDemoFooter> 

        
      </div>
      
    </>
  );
}

export default App;
