import React, { useState, useEffect, useRef } from "react";
import bgImage from "/assets/img/backgroundImg.jpg";
import Title from "../tittle/Title";
import Tabs from "./Tabs";

const Portfolio = () => {
  const [isInView, setIsInView] = useState(false);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => {
      if (backgroundRef.current) {
        observer.unobserve(backgroundRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={backgroundRef}
        className="bg-cover bg-center min-h-52 flex flex-col justify-between"
        style={{
          backgroundImage: isInView ? `url(${bgImage})` : "none",
        }}
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
