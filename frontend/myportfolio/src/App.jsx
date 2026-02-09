import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import { Routes, Route } from "react-router-dom";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/about" element={<AboutMe />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
