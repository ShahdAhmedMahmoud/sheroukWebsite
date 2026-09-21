


// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { HardHat, ArrowRight, PhoneCall } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const LINE_TOPS = ["top-[12%]", "top-[32%]", "top-[52%]", "top-[72%]", "top-[90%]"];


// const ctaStyles = `
// @keyframes cta-gridMove {
//   0% { background-position: 0 0; }
//   100% { background-position: 50px 50px; }
// }
// @keyframes cta-lineMove {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(100%); }
// }
// @keyframes cta-cornerDraw {
//   0% { stroke-dashoffset: 0; }
//   100% { stroke-dashoffset: 400; }
// }
// @keyframes cta-glow {
//   0%, 100% { opacity: 0.55; }
//   50% { opacity: 1; }
// }
// @media (prefers-reduced-motion: reduce) {
//   .cta-anim-grid, .cta-anim-line, .cta-anim-corner, .cta-anim-glow {
//     animation: none !important;
//   }
// }
// `;

// function CtaContent() {
//   return (
//     <div className="mx-auto max-w-3xl text-center">
//       <div className="cta-anim-glow mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]">
//         <HardHat className="h-3.5 w-3.5" />
//         Let's Build Together
//       </div>

//       <h2 className="mb-6 text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight sm:mb-8">
//         Ready to break ground
//         <br />
//         <span
//           className="inline-block"
//           style={{
//             backgroundImage: "linear-gradient(45deg, #FFBF00, #ffd76a, #1F3888)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             backgroundClip: "text",
//           }}
//         >
//           on your next landmark?
//         </span>
//       </h2>

//       <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
//         From infrastructure to commercial developments across Egypt, our team
//         turns ambitious plans into finished, standing structures. Tell us what
//         you're building — we'll take it from there.
//       </p>

//       <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
//         <a
//           href="#contact"
//           className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFBF00] px-7 py-3 text-sm font-semibold text-[#1E2432] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,191,0,0.25)] active:translate-y-0 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
//         >
//           Start Your Project
//           <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//         </a>

//         <a
//           href="#contact"
//           className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:border-[#1F3888] hover:bg-[#1F3888]/10 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
//         >
//           <PhoneCall className="h-4 w-4" />
//           Talk to Our Team
//         </a>
//       </div>
//     </div>
//   );
// }

// function SawGraphic() {
//   return (
//     <svg viewBox="0 0 220 180" className="h-full w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.55)]">
//       <defs>
//         <linearGradient id="cta-saw-body" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0" stopColor="#FFBF00" />
//           <stop offset="0.58" stopColor="#D98A2B" />
//           <stop offset="1" stopColor="#8F4E18" />
//         </linearGradient>
//         <radialGradient id="cta-saw-blade" cx="35%" cy="30%" r="75%">
//           <stop offset="0" stopColor="#F2F4F5" />
//           <stop offset="0.62" stopColor="#A3AAB2" />
//           <stop offset="1" stopColor="#535B66" />
//         </radialGradient>
//       </defs>
//       <path d="M125 28h72" stroke="#293A82" strokeWidth="18" strokeLinecap="round" />
//       <path d="M156 38 119 91" stroke="#A3AAB2" strokeWidth="10" strokeLinecap="round" />
//       <path d="M156 38 119 91" stroke="#293A82" strokeWidth="5" strokeLinecap="round" />
//       <path d="M75 65h70c18 0 31 13 31 30v19H54V86c0-12 9-21 21-21Z" fill="url(#cta-saw-body)" stroke="#8F4E18" strokeWidth="3" />
//       <path d="M69 80h91M67 91h95M69 102h91" stroke="#5B3014" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
//       <circle cx="83" cy="119" r="49" fill="url(#cta-saw-blade)" stroke="#FFBF00" strokeWidth="5" strokeDasharray="13 5" />
//       <circle cx="83" cy="119" r="29" fill="none" stroke="#293A82" strokeWidth="11" strokeDasharray="4 15" />
//       <circle cx="83" cy="119" r="12" fill="#1E2432" stroke="#FFBF00" strokeWidth="4" />
//       <path d="M112 120h47" stroke="#1E2432" strokeWidth="8" strokeLinecap="round" />
//       <path d="M166 111v18" stroke="#FFBF00" strokeWidth="5" strokeLinecap="round" />
//     </svg>
//   );
// }

