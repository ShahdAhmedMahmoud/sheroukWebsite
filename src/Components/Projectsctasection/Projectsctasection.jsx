// import { HardHat, ArrowRight, PhoneCall } from "lucide-react";

// const LINE_TOPS = ["top-[12%]", "top-[32%]", "top-[52%]", "top-[72%]", "top-[90%]"];

// // كل الأنيميشن هنا CSS خالص (@keyframes) جوه <style> عادي — يشتغل في أي مشروع React/Vite
// // بدون الحاجة لـ styled-jsx أو Next.js
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

// export default function ProjectsCTASection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#1E2432] text-white py-24 sm:py-32 px-4 sm:px-8">
//       <style>{ctaStyles}</style>

//       {/* شبكة خلفية بلون الموقع (كحلي/أصفر) بدل الأورانج الأصلي */}
//       <div
//         className="cta-anim-grid absolute inset-0 w-full h-full opacity-60"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,191,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.07) 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//           animation: "cta-gridMove 20s linear infinite",
//         }}
//       />

//       {/* خطوط متحركة أفقية — زرقاء وصفراء بالتبادل بدل تدرّج الأورانج بس */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
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

//       {/* خطوط الزاوية — مخفية على الموبايل زي الأصلي */}
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

//       {/* المحتوى */}
//       <div className="relative z-10 max-w-3xl mx-auto text-center">
//         <div className="cta-anim-glow inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-xs font-semibold uppercase tracking-[0.15em]">
//           <HardHat className="w-3.5 h-3.5" />
//           Let's Build Together
//         </div>

//         <h2 className="text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight mb-6 sm:mb-8">
//           Ready to break ground
//           <br />
//           <span
//             className="inline-block"
//             style={{
//               backgroundImage: "linear-gradient(45deg, #FFBF00, #ffd76a, #1F3888)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}
//           >
//             on your next landmark?
//           </span>
//         </h2>

//         <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
//           From infrastructure to commercial developments across Egypt, our team
//           turns ambitious plans into finished, standing structures. Tell us what
//           you're building — we'll take it from there.
//         </p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
//           <a
//             href="#contact"
//             className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-7 sm:py-4 sm:px-9 bg-[#FFBF00] text-[#1E2432] rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,191,0,0.25)] active:translate-y-0"
//           >
//             Start Your Project
//             <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//           </a>

//           <a
//             href="#contact"
//             className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-7 sm:py-4 sm:px-9 bg-transparent border border-white/20 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out hover:border-[#1F3888] hover:bg-[#1F3888]/10"
//           >
//             <PhoneCall className="w-4 h-4" />
//             Talk to Our Team
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import { HardHat, ArrowRight, PhoneCall } from "lucide-react";

const LINE_TOPS = ["top-[12%]", "top-[32%]", "top-[52%]", "top-[72%]", "top-[90%]"];

// كل الأنيميشن هنا CSS خالص (@keyframes) جوه <style> عادي — يشتغل في أي مشروع React/Vite
// بدون الحاجة لـ styled-jsx أو Next.js
const ctaStyles = `
@keyframes cta-gridMove {
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
}
@keyframes cta-lineMove {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
@keyframes cta-cornerDraw {
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: 400; }
}
@keyframes cta-glow {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}
@media (prefers-reduced-motion: reduce) {
  .cta-anim-grid, .cta-anim-line, .cta-anim-corner, .cta-anim-glow {
    animation: none !important;
  }
}
`;

export default function ProjectsCTASection() {
  return (
    // خلفية فاتحة (نفس لون خلفية الموقع الأساسية) بتحيط بالكارت الغامق من فوق ومن تحت،
    // فبتفصله بصريًا عن الـ Footer اللي جاي بعده — من غير ما نلمس ملف الفوتر خالص
    <div className="relative w-full bg-[#F8F9FD] pt-10 sm:pt-14 pb-8 sm:pb-12 px-3 sm:px-6">
      <section className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] bg-[#1E2432] text-white py-20 sm:py-28 px-4 sm:px-8 shadow-[0_25px_60px_-20px_rgba(30,36,50,0.45)]">
        <style>{ctaStyles}</style>

      {/* شبكة خلفية بلون الموقع (كحلي/أصفر) بدل الأورانج الأصلي */}
      <div
        className="cta-anim-grid absolute inset-0 w-full h-full opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,191,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,191,0,0.07) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          animation: "cta-gridMove 20s linear infinite",
        }}
      />

      {/* خطوط متحركة أفقية — زرقاء وصفراء بالتبادل بدل تدرّج الأورانج بس */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
        {LINE_TOPS.map((topClass, index) => {
          const isBlue = index % 2 === 0;
          return (
            <div key={topClass} className={`absolute w-full h-[100px] ${topClass}`}>
              <div className="w-full h-0.5 relative overflow-hidden">
                <div
                  className={`cta-anim-line absolute top-0 w-full h-full ${
                    index % 2 !== 0 ? "[animation-direction:reverse] [animation-delay:2s]" : ""
                  }`}
                  style={{
                    animation: "cta-lineMove 4s linear infinite",
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

      {/* خطوط الزاوية — مخفية على الموبايل زي الأصلي */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] z-[5]">
        <svg
          className="cta-anim-corner absolute top-1/2 -translate-y-1/2 left-[-150px] w-[120px] h-[60px]"
          viewBox="0 0 120 60"
          stroke="#FFBF00"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
          style={{ animation: "cta-cornerDraw 6s linear infinite" }}
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
        <svg
          className="cta-anim-corner absolute top-1/2 -translate-y-1/2 right-[-150px] w-[120px] h-[60px] scale-x-[-1]"
          viewBox="0 0 120 60"
          stroke="#1F3888"
          strokeWidth="2"
          fill="none"
          strokeDasharray="50"
          style={{ animation: "cta-cornerDraw 6s linear infinite 3s" }}
        >
          <path d="M120 0 L20 0 Q0 0 0 20 L0 60" />
        </svg>
      </div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="cta-anim-glow inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#FFBF00]/30 bg-[#FFBF00]/5 text-[#FFBF00] text-xs font-semibold uppercase tracking-[0.15em]">
          <HardHat className="w-3.5 h-3.5" />
          Let's Build Together
        </div>

        <h2 className="text-[clamp(1.9rem,5vw,3.5rem)] font-bold leading-tight mb-6 sm:mb-8">
          Ready to break ground
          <br />
          <span
            className="inline-block"
            style={{
              backgroundImage: "linear-gradient(45deg, #FFBF00, #ffd76a, #1F3888)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            on your next landmark?
          </span>
        </h2>

        <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          From infrastructure to commercial developments across Egypt, our team
          turns ambitious plans into finished, standing structures. Tell us what
          you're building — we'll take it from there.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-7 sm:py-4 sm:px-9 bg-[#FFBF00] text-[#1E2432] rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,191,0,0.25)] active:translate-y-0"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-7 sm:py-4 sm:px-9 bg-transparent border border-white/20 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ease-in-out hover:border-[#1F3888] hover:bg-[#1F3888]/10"
          >
            <PhoneCall className="w-4 h-4" />
            Talk to Our Team
          </a>
        </div>
      </div>
      </section>
    </div>
  );
}