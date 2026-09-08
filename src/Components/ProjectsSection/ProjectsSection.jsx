// "use client";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";


// const PROJECTS = [
//   {
//     id: "midtown-solo",
//     name: "MIDTOWN SOLO",
//     typeAr: "برج سكني",
//     typeEn: "Residential Tower",
//     locationAr: "القاهرة الجديدة",
//     locationEn: "New Cairo",
//     statusAr: "تحت الإنشاء",
//     pattern: "tower",
//   },
//   {
//     id: "financial-district-square",
//     name: "FINANCIAL DISTRICT SQUARE",
//     typeAr: "مربع تجاري ومكتبي",
//     typeEn: "Mixed-Use District",
//     locationAr: "العاصمة الإدارية الجديدة",
//     locationEn: "New Administrative Capital",
//     statusAr: "تخطيط عام للموقع",
//     pattern: "square",
//   },
//   {
//     id: "sallum-land-port",
//     name: "SALLUM LAND PORT",
//     typeAr: "بوابة ومنفذ بري",
//     typeEn: "Land Port & Logistics",
//     locationAr: "السلوم",
//     locationEn: "Sallum",
//     statusAr: "تحت الإنشاء",
//     pattern: "port",
//   },
//   {
//     id: "bin-zayed-axis",
//     name: "BIN ZAYED AXIS",
//     typeAr: "محور طرق وبنية تحتية",
//     typeEn: "Road Axis & Infrastructure",
//     locationAr: "الموقع العام للمحور",
//     locationEn: "General Site",
//     statusAr: "تخطيط عام للموقع",
//     pattern: "axis",
//   },
//   {
//     id: "fustat-park",
//     name: "FUSTAT PARK",
//     typeAr: "حديقة عامة",
//     typeEn: "Public Park",
//     locationAr: "الفسطاط، القاهرة",
//     locationEn: "Fustat, Cairo",
//     statusAr: "تحت الإنشاء",
//     pattern: "park",
//   },
//   {
//     id: "midtown-condo",
//     name: "MIDTOWN CONDO",
//     typeAr: "وحدات سكنية",
//     typeEn: "Residential Condominiums",
//     locationAr: "القاهرة الجديدة",
//     locationEn: "New Cairo",
//     statusAr: "تحت الإنشاء",
//     pattern: "tower",
//   },
// ];

// // ---------------------------------------------------------------------------
// // Generated blueprint-style visuals (one per project category)
// // ---------------------------------------------------------------------------
// function BlueprintArt({ variant, className }) {
//   const common = { className, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 400 400" };

//   if (variant === "tower") {
//     return (
//       <svg {...common}>
//         <rect width="400" height="400" fill="#1B2329" />
//         {Array.from({ length: 9 }).map((_, row) =>
//           Array.from({ length: 5 }).map((_, col) => (
//             <rect
//               key={`${row}-${col}`}
//               x={130 + col * 30}
//               y={60 + row * 32}
//               width="22"
//               height="20"
//               fill="none"
//               stroke="#C98A3E"
//               strokeOpacity={0.55}
//               strokeWidth="1"
//             />
//           ))
//         )}
//         <rect x="120" y="50" width="160" height="300" fill="none" stroke="#C98A3E" strokeWidth="2" />
//         <line x1="80" y1="350" x2="320" y2="350" stroke="#8B9499" strokeWidth="1" strokeDasharray="4 4" />
//       </svg>
//     );
//   }

//   if (variant === "square") {
//     return (
//       <svg {...common}>
//         <rect width="400" height="400" fill="#1B2329" />
//         {Array.from({ length: 6 }).map((_, i) => (
//           <rect
//             key={i}
//             x={60 + i * 12}
//             y={60 + i * 12}
//             width={280 - i * 24}
//             height={280 - i * 24}
//             fill="none"
//             stroke="#C98A3E"
//             strokeOpacity={0.35 + i * 0.08}
//             strokeWidth="1"
//           />
//         ))}
//         <line x1="40" y1="200" x2="360" y2="200" stroke="#8B9499" strokeWidth="1" strokeDasharray="2 6" />
//         <line x1="200" y1="40" x2="200" y2="360" stroke="#8B9499" strokeWidth="1" strokeDasharray="2 6" />
//       </svg>
//     );
//   }

