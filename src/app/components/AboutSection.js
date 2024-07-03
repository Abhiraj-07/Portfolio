"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButtons from "./TabButtons";

const TabData = [
  {
    id: "Skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>React.js</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    id: "Education",
    title: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>Holy Cross Sr Sec School </li>
        <li>LNCT Bhopal</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>TDPVista - web developer </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Experience");
  const [isPending, startTransition] = useTransition("");
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16  xl:px-16">
        <Image
          src="/images/sideImages/about-image.png"
          width={500}
          height={500}
          alt="image"
        />
        <div className="mt-4 md:mt-0 text-left flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
  I&apos;m a full stack web developer with a passion for creating dynamic
  and responsive web applications. My experience includes working with
  JavaScript, React, Redux, Node.js, Next.js
</p>
          <div className="flex flex-row mt-8">
            <TabButtons
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              Skills
            </TabButtons>
            <TabButtons
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              Education
            </TabButtons>
            <TabButtons
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              Experience
            </TabButtons>
          </div>
          <div className="mt-8">
            {TabData.find((ele) => ele.id == tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
