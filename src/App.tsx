import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Projects from "./pages/Projects";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
