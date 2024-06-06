// import React from 'react'

const SubTitle = ({ text, onClick, className }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`border-l-2 border-r-2 border-black px-8 py-1 font-bold text-xl leading-[38.37px] uppercase my-5 ${className} `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default SubTitle;
