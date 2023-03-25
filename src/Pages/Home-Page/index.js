import React from "react";

import Hero from './../../Components/Hero-Image';
import Features from './../../Components/Features';
import Services from "./../../Components/Services";
import Portfolio from "./../../Components/Portfolio";
import About from './../../Components/About';
import Contact from "./../../Components/Contact";

const HomePage = ()=>{
    return (
       <React.Fragment>
        <Hero />
        <Features />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </React.Fragment>
    )
}

export default HomePage ;

