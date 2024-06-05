// import React from "react";
import { usingNowData } from "./data/UsingNowData";

const UsingNow = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-bold uppercase leading-2 tracking-widest mb-20 mx-3">
          USING NOW:
        </h2>

        <div className=" md:grid grid-cols-4 gap-20 ">
          {usingNowData.map((learn, index) => (
            <div
              key={learn.id}
              className={`flex flex-col items-center  ${
                index >= 4 ? "hidden lg:flex" : ""
              }`} // Show items in block layout on small screens and flex layout on larger screens
            >
              <img
                className="w-18 h-24 mb-2 flex justify-start"
                src={learn.img}
                alt="learning-icon"
              />
              <p className="uppercase text-sm  mb-20 md:mb-0">{learn.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsingNow;
