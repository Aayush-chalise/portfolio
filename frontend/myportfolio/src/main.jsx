import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ScrollToTop from "./components/ScrollToTop.jsx";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>,
);
