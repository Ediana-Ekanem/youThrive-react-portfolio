// import React from 'react'
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import About from "../about/About";
import Porfolio from "../portfolio/Porfolio";
import Header from "../header/Header";

const Index = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <About />
        <Skills />
        <Porfolio />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
};

export default Index;
