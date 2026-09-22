import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import CursorSpotlight from "./Components/CursorSpotlight/CursorSpotlight.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import ProjectDetails from "./Pages/Projects/ProjectDetails.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx";
import LanguageProvider from "./Context/LanguageContext/LanguageContext.jsx";
import Careers from "./Pages/Careers/Careers.jsx";
import JobDetails from "./Pages/JobDetails/JobDetails.jsx";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    {/* <CursorSpotlight /> */}
    <LanguageProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} /> 
        <Route path="/careers/:jobId" element={<JobDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} /> 
        
      </Routes>
      <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
}