//   if (variant === "port") {
//     return (
//       <svg {...common}>
//         <rect width="400" height="400" fill="#1B2329" />
//         {Array.from({ length: 7 }).map((_, i) => (
//           <rect
//             key={i}
//             x={50}
//             y={70 + i * 36}
//             width={300 - (i % 2) * 60}
//             height="22"
//             fill="none"
//             stroke="#C98A3E"
//             strokeOpacity={0.5}
//             strokeWidth="1"
//           />
//         ))}
//         <line x1="50" y1="60" x2="50" y2="340" stroke="#8B9499" strokeWidth="1.5" />
//       </svg>
//     );
//   }

//   if (variant === "axis") {
//     return (
//       <svg {...common}>
//         <rect width="400" height="400" fill="#1B2329" />
//         {Array.from({ length: 10 }).map((_, i) => (
//           <line
//             key={i}
//             x1={-40 + i * 48}
//             y1="400"
//             x2={200}
//             y2="0"
//             stroke="#C98A3E"
//             strokeOpacity={0.25 + (i % 3) * 0.1}
//             strokeWidth="1"
//           />
//         ))}
//         <circle cx="200" cy="200" r="4" fill="#C98A3E" />
//       </svg>
//     );
//   }

//   // park
//   return (
//     <svg {...common}>
//       <rect width="400" height="400" fill="#1B2329" />
//       {Array.from({ length: 5 }).map((_, i) => (
//         <path
//           key={i}
//           d={`M ${20} ${80 + i * 55} Q 200 ${20 + i * 55} 380 ${80 + i * 55}`}
//           fill="none"
//           stroke="#3E6E63"
//           strokeOpacity={0.55}
//           strokeWidth="1.5"
//         />
//       ))}
//       <circle cx="200" cy="200" r="26" fill="none" stroke="#3E6E63" strokeWidth="1.5" />
//     </svg>
//   );
// }

// // ---------------------------------------------------------------------------
// // Card transform math for the coverflow effect
// // ---------------------------------------------------------------------------
// function cardStyle(offset) {
//   const abs = Math.abs(offset);
//   if (abs > 2) {
//     return { opacity: 0, scale: 0.5, x: offset > 0 ? 520 : -520, rotateY: 0, zIndex: 0, pointerEvents: "none" };
//   }
//   const dir = offset === 0 ? 0 : offset / abs;
//   const x = offset * 210;
//   const scale = 1 - abs * 0.22;
//   const rotateY = -dir * 32;
//   const opacity = 1 - abs * 0.35;
//   const zIndex = 10 - abs;
//   return { opacity, scale, x, rotateY, zIndex, pointerEvents: "auto" };
// }

// export default function ProjectsSection() {
//   const [active, setActive] = useState(0);
//   const touchStartX = useRef(null);
//   const count = PROJECTS.length;

//   const goTo = useCallback(
//     (i) => setActive(((i % count) + count) % count),
//     [count]
//   );
//   const next = useCallback(() => goTo(active + 1), [active, goTo]);
//   const prev = useCallback(() => goTo(active - 1), [active, goTo]);

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") prev();
//       if (e.key === "ArrowLeft") next();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [next, prev]);

//   const onTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };
//   const onTouchEnd = (e) => {
//     if (touchStartX.current === null) return;
//     const delta = e.changedTouches[0].clientX - touchStartX.current;
//     if (Math.abs(delta) > 40) {
//       delta > 0 ? prev() : next();
//     }
//     touchStartX.current = null;
//   };

