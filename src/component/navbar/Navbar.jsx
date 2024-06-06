import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/icons/logo.svg";
import Container from "../container/Container";

const Navbar = () => {
  return (
    <nav className="text-white w-full fixed top-5 z-50 ">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-10 h-10">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>

          <ul className="flex items-center space-x-10 space-5 font-[Montserrat]">
            <li>
              <Link to="/" id="about-me">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/portfolio">Porfolio</Link>
            </li>
            <li className="rounded-3xl bg-white text-black py-2 px-4 font-semibold">
              <Link to="/contact ">Contact Me</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
