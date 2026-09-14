// import AboutSection from "../../Components/AboutSection/AboutSection";
// import BricksAccentBackground from "../../Components/BricksAccentBackground/BricksAccentBackground";
// import FlowScroll, { FlowSection } from "../../Components/FlowScroll/FlowScroll";
// import Hero from "../../Components/Hero/Hero";
// import PartnersSection from "../../Components/PartnersSection/PartnersSection";

// import ProjectsSection from "../../Components/ProjectsSection/ProjectsSection";
// import ServicesSection from "../../Components/ServiceSection/ServiceSection";
// import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
// import TimelineHeader from "../../Components/TimelineHeader/TimelineHeader";
// import TimelineSection from "../../Components/TimelineSection/TimelineSection";
// // import MapSection from "../../Components/MapSection/MapSection";



// export default function Home() {

  
//   return <>

//      <Hero/>

// <BricksAccentBackground backgroundColor="#F8F9FD" opacity={0.4}>
//            <AboutSection/>
    

// </BricksAccentBackground>
//  <ServicesSection/>



    
 
//      <ProjectsSection/>
//      <TimelineHeader/>
//      <TimelineSection/>
//      {/* <TestimonialsSection/> */}

//      {/* <PartnersSection/> */}







//          <FlowScroll aria-label="Our Projects" className="">
//            <FlowSection aria-label="Hero" className="bg-[#1E2432]" >
//             <TestimonialsSection/>
//            </FlowSection>
     
//            <FlowSection aria-label="Sectors" className="bg-[#F8F9FD]" >
//              <PartnersSection/>
//            </FlowSection>
//          </FlowScroll>
       

//      {/* <MapSection/> */}
//      {/* <CoverflowCarousel/> */}
  
//   </>
// }

import AboutSection from "../../Components/AboutSection/AboutSection";
import BricksAccentBackground from "../../Components/BricksAccentBackground/BricksAccentBackground";
import FlowScroll, { FlowSection } from "../../Components/FlowScroll/FlowScroll";
import Hero from "../../Components/Hero/Hero";
import PartnersSection from "../../Components/PartnersSection/PartnersSection";
import ProjectsSection from "../../Components/ProjectsSection/ProjectsSection";
import ServicesSection from "../../Components/ServiceSection/ServiceSection";
import TestimonialsSection from "../../Components/TestimonialsSection/TestimonialsSection";
import TimelineHeader from "../../Components/TimelineHeader/TimelineHeader";
import TimelineSection from "../../Components/TimelineSection/TimelineSection";

export default function Home() {
  return (
    <FlowScroll aria-label="Home Sections">

      {/* HERO */}
      <FlowSection
        aria-label="Hero"
        className="bg-[#1E2432]"
      >
        <Hero />
      </FlowSection>

      {/* ABOUT */}
      <FlowSection
        aria-label="About"
        className="bg-[#F8F9FD]"
      >
        <BricksAccentBackground
          backgroundColor="#F8F9FD"
          opacity={0.4}
        >
          <AboutSection />
        </BricksAccentBackground>
      </FlowSection>

      {/* SERVICES */}
      <FlowSection
        aria-label="Services"
        className="bg-[#1E2432]"
      >
        <ServicesSection />
      </FlowSection>

      {/* PROJECTS */}
      <FlowSection
        aria-label="Projects"
        className="bg-[#F8F9FD]"
      >
        <ProjectsSection />
      </FlowSection>

      {/* TIMELINE */}
      <FlowSection
        aria-label="Timeline"
        className="bg-[#1E2432]"
      >
        <TimelineHeader />
        <TimelineSection />
      </FlowSection>

      {/* TESTIMONIALS */}
      <FlowSection
        aria-label="Testimonials"
        className="bg-[#1E2432]"
      >
        <TestimonialsSection />
      </FlowSection>

      {/* PARTNERS */}
      <FlowSection
        aria-label="Partners"
        className="bg-[#F8F9FD]"
      >
        <PartnersSection />
      </FlowSection>

    </FlowScroll>
  );
}



