import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SkillsSection from "./pages/home/SkillsSection";
import About from "./pages/About";


function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
