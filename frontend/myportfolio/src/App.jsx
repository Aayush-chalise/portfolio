import Nav from "./components/Nav";
import "./index.css";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <>
      <Nav />
      <LandingPage />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
