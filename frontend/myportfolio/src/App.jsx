import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./sections/Projects";
import { AnimatePresence } from "motion/react";

const App = () => {
  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
