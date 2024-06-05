// import React from "react";

const Title = ({ text }) => {
  return (
    <div className="flex justify-center">
      <button className="border-4  border-black px-20 py-1 font-bold text-xl leading-[38.37px] uppercase mt-5  mb-10">
        {text}
      </button>
    </div>
  );
};

export default Title;
