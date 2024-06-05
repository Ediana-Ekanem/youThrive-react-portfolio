// import React from "react";
import design from "/assets/icons/design.svg";
import maintenance from "/assets/icons/maintenance.svg";
import development from "/assets/icons/development.svg";

import Divider from "../divider/Divider";
import Heading from "../heading/Heading";
import SubTitle from "../sub-title/SubTitle";
import Title from "../tittle/Title";
import Container from "../container/Container";

const About = () => {
  return (
    <div className="bg-[#d6d6d6] py-10">
      <Container>
        <div className="">
          <Title text="About me" />
          <Heading />
          <SubTitle text="explore" />
          <Divider />

          <div>
            <div className=" lg:flex justify-between ">
              <div className="box-1 relative">
                <img src={design} alt="services-logo" className="w-10 h-10  " />
                <h3 className="font-bold uppercase text-lg absolute top-1 left-7 ">
                  Design
                </h3>
                <p className="md:w-[500px] ">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
              <div className="box-2 relative  mt-10 ">
                <img
                  src={development}
                  alt="services-logo"
                  className="w-10 h-10  "
                />
                <h3 className="font-bold uppercase text-lg absolute top-1 left-7 ">
                  Development
                </h3>
                <p className="md:w-[500px]">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10 md:mt-20">
              <div className="box-3 relative">
                <img
                  src={maintenance}
                  alt="services-logo"
                  className="w-10 h-10  "
                />
                <h3 className="font-bold uppercase text-lg absolute top-1 left-7 ">
                  maintenance
                </h3>
                <p className="md:w-[500px]">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
