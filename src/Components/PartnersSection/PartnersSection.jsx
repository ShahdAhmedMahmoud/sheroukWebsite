// // import { useRef } from "react";
// // import { motion, useMotionValue, useSpring } from "motion/react";

// // const partners = [
// //   "TMG",
// //   "المصرف العربي الدولي",
// //   "وزارة الصحة والسكان",
// //   "TOLIP",
// //   "هيئة الطرق والكباري - القوات المسلحة",
// //   "ARCO",
// //   "EMAAR",
// //   "BETTER HOME",
// //   "CSCEC",
// //   "Mission Laïque Française",
// // ];

// // // -- Magnetic Hover --
// // function MagneticLogo({ name, logoSrc }) {
// //   const ref = useRef(null);
// //   const x = useMotionValue(0);
// //   const y = useMotionValue(0);
// //   const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
// //   const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

// //   const handleMouseMove = (e) => {
// //     const rect = ref.current.getBoundingClientRect();
// //     const relX = e.clientX - (rect.left + rect.width / 2);
// //     const relY = e.clientY - (rect.top + rect.height / 2);
// //     x.set(relX * 0.35);
// //     y.set(relY * 0.35);
// //   };

// //   const reset = () => {
// //     x.set(0);
// //     y.set(0);
// //   };

// //   return (
// //     <motion.div
// //       ref={ref}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={reset}
// //       style={{ x: springX, y: springY }}
// //       className="shrink-0 mx-8 flex items-center justify-center h-16 min-w-[150px] px-6 rounded-xl border border-[#6C757D]/15 bg-white
// //                  grayscale opacity-60 transition-all duration-300
// //                  hover:grayscale-0 hover:opacity-100 hover:-translate-y-1
// //                  hover:shadow-lg hover:shadow-[#1F3888]/15"
// //     >
// //       {logoSrc ? (
// //         <img src={logoSrc} alt={name} className="h-8 w-auto object-contain" />
// //       ) : (
// //         <span className="text-[#1E2432] font-semibold text-sm whitespace-nowrap text-center">
// //           {name}
// //         </span>
// //       )}
// //     </motion.div>
// //   );
// // }

// // // -- Infinite Marquee Row (Left or Right) --
// // function MarqueeRow({ items, direction = "left", duration = 30 }) {
// //   const doubled = [...items, ...items]; // نسختين عشان اللف يبقى سلس بـ -50%
// //   return (
// //     <div
// //       className="marquee-row overflow-hidden
// //                  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
// //     >
// //       <div
// //         className={`flex w-max ${
// //           direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
// //         }`}
// //         style={{ animationDuration: `${duration}s` }}
// //       >
// //         {doubled.map((name, i) => (
// //           <MagneticLogo key={i} name={name} />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default function PartnersSection() {
// //   const row1 = partners.slice(0, 5);
// //   const row2 = partners.slice(5, 10);

// //   return (
// //     <section className="bg-[#F8F9FD] py-20 relative overflow-hidden">
// //       <div className="container mx-auto px-4">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-14"
// //         >
// //           <span className="border border-[#1F3888]/30 text-[#1F3888] py-1 px-4 rounded-full text-sm font-medium">
// //             Our Partners
// //           </span>
// //           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E2432] tracking-tight mt-5 text-center">
// //             شركاء النجاح
// //           </h2>
// //           <p className="text-center mt-5 text-[#6C757D]">
// //             نفخر بثقة أبرز المؤسسات الحكومية والخاصة اللي تعاملت معانا
// //           </p>
// //         </motion.div>

// //         <div className="flex flex-col gap-8">
// //           <MarqueeRow items={row1} direction="left" duration={28} />
// //           <MarqueeRow items={row2} direction="right" duration={32} />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import { useRef } from "react";
// import { motion, useMotionValue, useSpring } from "motion/react";

