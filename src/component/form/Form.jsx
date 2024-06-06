// import React from "react";

import { useState } from "react";
import "./form.css";
import SubTitle from "../sub-title/SubTitle";

const Form = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  let [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let toDb = {
      fullName,
      email,
      phoneNumber,
      message,
    };

    console.log(toDb);
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="mb-10">
          <input
            className=" border-black border-l-4 border-b-4 p-3 md:w-[500px] uppercase text-sm font-semibold mb-3 outline-none bg-[#e4e4e4]"
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter Your Name*"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </fieldset>
        <fieldset className="mb-10">
          <input
            className=" border-black border-l-4 border-b-4 p-3 md:w-[500px] uppercase text-sm font-semibold  outline-none bg-[#e4e4e4]"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset className="mb-10">
          <input
            className=" border-black border-l-4 border-b-4 p-3 md:w-[500px] uppercase text-sm font-semibold outline-none bg-[#e4e4e4] "
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter Your Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </fieldset>
        <fieldset className="mb-10">
          <textarea
            className="border-black border-l-4 border-b-4 p-20 md:w-[500px] uppercase text-sm font-semibold custom-placeholder outline-none bg-[#e4e4e4]"
            name="message"
            id="message"
            placeholder="Your Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <SubTitle type="submit" text="submit" onClick={handleSubmit} />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
