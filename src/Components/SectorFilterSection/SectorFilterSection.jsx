import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HardHat, Building2, Route, Boxes } from "lucide-react";

const categories = [
  { label: "All", icon: Boxes },
  { label: "Infrastructure", icon: HardHat },
  { label: "Commercial Buildings", icon: Building2 },
  { label: "Road And Generalist", icon: Route },
];


const projects = [
  {
    id: 1,
    title: "THE GENERAL LOCATION OF THE FINANCIAL DISTRICT SQUARE",
    status: "ongoing",
    category: "Infrastructure",
    src: "src/assets/images/THE_GENERAL_LOCATION_OF_THE FINANCIAL_DISTRICT_SQUARE.png",
  },
  {
    id: 2,
    title: "SALLUM LAND PORT",
    status: "ongoing",
    category: "Infrastructure",
    src: "src/assets/images/SALLUM_LAND_PORT.png",
  },
  {
    id: 3,
    title: "THE GENERAL SITE OF BIN ZAYED AXIS",
    status: "Finished",
    category: "Infrastructure",
    src: "src/assets/images/THE_GENERAL_SITE_OF_BIN_ZAYED_AXIS.png",
  },
  {
    id: 4,
    title: "MIDTOWN CONDO",
    status: "ongoing",
    category: "Infrastructure",
    src: "src/assets/images/MIDTOWN_CONDO.png",
  },
  {
    id: 5,
    title: "MIDTOWN SOLO",
    status: "ongoing",
    category: "Infrastructure",
    src: "src/assets/images/MIDTOWN_SOLO.png",
  },
  {
    id: 6,
    title: "FUSTAT PARK",
    status: "Finished",
    category: "Infrastructure",
    src: "src/assets/images/Fustat_Park.png",
  },
  {
    id: 7,
    title: "GALALA TOURIST RESORT",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/1.png",
  },
  {
    id: 8,
    title: "THE ROYAL COMPOUND TOURIST RESORT",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/2.png",
  },
  {
    id: 9,
    title: "20 THOUSAND BUILDINGS IN THE NEW CAPITAL",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/3.png",
  },
  {
    id: 10,
    title: "Shebin El-Qanater Hospital",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/4.png",
  },
  {
    id: 11,
    title: "R3 RESIDENTIAL COMPOUND",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/5.png",
  },
  {
    id: 12,
    title: "GAL-DABAA NUCLEAR POWER PLANT",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/6.png",
  },
  {
    id: 13,
    title: "WADI ABU AL-DARAJ CITY",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/7.png",
  },
  {
    id: 14,
    title: "Dabaa residential areas",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/8.png",
  },
  {
    id: 15,
    title: "GALALA TOURIST RESORT",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/9.png",
  },
  {
    id: 16,
    title: "TOLIP EL ALAMEIN CITY HOTEL",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/10.png",
  },
  {
    id: 17,
    title: "THE GALALA'S PLATEAU",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/11.png",
  },
  {
    id: 18,
    title: "Administrative commercial buildings next to the family garden",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/12.png",
  },
  {
    id: 19,
    title: "ADMINISTRATIVE BUILDING (CS 10)",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/13.png",
  },
  {
    id: 20,
    title: "THE MAIN BUS STATION OF NEW ADMIN.CAPITAL",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/14.png",
  },
  {
    id: 21,
    title: "ARAB INTERNATIONAL BANK HEADQUARTERS",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/15.png",
  },
  {
    id: 22,
    title: "AMERICAN UNIVERSITY MALL",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/16.png",
  },
  {
    id: 23,
    title: "STRIP MALL & FASHION HUB",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/17.png",
  },
  {
    id: 24,
    title: "ALMAZA MALL",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/18.png",
  },
  {
    id: 25,
    title: "THE CULTURAL CENTER IN THE MOSQUE OF EGYPT",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/19.png",
  },
  {
    id: 26,
    title: "SHEBEEN EL KOM MALL",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/20.png",
  },
  {
    id: 27,
    title: "ADMINISTRATIVE BUILDINGS IN (90) SOUTH",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/21.png",
  },
  {
    id: 28,
    title: "TRUE GYM BUILDING",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/22.png",
  },
  {
    id: 29,
    title: "CAIRO GATE COMPOUND MOSQUE",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/23.png",
  },
  {
    id: 30,
    title: "ADMINISTRATIVE BUILDING (CS 20)",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/24.png",
  },
  {
    id: 31,
    title: "FAIR ZONE",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/25.png",
  },
  {
    id: 32,
    title: "NEW DAR GROUP HEADQUARTERS",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/26.png",
  },
  {
    id: 33,
    title: "LOTUS MALL",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/27.png",
  },
  {
    id: 34,
    title: "DURRAT ALKARAZ RESORT",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/28.png",
  },
  {
    id: 35,
    title: "DORRA ALKARZ MALL 2",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/29.png",
  },
  {
    id: 36,
    title: "MILITARY SIGNAL INSTITUTE",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/30.png",
  },
  {
    id: 37,
    title: "ASSIUT NATIONAL UNIVERSITY",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/31.png",
  },
  {
    id: 38,
    title: "DORRA ALKARZ MALL 2",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/32.png",
  },
  {
    id: 39,
    title: "EGYPT JAPAN UNIVERSITY",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/33.png",
  },
  {
    id: 40,
    title: "ASSIUT UNIVERSITY OF TECHNOLOGY",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/34.png",
  },
  {
    id: 41,
    title: "Port Said University",
    status: "Ongoing",
    category: "Commercial Buildings",
    src: "src/assets/images/commerical/35.png",
  },

];

function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{ opacity: 0, y: -20, rotate: 1.5 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#1F3888]/10 bg-white shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* برشامات في الزوايا - لمسة "لوحة معدنية" معمارية */}
      {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} w-1.5 h-1.5 rounded-full bg-[#1E2432]/20 z-20`}
        />
      ))}

      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.src}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* شبكة بلوبرنت بتظهر عند الـ hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,191,0,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.25) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <span
          className={`absolute top-3 right-3 z-20 text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full ${
            project.status === "Finished"
              ? "bg-[#FFBF00] text-[#1E2432]"
              : "bg-[#1E2432]/80 text-white backdrop-blur-sm"
          }`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-4">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F3888]">
          {project.category}
        </span>
        <h3 className="text-sm font-bold text-[#1E2432] uppercase leading-snug mt-1">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function SectorFilterSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="relative w-full bg-[#F8F9FD] py-20 px-4" id="sectors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-[#FFBF00] font-semibold tracking-[0.2em] text-xs uppercase">
            Explore By Sector
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2432] mt-2">
            Our Work, Organized
          </h2>
        </div>

        {/* أزرار الفلاتر - شكل "أدوات مختارة" مع أيقونة بتلف عند التفعيل */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(({ label, icon: Icon }) => {
            const isActive = activeCategory === label;
            return (
              <button
                key={label}
                onClick={() => setActiveCategory(label)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-300 overflow-hidden ${
                  isActive
                    ? "bg-[#1F3888] text-white"
                    : "bg-white text-[#6C757D] border border-[#6C757D]/20 hover:border-[#1F3888]/40"
                }`}
              >
                <motion.span
                  animate={{ rotate: isActive ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Icon className="w-4 h-4" />
                </motion.span>
                {label}
                {/* شريط كاراكتير أصفر/أسود بيتحرك تحت الزرار النشط */}
                {isActive && (
                  <motion.span
                    layoutId="active-sector-stripe"
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, #FFBF00 0 6px, #1E2432 6px 12px)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* شبكة المشاريع */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}