import Nav from "./components/Nav";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
    </BrowserRouter>
  );
}

export default App;
