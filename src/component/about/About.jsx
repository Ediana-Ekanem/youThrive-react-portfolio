// import React from "react";
import { useMediaQuery } from "react-responsive";
import design from "/assets/icons/design.svg";
import maintenance from "/assets/icons/maintenance.svg";
import development from "/assets/icons/development.svg";

import Divider from "../divider/Divider";
import Heading from "../heading/Heading";
import SubTitle from "../sub-title/SubTitle";
import Title from "../tittle/Title";
import Container from "../container/Container";

const About = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="bg-[#d6d6d6] py-10 relative z-20">
      <Container>
        <div className="">
          <Title text="About me" />
          {isLargeScreen ? (
            <Heading text="Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est." />
          ) : (
            <Heading
              text={
                <div className=" text-start">
                  <p className="pb-5">
                    My name is Tomasz Gajda, I'm a third-year Applied Computer
                    Science student at the AGH University of Science and
                    Technology in Krakow. I have been learning Front-End
                    technologies for a year and this time was just enough for me
                    to make sure that this is my place in the industry.
                  </p>
                  <p>
                    Membership in the science club developed my design skills,
                    which quickly turned into a new hobby. I am fluent in
                    English (spoken and written) and intermediate Spanish. Apart
                    from designing and programming websites, my passion is all
                    kinds of motorsport - from rallies to the very king of
                    motorsport - formula 1.
                  </p>
                </div>
              }
            />
          )}
          <SubTitle text="explore" />
          <Divider />

          <div className="px-5 md:px-0">
            <div className=" lg:flex justify-between  ">
              <div className="box-1 relative">
                <img
                  src={design}
                  alt="services-logo"
                  className="w-10 h-10"
                  loading="lazy"
                />
                <h3 className="font-bold uppercase text-lg absolute top-1 left-7 ">
                  Design
                </h3>
                <p className="md:w-[500px]">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
              <div className="box-2 relative  mt-10 ">
                <img
                  src={development}
                  alt="services-logo"
                  className="w-10 h-10"
                  loading="lazy"
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
                  className="w-10 h-10"
                  loading="lazy"
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
