import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import SubHeader from "./SubHeader";

const Header = () => {
  return (
    <>
      <div className="hidden md:block">
        <Desktop />
      </div>

      <div className=" md:hidden">
        <Mobile />
      </div>
      <SubHeader />
    </>
  );
};

export default Header;
