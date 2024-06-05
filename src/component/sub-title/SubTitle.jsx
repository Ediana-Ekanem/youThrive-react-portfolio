// import React from 'react'

const SubTitle = ({ text, onClick, className }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`border-l-2 border-r-2 border-black px-10 py-1 font-bold text-xl leading-[38.37px] uppercase mt-5 mb-10`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default SubTitle;
