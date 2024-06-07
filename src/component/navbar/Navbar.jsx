import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/icons/logo.svg";
import logoWhite from "/assets/icons/logo-mobile.svg";
import Container from "../container/Container";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 text-white transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="w-10 h-10">
            {scrolled ? (
              <img
                src={logoWhite}
                alt="white-logo"
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={logo}
                alt="black-logo"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <ul className="flex items-center space-x-10 font-[Montserrat]">
            <li>
              <Link to="/" id="about-me">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="rounded-3xl bg-white text-black py-2 px-4 font-semibold">
              <Link to="/contact">Contact Me</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
