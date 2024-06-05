// import React from "react";
import footerArrow from "/assets/icons/footer-icons/ic_baseline-double-arrow.svg";
import email from "/assets/icons/footer-icons/email.svg";
import facebook from "/assets/icons/footer-icons/facebook.svg";
import instagram from "/assets/icons/footer-icons/instagram.svg";
import linkedin from "/assets/icons/footer-icons/linkedin.svg";
import Container from "../container/Container";

const Contact = () => {
  return (
    <footer className="bg-black  py-10">
      <Container>
        <div className="flex flex-col justify-center items-center text-white  border-red-500">
          <img src={footerArrow} alt="Double arrow icon" />
          <p className="pt-3 font-semibold">BACK TO TOP</p>
          <div className="flex gap-5 py-8">
            <img src={facebook} alt="facebook icon" />
            <img src={linkedin} alt="linkedin icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={email} alt="email icon" />
          </div>
          <p>
            <span className="font-semibold">@2020 Tomasz Gajda </span>All Rights
            Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Contact;
