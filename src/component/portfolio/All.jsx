import React from "react";
import pic1 from "/assets/img/port1.png";
import pic2 from "/assets/img/port2.png";
import pic3 from "/assets/img/port3.png";
import pic4 from "/assets/img/port4.png";
import pic5 from "/assets/img/port5.png";
import pic6 from "/assets/img/port6.png";

const All = () => {
  return (
    <div className="md:grid grid-cols-3 gap-0">
      <img
        src={pic1}
        alt="grid-image"
        className="hidden md:block w-full h-full object-cover"
      />
      <img src={pic2} alt="grid-image" className="w-full h-full object-cover" />
      <img
        src={pic3}
        alt="grid-image"
        className=" w-full h-full object-cover"
      />
      <img src={pic4} alt="grid-image" className="w-full h-full object-cover" />
      <img
        src={pic5}
        alt="grid-image"
        className="hidden md:block  w-full h-full object-cover"
      />
      <img
        src={pic6}
        alt="grid-image"
        className="hidden md:block w-full h-full object-cover"
      />
    </div>
  );
};

export default All;
