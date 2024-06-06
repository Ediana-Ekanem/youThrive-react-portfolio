// import React from "react";
import bgImage from "/assets/img/backgroundImg.jpg";
import Title from "../tittle/Title";

import Tabs from "./Tabs";

const Portfolio = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center min-h-52 flex flex-col justify-between"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="mt-10">
          <Title text="Portfolio" />
        </div>
      </div>

      <Tabs />

      <div className="h-14 bg-black text-white flex items-center justify-center">
        And many more to come!
      </div>
    </div>
  );
};

export default Portfolio;