// const partners = [
//   { name: "TMG", logo: "src/assets/images/partners/tmg.jpg" },
//   { name: "Arab International Bank", logo: "src/assets/images/partners/المصرف العربي الدولي.png" },
//   { name: "Ministry of Health & Population", logo: "src/assets/images/partners/health.jpg" },
//   { name: "Tolip", logo: "src/assets/images/partners/TOLIP1.jpg" },
//   { name: "Ministers of National Defense and Roads", logo: "src/assets/images/partners/وزرا الدفاع الوطنية للطرق.jpg" },
//   { name: "ARCO", logo: "src/assets/images/partners/ARCO.jpg" },
//   { name: "EMAAR", logo: "src/assets/images/partners/EMAAR.png" },
//   { name: "Better Home", logo: "src/assets/images/partners/BETTER HOME.jpg" },
//   { name: "CSCEC", logo: "src/assets/images/partners/CSCEO.png" },
//   { name: "Mission Laïque Française", logo: "src/assets/images/partners/mission.png" },
//   { name: "The Army", logo: "src/assets/images/partners/جيش.jpg" },
// ];

// // -- Magnetic Hover Logo Card --
// function MagneticLogo({ name, logo }) {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
//   const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

//   const handleMouseMove = (e) => {
//     const rect = ref.current.getBoundingClientRect();
//     const relX = e.clientX - (rect.left + rect.width / 2);
//     const relY = e.clientY - (rect.top + rect.height / 2);
//     x.set(relX * 0.35);
//     y.set(relY * 0.35);
//   };

//   const reset = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={reset}
//       style={{ x: springX, y: springY }}
//       className="group shrink-0 mx-5 flex items-center justify-center h-24 w-[180px]
//                  rounded-2xl border border-[#283A85]/10 bg-white
//                  shadow-sm transition-all duration-300 relative overflow-hidden
//                  hover:shadow-xl hover:shadow-[#283A85]/20 hover:-translate-y-1.5
//                  hover:border-[#283A85]/30"
//     >
//       {/* توهج خفيف خلف اللوجو عند الهوفر */}
//       <div
//         className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(40,58,133,0.08), transparent 70%)",
//         }}
//       />
//       <img
//         src={logo}
//         alt={name}
//         title={name}
//         className="relative h-10 w-auto max-w-[130px] object-contain
//                    grayscale opacity-50 transition-all duration-300
//                    group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
//       />
//     </motion.div>
//   );
// }

// function MarqueeRow({ items, direction = "left", duration = 30 }) {
//   const doubled = [...items, ...items];
//   return (
//     <div
//       className="marquee-row overflow-hidden py-2
//                  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
//     >
//       <div
//         className={`flex w-max ${
//           direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
//         }`}
//         style={{ animationDuration: `${duration}s` }}
//       >
//         {doubled.map((p, i) => (
//           <MagneticLogo key={i} name={p.name} logo={p.logo} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function PartnersSection() {
//   const row1 = partners.slice(0, 5);
//   const row2 = partners.slice(5, 10);

//   return (
//     <section className="bg-[#FFFFFF] py-24 relative overflow-hidden">
//       {/* خلفية كرياتيف: شبكة نقط خفيفة + توهج ناعم بلون البراند */}
//       <div
//         className="absolute inset-0 opacity-[0.35] pointer-events-none"
//         style={{
//           backgroundImage:
//             "radial-gradient(#283A85 0.6px, transparent 0.6px)",
//           backgroundSize: "22px 22px",
//           maskImage:
//             "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
//         }}
//       />
//       <div
//         className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
//         style={{ background: "#283A85" }}
//       />

//       <div className="container mx-auto px-4 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="flex flex-col items-center justify-center max-w-[560px] mx-auto mb-16"
//         >
//           <span
//             className="py-1.5 px-4 rounded-full text-sm font-semibold tracking-wide"
//             style={{
//               color: "#283A85",
//               border: "1px solid rgba(40,58,133,0.25)",
//               background: "rgba(40,58,133,0.05)",
//             }}
//           >
//             Our Partners
//           </span>

//           <h2
//             className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center"
//             style={{ color: "#404041" }}
//           >
//             Trusted by Industry Leaders
//           </h2>

