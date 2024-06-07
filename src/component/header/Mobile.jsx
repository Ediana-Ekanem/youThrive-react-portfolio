import React, { useState } from "react";
import logo from "/assets/icons/logo-mobile.svg";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import firstBgImage from "/assets/img/profile.png";
import secondBgImage from "/assets/img/Background-mobile.png";
import git from "/assets/icons/git-mobile.svg";
import email from "/assets/icons/email-mobile.svg";
import linkedIn from "/assets/icons/linkedIn-mobile.svg";
import seperator from "/assets/icons/separatorWhite.svg";
import { Link } from "react-router-dom";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full bg-black">
      <nav className="flex justify-between items-center p-4 bg-black z-30">
        <div className="w-10 h-10">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <div onClick={toggleMenu} className="cursor-pointer">
          {isOpen ? (
            <AiOutlineClose color="white" size={35} />
          ) : (
            <TiThMenu color="white" size={35} />
          )}
        </div>
      </nav>

      <div className="w-full h-[500px]">
        <img
          src={isOpen ? secondBgImage : firstBgImage}
          alt="background-image"
          className="w-full h-full"
        />
      </div>

      {!isOpen ? (
        <div
          className="w-full h-48 absolute bottom-0 text-white z-50 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(128, 128, 128, 0.5)",
            clipPath: "polygon(100% 0, 0 40%, 0 100%, 100% 100%)",
          }}
        >
          <div className="font-[Raleway] flex space-x-10 items-center pt-12 mt-6">
            <div className="text-white">
              <h2 className="text-xl font-bold">Hi, I am</h2>
              <h1 className="text-2xl font-bold ms-3 mb-1">Ediana Ekanem</h1>
              <p className="font-bold">Front-end Developer / UI Designer</p>
            </div>

            <div className="flex flex-col space-y-3 items-center">
              <img src={email} alt="email-logo" className="w-7 h-7" />
              <img src={git} alt="git-logo" className="w-7 h-7" />
              <img src={linkedIn} alt="linkedIn-logo" className="w-7 h-7" />
            </div>
          </div>
        </div>
      ) : (
        <div className=" absolute top-20 left-0 w-full">
          <div className="  h-[250px]  bg-black bg-opacity-75 flex flex-col items-center justify-center text-white z-50 ">
            <ul className="space-y-5 text-xl font-bold w-full text-center ">
              <li className="hover:bg-white hover:text-black py-3 ">
                <Link to="/">About Me</Link>
              </li>
              <li className="hover:bg-white hover:text-black py-3">
                <Link to="/skills">Skills</Link>
              </li>
              <li className="hover:bg-white hover:text-black py-3">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="hover:bg-white hover:text-black py-3">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="text-white mt-10">
            <div className="flex flex-col items-center">
              <p className="text-xl font-advent-pro">my name is Ediana</p>
              <h3 className="text-3xl uppercase mt-1">I'm a developer</h3>
              <div className="my-3">
                <img src={seperator} alt="seperator icon" />
              </div>

              <div className="flex justify-center space-x-5 items-center mt-10">
                <img src={email} alt="email-logo" className="w-8 h-8" />
                <img src={git} alt="git-logo" className="w-8 h-8" />
                <img src={linkedIn} alt="linkedIn-logo" className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mobile;