//   const active_project = PROJECTS[active];

//   return (
//     <section
//       dir="rtl"
//       className="relative w-full overflow-hidden bg-[#12181C] py-20 sm:py-28"
//       style={{ fontFamily: "'IBM Plex Sans Arabic', ui-sans-serif, system-ui" }}
//     >
//       {/* faint grid backdrop */}
//       <div
//         className="pointer-events-none absolute inset-0 opacity-[0.06]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#C98A3E 1px, transparent 1px), linear-gradient(90deg, #C98A3E 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />

//       <div className="relative mx-auto max-w-6xl px-6">
//         <div className="mb-14 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
//           <div>
//             <p className="text-sm tracking-wide text-[#8B9499]">شروق للمقاولات والعقارات</p>
//             <h2
//               className="mt-2 text-4xl text-[#F2EEE6] sm:text-5xl"
//               style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui" }}
//             >
//               مشاريعنا
//             </h2>
//           </div>
//           <div className="flex gap-3">
//             <button
//               onClick={prev}
//               aria-label="المشروع السابق"
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B94991a] text-[#F2EEE6] transition hover:border-[#C98A3E] hover:text-[#C98A3E]"
//             >
//               <ChevronRight size={20} />
//             </button>
//             <button
//               onClick={next}
//               aria-label="المشروع التالي"
//               className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8B94991a] text-[#F2EEE6] transition hover:border-[#C98A3E] hover:text-[#C98A3E]"
//             >
//               <ChevronLeft size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Coverflow track — kept LTR internally so the transform math stays
//             predictable; visible Arabic text inside each card stays dir="rtl". */}
//         <div
//           dir="ltr"
//           onTouchStart={onTouchStart}
//           onTouchEnd={onTouchEnd}
//           className="relative flex h-[360px] items-center justify-center sm:h-[420px]"
//           style={{ perspective: "1400px" }}
//         >
//           {PROJECTS.map((project, i) => {
//             let offset = i - active;
//             if (offset > count / 2) offset -= count;
//             if (offset < -count / 2) offset -= -count;
//             const style = cardStyle(offset);
//             const isActive = offset === 0;

//             return (
//               <motion.button
//                 key={project.id}
//                 onClick={() => goTo(i)}
//                 animate={{
//                   x: style.x,
//                   scale: style.scale,
//                   rotateY: style.rotateY,
//                   opacity: style.opacity,
//                   zIndex: style.zIndex,
//                 }}
//                 transition={{ type: "spring", stiffness: 260, damping: 30 }}
//                 style={{ pointerEvents: style.pointerEvents, transformStyle: "preserve-3d" }}
//                 className="absolute h-[300px] w-[220px] overflow-hidden rounded-md border border-[#8B94991a] bg-[#1B2329] text-left shadow-2xl sm:h-[360px] sm:w-[270px]"
//                 aria-label={project.name}
//                 aria-current={isActive}
//               >
//                 {project.image ? (
//                   <img src={project.image} alt={project.name} className="h-2/3 w-full object-cover" />
//                 ) : (
//                   <BlueprintArt variant={project.pattern} className="h-2/3 w-full" />
//                 )}
//                 <div dir="rtl" className="flex h-1/3 flex-col justify-center gap-1 px-4">
//                   <p
//                     className="truncate text-sm text-[#F2EEE6] sm:text-base"
//                     style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui" }}
//                   >
//                     {project.name}
//                   </p>
//                   <p className="text-xs text-[#8B9499]">{project.typeAr}</p>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </div>

//         {/* Active project details */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active_project.id}
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.25 }}
//             className="mx-auto mt-10 flex max-w-lg flex-col items-center text-center"
//           >
//             <h3
//               className="text-2xl text-[#F2EEE6]"
//               style={{ fontFamily: "'Space Grotesk', ui-sans-serif, system-ui" }}
//             >
//               {active_project.name}
//             </h3>
//             <p className="mt-1 text-[#C98A3E]">{active_project.typeAr}</p>
//             <div className="mt-3 flex items-center gap-2 text-sm text-[#8B9499]">
//               <MapPin size={14} />
//               <span>{active_project.locationAr}</span>
//               <span className="mx-1">·</span>
//               <span>{active_project.statusAr}</span>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Dots */}
//         <div className="mt-8 flex justify-center gap-2">
//           {PROJECTS.map((p, i) => (
//             <button
//               key={p.id}
//               onClick={() => goTo(i)}
//               aria-label={p.name}
//               className="h-1.5 rounded-full transition-all"
//               style={{
//                 width: i === active ? 22 : 8,
//                 backgroundColor: i === active ? "#C98A3E" : "#8B949955",
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



