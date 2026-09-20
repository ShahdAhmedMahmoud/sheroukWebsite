import { useParams, Navigate } from "react-router-dom";
import ProjectHero from "../../Components/ProjectHero/ProjectHero";
import { projectsWithDetails } from "../../data/projectsData";
import ProjectBeforeAfter from "../../Components/ProjectBeforeAfter/ProjectBeforeAfter";
import ProjectTimeline from "../../Components/ProjectTimeline/ProjectTimeline";
import ProjectHierarchy from "../../Components/ProjectHierarchy/ProjectHierarchy";
import GallerySection from "../../Components/GallerySection/GallerySection";
import ProjectChallenges from "../../Components/ProjectChallenges/ProjectChallenges";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projectsWithDetails.find((p) => String(p.id) === id);

  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <ProjectHero project={project} />

      <ProjectChallenges />

       <ProjectBeforeAfter project={project} />

       {/* <ProjectTimeline project={project} /> */}


       <ProjectHierarchy project={project} />
       <GallerySection />


    
      
    </>
  );
}







