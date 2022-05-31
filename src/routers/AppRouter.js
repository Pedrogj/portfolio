import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { ProjectId } from "../components/project_Id/ProjectId";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/:id" element={<ProjectId />} />
      </Routes>
    </BrowserRouter>
  );
};
