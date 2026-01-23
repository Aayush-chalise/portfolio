import Nav from "./components/Nav";
import "./index.css";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";

const App = () => {
  return (
    <>
      <Nav />
      <LandingPage />
      <Projects />
    </>
  );
};

export default App;
