import { useParams, Navigate } from "react-router-dom";
import ProjectHero from "../../Components/ProjectHero/ProjectHero";
import { projectsWithDetails } from "../../data/projectsData";
import ProjectBeforeAfter from "../../Components/ProjectBeforeAfter/ProjectBeforeAfter";
import ProjectHierarchy from "../../Components/ProjectHierarchy/ProjectHierarchy";
import GallerySection from "../../Components/GallerySection/GallerySection";
import ProjectChallenges from "../../Components/ProjectChallenges/ProjectChallenges";
import VisionShowcase from "../../Components/Visionshowcase/Visionshowcase";
import FlowScroll, { FlowSection } from "../../Components/FlowScroll/FlowScroll";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projectsWithDetails.find((p) => String(p.id) === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <FlowScroll aria-label="Project Details">
      <FlowSection aria-label="Project Hero" className="">
        <ProjectHero project={project} />
      </FlowSection>

      <FlowSection aria-label="Project Vision" className="bg-[#1E2432]">
        <VisionShowcase />
      </FlowSection>

      <FlowSection aria-label="Project Challenges" className="bg-[#1E2432]">
        <ProjectChallenges />
      </FlowSection>

      {project.beforeImage && project.afterImage && (
        <FlowSection aria-label="Project Transformation" className="bg-[#F8F9FD]">
          <ProjectBeforeAfter project={project} />
        </FlowSection>
      )}

      <FlowSection aria-label="Project Hierarchy" className="bg-[#FFFFFF]">
        <ProjectHierarchy project={project} />
      </FlowSection>

      <FlowSection aria-label="Project Gallery" className="bg-white">
        <GallerySection />
      </FlowSection>
    </FlowScroll>
  );
}