// export default function ProjectsCTASection() {
//   const sectionRef = useRef(null);
//   const sawRef = useRef(null);
//   const cutLineRef = useRef(null);
//   const glowRef = useRef(null);
//   const sourceRef = useRef(null);
//   const splitRef = useRef(null);
//   const leftPanelRef = useRef(null);
//   const rightPanelRef = useRef(null);

//   useLayoutEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return undefined;

//     const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
//     const context = gsap.context(() => {
//       gsap.set(sawRef.current, { yPercent: reduceMotion ? 35 : -35, xPercent: -50, autoAlpha: 1 });
//       gsap.set(cutLineRef.current, { scaleY: reduceMotion ? 1 : 0, transformOrigin: "top center" });
//       gsap.set(glowRef.current, { autoAlpha: reduceMotion ? 0.65 : 0 });
//       gsap.set(splitRef.current, { autoAlpha: reduceMotion ? 1 : 0 });

//       if (reduceMotion) return;

//       const timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: "top 90%",
//           end: "bottom 10%",
//           scrub: 1,
//           invalidateOnRefresh: true,
//         },
//       });

//       timeline
//         .to(sawRef.current, { yPercent: 115, xPercent: -50, autoAlpha: 1, duration: 0.62, ease: "none" }, 0)
//         .to(cutLineRef.current, { scaleY: 1, duration: 0.62, ease: "none" }, 0.16)
//         .to(glowRef.current, { autoAlpha: 0.8, duration: 0.28 }, 0.2)
//         .to(splitRef.current, { autoAlpha: 1, duration: 0.12 }, 0.68)
//         .to(sourceRef.current, { autoAlpha: 0, duration: 0.1 }, 0.7)
//         .to(leftPanelRef.current, { xPercent: -7, duration: 0.2, ease: "power2.out" }, 0.72)
//         .to(rightPanelRef.current, { xPercent: 7, duration: 0.2, ease: "power2.out" }, 0.72);
//     }, section);

//     return () => context.revert();
//   }, []);

//   return (

//     <div ref={sectionRef} className="relative w-full bg-[#F8F9FD] pt-10 sm:pt-14 pb-8 sm:pb-12 px-3 sm:px-6">
//       <section className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] bg-[#1E2432] text-white py-20 sm:py-28 px-4 sm:px-8 shadow-[0_25px_60px_-20px_rgba(30,36,50,0.45)]">
//         <style>{ctaStyles}</style>

//         <div ref={splitRef} className="pointer-events-none absolute inset-0 z-[12] overflow-hidden" aria-hidden="true">
//           <div ref={leftPanelRef} className="absolute inset-0" style={{ clipPath: "polygon(0 0, 62% 0, 62% 100%, 0 100%)" }}>
//             <div className="flex h-full items-center px-4 py-20 sm:px-8 sm:py-28">
//               <CtaContent />
//             </div>
//           </div>
//           <div ref={rightPanelRef} className="absolute inset-0" style={{ clipPath: "polygon(62% 0, 100% 0, 100% 100%, 62% 100%)" }}>
//             <div className="flex h-full items-center px-4 py-20 sm:px-8 sm:py-28">
//               <CtaContent />
//             </div>
//           </div>
//         </div>

