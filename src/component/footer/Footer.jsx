import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import footerArrow from "/assets/icons/footer-icons/ic_baseline-double-arrow.svg";
import email from "/assets/icons/footer-icons/email.svg";
import facebook from "/assets/icons/footer-icons/facebook.svg";
import instagram from "/assets/icons/footer-icons/instagram.svg";
import linkedin from "/assets/icons/footer-icons/linkedin.svg";

const LazyContainer = React.lazy(() => import("../container/Container"));

const Contact = () => {
  return (
    <footer className="bg-black py-10">
      <Suspense fallback={<div>Loading container...</div>}>
        <LazyContainer>
          <div className="flex flex-col justify-center items-center text-white  border-red-500">
            <Link to="/">
              <img src={footerArrow} alt="Double arrow icon" />
            </Link>
            <p className="pt-3 font-semibold">BACK TO TOP</p>
            <div className="flex gap-5 py-8">
              <img src={facebook} alt="facebook icon" loading="lazy" />
              <img src={linkedin} alt="linkedin icon" loading="lazy" />
              <img src={instagram} alt="instagram icon" loading="lazy" />
              <img src={email} alt="email icon" loading="lazy" />
            </div>
            <p>
              <span className="font-semibold">@2020 Tomasz Gajda </span>All
              Rights Reserved.
            </p>
          </div>
        </LazyContainer>
      </Suspense>
    </footer>
  );
};

export default Contact;
