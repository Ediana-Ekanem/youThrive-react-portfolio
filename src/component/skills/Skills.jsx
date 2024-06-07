// import React from 'react'
import Container from "../container/Container.jsx";
import Divider from "../divider/Divider.jsx";
import Title from "../tittle/Title.jsx";
import Learning from "./Learning";
import OtherSkills from "./OtherSkills.jsx";
import UsingNow from "./UsingNow.jsx";

const Skills = () => {
  return (
    <div className=" bg-[#e8e7e7] pt-10 pb-5 md:pb-20">
      <Container>
        <Divider />
        <Title text="skills" />
        <UsingNow />
        <Learning />
        <OtherSkills />
      </Container>
    </div>
  );
};

export default Skills;
