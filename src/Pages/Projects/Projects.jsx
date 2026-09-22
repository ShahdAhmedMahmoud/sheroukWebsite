import React from 'react'

import ProjectsHero from '../../Components/ProjectsHero/ProjectsHero'
import SectorFilterSection from '../../Components/SectorFilterSection/SectorFilterSection'

import FlowScroll, { FlowSection } from '../../Components/FlowScroll/FlowScroll'
import ProjectsCTASection from '../../Components/Projectsctasection/Projectsctasection'
import SawCutHeroSection from '../../Components/SawCutHeroSection/SawCutHeroSection'


export default function Projects() {
  return<>
    <FlowScroll aria-label="Our Projects" className="">
      <FlowSection aria-label="Hero" className="bg-[#1E2432]" >
        <ProjectsHero />
      </FlowSection>

      <FlowSection aria-label="Sectors" className="bg-[#F8F9FD]" >
        <SectorFilterSection />
      </FlowSection>
      <FlowSection aria-label="CTA" className="bg-[#1E2432]" >
        <ProjectsCTASection />
      </FlowSection>

     
    </FlowScroll>
  
  </>
}
