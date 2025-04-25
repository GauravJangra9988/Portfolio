import React from "react";
import MainSection from "./sections/MainSection";
import AboutSection from "./sections/AboutSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import ProjectSection from "./sections/ProjectSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./component/Footer";
import Header from "./component/Header";

const App = () => {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default App;
