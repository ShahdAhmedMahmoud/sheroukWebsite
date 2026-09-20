// import { motion } from "motion/react";
// import CircularGallery from "../CircularGallery/CircularGallery";
// import KineticGrid from "../KineticGrid/KineticGrid";



// const projects = [
//   {
//     title: "THE GENERAL LOCATION OF THE FINANCIAL DISTRICT SQUARE",
//     status: "ongoing",
//     alt: "برج تجاري في الحي المالي",
//     src: "src/assets/images/THE_GENERAL_LOCATION_OF_THE FINANCIAL_DISTRICT_SQUARE.png",
//   },
//   {
//     title: "SALLUM LAND PORT",
//     status: "ongoing",
//     alt: "منفذ السلوم البري",
//     src: "src/assets/images/SALLUM_LAND_PORT.png",
//   },
//   {
//     title: "THE GENERAL SITE OF BIN ZAYED AXIS",
//     status: "Finished",
//     alt: "موقع محور بن زايد",
//     src: "src/assets/images/THE_GENERAL_SITE_OF_BIN_ZAYED_AXIS.png",
//   },
//   {
//     title: "MIDTOWN CONDO",
//     status: "ongoing",
//     alt: "مبنى سكني ميدتاون",
//     src: "src/assets/images/MIDTOWN_CONDO.png",
//   },
//   {
//     title: "MIDTOWN SOLO",
//     status: "ongoing",
//     alt: "مبنى سكني ميدتاون",
//     src: "src/assets/images/MIDTOWN_SOLO.png",
//   },
//   {
//     title: "FUSTAT PARK",
//     status: "Finished",
//     alt: "حديقة الفسطاط",
//     src: "src/assets/images/Fustat_Park.png",
//   },
//   {
//     title: "GALALA TOURIST RESORT",
//     status: "Finished",
//     alt: "GALALA TOURIST RESORT",
//     src: "src/assets/images/galala/1.png",
//   },
//   {
//     title: "R3 RESIDENTIAL COMPOUND",
//     status: "ongoing",
//     alt: "R3 RESIDENTIAL COMPOUND",
//     src: "src/assets/images/r3/1.png",
//   },
//   {
//     title: "Shebin El-Qanater Hospital",
//     status: "Finished",
//     alt: "Shebin El-Qanater Hospital",
//     src: "src/assets/images/hospital/1.png",
//   },
//   {
//     title: "AGA KHAN GARDEN",
//     status: "Finished",
//     alt: "AGA KHAN GARDEN",
//     src: "src/assets/images/garden/1.png",
//   },
//   {
//     title: "ADMINISTRATIVE BUILDING",
//     status: "Finished",
//     alt: "ADMINISTRATIVE BUILDING",
//     src: "src/assets/images/admin/1.png",
//   },
//   {
//     title: "THE CULTURAL CENTER IN THE MOSQUE OF EGYPT",
//     status: "ongoing",
//     alt: "THE CULTURAL CENTER IN THE MOSQUE OF EGYPT",
//     src: "src/assets/images/mosque/1.png",
//   },
// ];

// export default function ProjectsHero() {
//    return (
//     <div className="relative w-full bg-[#1E2432]" style={{ height: "100vh" }}>
//       <div className="w-full h-screen sticky top-0 overflow-hidden">
//         <KineticGrid className="flex flex-col items-center justify-center">
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             // className="text-center mb-6 absolute top-20 md:top-24 z-10 px-4"
//             className="text-center mb-6 absolute top-20 md:top-24 left-1/2 -translate-x-1/2 z-10 px-4"
//           >
//             <span className="text-[#FFBF00] font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
//               Landmark Developments
//             </span>
//             <h1 className="text-3xl md:text-5xl font-bold text-white mt-3  ">
//               Our Projects
//             </h1>
//             <p className="text-white/50 text-sm mt-2">Scroll to explore</p>
//           </motion.div>

//           <div className="w-full h-full">
//             <CircularGallery items={projects} radius={550} autoRotateSpeed={0.02} />
//           </div>
//         </KineticGrid>
//       </div>
//     </div>
//   );
// }






import { motion } from "motion/react";
import CircularGallery from "../CircularGallery/CircularGallery";
import KineticGrid from "../KineticGrid/KineticGrid";

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
    status: "Finished",
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
    title: "MIDTOWN SOLO",
    status: "ongoing",
    alt: "مبنى سكني ميدتاون",
    src: "src/assets/images/MIDTOWN_SOLO.png",
  },
  {
    title: "FUSTAT PARK",
    status: "Finished",
    alt: "حديقة الفسطاط",
    src: "src/assets/images/Fustat_Park.png",
  },
  {
    title: "GALALA TOURIST RESORT",
    status: "Finished",
    alt: "GALALA TOURIST RESORT",
    src: "src/assets/images/galala/1.png",
  },
  {
    title: "R3 RESIDENTIAL COMPOUND",
    status: "ongoing",
    alt: "R3 RESIDENTIAL COMPOUND",
    src: "src/assets/images/r3/1.png",
  },
  {
    title: "Shebin El-Qanater Hospital",
    status: "Finished",
    alt: "Shebin El-Qanater Hospital",
    src: "src/assets/images/hospital/1.png",
  },
  {
    title: "AGA KHAN GARDEN",
    status: "Finished",
    alt: "AGA KHAN GARDEN",
    src: "src/assets/images/garden/1.png",
  },
  {
    title: "ADMINISTRATIVE BUILDING",
    status: "Finished",
    alt: "ADMINISTRATIVE BUILDING",
    src: "src/assets/images/admin/1.png",
  },
  {
    title: "THE CULTURAL CENTER IN THE MOSQUE OF EGYPT",
    status: "ongoing",
    alt: "THE CULTURAL CENTER IN THE MOSQUE OF EGYPT",
    src: "src/assets/images/mosque/1.png",
  },
];

export default function ProjectsHero() {
  return (
    // h-screen كـ fallback، و 100svh بتتطبق فوقيها في المتصفحات اللي بتدعمها
    // (بتحل مشكلة الشريط السفلي في متصفحات الموبايل)
    <section className="relative w-full bg-[#  ] h-screen" style={{ height: "100svh" }}>
      <div
        className="w-full h-screen sticky top-0 overflow-hidden"
        style={{ height: "100svh" }}
      >
        <KineticGrid className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-14 sm:top-20 md:top-24 left-1/2 -translate-x-1/2 z-20 w-full max-w-[92%] sm:max-w-xl px-4 text-center pointer-events-none"
          >
            <span className="text-[#FFBF00] font-semibold tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs md:text-sm uppercase">
              Landmark Developments
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3">
              Our Projects
            </h1>
            <p className="text-white/50 text-[11px] sm:text-sm mt-1.5 sm:mt-2">
              <span className="sm:hidden">Swipe or scroll to explore</span>
              <span className="hidden sm:inline">Scroll to explore</span>
            </p>
          </motion.div>

          <div className="w-full h-full">
            <CircularGallery items={projects} radius={550} autoRotateSpeed={0.02} />
          </div>
        </KineticGrid>
      </div>
    </section>
  );
} 