import Nav from "./components/Nav";
import AboutMe from "./sections/AboutMe";

import Home from "./sections/Home";
import { Routes, Route } from "react-router-dom";

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
