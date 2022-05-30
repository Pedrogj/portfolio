import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Experience } from "../components/experience/Experience";
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
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project/:id" element={<ProjectId />} />
      </Routes>
    </BrowserRouter>
  );
};
