// import React from 'react'
import Container from "../container/Container";
import Divider from "../divider/Divider";
import Footer from "../footer/Footer";
import Form from "../form/Form";
import Heading from "../heading/Heading";
import Title from "../tittle/Title";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#e4e4e4] pt-10">
        <Container>
          <Title text="Contact" />
          <Heading />
          <Divider />
          <Form />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
