import React, { Suspense } from "react";
import LazyLoad from "react-lazyload";
import Navbar from "../navbar/Navbar";

const email = "/assets/icons/@.svg";
const git = "/assets/icons/git-black.svg";
const linkedin = "/assets/icons/linkn.svg";

const bgImg = "/assets/img/profile.png"; // Ensure the path is correct

const Desktop = () => {
  return (
    <>
      <div>
        <div className="hidden md:block">
          <Navbar />
        </div>
        <div className="flex justify-around h-[410px] bg-[#d7d7d7] relative overflow-hidden">
          <div className="box-1 flex-1 mt-28 text-black ">
            <div className="flex flex-col justify-center items-center">
              <div>
                <h2 className="text-xl font-bold">Hi, I am</h2>
                <h1 className="text-5xl font-bold ms-3 mt-10 mb-1">
                  Ediana Ekanem
                </h1>
                <p className="text-[#909090] font-bold">
                  Front-end Developer / UI Designer
                </p>

                <div className="flex justify-start space-x-5 mt-20">
                  <div className="shadow-lg rounded bg-[#c4c4c4] w-10 h-10 p-2">
                    <img
                      src={email}
                      alt="email"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="shadow-lg rounded bg-[#c4c4c4] w-10 h-10 p-2">
                    <img
                      src={git}
                      alt="git"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="shadow-lg rounded bg-[#c4c4c4] w-10 h-10 p-2">
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative pt-20">
            <div className="bg-black slanted-background"></div>
            <LazyLoad height={410} offset={100} once>
              <div
                className="absolute top-30 left-36 w-[300px] h-full bg-cover bg-center bg-no-repeat z-10"
                style={{ backgroundImage: `url(${bgImg})` }}
              ></div>
            </LazyLoad>
            <div className="bg-transparent w-32 text-[12px] z-50 absolute left-[210px] bottom-1 text-center">
              <p>
                this is not my photo, but I dearly hope to get one just like
                this
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop;
