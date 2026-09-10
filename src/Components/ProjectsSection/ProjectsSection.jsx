
import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";

const projects = [
  {
    title: "THE GENERAL LOCATION OF THE FINANCIAL DISTRICT SQUARE",
    status:"ongoing",
    alt: "برج تجاري في الحي المالي",
    src: "src/assets/images/THE_GENERAL_LOCATION_OF_THE FINANCIAL_DISTRICT_SQUARE.png",
  },
  {
    title: "SALLUM LAND PORT",
    status:"ongoing",
    alt: "منفذ السلوم البري",
    src: "src/assets/images/SALLUM_LAND_PORT.png",
  },
  {
    title: "THE GENERAL SITE OF BIN ZAYED AXIS",
    status:"Finished",
    alt: "موقع محور بن زايد",
    src: "src/assets/images/THE_GENERAL_SITE_OF_BIN_ZAYED_AXIS.png",
  },
  {
    title: "MIDTOWN CONDO",
    status:"ongoing",
    alt: "مبنى سكني ميدتاون",
    src: "src/assets/images/MIDTOWN_CONDO.png",
  },
  {
    title: "MIDTOWN CONDO",
    status:"ongoing",
    alt: "مبنى سكني ميدتاون",
    src: "src/assets/images/MIDTOWN_SOLO.png",
  },
{
  title: "FUSTAT PARK",
  status:"Finished",
    alt: "مبنى سكني ميدتاون",
    src: "src/assets/images/Fustat_Park.png",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[#1E2432] py-16">
      <div className="container m-auto px-4 md:px-8 lg:px-16 text-center mb-4">
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-[#FEC419]">Projects</span>
        </h2>
        <p className="text-gray-300 mt-2">
          A showcase of Shorouq's landmark developments across Egypt
        </p>
      </div>


    

      
        <ProjectsCarousel slides={projects} showNavigation />
     
     
      
    </section>
  );
}