import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ExperienceModal from "./components/ExperienceModal";

function App() {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <>
      <NavBar onExperienceClick={() => setShowExperience(true)} />

      <Home />
      <Skills />
      <Projects />
      <Footer />

      <ExperienceModal
        show={showExperience}
        handleClose={() => setShowExperience(false)}
      />
    </>
  );
}

export default App;
