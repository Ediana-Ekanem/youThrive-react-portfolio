import Index from "./component/home/Index";
import Navbar from "./component/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Skills from "./component/skills/Skills";
import Portfolio from "./component/portfolio/Porfolio";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
