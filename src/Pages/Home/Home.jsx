import AboutSection from "../../Components/AboutSection/AboutSection";
import BricksAccentBackground from "../../Components/BricksAccentBackground/BricksAccentBackground";
import Hero from "../../Components/Hero/Hero";
import PartnersSection from "../../Components/PartnersSection/PartnersSection";

import ProjectsSection from "../../Components/ProjectsSection/ProjectsSection";
import ServicesSection from "../../Components/ServiceSection/ServiceSection";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
import TimelineHeader from "../../Components/TimelineHeader/TimelineHeader";
import TimelineSection from "../../Components/TimelineSection/TimelineSection";
// import MapSection from "../../Components/MapSection/MapSection";



export default function Home() {

  
  return <>

     <Hero/>

<BricksAccentBackground backgroundColor="#F8F9FD" opacity={0.4}>
           <AboutSection/>
    

</BricksAccentBackground>
 <ServicesSection/>



    
 
     <ProjectsSection/>
     <TimelineHeader/>
     <TimelineSection/>
     <TestimonialsSection/>

     <PartnersSection/>

     {/* <MapSection/> */}
     {/* <CoverflowCarousel/> */}
  
  </>
}





