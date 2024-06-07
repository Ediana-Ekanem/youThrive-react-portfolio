// import React from 'react';
import { othersList } from "./data/OtherSkills";

const OtherSkills = () => {
  return (
    <div className="hidden md:flex justify-center   ">
      <div className="flex flex-col items-start">
        <h2 className="text-xl font-bold uppercase leading-2 tracking-widest mb-20">
          Other Skills:
        </h2>

        <div className="grid grid-cols-4 gap-24">
          {othersList.map((learn) => (
            <div className="flex flex-col items-center" key={learn.id}>
              <img
                className="w-18 h-24 mb-2"
                src={learn.img}
                alt="learning-icon"
                loading="lazy"
              />
              <p className="uppercase text-sm">{learn.title}</p>
              <p className="text-xs">{learn.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
