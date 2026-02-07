import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";
import Home from "./sections/Home";
import { Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
};

export default App;
