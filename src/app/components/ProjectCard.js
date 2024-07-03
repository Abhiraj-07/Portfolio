"use client";
import React, { useEffect, useState } from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProjectCard = ({
  image1,
  image2,
  image3,
  image4,
  gitUrl,
  title,
  description,
}) => {
  const [currentImage, setCurrentImage] = useState(image1);
  useEffect(() => {
    const images = [image1, image2, image3, image4];
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * 4);
      setCurrentImage(images[randomIndex]);
    }, 3000);
  
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  
    // Include dependencies in the dependency array
  }, [image1, image2, image3, image4]);

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${currentImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: " transform 1s ease-in-out, opacity 1s ease-in-out",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
