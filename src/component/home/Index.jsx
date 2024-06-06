// import React from 'react'
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import About from "../about/About";
import Porfolio from "../portfolio/Porfolio";
import Desktop from "../header/Desktop";

const Index = () => {
  return (
    <>
      <div>
        <Desktop />
        <About />
        <Skills />
        <Porfolio />
        <Contact />
      </div>
    </>
  );
};

export default Index;
