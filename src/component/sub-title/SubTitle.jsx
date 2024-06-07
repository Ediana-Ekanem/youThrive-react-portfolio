// import React from 'react'

const SubTitle = ({ text, onClick, className }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`border-l-2 border-r-2 border-black px-4 md:px-5  md:py-1 font-bold md:text-lg md:leading-[20px] uppercase  my-10 md:my-6 ${className} `}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default SubTitle;
