


import ProjectsCarousel from "../ProjectsCarousel/ProjectsCarousel";

const projects = [
  {
    title: "THE GENERAL LOCATION OF THE FINANCIAL DISTRICT SQUARE",
    status: "ongoing",
    alt: "برج تجاري في الحي المالي",
    src: "src/assets/images/THE_GENERAL_LOCATION_OF_THE FINANCIAL_DISTRICT_SQUARE.png",
  },
  {
    title: "SALLUM LAND PORT",
    status: "ongoing",
    alt: "منفذ السلوم البري",
    src: "src/assets/images/SALLUM_LAND_PORT.png",
  },
  {
    title: "THE GENERAL SITE OF BIN ZAYED AXIS",
    status: "Delivered",
    alt: "موقع محور بن زايد",
    src: "src/assets/images/THE_GENERAL_SITE_OF_BIN_ZAYED_AXIS.png",
  },
  {
    title: "MIDTOWN CONDO",
    status: "ongoing",
    alt: "مبنى سكني ميدتاون",
    src: "src/assets/images/MIDTOWN_CONDO.png",
  },
  {
    title: "MIDTOWN CONDO",
    status: "ongoing",
    alt: "مبنى سكني ميدتاون",
    src: "src/assets/images/MIDTOWN_SOLO.png",
  },
  {
    title: "FUSTAT PARK",
    status: "Delivered",
    alt: "مبنى سكني ميدتاون",
    src: "src/assets/images/Fustat_Park.png",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#3C3C3B] py-16"
      id="projects"
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          style={{
            filter:
              "grayscale(1) brightness(1.4) contrast(1.15)",
            mixBlendMode: "screen",
            opacity: 0.18,
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)",
          }}
        >
          <source
            src="/videos/construction.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10">
        <div className="container m-auto mb-4 px-4 text-center md:px-8 lg:px-16">
          <h2 className="text-4xl font-bold text-white">
            Our{" "}
            <span className="text-[#2A317A]">
              Projects
            </span>
          </h2>

          <p className="mt-2 text-white/70">
            A showcase of Shorouq's landmark
            developments across Egypt
          </p>
        </div>

        <ProjectsCarousel
          slides={projects}
          showNavigation
        />
      </div>
    </section>
  );
}