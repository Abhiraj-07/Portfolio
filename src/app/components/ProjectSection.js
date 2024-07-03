import React from "react";
import ProjectCard from "./ProjectCard";
const ProjectData = [
  {
    id: 1,
    title: "textabhi",
    description: "textAbhi Web App is a versatile, user-friendly tool designed for seamless text transformations. Key features include uppercase and lowercase conversion, and whitespace trimming, enhancing text formatting and readability. Built with HTML5, CSS3, and JavaScript, the app ensures a responsive and intuitive user interface. The future roadmap includes title and sentence case conversions, and prefix/suffix additions. Ideal for developers, writers, and anyone working with text, this app streamlines text manipulation tasks, boosting productivity and efficiency. Easily accessible online, it's an essential addition to your digital toolkit.",
    image1: "/images/project/textabhi/1.png",
    image2: "/images/project/textabhi/2.png",
    image3: "/images/project/textabhi/1.png",
    image4: "/images/project/textabhi/2.png",
    gitUrl: "https://github.com/Abhiraj-07/TextUtility",
  },
  {
    id: 2,
    title: "Note Master",
    description:
      "Introducing NoteMaster: Your streamlined note-taking solution. Create, organize, and securely store notes with titles, descriptions, and tags in the cloud. Enjoy seamless access across devices with secure sign-up and login. Ideal for professionals and students alike. Sign up now for efficient note management with NoteMaster. ",
    image1: "/images/project/notemanager/login.png",
    image2: "/images/project/notemanager/signup.png",
    image3: "/images/project/notemanager/login.png",
    image4: "/images/project/notemanager/home.png",
    gitUrl: "https://github.com/Abhiraj-07/myNoteBook",
  }
];

const ProjectSection = () => {
  return (
    <section  id="projects" >
      <h2>My Projects</h2>
      <div className="grid md:group-cols-3 gap-8 md:gap-12">
        {ProjectData.map((ele) => (
          <ProjectCard
            title={ele.title}
            image1={ele.image1}
            image2={ele.image2}
            image3={ele.image3}
            image4={ele.image4}
            key={ele.id}
            description={ele.description}
            gitUrl={ele.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