import { useState } from 'react';
import { ArrowUpRight, MapPin, X } from 'lucide-react';

const projects = [
  {
    title: 'Midtown Solo',
    location: 'New Administrative Capital, Egypt',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/10325683/pexels-photo-10325683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A landmark residential tower offering premium living spaces with panoramic views and world-class amenities.',
  },
  {
    title: 'Financial District Square',
    location: 'New Administrative Capital, Egypt',
    category: 'Commercial',
    image:
      'https://images.pexels.com/photos/4449213/pexels-photo-4449213.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'The general location of the financial district square — a premier business hub designed for global enterprises.',
  },
  {
    title: 'Sallum Land Port',
    location: 'Sallum, Egypt',
    category: 'Infrastructure',
    image:
      'https://images.pexels.com/photos/14020705/pexels-photo-14020705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A strategic land port facilitating international trade and movement with state-of-the-art logistics facilities.',
  },
  {
    title: 'Bin Zayed Axis',
    location: 'New Administrative Capital, Egypt',
    category: 'Infrastructure',
    image:
      'https://images.pexels.com/photos/4345863/pexels-photo-4345863.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'The general site of Bin Zayed Axis — a major road infrastructure project connecting key districts with efficiency.',
  },
  {
    title: 'Fustat Park',
    location: 'Cairo, Egypt',
    category: 'Development',
    image:
      'https://images.pexels.com/photos/5800214/pexels-photo-5800214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'A sprawling urban park development revitalizing historic Fustat with green spaces and community areas.',
  },
  {
    title: 'Midtown Condo',
    location: 'New Administrative Capital, Egypt',
    category: 'Residential',
    image:
      'https://images.pexels.com/photos/18506889/pexels-photo-18506889.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description:
      'Luxury condominiums featuring contemporary architecture, lush balconies, and integrated community living.',
  },
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-brand-navy px-6 py-16 text-white lg:px-10 lg:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
            Featured Developments
          </p>

          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Our Signature Projects
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm text-white/55 sm:text-base">
            Hover over any project to learn more about it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-navy-dark text-left"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark via-brand-navy/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="mb-2 inline-block rounded-full bg-brand-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-navy">
                      {project.category}
                    </span>

                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-1 flex items-center gap-1.5 text-xs text-white/70">
                      <MapPin size={13} className="text-brand-gold" />
                      {project.location}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-navy">
                      Learn More
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-navy/80 p-5 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="animate-scale-in relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-md transition-colors hover:bg-brand-gold"
              aria-label="Close project details"
            >
              <X size={19} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="aspect-[16/9] w-full object-cover"
            />

            <div className="p-7 sm:p-10">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
                {selectedProject.category}
              </p>

              <h2
                id="project-title"
                className="font-display text-3xl font-bold text-brand-navy"
              >
                {selectedProject.title}
              </h2>

              <p className="mt-2 flex items-center gap-1.5 text-sm text-brand-navy/55">
                <MapPin size={15} className="text-brand-gold-dark" />
                {selectedProject.location}
              </p>

              <p className="mt-5 max-w-xl leading-7 text-brand-navy/65">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

