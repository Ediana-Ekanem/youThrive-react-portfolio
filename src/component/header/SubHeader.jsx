import React from "react";
import SubTitle from "../sub-title/SubTitle";
import Container from "../container/Container";
import imgIT from "/assets/img/Logo ITB.svg";

const SubHeader = () => {
  return (
    <div className="relative bg-[#1d1d1d] text-white py-5">
      <div className="absolute top-0 right-10 w-[400px] ">
        <img src={imgIT} alt="IT Logo" className="w-full h-full" />
      </div>
      <Container>
        <div className="relative z-10 ">
          <h3 className="tracking-widest font-semibold text-center md:text-start text-lg">
            IT BERRIES
          </h3>
          <p className="w-full  text-[15px] max-w-[900px] my-5 px-5 md:px-0">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est. Morbi commodo, eros in
            dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
            tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
            Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
            varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
            tempor, accumsan nec eros.
          </p>

          <div className="flex justify-center md:justify-start">
            <SubTitle
              text="Read More"
              className="text-white border-white px-[10px] text-[0.8rem] my-2 h-5 flex items-center"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;
