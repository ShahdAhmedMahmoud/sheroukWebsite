import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import CursorSpotlight from "./Components/CursorSpotlight/CursorSpotlight.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import ProjectDetails from "./Pages/Projects/ProjectDetails.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    {/* <CursorSpotlight /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}