//           <p className="text-center mt-5 text-base" style={{ color: "#404041", opacity: 0.7 }}>
//             We're proud to collaborate with leading government bodies, developers,
//             and enterprises across Egypt to deliver excellence on every project.
//           </p>
//         </motion.div>

//         <div className="flex flex-col gap-6">
//           <MarqueeRow items={row1} direction="left" duration={30} />
//           <MarqueeRow items={row2} direction="right" duration={34} />
//         </div>
//       </div>
//     </section>
//   );
// }




import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import tmg from "../../assets/images/partners/tmg.jpg";
import aib from "../../assets/images/partners/aib.png";
import mohp from "../../assets/images/partners/mohp.jpg";
import tolip from "../../assets/images/partners/tolip1.jpg";
import defenseRoads from "../../assets/images/partners/defense-roads.jpg";
import arco from "../../assets/images/partners/arco.jpg";
import emaar from "../../assets/images/partners/emaar.png";
import betterhome from "../../assets/images/partners/betterhome.jpg";
import cscec from "../../assets/images/partners/cscec.png";
import mission from "../../assets/images/partners/mission.png";
import army from "../../assets/images/partners/army.jpg";

const partners = [
  { name: "TMG", logo: tmg },
  { name: "Arab International Bank", logo: aib },
  { name: "Ministry of Health & Population", logo: mohp },
  { name: "Tolip", logo: tolip },
  { name: "Ministers of National Defense and Roads", logo: defenseRoads },
  { name: "ARCO", logo: arco },
  { name: "EMAAR", logo: emaar },
  { name: "Better Home", logo: betterhome },
  { name: "CSCEC", logo: cscec },
  { name: "Mission Laïque Française", logo: mission },
  { name: "The Army", logo: army },
];

// -- Magnetic Hover Logo Card --
function MagneticLogo({ name, logo }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className="group shrink-0 mx-4 flex items-center justify-center h-36 w-[240px]
                 rounded-2xl border-2 border-[#283A85]/15 bg-white
                 shadow-md transition-all duration-300 relative overflow-hidden p-6
                 hover:shadow-2xl hover:shadow-[#283A85]/25 hover:-translate-y-2
                 hover:border-[#283A85]/40"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle at center, rgba(40,58,133,0.1), transparent 70%)",
        }}
      />
      <img
        src={logo}
        alt={name}
        title={name}
        className="relative h-20 w-auto max-w-[190px] object-contain
                   transition-all duration-300
                   group-hover:scale-110"
      />
    </motion.div>
  );
}

// -- Infinite Marquee Row (Left or Right) --
function MarqueeRow({ items, direction = "left", duration = 30 }) {
  const doubled = [...items, ...items];
  return (
    <div
      className="marquee-row overflow-hidden py-2
                 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <div
        className={`flex w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((p, i) => (
          <MagneticLogo key={i} name={p.name} logo={p.logo} />
        ))}
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const row1 = partners.slice(0, 6);
  const row2 = partners.slice(5, 11);

  return (
    <section className="bg-[#FFFFFF] py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#283A85 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
        }}
      />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#283A85" }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[560px] mx-auto mb-16"
        >
          <span
            className="py-1.5 px-4 rounded-full text-sm font-semibold tracking-wide"
            style={{
              color: "#283A85",
              border: "1px solid rgba(40,58,133,0.25)",
              background: "rgba(40,58,133,0.05)",
            }}
          >
            Our Partners
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mt-5 text-center"
            style={{ color: "#404041" }}
          >
            Trusted by Industry Leaders
          </h2>

          <p
            className="text-center mt-5 text-base"
            style={{ color: "#404041", opacity: 0.7 }}
          >
            We're proud to collaborate with leading government bodies, developers,
            and enterprises across Egypt to deliver excellence on every project.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          <MarqueeRow items={row1} direction="left" duration={34} />
          <MarqueeRow items={row2} direction="right" duration={38} />
        </div>
      </div>
    </section>
  );
}