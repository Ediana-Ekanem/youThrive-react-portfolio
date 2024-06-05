// import React from "react";
import { learningList } from "./data/LearningData";

const Learning = () => {
  return (
    <div className="hidden md:flex justify-center my-20">
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-bold uppercase leading-2 tracking-widest mb-20">
          Learning:
        </h2>

        <div className="grid grid-cols-4 gap-24">
          {learningList.map((learn) => (
            <div className="flex flex-col items-center" key={learn.id}>
              <img
                className="w-18 h-24 mb-2"
                src={learn.img}
                alt="learning-icon"
              />
              <p className="uppercase text-sm">{learn.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Learning;