//         <div className="pointer-events-none absolute inset-0 z-[20] overflow-hidden" aria-hidden="true">
//           <div ref={glowRef} className="absolute inset-y-0 left-[62%] w-24 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#FFBF00]/25 to-transparent blur-xl" />
//           <div ref={cutLineRef} className="absolute left-[62%] top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#FFBF00] to-transparent shadow-[0_0_24px_#FFBF00]" />
//           <div ref={sawRef} className="absolute left-[62%] top-0 h-36 w-44 -translate-x-1/2 -translate-y-1/2">
//             <SawGraphic />
//           </div>
//         </div>

      
//       <div
//         className="cta-anim-grid absolute inset-0 z-[1] w-full h-full opacity-60"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,191,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.07) 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//           animation: "cta-gridMove 20s linear infinite",
//         }}
//       />

    
//       <div className="absolute inset-0 z-[1] w-full h-full overflow-hidden">
//         {LINE_TOPS.map((topClass, index) => {
//           const isBlue = index % 2 === 0;
//           return (
//             <div key={topClass} className={`absolute w-full h-[100px] ${topClass}`}>
//               <div className="w-full h-0.5 relative overflow-hidden">
//                 <div
//                   className={`cta-anim-line absolute top-0 w-full h-full ${
//                     index % 2 !== 0 ? "[animation-direction:reverse] [animation-delay:2s]" : ""
//                   }`}
//                   style={{
//                     animation: "cta-lineMove 4s linear infinite",
//                     background: isBlue
//                       ? "linear-gradient(90deg, transparent 0%, #1F3888 20%, #6d8cf0 50%, #1F3888 80%, transparent 100%)"
//                       : "linear-gradient(90deg, transparent 0%, #FFBF00 20%, #ffe08a 50%, #FFBF00 80%, transparent 100%)",
//                   }}
//                 />
//               </div>
//             </div>
//           );
//         })}
//       </div>

      
//       <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] z-[5]">
//         <svg
//           className="cta-anim-corner absolute top-1/2 -translate-y-1/2 left-[-150px] w-[120px] h-[60px]"
//           viewBox="0 0 120 60"
//           stroke="#FFBF00"
//           strokeWidth="2"
//           fill="none"
//           strokeDasharray="50"
//           style={{ animation: "cta-cornerDraw 6s linear infinite" }}
//         >
//           <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
//         </svg>
//         <svg
//           className="cta-anim-corner absolute top-1/2 -translate-y-1/2 right-[-150px] w-[120px] h-[60px] scale-x-[-1]"
//           viewBox="0 0 120 60"
//           stroke="#1F3888"
//           strokeWidth="2"
//           fill="none"
//           strokeDasharray="50"
//           style={{ animation: "cta-cornerDraw 6s linear infinite 3s" }}
//         >
//           <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
//         </svg>
//       </div>

      
//       <div ref={sourceRef} className="relative z-10">
//         <CtaContent />
//       </div>
//       </section>
//     </div>
//   );
// }




import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HardHat, ArrowRight, PhoneCall } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const LINE_TOPS = [
  "top-[12%]",
  "top-[32%]",
  "top-[52%]",
  "top-[72%]",
  "top-[90%]",
];

const ctaStyles = `
  @keyframes cta-gridMove {
    0% {
      background-position: 0 0;
    }

    100% {
      background-position: 50px 50px;
    }
  }

  @keyframes cta-lineMove {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }

  @keyframes cta-cornerDraw {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: 400;
    }
  }

  @keyframes cta-glow {
    0%,
    100% {
      opacity: 0.55;
    }

    50% {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .cta-anim-grid,
    .cta-anim-line,
    .cta-anim-corner,
    .cta-anim-glow {
      animation: none !important;
    }
  }
`;

function CtaContent() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {/* Badge */}
      <div className="cta-anim-glow mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em]">
        <HardHat className="h-3.5 w-3.5" />
        Let's Build Together
      </div>

      {/* Heading */}
      <h2 className="mb-6 text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight sm:mb-8">
        Ready to break ground
        <br />

        <span
          className="inline-block"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #FFBF00, #ffd76a, #1F3888)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          on your next landmark?
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-white/55 sm:text-base">
        From infrastructure to commercial developments across Egypt, our team
        turns ambitious plans into finished, standing structures. Tell us what
        you're building — we'll take it from there.
      </p>

      {/* Buttons */}
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <a
          href="#contact"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FFBF00] px-7 py-3 text-sm font-semibold text-[#1E2432] transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,191,0,0.25)] active:translate-y-0 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
        >
          Start Your Project

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <a
          href="#contact"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-transparent px-7 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:border-[#1F3888] hover:bg-[#1F3888]/10 sm:w-auto sm:px-9 sm:py-4 sm:text-base"
        >
          <PhoneCall className="h-4 w-4" />
          Talk to Our Team
        </a>
      </div>
    </div>
  );
}

