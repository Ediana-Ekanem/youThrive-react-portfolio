// import React from 'react'
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import Navbar from "../navbar/Navbar";
import About from "../about/About";

const Index = () => {
  return (
    <>
      <div className="flex  flex-col h-screen">
        <Navbar />
        <About />
        <Skills />
        <Contact />
      </div>
    </>
  );
};

export default Index;
