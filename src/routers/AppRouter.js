import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { NavMobile } from "../components/navMobile/NavMobile";
import { ProjectId } from "../components/project_Id/ProjectId";
import { Home } from "../pages/Home";

export const AppRouter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <NavMobile isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/:id" element={<ProjectId />} />
      </Routes>
    </BrowserRouter>
  );
};
