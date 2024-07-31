"use client";
import React, { useState } from "react";
import github from "../../../public/github.svg";
import linkden from "../../../public/linkden.svg";
import codepen from "../../../public/codepen.svg";

import Link from "next/link";
import Image from "next/image";
const EmailSection = () => {
  const [emailSubmitted, setemailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    let JsonData = JSON.stringify(data);
    let endPonit = "api/send";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "  application/json",
      },
      body: JsonData,
    };

    const response = await fetch(endPonit, options);
    let resData = await response.json();
    if (response.status == 200) {
      setemailSubmitted(true);
      console.log("message sent ");
      setTimeout(()=>{
        setemailSubmitted(false)
      }, 2000)
    } else {
      console.log("error");
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent  rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-1">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>

        <p className="text-[#ADB7BE]">
          I&apos;m currently loooking for opportunity , my inbox is always open
          for all .
        </p>
        <div className="socials flex flex-row gap-3 md:py-3">
          <Link href="https://github.com/Abhiraj-07">
            <Image src={github} alt="github"></Image>
          </Link>{" "}
          <Link href="https://codepen.io/-Abhiraj07-">
            <Image src={codepen} alt="codepen"></Image>
          </Link>
          <Link href="https://www.linkedin.com/in/abhiraj-trivedi-8a8058225/">
            <Image src={linkden} alt="linkden"></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block  text-sm font-medium mb-2"
            >
              Enter Your Email{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="  bg-[#18191E] border border-black placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Email Please"
            ></input>
          </div>{" "}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block  mb-2 text-sm font-medium"
            >
              Enter Your Subject{" "}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="  bg-[#18191E] border border-black placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Subject"
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block  mb-2 text-sm font-medium"
            >
              Enter Your Message{" "}
            </label>
            <textarea
              type="text"
              name="message"
              id="message"
              className="  bg-[#18191E] border border-black placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            {" "}
            Send Message{" "}
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