/* =========================================================
   SAW GRAPHIC
========================================================= */

function SawGraphic() {
  return (
    <svg
      viewBox="0 0 220 180"
      className="h-full w-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.55)]"
    >
      <defs>
        <linearGradient
          id="cta-saw-body"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop offset="0" stopColor="#FFBF00" />
          <stop offset="0.58" stopColor="#D98A2B" />
          <stop offset="1" stopColor="#8F4E18" />
        </linearGradient>

        <radialGradient
          id="cta-saw-blade"
          cx="35%"
          cy="30%"
          r="75%"
        >
          <stop offset="0" stopColor="#F2F4F5" />
          <stop offset="0.62" stopColor="#A3AAB2" />
          <stop offset="1" stopColor="#535B66" />
        </radialGradient>
      </defs>

      {/* Handle */}
      <path
        d="M125 28h72"
        stroke="#293A82"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Arm */}
      <path
        d="M156 38 119 91"
        stroke="#A3AAB2"
        strokeWidth="10"
        strokeLinecap="round"
      />

      <path
        d="M156 38 119 91"
        stroke="#293A82"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Saw body */}
      <path
        d="M75 65h70c18 0 31 13 31 30v19H54V86c0-12 9-21 21-21Z"
        fill="url(#cta-saw-body)"
        stroke="#8F4E18"
        strokeWidth="3"
      />

      {/* Body details */}
      <path
        d="M69 80h91M67 91h95M69 102h91"
        stroke="#5B3014"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Blade */}
      <circle
        cx="83"
        cy="119"
        r="49"
        fill="url(#cta-saw-blade)"
        stroke="#FFBF00"
        strokeWidth="5"
        strokeDasharray="13 5"
      />

      <circle
        cx="83"
        cy="119"
        r="29"
        fill="none"
        stroke="#293A82"
        strokeWidth="11"
        strokeDasharray="4 15"
      />

      <circle
        cx="83"
        cy="119"
        r="12"
        fill="#1E2432"
        stroke="#FFBF00"
        strokeWidth="4"
      />

      {/* Front */}
      <path
        d="M112 120h47"
        stroke="#1E2432"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M166 111v18"
        stroke="#FFBF00"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function ProjectsCTASection() {
  const sectionRef = useRef(null);

  const sawRef = useRef(null);
  const sawBladeRef = useRef(null);

  const cutLineRef = useRef(null);
  const glowRef = useRef(null);

  const sourceRef = useRef(null);
  const splitRef = useRef(null);

  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const context = gsap.context(() => {
      /* =====================================================
         INITIAL STATE
      ===================================================== */

      gsap.set(sawRef.current, {
        yPercent: -120,
        xPercent: -50,
        autoAlpha: 1,
      });

      gsap.set(cutLineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
      });

      gsap.set(glowRef.current, {
        autoAlpha: 0,
      });

      gsap.set(splitRef.current, {
        autoAlpha: 0,
      });

      gsap.set(sourceRef.current, {
        autoAlpha: 1,
      });

      gsap.set(leftPanelRef.current, {
        xPercent: 0,
      });

      gsap.set(rightPanelRef.current, {
        xPercent: 0,
      });

      /* =====================================================
         REDUCED MOTION
      ===================================================== */

      if (reduceMotion) {
        gsap.set(sawRef.current, {
          yPercent: 115,
        });

        gsap.set(cutLineRef.current, {
          scaleY: 1,
        });

        gsap.set(splitRef.current, {
          autoAlpha: 1,
        });

        gsap.set(sourceRef.current, {
          autoAlpha: 0,
        });

        gsap.set(leftPanelRef.current, {
          xPercent: -5,
        });

        gsap.set(rightPanelRef.current, {
          xPercent: 5,
        });

        return;
      }

      /* =====================================================
         MAIN SCROLL TIMELINE
      ===================================================== */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 15%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      /* =====================================================
         1. SAW ENTERS
      ===================================================== */

      timeline.to(
        sawRef.current,
        {
          yPercent: -15,
          duration: 0.22,
          ease: "power2.out",
        },
        0
      );

      /* =====================================================
         2. SAW STARTS CUTTING
      ===================================================== */

      timeline.to(
        sawRef.current,
        {
          yPercent: 115,
          duration: 0.7,
          ease: "none",
        },
        0.22
      );

      /* =====================================================
         3. CUT LINE FOLLOWS THE SAW
      ===================================================== */

      timeline.to(
        cutLineRef.current,
        {
          scaleY: 1,
          duration: 0.7,
          ease: "none",
        },
        0.22
      );

      /* =====================================================
         4. CUT GLOW
      ===================================================== */

      timeline.to(
        glowRef.current,
        {
          autoAlpha: 0.9,
          duration: 0.15,
          ease: "power1.out",
        },
        0.22
      );

      timeline.to(
        glowRef.current,
        {
          autoAlpha: 0.35,
          duration: 0.2,
          ease: "power1.out",
        },
        0.8
      );

      /* =====================================================
         5. BLADE REACHES BOTTOM
         Small pause before split
      ===================================================== */

      timeline.to(
        {},
        {
          duration: 0.12,
        },
        0.92
      );

      /* =====================================================
         6. SHOW SPLIT PANELS
      ===================================================== */

      timeline.to(
        splitRef.current,
        {
          autoAlpha: 1,
          duration: 0.02,
        },
        1.0
      );

      timeline.to(
        sourceRef.current,
        {
          autoAlpha: 0,
          duration: 0.02,
        },
        1.0
      );

      /* =====================================================
         7. ACTUAL PAGE SPLIT
      ===================================================== */

      timeline.to(
        leftPanelRef.current,
        {
          xPercent: -18,
          duration: 0.35,
          ease: "power3.inOut",
        },
        1.02
      );

      timeline.to(
        rightPanelRef.current,
        {
          xPercent: 18,
          duration: 0.35,
          ease: "power3.inOut",
        },
        1.02
      );

      /* =====================================================
         8. SAW EXITS DOWN
      ===================================================== */

      timeline.to(
        sawRef.current,
        {
          yPercent: 135,
          autoAlpha: 0,
          duration: 0.18,
          ease: "power2.in",
        },
        1.03
      );

      timeline.to(
        glowRef.current,
        {
          autoAlpha: 0,
          duration: 0.2,
        },
        1.08
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-[#F8F9FD] px-3 pb-8 pt-10 sm:px-6 sm:pb-12 sm:pt-14"
    >
      <section
        className="
          relative
          mx-auto
          w-full
          max-w-7xl
          overflow-hidden
          rounded-[1.75rem]
          bg-[#1E2432]
          py-20
          text-white
          shadow-[0_25px_60px_-20px_rgba(30,36,50,0.45)]
          sm:rounded-[2.5rem]
          sm:px-8
          sm:py-28
        "
      >
        <style>{ctaStyles}</style>

        {/* =====================================================
            SPLIT LAYER
        ===================================================== */}

        <div
          ref={splitRef}
          className="
            pointer-events-none
            absolute
            inset-0
            z-[12]
            overflow-hidden
          "
          aria-hidden="true"
        >
          {/* LEFT PIECE */}
          <div
            ref={leftPanelRef}
            className="absolute inset-0 will-change-transform"
            style={{
              clipPath:
                "polygon(0 0, 62% 0, 62% 100%, 0 100%)",
            }}
          >
            <div className="flex h-full items-center px-4 py-20 sm:px-8 sm:py-28">
              <CtaContent />
            </div>
          </div>

          {/* RIGHT PIECE */}
          <div
            ref={rightPanelRef}
            className="absolute inset-0 will-change-transform"
            style={{
              clipPath:
                "polygon(62% 0, 100% 0, 100% 100%, 62% 100%)",
            }}
          >
            <div className="flex h-full items-center px-4 py-20 sm:px-8 sm:py-28">
              <CtaContent />
            </div>
          </div>
        </div>

        {/* =====================================================
            SAW + CUT LINE
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[20]
            overflow-hidden
          "
          aria-hidden="true"
        >
          {/* Glow */}
          <div
            ref={glowRef}
            className="
              absolute
              inset-y-0
              left-[62%]
              w-28
              -translate-x-1/2
              bg-gradient-to-r
              from-transparent
              via-[#FFBF00]/30
              to-transparent
              blur-xl
              will-change-opacity
            "
          />

          {/* Cut Line */}
          <div
            ref={cutLineRef}
            className="
              absolute
              left-[62%]
              top-0
              h-full
              w-[3px]
              origin-top
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-[#FFBF00]
              to-transparent
              shadow-[0_0_24px_#FFBF00]
              will-change-transform
            "
          />

          {/* Saw */}
          <div
            ref={sawRef}
            className="
              absolute
              left-[62%]
              top-0
              h-36
              w-44
              -translate-x-1/2
              will-change-transform
            "
          >
            <SawGraphic />
          </div>
        </div>

        {/* =====================================================
            MOVING GRID
        ===================================================== */}

        <div
          className="
            cta-anim-grid
            absolute
            inset-0
            z-[1]
            h-full
            w-full
            opacity-60
          "
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,191,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.07) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            animation: "cta-gridMove 20s linear infinite",
          }}
        />

        {/* =====================================================
            HORIZONTAL ENGINEERING LINES
        ===================================================== */}

        <div className="absolute inset-0 z-[1] h-full w-full overflow-hidden">
          {LINE_TOPS.map((topClass, index) => {
            const isBlue = index % 2 === 0;

            return (
              <div
                key={topClass}
                className={`absolute h-[100px] w-full ${topClass}`}
              >
                <div className="relative h-0.5 w-full overflow-hidden">
                  <div
                    className={`
                      cta-anim-line
                      absolute
                      left-0
                      top-0
                      h-full
                      w-full
                      ${
                        index % 2 !== 0
                          ? "[animation-direction:reverse] [animation-delay:2s]"
                          : ""
                      }
                    `}
                    style={{
                      animation:
                        "cta-lineMove 4s linear infinite",
                      background: isBlue
                        ? "linear-gradient(90deg, transparent 0%, #1F3888 20%, #6d8cf0 50%, #1F3888 80%, transparent 100%)"
                        : "linear-gradient(90deg, transparent 0%, #FFBF00 20%, #ffe08a 50%, #FFBF00 80%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            TECHNICAL CORNERS
        ===================================================== */}

        <div className="absolute left-1/2 top-1/2 z-[5] hidden h-[100px] w-[300px] -translate-x-1/2 -translate-y-1/2 md:block">
          <svg
            className="cta-anim-corner absolute left-[-150px] top-1/2 h-[60px] w-[120px] -translate-y-1/2"
            viewBox="0 0 120 60"
            stroke="#FFBF00"
            strokeWidth="2"
            fill="none"
            strokeDasharray="50"
            style={{
              animation:
                "cta-cornerDraw 6s linear infinite",
            }}
          >
            <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
          </svg>

          <svg
            className="cta-anim-corner absolute right-[-150px] top-1/2 h-[60px] w-[120px] -translate-y-1/2 scale-x-[-1]"
            viewBox="0 0 120 60"
            stroke="#1F3888"
            strokeWidth="2"
            fill="none"
            strokeDasharray="50"
            style={{
              animation:
                "cta-cornerDraw 6s linear infinite 3s",
            }}
          >
            <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
          </svg>
        </div>

        {/* =====================================================
            ORIGINAL CONTENT
        ===================================================== */}

        <div
          ref={sourceRef}
          className="relative z-10"
        >
          <CtaContent />
        </div>
      </section>
    </div>
  );
}