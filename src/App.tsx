import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SkillsSection from "./pages/home/SkillsSection";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/projects/Projects";
import BlogPage from "./pages/blogs/BlogsPage";
import Layout from "./components/Layout";
import BlogPost from "./pages/blogs/BlogPost";


function App() {
  return (
    <>
      <Navbar />
      <Layout>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
      </Layout>
    </>
  );
}

export default App;
