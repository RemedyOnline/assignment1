import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Models from "./components/Models";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Models />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
