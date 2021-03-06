import "./App.css";

import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import PakistanGuidline from "./Components/PakistanGuidline";
import MalasiyaGuidline from "./Components/MalasiyaGuidline";
function App() {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MalasiyaGuidline" element={<MalasiyaGuidline />} />
          <Route path="/pakistanGuidline" element={<PakistanGuidline />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
