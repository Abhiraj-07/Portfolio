import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black  ">
      <NavBar></NavBar>
      <div className="container  mt-24 mx-auto  px-12 py-4">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
        <EmailSection></EmailSection>
        <Footer></Footer>
      </div>
    </main>
  );
}
