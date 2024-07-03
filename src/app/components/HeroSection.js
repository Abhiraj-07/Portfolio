"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 ">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl  sm:text-5xl font-extrabold ">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I&apos;m
            </div>

            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "UI/UX Designer",
                2000,
                "Front-End Developer ",
                2000,
                "Back-End Developer ",
                2000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p
            className="text-[#ADB7BE] text-base 
          sm:text-xl  mb-6 "
          >
            Welcome to my portfolio! I&apos;m a web developer skilled in
            creating responsive, user-friendly websites using HTML, CSS,
            JavaScript, React Js,Next Js and Node.js. Explore my projects to see
            my work in action.
          </p>
          <div>
            <a
              href="#contact"
              className="px-6 py-3 w-full sm:w-fit  rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 hover:bg-slate-200 text-white"
            >
              Hire me
            </a>

            <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              <a
                href="https://drive.google.com/uc?export=download&id=17vGRGs8QDRnPNt73dyESnx4NrVMlBcGI"
                download="AbhirajResume.pdf"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 hover:border-2px-white"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/sideImages/my-image.png"
              alt="images"
              height={300}
              width={300}
            ></Image>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default HeroSection;
