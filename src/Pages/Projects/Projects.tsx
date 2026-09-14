import React from 'react'

import ProjectsHero from '../../Components/ProjectsHero/ProjectsHero'
import SectorFilterSection from '../../Components/SectorFilterSection/SectorFilterSection'
import SiteHoardingDivider from '../../Components/SiteHoardingDivider/SiteHoardingDivider'
import ProjectsRevealTransition from '../../Components/ProjectsRevealTransition/ProjectsRevealTransition'
import FlowScroll, { FlowSection } from '../../Components/FlowScroll/FlowScroll'

export default function Projects() {
  return<>
    <FlowScroll aria-label="Our Projects" className="">
      <FlowSection aria-label="Hero" className="bg-[#1E2432]" >
        <ProjectsHero />
      </FlowSection>

      <FlowSection aria-label="Sectors" className="bg-[#F8F9FD]" >
        <SectorFilterSection />
      </FlowSection>
    </FlowScroll>
  
  </>
}
