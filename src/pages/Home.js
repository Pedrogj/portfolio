import React from "react";
import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";
import { Header } from "../components/header/Header";
import { Projects } from "../components/projects/Projects";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
};
