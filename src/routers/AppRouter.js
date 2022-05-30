import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contact } from "../components/contact/Contact";
import { About } from "../components/about/About";
import { Home } from "../components/home/Home";
import { Navbar } from "../components/navbar/Navbar";
import { Projects } from "../components/projects/Projects";
import { ProjectId } from "../components/project_Id/ProjectId";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project/:id" element={<ProjectId />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
