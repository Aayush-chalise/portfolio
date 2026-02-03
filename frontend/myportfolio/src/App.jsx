import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";
import Home from "./sections/Home";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <LandingPage />
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
};

export default App;
